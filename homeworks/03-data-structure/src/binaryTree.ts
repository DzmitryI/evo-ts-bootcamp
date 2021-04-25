interface TreeNode<T> {
	data: T;
	left: TreeNode<T>;
	right: TreeNode<T>;
}

export class Node<T> implements TreeNode<T> {
	data: T;
	constructor(data: T) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

export class BinarySearchTree<T> {
	public root: TreeNode<T> | null = null;

	private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
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
	insert(data: number) {
		let newNode = new Node(data);
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}
	inOrderTraverse(node: TreeNode<T>, callback) {
		if (node != null) {
			this.inOrderTraverse(node.left, callback);
			callback(node.data);
			this.inOrderTraverse(node.right, callback);
		}
	}
	preOrderTraverse(node: TreeNode<T>, callback) {
		if (node != null) {
			callback(node.data);
			this.preOrderTraverse(node.left, callback);
			this.preOrderTraverse(node.right, callback);
		}
	}
	postOrderTraverse(node: TreeNode<T>, callback) {
		if (node != null) {
			this.postOrderTraverse(node.left, callback);
			this.postOrderTraverse(node.right, callback);
			callback(node.data);
		}
	}
	search(node: TreeNode<number>, data: number): null | TreeNode<number> {
		if (node === null) {
			return null;
		} else if (data < node.data) {
			return this.search(node.left, data);
		} else if (data > node.data) {
			return this.search(node.right, data);
		} else {
			return node;
		}
	}
}

