/*eslint-disable */
export function getInsertionSortAnimations(array) {
    const animations = [];
    let iterationArray = [];
    const auxillaryArray = array.slice();
    insertionSort(auxillaryArray, animations, iterationArray);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ", arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array, iterationArray];
}

function insertionSort(auxillaryArray, animations, iterationArray) {
    const N = auxillaryArray.length;
    let dummy = [];
    for (let i = 1; i < N; i++) {

        const key = auxillaryArray[i];
        let j = i - 1;
        animations.push(["comparision1", j, i]);
        animations.push(["comparision2", j, i]);
        while (j >= 0 && auxillaryArray[j] > key) {
            animations.push(["overwrite", j + 1, auxillaryArray[j]]);
            auxillaryArray[j + 1] = auxillaryArray[j];
            j -= 1;
            if (j >= 0) {
                animations.push(["comparision1", j, i]);
                animations.push(["comparision2", j, i]);
            }
        }
        animations.push(["overwrite", j + 1, key]);
        auxillaryArray[j + 1] = key;
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