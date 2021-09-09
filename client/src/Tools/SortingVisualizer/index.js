/*eslint-disable */
import React from 'react';
//algorithms imported
import { getMergeSortAnimations } from 'src/Algorithms/SortingAlgorithms/MergeSort';
import { getHeapSortAnimations } from 'src/Algorithms/SortingAlgorithms/HeapSort';
import { getQuickSortAnimations } from 'src/Algorithms/SortingAlgorithms/QuickSort';
import { getInsertionSortAnimations } from 'src/Algorithms/SortingAlgorithms/InsertionSort';
import { getShellSortAnimations } from 'src/Algorithms/SortingAlgorithms/ShellSort';
import { getSelectionSortAnimations } from 'src/Algorithms/SortingAlgorithms/SelectionSort';
import { getBubbleSortAnimations } from 'src/Algorithms/SortingAlgorithms/BubbleSort';
import { getCycleSortAnimations } from 'src/Algorithms/SortingAlgorithms/CycleSort';
import { getCountingSortAnimations } from 'src/Algorithms/SortingAlgorithms/CountingSort';
import { getRadixSortAnimations } from 'src/Algorithms/SortingAlgorithms/RadixSort';
import { getBucketSortAnimations } from'src/Algorithms/SortingAlgorithms/BucketSort';

//style
import './index.css';
//components
import Bars from "./bars"
//Material ui components
import {Paper , Grid , Button} from "@material-ui/core"


const ANIMATION_SPEED_MS = 50;

const NUMBER_OF_ARRAY_BARS = 16;

const PRIMARY_COLOR = '#00aa10';

const SECONDARY_COLOR = 'purple';

const algorithms = {
  "mergeSort": getMergeSortAnimations,
  "insertionSort": getInsertionSortAnimations,
  "quickSort": getQuickSortAnimations,
  "selectionSort": getSelectionSortAnimations,
  "bubbleSort": getBubbleSortAnimations,
  "heapSort": getHeapSortAnimations,
  "cycleSort": getCycleSortAnimations,
  "shellSort": getShellSortAnimations,
  "radixSort": getRadixSortAnimations,
  "bucketSort": getBucketSortAnimations,
  "countingSort": getCountingSortAnimations
}

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 650));
    }
    this.setState({ array });
  }

  disableSortButtons() {
    document.getElementById("generateNewArray").disabled = true;
    document.getElementById("mergeSort").disabled = true;
    document.getElementById("quickSort").disabled = true;
    document.getElementById("heapSort").disabled = true;
    document.getElementById("insertionSort").disabled = true;
    document.getElementById("selectionSort").disabled = true;
    document.getElementById("bubbleSort").disabled = true;
    document.getElementById("shellSort").disabled = true;
    document.getElementById("cycleSort").disabled = true;
    document.getElementById("countingSort").disabled = true;
    document.getElementById("bucketSort").disabled = true;
    document.getElementById("radixSort").disabled = true;
  }

  restoreStoreButtons() {
    document.getElementById("generateNewArray").disabled = false;
    document.getElementById("mergeSort").disabled = false;
    document.getElementById("quickSort").disabled = false;
    document.getElementById("heapSort").disabled = false;
    document.getElementById("bubbleSort").disabled = false;
    document.getElementById("selectionSort").disabled = false;
    document.getElementById("cycleSort").disabled = false;
    document.getElementById("bucketSort").disabled = false;
    document.getElementById("countingSort").disabled = false;
    document.getElementById("radixSort").disabled = false;
    document.getElementById("shellSort").disabled = false;
    document.getElementById("insertionSort").disabled = false;
  }

  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  bktsort(algorithmName) {
    this.disableSortButtons();
    const [animations, sortArray] = algorithms[algorithmName](this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
      const arrayBars = document.getElementsByClassName('array-bar');
      const arrayBarsValues = document.getElementsByClassName('array-bar-values');
      if (isColorChange === true) {
        const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [comparision, barOneIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          
        }, i * ANIMATION_SPEED_MS);
      }
      else {
        const [swap, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
          arrayBarsValues[barIndex].innerText = newHeight
        }, i * ANIMATION_SPEED_MS);
      }
    }
    setTimeout(() => this.restoreStoreButtons(), (animations.length - 1) * ANIMATION_SPEED_MS);
  }


  sort(algorithmName) {
    this.disableSortButtons();
    const [animations, sortArray] = algorithms[algorithmName](this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
      const arrayBars = document.getElementsByClassName('array-bar');
      const arrayBarsValues = document.getElementsByClassName('array-bar-values');
      if (isColorChange === true) {
        const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [comparision, barOneIndex, barTwoIndex] = animations[i];
        //change colors
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const barOneValueStyle = arrayBarsValues [barOneIndex].style;
        const barTwoValueStyle = arrayBarsValues [barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = barOneValueStyle.color =  color;
          barTwoStyle.backgroundColor =   barTwoValueStyle.color = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else {

        const [swap, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        //swap heights
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
          arrayBarsValues[barIndex].innerText = newHeight
        }, i * ANIMATION_SPEED_MS);
      }
    }
    setTimeout(() => this.restoreStoreButtons(), (animations.length - 1) * ANIMATION_SPEED_MS);
  }

  render() {
    const { array } = this.state;

    return (
      <div>
          <Grid container spacing={1}>
           <Grid item xs={12} sm={2}>
           <div>
        <Button  variant="contained" id="generateNewArray" style={{ marginRight: '8px' }} onClick={() => this.resetArray()}>Generate New Array</Button>
        <Button id="mergeSort" style={{ marginRight: '8px' }} onClick={() => this.sort('mergeSort')}>Merge Sort</Button>
        <Button id="quickSort" style={{ marginRight: '8px' }} onClick={() => this.sort('quickSort')}>Quick Sort</Button>
        <Button id="heapSort" style={{ marginRight: '8px' }} onClick={() => this.sort('heapSort')}>Heap Sort</Button>
        <Button id="bubbleSort" style={{ marginRight: '8px' }} onClick={() => this.sort('bubbleSort')}>Bubble Sort</Button>
        <Button id="insertionSort" style={{ marginRight: '8px' }} onClick={() => this.sort('insertionSort')}>Insertion Sort</Button>
        <Button id="selectionSort" style={{ marginRight: '8px' }} onClick={() => this.sort('selectionSort')}>Selection Sort</Button>
        <Button id="shellSort" style={{ marginRight: '8px' }} onClick={() => this.sort('shellSort')}>Shell Sort</Button>
        <Button id="cycleSort" style={{ marginRight: '8px' }} onClick={() => this.sort('cycleSort')}>Cycle Sort</Button>

        {/* this algos below does not compare array elements hence declared different function bktsort() 
        also it requires extra array so need to work on it but the animation works fine */}
        
        <Button id="countingSort" style={{ marginRight: '8px' }} onClick={() => this.bktsort('countingSort')}>Counting Sort</Button>
        <Button id="radixSort" style={{ marginRight: '8px' }} onClick={() => this.bktsort('radixSort')}>Radix Sort</Button>
        <Button id="bucketSort" style={{ marginRight: '8px' }} onClick={() => this.bktsort('bucketSort')}>Bucket Sort</Button>

        </div>
        

           </Grid>
           <Grid item xs={12} sm={10}>
           <div className="array-container">
       
       <div className="array-container-bars">
       <Paper className="array-container-bars-paper" elevation={3}>
        {array.map((value, idx) => (
          <Bars color={PRIMARY_COLOR} value={value} />
        ))}
       </Paper>
     </div>
   </div>
             
           </Grid>
          </Grid>
     
    </div>

    );

  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

/*eslint-disable */