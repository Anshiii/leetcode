/**
 * Created by Anshi on 2018/9/14.
 */

//快速排序
/*
 * 步骤为：

 从数列中挑出一个元素，称为“基准”（pivot），
 重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（相同的数可以到任何一边）。在这个分割结束之后，该基准就处于数列的中间位置。这个称为分割（partition）操作。
 递归地（recursively）把小于基准值元素的子数列和大于基准值元素的子数列排序。
 */

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}

function quickSort(arr) {

  function sort(start, end) {
	if (start >= end) return;
	/*将 start 设为 target*/
	let position = start + 1;
	for (let i = position; i <= end; i++) {
	  if (arr[i] <= arr[start]) {
		swap(arr, i, position);
		position++;
	  }
	}
	swap(arr, start, position - 1);
	sort(start, position - 2);
	sort(position, end)
  }

  sort(0, arr.length - 1)

  console.log(arr);
  return arr;
}


function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr.length - i - 1; j++) {
	  if (arr[j] > arr[j + 1]) {
		swap(arr, j, j + 1)
	  }
	}
  }
  console.log(arr);
}

function mergeSort(arr) {
  if (arr.length < 2)return arr;
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  function merge(arr1, arr2) {
	let result = [];
	while (arr1.length && arr2.length) {

	  if (arr1[0] > arr2[0]) {
		result.push(arr2.shift())
	  } else {
		result.push(arr1.shift())
	  }
	}
	return result.concat(arr1, arr2);
  }


  return merge(mergeSort(left), mergeSort(right));
}

quickSort([40,1,39, 2, 24, 3, 3, 1, 38, 5])
bubbleSort([39, 2, 24, 3, 3, 1, 38, 5])
console.log(mergeSort([39, 2, 24, 3, 3, 1, 38, 5]))

new Promise(resolve => {
  resolve(1);
  Promise.resolve().then(() => console.log(2));
  console.log(4)
}).then(t => console.log(t));
console.log(3);