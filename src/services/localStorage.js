const localStorage = window.localStorage;
exports.getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

exports.setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

exports.removeItem = (key) => {
    localStorage.removeItem(key);
}

exports.clearStorage = () => {
    localStorage.clear();
}