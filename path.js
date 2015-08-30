Path = {
    resolve: function (path) {
        var result = '';
        result += path;
        // Mac
        if (QtApi.getOSType() === 2) {

            result = result.replace(/\\/g, "/");
        }
        // Default to PC
        else {

            result = result.replace(/\//g, "\\");
        }
        return result;
    }
};