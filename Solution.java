
import java.util.TreeSet;

public class SmallestInfiniteSet {

    private static final int SMALLEST_INITIAL_VALUE_IN_STREAM = 1;
    private final TreeSet<Integer> numbersInStream_removedAndAddedAgain;
    private int smallestInStream_notRemovedAndAddedAgain;

    public SmallestInfiniteSet() {
        numbersInStream_removedAndAddedAgain = new TreeSet<>();
        smallestInStream_notRemovedAndAddedAgain = SMALLEST_INITIAL_VALUE_IN_STREAM;
    }

    public int popSmallest() {
        if (numbersInStream_removedAndAddedAgain.isEmpty()) {
            return smallestInStream_notRemovedAndAddedAgain++;
        }
        return numbersInStream_removedAndAddedAgain.pollFirst();
    }

    public void addBack(int num) {
        if (smallestInStream_notRemovedAndAddedAgain > num && !numbersInStream_removedAndAddedAgain.contains(num)) {
            numbersInStream_removedAndAddedAgain.add(num);
        }
    }
}
