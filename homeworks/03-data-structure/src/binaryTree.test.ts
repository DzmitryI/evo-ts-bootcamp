import  {BinarySearchTree} from "./binaryTree";

const BST = new BinarySearchTree();
BST.insert(11);
BST.insert(7);
BST.insert(1);
BST.insert(9);
BST.insert(3);
BST.insert(8);
BST.insert(155);
BST.insert(23);
BST.insert(6);

describe('Binary search tree', () => {
	describe("search tree", () => {
		it("all elements will be showed in a in-order traversal", () => {
			expect(BST.inOrder()).toEqual([1, 3, 6, 7, 8, 9, 11, 23, 155])
		})
		it("all elements will be showed in a pre-order traversal", () => {
			expect(BST.preOrder()).toEqual([11, 7, 1, 3, 6, 9, 8, 155, 23])
		})
		it("all elements will be showed in a post-order traversal", () => {
			expect(BST.postOrder()).toEqual([6, 3, 1, 8, 9, 7, 23, 155, 11])
		})
		it("min element in binary tree", () => {
			expect(BST.minElement()).toEqual(1)
		})
		it("max element in binary tree", () => {
			expect(BST.maxElement()).toEqual(155)
		})
		it("search element in binary tree", () => {
			expect(BST.searchElement(23)).toEqual(true)
		})
		it("search element in binary tree", () => {
			expect(BST.searchElement(200)).toEqual(false)
		})
	})


})
