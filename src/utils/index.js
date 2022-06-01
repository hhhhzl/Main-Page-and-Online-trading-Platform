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
export function setLastStock(stock){
    localStorage.setItem("stockLastView",stock);
}

export function getLastStock() {
    const stockLastView = localStorage.getItem('stockLastView');
    return stockLastView;
}
export function setWatchlist(list){
    localStorage.setItem("watchlist",JSON.stringify(list));
}


export function addWatchlist(symbol){
    let stocklist = getWatchList() || []
    stocklist.push(symbol)
    localStorage.setItem("watchlist",JSON.stringify(stocklist));
}

export function getWatchList(){
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
    n = n > 0 && n <= 20 ? n : 2;
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
    let str = t.split("").reverse().join("") + "." + r;
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