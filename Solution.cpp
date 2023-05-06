
#include <set>
using namespace std;

class SmallestInfiniteSet {
    
    static const int SMALLEST_INITIAL_VALUE_IN_STREAM = 1;
    set<int> numbersInStream_removedAndAddedAgain;
    int smallestInStream_notRemovedAndAddedAgain;

public:
    SmallestInfiniteSet() {
        smallestInStream_notRemovedAndAddedAgain = SMALLEST_INITIAL_VALUE_IN_STREAM;
    }

    int popSmallest() {
        if (numbersInStream_removedAndAddedAgain.empty()) {
            return smallestInStream_notRemovedAndAddedAgain++;
        }
        int value_popSmallest = *numbersInStream_removedAndAddedAgain.begin();
        numbersInStream_removedAndAddedAgain.erase(value_popSmallest);
        return value_popSmallest;
    }

    void addBack(int num) {
        //C++20: (... && !numbersInStream_removedAndAddedAgain.contains(num))
        if (smallestInStream_notRemovedAndAddedAgain > num
                && numbersInStream_removedAndAddedAgain.find(num) == numbersInStream_removedAndAddedAgain.end()) {
            numbersInStream_removedAndAddedAgain.insert(num);
        }
    }
};
