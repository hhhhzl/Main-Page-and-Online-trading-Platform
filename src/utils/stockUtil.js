data = [

    {
        "今开": 14.51,
        
        "代码": "SH.000001",

        "名称": "平安银行",

        "市净率": 0.81,

        "市盈率-动态": 5.51,

        "成交量": 78951,

        "振幅": 0.91,

        "换手率": 0.01,

        "昨收": 14.41,

        "最低": 14.41,

        "最新价": 14.51,

        "最高": 14.51,

        "涨跌幅": 0.61,

        "量比": 2.21

    },
    {
        "今开": 14.52,

        "代码": "SH.000001",

        "名称": "平安银行",

        "市净率": 0.72,

        "市盈率-动态": 5.52,

        "成交量": 78352,

        "振幅": 0.92,

        "换手率": 0.02,

        "昨收": 14.42,

        "最低": 14.42,

        "最新价": 14.52,

        "最高": 14.52,

        "涨跌幅": 0.62,

        "量比": 2.22

    },
    {
        "今开": 14.53,

        "代码": "SH.000001",

        "名称": "平安银行",

        "市净率": 0.83,

        "市盈率-动态": 5.53,

        "成交量": 78953,

        "振幅": 0.93,

        "换手率": 0.03,

        "昨收": 14.43,

        "最低": 14.43,

        "最新价": 14.53,

        "最高": 14.53,

        "涨跌幅": 0.63,

        "量比": 2.23

    }
]


