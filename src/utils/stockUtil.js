data = [

    {
        "今开": 14.51, 
         
        "代码": "SH.000001", 
         
        "名称": "平安银行", 
         
        "市净率": 0.84, 
         
        "市盈率-动态": 5.48, 
         
        "成交量": 78956, 
         
        "振幅": 0.97, 
         
        "换手率": 0.04, 
         
        "昨收": 14.41, 
         
        "最低": 14.42, 
         
        "最新价": 14.51, 
         
        "最高": 14.56, 
         
        "涨跌幅": 0.69, 
         
        "量比": 2.23 
         
        },
        {
            "今开": 14.51, 
             
            "代码": "SH.000001", 
             
            "名称": "平安银行", 
             
            "市净率": 0.84, 
             
            "市盈率-动态": 5.48, 
             
            "成交量": 78956, 
             
            "振幅": 0.97, 
             
            "换手率": 0.04, 
             
            "昨收": 14.41, 
             
            "最低": 14.42, 
             
            "最新价": 14.51, 
             
            "最高": 14.56, 
             
            "涨跌幅": 0.69, 
             
            "量比": 2.23 
             
            },
            {
                "今开": 14.51,  
                 
                "代码": "SH.000001", 
                 
                "名称": "平安银行", 
                 
                "市净率": 0.84, 
                 
                "市盈率-动态": 5.48, 
                 
                "成交量": 78956, 
                 
                "振幅": 0.97, 
                 
                "换手率": 0.04, 
                 
                "昨收": 14.41, 
                 
                "最低": 14.42, 
                 
                "最新价": 14.51, 
                 
                "最高": 14.56, 
                 
                "涨跌幅": 0.69, 
                 
                "量比": 2.23 
                 
                }
]


function stockcalculate(data){
    return {
        "今开":{"max":x,"min":y},
        "市盈率":{"max":x,"min":y},
        }
}