import React from 'react'
import AddCred from '../components/AddCred';
import DashDetails from '../components/DashDetails';
import TableDetails from '../components/Table';


function Dashboard() {
    return (
        <div >
            <TableDetails />
            <AddCred />
        </div>
    )
}

export default Dashboard;
