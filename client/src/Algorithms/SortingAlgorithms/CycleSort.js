/*eslint-disable */
export function getCycleSortAnimations(array) {
    const animations = [];
    let iterationArray = [];
    const auxillaryArray = array.slice();
    cycleSort(auxillaryArray, animations, iterationArray);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ", arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array, iterationArray];
}


function cycleSort(arr, animations, iterationArray) {
    const n = arr.length;
    let writes = 0;
    let dummy = [];
    for (let cycle_start = 0; cycle_start < n - 1; cycle_start++) {

        let item = arr[cycle_start];
        let toswap=cycle_start;
        let pos = cycle_start;

        for (let i = cycle_start + 1; i < n; i++)
            if (arr[i] < item) {
                animations.push(["comparision1", pos, i]);
                animations.push(["comparision2", pos, i]);
                pos++;
            }

        if (pos == cycle_start){
            continue;
        }


        while (item == arr[pos]){
            pos += 1;
        }

        if (pos != cycle_start) {
            // swap a[pos] and item

            animations.push(["swap", pos, item]);
            // animations.push(["swap", toswap, arr[pos]]);
            const temp = item;
            item = arr[pos];
            arr[pos] = temp;
            writes++;
        }
        toswap=pos;
        while (pos != cycle_start) {
            pos = cycle_start;

            for (let i = cycle_start + 1; i < n; i++)
                if (arr[i] < item) {
                    animations.push(["comparision1", pos, i]);
                    animations.push(["comparision2", pos, i]);
                    pos += 1;
                }

            while (item == arr[pos]) {
                toswap=pos;
                pos += 1;
            }

            if (item != arr[pos]) {
                // swap a[pos] with item
                animations.push(["swap", pos, item]);
                // animations.push(["swap", toswap, arr[pos]]);
                const temp = item;
                item = arr[pos];
                arr[pos] = temp;
                // animations.push(["overwrite", pos, item]);

                // animations.push(["swap", toswap, arr[pos]]);
                // swap(arr, pos, toswap);
                writes++;
            }
            dummy = arr.slice();
            console.log(dummy);
            iterationArray.push(dummy);
        }
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