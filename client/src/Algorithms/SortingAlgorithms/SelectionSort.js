/*eslint-disable */
export function getSelectionSortAnimations(array) {
    const animations = [];
    let iterationArray = [];
    const auxillaryArray = array.slice();
    selectionSort(auxillaryArray, animations, iterationArray);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ", arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array, iterationArray];
}

function selectionSort(auxillaryArray, animations, iterationArray) {
    const N = auxillaryArray.length;
    let dummy = [];
    for (let i = 0; i < N; i++) {
        let min_index = i;
        for (let j = i + 1; j < N; j++) {
            animations.push(["comparision1", j, min_index]);
            animations.push(["comparision2", j, min_index]);
            if (auxillaryArray[j] < auxillaryArray[min_index]) {
                min_index = j
            }
        }
        animations.push(["swap", min_index, auxillaryArray[i]]);
        animations.push(["swap", i, auxillaryArray[min_index]]);
        swap(auxillaryArray, min_index, i);
        dummy = auxillaryArray.slice();
        console.log(dummy);
        iterationArray.push(dummy);
    }
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
/*eslint-disable */