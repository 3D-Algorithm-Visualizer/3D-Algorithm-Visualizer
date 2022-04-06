/*eslint-disable */
export function getBubbleSortAnimations(array) {
    const animations = [];
    let iterationArray = [];
    const auxillaryArray = array.slice();
    bubbleSort(auxillaryArray, animations, iterationArray);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ", arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array, iterationArray];
}

function bubbleSort(auxillaryArray, animations, iterationArray) {
    const N = auxillaryArray.length;
    let dummy = [];
    let iters = N - 1;
    while (iters > 0) {
        let swapped = false;
        for (let i = 0; i < iters; ++i) {
            animations.push(["comparision1", i, i + 1]);
            animations.push(["comparision2", i, i + 1]);
            if (auxillaryArray[i] > auxillaryArray[i + 1]) {
                swapped = true;
                animations.push(["swap", i, auxillaryArray[i + 1]]);
                animations.push(["swap", i + 1, auxillaryArray[i]]);
                swap(auxillaryArray, i, i + 1);
            }

        }
        dummy = auxillaryArray.slice();
        console.log(dummy);
        iterationArray.push(dummy);
        if (swapped === false) break;
        iters--;
    }
    console.log(animations)
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