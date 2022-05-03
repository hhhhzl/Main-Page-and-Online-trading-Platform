import React from "react";
import CompetitionManageTable from "../competitionManagement/competitionManagementTable";

function Competition() {
    return (
        <div className='supervisor-interface'>
            <h3>赛事管理</h3>
            <br />
            <CompetitionManageTable />
        </div>
    )
}

export default Competition;