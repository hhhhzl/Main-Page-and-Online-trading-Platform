import React from "react";
import UsersManageTable from ".././userManagement/UsersManageTable";

function Admin() {
    return (
        <div className='supervisor-interface'>
            <h3>用户管理</h3>
            <br />
            <UsersManageTable />
        </div>
    )
}

export default Admin;