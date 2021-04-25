interface TreeNode<T> {
	data: T;
	left: TreeNode<T> | null;
	right: TreeNode<T> | null;
}

class Node<T> implements TreeNode<T>{
	data: T;
	left: TreeNode<T> | null;
	right: TreeNode<T> | null;
	constructor(data: T) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

export class BinarySearchTree<T> {
	public root: TreeNode<T> | null  = null;

	insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
		if (newNode.data < node.data) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}
	insert(data: T) {
		let newNode = new Node(data);
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}
	preOrder(): T[] {
		const root: TreeNode<T> = this.root as TreeNode<T>
		const res: T[] = []
		const preOrderTraverse = (node: TreeNode<T> | null) => {
			if (node != null) {
				res.push(node.data)
				preOrderTraverse(node.left);
				preOrderTraverse(node.right);
			}
		};
		preOrderTraverse(root);
		return res;
	}
	postOrder(): T[] {
		const root: TreeNode<T> = this.root as TreeNode<T>
		const res: T[] = [];
		const postOrderTraverse = (node: TreeNode<T> | null) => {
			if (node != null) {
				postOrderTraverse(node.left);
				postOrderTraverse(node.right);
				res.push(node.data);
			}
		};
		postOrderTraverse(root);
		return res;
	}
	minElement = (): TreeNode<T> | T => {
		const root: TreeNode<T> = this.root as TreeNode<T>
		const minNode = (node: TreeNode<T>): TreeNode<T> | T => {
			if (node.left === null) {
				return node.data;
			} else {
				return minNode(node.left);
			}
		};
		return minNode(root);
	};
	maxElement = (): TreeNode<T> | T => {
		const root: TreeNode<T> = this.root as TreeNode<T>
		const maxNode = (node: TreeNode<T>): TreeNode<T> | T => {
			if (node.right === null) {
				return node.data;
			} else {
				return maxNode(node.right);
			}
		};
		return maxNode(root);
	};
	search(node: TreeNode<number> | null, data: number): boolean {
		if (node === null) {
			return false;
		} else if (data < node.data) {
			return this.search(node.left, data);
		} else if (data > node.data) {
			return this.search(node.right, data);
		} else {
			return true;
		}
	}
	searchElement = (data: T): boolean => {
		const root: TreeNode<T> = this.root as TreeNode<T>
		const search = (node: TreeNode<T> | null, data: T): boolean => {
			if (node === null) {
				return false;
			} else if (data < node.data) {
				return search(node.left, data);
			} else if (data > node.data) {
				return search(node.right, data);
			} else {
				return true;
			}
		};
		return(search(root, data));
	};
}
