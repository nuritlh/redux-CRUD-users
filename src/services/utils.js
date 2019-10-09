
export default {
    saveToStorage,
    loadFromStorage,
    getId
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function getId() {
    return Math.random().toString(36).substr(2, 9);
}