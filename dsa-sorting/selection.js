function selectionSort(arr) {
    for(let i = 0; i<arr.length; i++){
        let min_val_index = i;
        for( let j = 0; j<arr.length; j++){
            if(arr[min_val_index] > arr[j]){
                let temp = arr[min_val_index];
                arr[min_val_index] = arr[j];
                arr[j] = temp;
            }
        }
        return arr;
    }
}

module.exports = selectionSort;