// 常用函数的工具类

//深拷贝
function deepCopy(oldObj, newObj = {}) {
    for (let key in oldObj) {
        if (typeof oldObj[key] === 'object') {
            newObj[key] = oldObj[key].constructor === Array ? [] : {};
            deepCopy(oldObj[key], newObj[key])
        } else {
            newObj[key] = oldObj[key]
        }
    }
    return newObj;
}

export {
    deepCopy
}