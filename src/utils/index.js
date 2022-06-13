export function setautologin(arry) {
    localStorage.setItem("autologin", arry);
}

export function getautologin() {
    const autologin = JSON.parse(localStorage.getItem('autologin'))
    return autologin
}

export function cleanAutologin() {
    localStorage.removeItem("autologin");
}

//////////////////////////////////////////////////////////////////////////////////////////
export function setchoice(arry) {
    localStorage.setItem("Userchoice", arry);
}

export function getchoice() {
    const autologin = localStorage.getItem('Userchoice')
    return autologin
}

export function cleanchoice() {
    localStorage.removeItem("Userchoice");
}
//////////////////////////////////////////////////////////////////////////////////////////
export function getPlatformType() {
    const platformType = localStorage.getItem('platformType');
    return platformType;
}

export function setPlatformType(platform) {
    localStorage.setItem("platformType", platform);
}

export function getPlatformURL() {
    const platformURL = localStorage.getItem('platformURL');
    return platformURL;
}

export function setPlatformURL() {
    const platformURL = localStorage.getItem('platformURL');
    return platformURL;
}

export function clearLocalStorage() {
    localStorage.removeItem("platformType");
}

////////////////////////////////////////////////////////////////////////////////////////////
export function setLastStock(stock) {
    localStorage.setItem("stockLastView", stock);
}

export function getLastStock() {
    const stockLastView = localStorage.getItem('stockLastView');
    return stockLastView;
}
export function setWatchlist(list) {
    localStorage.setItem("watchlist", JSON.stringify(list));
}


export function addWatchlist(symbol) {
    let stocklist = getWatchList() || []
    stocklist.push(symbol)
    localStorage.setItem("watchlist", JSON.stringify(stocklist));
}

export function getWatchList() {
    const WatchList = JSON.parse(localStorage.getItem('watchlist'));
    return WatchList
}

//////////////////////////////////////////////////////////////////////////////////////////////
export function getFileName(name) {
    let nameArr = name.split(".")
    let nameStr = ""
    for (let index = 0; index < nameArr.length; index++) {
        const el = nameArr[index];
        if (index != nameArr.length - 1) {
            nameStr += el
        }
    }
    if (nameStr.length > 10) {
        nameStr = nameStr.slice(0, 10) + "..."
    }
    return nameStr;
}

//s为传入的数据,n为保留几位小数 
export function fmoney(s, n) {
    n = n >= 0 && n <= 20 ? n : 2;
    let flag = false
    if (s < 0) {
        flag = true
        s = s + ''
        s = s.substring(1, s.length)
    }
    s = Number(s)
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1];
    let t = "";
    for (let i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    let str = n == 0 ? t.split("").reverse().join("") : t.split("").reverse().join("") + "." + r;
    return flag ? ('-' + str) : str;
}

var addWan = function (integer, number, mutiple, decimalDigit) {
    var digit = getDigit(integer);
    if (digit > 3) {
        var remainder = digit % 8;
        if (remainder >= 5) { // ‘十万’、‘百万’、‘千万’显示为‘万’
            remainder = 4;
        }
        return Math.round(number / Math.pow(10, remainder + mutiple - decimalDigit)) / Math.pow(10, decimalDigit) + '万';
    } else {
        return Math.round(number / Math.pow(10, mutiple - decimalDigit)) / Math.pow(10, decimalDigit);
    }
};

var getDigit = function (integer) {
    var digit = -1;
    while (integer >= 1) {
        digit++;
        integer = integer / 10;
    }
    return digit;
};

// number数值 decimalDigit(保留小数位数)
export function changeUnit(number, decimalDigit) {
    decimalDigit = decimalDigit == null ? 2 : decimalDigit;
    var integer = Math.floor(number);
    var digit = getDigit(integer);
    var unit = [];
    if (digit > 3) {
        var multiple = Math.floor(digit / 8);
        if (multiple >= 1) {
            var tmp = Math.round(integer / Math.pow(10, 8 * multiple));
            unit.push(addWan(tmp, number, 8 * multiple, decimalDigit));
            for (var i = 0; i < multiple; i++) {
                unit.push('亿');
            }
            return unit.join('');
        } else {
            return addWan(integer, number, 0, decimalDigit);
        }
    } else {
        return number;
    }
}

