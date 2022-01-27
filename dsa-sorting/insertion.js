function insertionSort(arr) {
    for(let i = 0; i< arr.length; i++){
        let temp = arr[i];
        j = i - 1;
        while (j>= 0 && temp < arr[j]){
            j = j - 1;

        }
        arr[j+1] = temp;
    }
}

module.exports = insertionSort;