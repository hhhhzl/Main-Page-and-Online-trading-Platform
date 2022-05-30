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


export function setLastStock(stock) {
    localStorage.setItem("laststock", stock);
}

export function getLastStock() {
    const platformType = localStorage.getItem('lastock');
    return platformType;
}

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