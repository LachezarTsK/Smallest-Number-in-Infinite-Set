
class SmallestInfiniteSet {

    static SMALLEST_INITIAL_VALUE_IN_STREAM = 1;

    constructor() {
        //const {MinPriorityQueue} = require('@datastructures-js/priority-queue');
        //MinPriorityQueue<Number>()
        this.minHeap_numbersInStream_removedAndAddedAgain = new MinPriorityQueue({compare: (x, y) => x - y});

        //Set<Number>()
        this.set_numbersInStream_removedAndAddedAgain = new Set();
        this.smallestInStream_notRemovedAndAddedAgain = SmallestInfiniteSet.SMALLEST_INITIAL_VALUE_IN_STREAM;
    }

    /**
     * @return {number}
     */
    popSmallest() {
        if (this.set_numbersInStream_removedAndAddedAgain.size === 0) {
            return this.smallestInStream_notRemovedAndAddedAgain++;
        }
        let value_popSmallest = this.minHeap_numbersInStream_removedAndAddedAgain.dequeue();
        this.set_numbersInStream_removedAndAddedAgain.delete(value_popSmallest);
        return value_popSmallest;
    }

    /** 
     * @param {number} num
     * @return {void}
     */
    addBack(num) {
        if (this.smallestInStream_notRemovedAndAddedAgain > num && !this.set_numbersInStream_removedAndAddedAgain.has(num)) {
            this.set_numbersInStream_removedAndAddedAgain.add(num);
            this.minHeap_numbersInStream_removedAndAddedAgain.enqueue(num);
        }
    }
}
