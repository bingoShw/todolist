function deepCopy(obj, newObj = {}) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            newObj[key] = obj[key].constructor === Array ? [] : {};
            deepCopy(obj[key], newObj[key])
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj;
}

export {
    deepCopy
}