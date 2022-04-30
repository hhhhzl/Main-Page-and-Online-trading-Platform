import React from "react";
import StockManageTable from ".././StockManagement/StockManageTable";

function Stock() {
    return (
        <div className='supervisor-interface'>
            <h3>股票管理</h3>
            <br />
            <StockManageTable />
        </div>
    )
}

export default Stock;