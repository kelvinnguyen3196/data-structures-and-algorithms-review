module.exports = class Node {
    _data;
    _next;
    constructor(data = null) {
        this._data = data;
        this._next = null;
    }

    // _region getters
    get data() {
        return this._data;
    }

    get next() {
        return this._next;
    }
    // _endregion
    // _region setters
    set data(data) {
        this._data = data
    }

    set next(node) {
        this._next = node;
    }
    // _endregion
}