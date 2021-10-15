// Any of the following formats may be used
String.format = function() {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
    var reg = new RegExp("\\{" + i + "\\}", "gm");
    s = s.replace(reg, arguments[i + 1]);
    }
    return s;
}


function convertDateToStr(date) {
    dt = new Date(date);
    dt_now = new Date();
    diff = dt.getDate() - dt_now.getDate();
    if (diff == 0) {
        str_date = "сегодня";
    } else if (diff == 1) {
        str_date = "вчера";
    } else {
        str_date = dt.toLocaleString('local', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'});
    }
    str_date += " в " + dt.toLocaleTimeString('local', {hour:"2-digit", minute:"2-digit"});
    return str_date
}