
//Query function on js objects,
//developed on a per need basis
function Query(source) {

    var sourceObject = source;
    var whereTarget = null;

    this.where = _.bind(function (property) {
        whereTarget = property;
        return this;
    }, this)

    this.oneOf = _.bind(function (valueArray) {
        var resultArr = new Array();
        _.each(valueArray, function (value) {
            _.each(sourceObject, function (obj) {
                if (obj[whereTarget] == value) {
                    resultArr.push(obj);
                }
            });
        });
        return resultArr;
    }, this);


    return {
        where: this.where,
        oneOf: this.oneOf
    }
};
