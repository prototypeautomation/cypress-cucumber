class Aliases {
    constructor () {
        console.log("initiate");
    }

    add (param1, param2) {
        var result;
        result = param1 + param2;
        return result;
    }
}

module.exports = Aliases;