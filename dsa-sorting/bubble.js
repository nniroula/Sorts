function bubbleSort(arr) {
    for(let i = 0; i<arr.length; i++){
        for(let i = 0; i<arr.length; i++){
            if(arr[i] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

module.exports = bubbleSort;