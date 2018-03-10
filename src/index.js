// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {
    return property;
};

const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property, {
        enumerable: false,
        value: 'value'
    });
    
    return property;
};

const createProtoMagicObject = () => {
    let func = () => {};
    func.prototype = func.__proto__;
    
    return func;
};

const incrementor = () => {
    incrementor.count = incrementor.count == undefined ? 1 : incrementor.count;
    
    function counter() {
        incrementor.count++;
        return counter;
    }
    
    counter.valueOf = () => {
        return incrementor.count++;
    }
    
    return counter;
};

const asyncIncrementor = () => {
    asyncIncrementor.count = asyncIncrementor.count == undefined ? 0 : asyncIncrementor.count;
    return new Promise((resolve, reject) => {
        asyncIncrementor.count++;
        return resolve(asyncIncrementor.count);
    });    
};

const createIncrementer = () => {
    function* iterator(n = 10) {
        for(let i = 1; i < n; i++) {
            yield i;
        }
    }
    
    return iterator();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (val) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(val);
        }, 1300);
    });
};

const getDeepPropertiesCount = (entryObj) => {
    let count = 0;
    function deepNext(obj) {
        for(let key in obj) {
            if(typeof(obj[key] == "object")) {
                deepNext(obj[key]);
            }
            count++;
        }
        
        return count;
    }
    
    return deepNext(entryObj);
};

const createSerializedObject = () => { return null; };

const toBuffer = () => {};

const sortByProto = (array) => {
    return array.sort((a, b) => {
        return a - b;
    });
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;