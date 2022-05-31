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

export function changeUnit(value) {
    let newValue = ['', '', ''];
    let fr = 1000;
    const ad = 1;
    let num = 3;
    const fm = 1;
    while (value / fr >= 1) {
      fr *= 10;
      num += 1;
      // console.log('数字', value / fr, 'num:', num);
    }
    if (num <= 4) { // 千
      newValue[1] = '千';
      newValue[0] = parseInt(value / 1000) + '';
    } else if (num <= 8) { // 万
      const text1 = parseInt(num - 4) / 3 > 1 ? '千万' : '万';
      // tslint:disable-next-line:no-shadowed-variable
      const fm = '万' === text1 ? 10000 : 10000000;
      newValue[1] = text1;
      newValue[0] = (value / fm) + '';
    } else if (num <= 16) {// 亿
      let text1 = (num - 8) / 3 > 1 ? '千亿' : '亿';
      text1 = (num - 8) / 4 > 1 ? '万亿' : text1;
      text1 = (num - 8) / 7 > 1 ? '千万亿' : text1;
      // tslint:disable-next-line:no-shadowed-variable
      let fm = 1;
      if ('亿' === text1) {
        fm = 100000000;
      } else if ('千亿' === text1) {
        fm = 100000000000;
      } else if ('万亿' === text1) {
        fm = 1000000000000;
      } else if ('千万亿' === text1) {
        fm = 1000000000000000;
      }
      newValue[1] = text1;
      newValue[0] = parseInt(value / fm) + '';
    }
    if (value < 1000) {
      newValue[1] = '';
      newValue[0] = value + '';
    }
    return newValue.join('');
  }