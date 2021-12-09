class AClass {
    constructor(n) {
        this.n = n;
        this.#fill()
        if (this.constructor == AClass) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    Numbers = [];

    #fill() {
        for (let i = 0; i < this.n; i++) {
            const element = Math.round(Math.random() * 10);
            this.Numbers.push(element);
        }
    }

    factorial() {
        let array = this.Numbers
        function getFactorialItem(item) {
            if (item == 0 || item == 1) {
                return 1;
            }
            return item * getFactorialItem(item - 1);
        }

        function getFactorials(array) {
            const result = array.map(x => getFactorialItem(x));
            return result;
        }

        return getFactorials(array)
    }

    sort() {
        throw new Error("Method 'sort()' must be implemented.");
    }
}

class Class1 extends AClass {
    constructor(options) {
        super(options);
    }

    sort() {
        let array = this.Numbers;
        function getSort(array) {
            for (let i = 0; i < array.length - 1; i++) {
                for (let j = 0; j < array.length - 1 - i; j++) {
                    if (array[j + 1] < array[j]) {
                        let t = array[j + 1];
                        array[j + 1] = array[j];
                        array[j] = t;
                    }
                }
            }
            return array;
        }

        getSort(array)
        return super.factorial()
    }
}

class Class2 extends AClass {
    constructor(options) {
        super(options);
    }

    sort() {
        let array = this.Numbers;
        function getSort(array) {
            let n = array.length, i = Math.floor(n / 2);
            while (i > 0) {
                for (let j = 0; j < n; j++) {
                    let k = j, t = array[j];
                    while (k >= i && array[k - i] > t) {
                        array[k] = array[k - i];
                        k -= i;
                    }
                    array[k] = t;
                }
                i = (i == 2) ? 1 : Math.floor(i * 5 / 11);
            }
            return array;
        }

        getSort(array)
        return super.factorial()
    }
}