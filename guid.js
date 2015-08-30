//Get a GUID
var Guid = {
    newGuid: function () {
        function _p8(s) {
            var p = (Math.random().toString(16) + "000000000").substr(2, 8);
            return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
        }

        return _p8() + _p8(true) + _p8(true) + _p8();
    },


    isGuid: function (objGuid) {

        var str = (objGuid);
        var reEmail = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/
        var bresults;

        if (_.isEmpty(objGuid) || _.isUndefined(objGuid)) {
            bresults = false;
        }
        else {
            bresults = (reEmail.test(str));
        }
        return bresults;
    }
};