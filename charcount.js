module.exports = {
    counter: function(t) {
        // remove all whitespace and numbers
        let cleanedString = t.replace(/[0-9\s]/g, "");
        return cleanedString.length;
    }
}
