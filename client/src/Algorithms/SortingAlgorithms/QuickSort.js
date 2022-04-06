/*eslint-disable */
export function getQuickSortAnimations(array) {
    const animations = [];
    let iterationArray = [];
    const auxillaryArray = array.slice();
    quickSort(auxillaryArray, 0, auxillaryArray.length - 1, animations, iterationArray);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ", arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array, iterationArray];
}

function quickSort(auxillaryArray, startIndex, endIndex, animations, iterationArray) {
    let pivotIndex;
    if (startIndex < endIndex) {
        pivotIndex = partitionArray(auxillaryArray, startIndex, endIndex, animations, iterationArray);
        quickSort(auxillaryArray, startIndex, pivotIndex - 1, animations, iterationArray);
        quickSort(auxillaryArray, pivotIndex + 1, endIndex, animations, iterationArray);
    }
}

function partitionArray(auxillaryArray, startIndex, endIndex, animations, iterationArray) {
    const pivotIndex = randomIntFromInterval(startIndex, endIndex);
    let dummy = [];
    animations.push(["comparision1", pivotIndex, endIndex]);
    animations.push(["swap", pivotIndex, auxillaryArray[endIndex]]);
    animations.push(["swap", endIndex, auxillaryArray[pivotIndex]]);
    animations.push(["comparision2", pivotIndex, endIndex]);
    swap(auxillaryArray, pivotIndex, endIndex);

    let lessTailIndex = startIndex;

    for (let i = startIndex; i < endIndex; ++i) {
        animations.push(["comparision1", i, endIndex]);
        animations.push(["comparision2", i, endIndex]);
        if (auxillaryArray[i] <= auxillaryArray[endIndex]) {
            animations.push(["comparision1", i, lessTailIndex]);
            animations.push(["swap", i, auxillaryArray[lessTailIndex]]);
            animations.push(["swap", lessTailIndex, auxillaryArray[i]]);
            animations.push(["comparision2", i, lessTailIndex]);
            swap(auxillaryArray, i, lessTailIndex);
            lessTailIndex++;
        }
    }
    animations.push(["comparision1", lessTailIndex, endIndex]);
    animations.push(["swap", endIndex, auxillaryArray[lessTailIndex]]);
    animations.push(["swap", lessTailIndex, auxillaryArray[endIndex]]);
    animations.push(["comparision2", lessTailIndex, endIndex]);

    swap(auxillaryArray, lessTailIndex, endIndex);
    dummy = auxillaryArray.slice();
    console.log(dummy);
    iterationArray.push(dummy);
    return lessTailIndex;
}

function swap(auxillaryArray, firstIndex, secondIndex) {
    const temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}

function arraysAreEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            return false;
        }
    }
    return true;
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
QUICK SORT LOGIC

function quickSort(){
    if(low<=high){
        int p=Hpartition(a, low, high);
        quickSort(a, low, p);
        quickSort(a, p+1, high);

    }
}

function Hpartition(a, low, high){
    let pivot=a[0];//we can set random pivot
    let i=low-1, j=high+1;
    while(low<high){
        do{
            i++;
        }while(a[i]<pivot);
        do{
            j--;
        }while(a[j]>pivot);
        swap(a[i], a[j]);
        if(i>=j){
            return j;
        }
    }
} */
/*eslint-disable */