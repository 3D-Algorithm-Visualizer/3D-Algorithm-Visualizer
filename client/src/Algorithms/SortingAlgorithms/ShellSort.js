/*eslint-disable */
export function getShellSortAnimations(array){
    const animations  = [];
    let iterationArray = [];
    const auxillaryArray = array.slice();
    shellSort(auxillaryArray, animations, iterationArray);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ",arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array, iterationArray];
}
function shellSort(auxillaryArray, animations, iterationArray) {
	const n = auxillaryArray.length;
    let dummy = [];
	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
		for (let i = gap; i < n; i += 1)  {
			const temp = auxillaryArray[i];
			
			let j;
			for (j = i; j >= gap && auxillaryArray[j-gap] > temp; j-=gap)  {
                
                animations.push(["comparision1", j, j-gap]);
                animations.push(["overwrite", j, auxillaryArray[j-gap]]);
				auxillaryArray[j] = auxillaryArray[j-gap];
                animations.push(["comparision2", j, j-gap]);
			}
            animations.push(["overwrite", j, temp]);
			auxillaryArray[j] = temp;
		}
        dummy = auxillaryArray.slice();
        console.log(dummy);
        iterationArray.push(dummy);
	}
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