function stockcalculate(data) {
    let 今开Max = ''
    let 今开Min = ''
    let 市净率Max = ''
    let 市净率Min = ''
    let 市盈率_动态Max = ''
    let 市盈率_动态Min = ''
    let 成交量Max = ''
    let 成交量Min = ''
    let 振幅Max = ''
    let 振幅Min = ''
    let 换手率Max = ''
    let 换手率Min = ''
    let 昨收Max = ''
    let 昨收Min = ''
    let 最低Max = ''
    let 最低Min = ''
    let 最新价Max = ''
    let 最新价Min = ''
    let 最高Max = ''
    let 最高Min = ''
    let 涨跌幅Max = ''
    let 涨跌幅Min = ''
    let 量比Max = ''
    let 量比Min = ''

    data.forEach(v => {
        if (量比Max) {
            if (parseFloat(v.量比) > parseFloat(量比Max)) {
                量比Max = v.量比
            }
        } else {
            量比Max = v.量比
        }
        if (量比Min) {
            if (parseFloat(v.量比) < parseFloat(量比Min)) {
                量比Min = v.量比
            }
        } else {
            量比Min = v.量比
        }

        if (涨跌幅Max) {
            if (parseFloat(v.涨跌幅) > parseFloat(涨跌幅Max)) {
                涨跌幅Max = v.涨跌幅
            }
        } else {
            涨跌幅Max = v.涨跌幅
        }
        if (涨跌幅Min) {
            if (parseFloat(v.涨跌幅) < parseFloat(涨跌幅Min)) {
                涨跌幅Min = v.涨跌幅
            }
        } else {
            涨跌幅Min = v.涨跌幅
        }

        if (最高Max) {
            if (parseFloat(v.最高) > parseFloat(最高Max)) {
                最高Max = v.最高
            }
        } else {
            最高Max = v.最高
        }
        if (最高Min) {
            if (parseFloat(v.最高) < parseFloat(最高Min)) {
                最高Min = v.最高
            }
        } else {
            最高Min = v.最高
        }

        if (最新价Max) {
            if (parseFloat(v.最新价) > parseFloat(最新价Max)) {
                最新价Max = v.最新价
            }
        } else {
            最新价Max = v.最新价
        }
        if (最新价Min) {
            if (parseFloat(v.最新价) < parseFloat(最新价Min)) {
                最新价Min = v.最新价
            }
        } else {
            最新价Min = v.最新价
        }

        if (最低Max) {
            if (parseFloat(v.最低) > parseFloat(最低Max)) {
                最低Max = v.最低
            }
        } else {
            最低Max = v.最低
        }
        if (最低Min) {
            if (parseFloat(v.最低) < parseFloat(最低Min)) {
                最低Min = v.最低
            }
        } else {
            最低Min = v.最低
        }

        if (昨收Max) {
            if (parseFloat(v.昨收) > parseFloat(昨收Max)) {
                昨收Max = v.昨收
            }
        } else {
            昨收Max = v.昨收
        }
        if (昨收Min) {
            if (parseFloat(v.昨收) < parseFloat(昨收Min)) {
                昨收Min = v.昨收
            }
        } else {
            昨收Min = v.昨收
        }

        if (换手率Max) {
            if (parseFloat(v.换手率) > parseFloat(换手率Max)) {
                换手率Max = v.换手率
            }
        } else {
            换手率Max = v.换手率
        }
        if (换手率Min) {
            if (parseFloat(v.换手率) < parseFloat(换手率Min)) {
                换手率Min = v.换手率
            }
        } else {
            换手率Min = v.换手率
        }

        if (振幅Max) {
            if (parseFloat(v.振幅) > parseFloat(振幅Max)) {
                振幅Max = v.振幅
            }
        } else {
            振幅Max = v.振幅
        }
        if (振幅Min) {
            if (parseFloat(v.振幅) < parseFloat(振幅Min)) {
                振幅Min = v.振幅
            }
        } else {
            振幅Min = v.振幅
        }

        if (成交量Max) {
            if (parseFloat(v.成交量) > parseFloat(成交量Max)) {
                成交量Max = v.成交量
            }
        } else {
            成交量Max = v.成交量
        }
        if (成交量Min) {
            if (parseFloat(v.成交量) < parseFloat(成交量Min)) {
                成交量Min = v.成交量
            }
        } else {
            成交量Min = v.成交量
        }

        if (市盈率_动态Max) {
            if (parseFloat(v["市盈率-动态"]) > parseFloat(市盈率_动态Max)) {
                市盈率_动态Max = v["市盈率-动态"]
            }
        } else {
            市盈率_动态Max = v["市盈率-动态"]
        }
        if (市盈率_动态Min) {
            if (parseFloat(v["市盈率-动态"]) < parseFloat(市盈率_动态Min)) {
                市盈率_动态Min = v["市盈率-动态"]
            }
        } else {
            市盈率_动态Min = v["市盈率-动态"]
        }

        if (市净率Max) {
            if (parseFloat(v.市净率) > parseFloat(市净率Max)) {
                市净率Max = v.市净率
            }
        } else {
            市净率Max = v.市净率
        }
        if (市净率Min) {
            if (parseFloat(v.市净率) < parseFloat(市净率Min)) {
                市净率Min = v.市净率
            }
        } else {
            市净率Min = v.市净率
        }

        if (今开Max) {
            if (parseFloat(v.今开) > parseFloat(今开Max)) {
                今开Max = v.今开
            }
        } else {
            今开Max = v.今开
        }
        if (今开Min) {
            if (parseFloat(v.今开) < parseFloat(今开Min)) {
                今开Min = v.今开
            }
        } else {
            今开Min = v.今开
        }
    })
    let res = {
        "今开":{"Max":今开Max,"Min":今开Min},
        "市净率":{"Max":市净率Max,"Min":市净率Min},
        "市盈率-动态":{"Max":市盈率_动态Max,"Min":市盈率_动态Min},
        "成交量":{"Max":成交量Max,"Min":成交量Min},
        "振幅":{"Max":振幅Max,"Min":振幅Min},
        "换手率":{"Max":换手率Max,"Min":换手率Min},
        "昨收":{"Max":昨收Max,"Min":昨收Min},
        "最低":{"Max":最低Max,"Min":最低Min},
        "最新价":{"Max":最新价Max,"Min":最新价Min},
        "最高":{"Max":最高Max,"Min":最高Min},
        "涨跌幅":{"Max":涨跌幅Max,"Min":涨跌幅Min},
        "量比":{"Max":量比Max,"Min":量比Min},
    }
    return res
}
