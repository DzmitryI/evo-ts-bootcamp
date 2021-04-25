type CompareFunction<T> = (a: T, b: T) => number;

type MergeSort<T> = (array: T[], compareFunction: CompareFunction<T>) => T[];

const compareFunction: CompareFunction<number | string> = (a, b) => {
	if (a > b) {
		return -1;
	} else if (a < b) {
		return 1;
	}
	return 0;
};

export function merge<T>(	left: T[], right: T[], compareFunction: CompareFunction<T>) {
	let res: T[] = [];
	while (left.length > 0 && right.length > 0) {
		if (compareFunction(left[0], right[0]) > 0) {
			// @ts-ignore
			res.push(left.shift());
		} else {
			// @ts-ignore
			res.push(right.shift());
		}
	}
	return res.concat(left).concat(right);
}

export function mergeSort<T>(	array: T[],	compareFunction: CompareFunction<T>): T[] {
	if (array.length < 2) {
		return array;
	}
	const middle: number = Math.floor(array.length / 2);
	const left: T[] = array.slice(0, middle);
	const right: T[] = array.slice(middle);
	return merge(	mergeSort(left, compareFunction),	mergeSort(right, compareFunction),	compareFunction	);
}
