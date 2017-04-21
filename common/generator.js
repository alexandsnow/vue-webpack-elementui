/**
 * Created by yang_gao on 2017/4/21.
 */

var util  = require("./util");

function getCurrentTime(){
    var date = new Date();
    return (util.parseDate)(date,util.defaultFormat);
}

exports.currentTime = getCurrentTime();