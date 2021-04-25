import  {compareFunction, mergeSort, merge} from "./mergeSort";

describe('mergeSort', () => {
	describe("main function", () => {
		it("sort array fo numbers", () => {
			expect(mergeSort([3,2,6,1], compareFunction)).toEqual([1,2,3,6])
		})
		it("sort array fo strings", () => {
			expect(mergeSort(['c','b','d','a'], compareFunction)).toEqual(['a','b','c','d'])
		})
	})

	describe("compare function", () => {
		it("sort compare numbers", () => {
			expect(compareFunction(1,2)).toEqual(1)
		})
		it("sort compare strings", () => {
			expect(compareFunction('d','a')).toEqual(-1)
		})
		it("sort compare strings are equal", () => {
			expect(compareFunction('b','b')).toEqual(0)
		})
	})
})
