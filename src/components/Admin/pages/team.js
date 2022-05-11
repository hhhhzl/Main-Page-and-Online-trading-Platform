import React from "react";
import TeamTable from "../competitionManagement/teamTable";

function Team() {
    let id = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1);
    return (
        <div className='supervisor-interface'>
            <h3>赛事ID: {id} -- 团队管理</h3>
            <br />
            <TeamTable />
        </div>
    )
}

export default Team;