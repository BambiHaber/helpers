StringUtils = {

    //Escapes html strings
    escapeHtml: function (htmlStringToEscape) {
        return String(htmlStringToEscape)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    },

    //Unescape html strings
    unescapeHtml: function (htmlStringToEscape) {
        return String(htmlStringToEscape)
            .replace(/&amp;/g, "&")
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>');
    },

    stripDots: function (string) {
        var result = string.replace(/\./gi, "");
        return result;
    },

    /**
     * Bubble sorts an array of strings by attribute name
     * @param arr
     * @param attribute
     * @returns {*}
     */
    stringBubbleSort: function (arr, attribute) {

        var values = arr;
        var length = values.length;

        do {
            var swapped = false;
            for (var i = 0; i < length; ++i) {
                if (!_.isUndefined(values[i + 1])) {

                    if (values[i][attribute] > values[i + 1][attribute]) {
                        var temp = values[i];
                        values[i] = values[i + 1];
                        values[i + 1] = temp;
                        swapped = true;
                    }
                }
            }
        }
        while (swapped == true)
        return values
    }
};