const moment = require('moment-timezone');

export function showTimePipe(unixDate) {
    var unixStamp = moment.utc(unixDate).local().valueOf()
    var todayObj = moment.utc(new Date()).local()
    console.log(unixStamp)
    console.log(todayObj.date())
    var todayObj = moment.utc(new Date()).local(),
        todayDate = {
            y: todayObj.year(),
            m: (todayObj.month() + 1 < 10 ? '0' + (todayObj.month() - -1) : (todayObj.month() - -1)),
            d: (todayObj.date() < 10 ? '0' + todayObj.date() : todayObj.date())
        }

    var todayStamp = Date.parse(todayDate.y + '/' + todayDate.m + '/' + todayDate.d + ' 00:00:00')

    var stamp = []
    stamp[0] = todayStamp + 86400000
    stamp[1] = todayStamp
    stamp[2] = todayStamp - 86400000
    stamp[3] = todayStamp - 172800000

    stamp[4] = todayStamp - 518400000 // 7天

    stamp[5] = todayStamp - 31536000000 // 365天

    var compareObj = moment.utc(moment(unixStamp).format()).local()
    console.log(compareObj)
    var returnStr

    // debugger
    if (unixStamp >= stamp[1] && unixStamp < stamp[0]) {
        returnStr = compareObj.hours() + ':' + (compareObj.minutes() < 10 ? '0' + compareObj.minutes() : compareObj.minutes())
    } else if (unixStamp >= stamp[2] && unixStamp < stamp[1]) {
        var yesterdayText = '昨天'
        returnStr = yesterdayText + ' ' + compareObj.hours() + ':' +
            (compareObj.minutes() < 10 ? '0' + compareObj.minutes() : compareObj.minutes())
    } else if (unixStamp >= stamp[3] && unixStamp < stamp[2]) {
        var theDayBeforeYesterdayText = '前天'
        returnStr = theDayBeforeYesterdayText + ' ' + compareObj.hours() + ':' +
            (compareObj.minutes() < 10 ? '0' + compareObj.minutes() : compareObj.minutes())

    } else if (unixStamp >= stamp[4] && unixStamp < stamp[3]) { // 7天内
        var daynames = ['天', '一', '二', '三', '四', '五', '六']
        var dathStr = '星期' + daynames[compareObj.get("day")]

        var SundayText = '星期天'
        var MondayText = '星期一'
        var TuesdayText = '星期二'
        var WednesdayText = '星期三'
        var ThursdayText = '星期四'
        var FridayText = '星期五'
        var SaturdayText = '星期六'

        var dathStr2

        switch (dathStr) {
            case '星期天':
                dathStr2 = SundayText
                break
            case '星期一':
                dathStr2 = MondayText
                break
            case '星期二':
                dathStr2 = TuesdayText
                break
            case '星期三':
                dathStr2 = WednesdayText
                break
            case '星期四':
                dathStr2 = ThursdayText
                break
            case '星期五':
                dathStr2 = FridayText
                break
            case '星期六':
                dathStr2 = SaturdayText
                break
            default:
                dathStr2 = dathStr
                break
        }

        returnStr = dathStr2 + ' ' + compareObj.hours() + ':' +
            (compareObj.minutes() < 10 ? '0' + compareObj.minutes() : compareObj.minutes())
    } else if (unixStamp >= stamp[5] && unixStamp < stamp[4]) { // 365天内
        var monthText = '月'
        var dayText = '日'
        returnStr = (compareObj.month() - (-1)) + monthText + compareObj.date() + dayText + ' ' +
            compareObj.hours() + ':' + (compareObj.minutes() < 10 ? '0' + compareObj.minutes() : compareObj.minutes())

    } else {
        var yearText = '年'
        var monthText = '月'
        var dayText = '日'
        returnStr = compareObj.get("year") + yearText + (compareObj.month() - (-1)) +
            monthText + compareObj.date() + dayText + ' ' + compareObj.hours() + ':' +
            (compareObj.minutes() < 10 ? '0' + compareObj.minutes() : compareObj.minutes())
    }
    return returnStr
}