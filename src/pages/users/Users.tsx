import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
import { allUsers } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

 const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "img",
    headerName: "Avatar",
    width: 80,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 120,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 130,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 210,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 130,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 130,
    type: "boolean",
  },
];



const Users = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New Users</button>
      </div>
      <DataTable slug="users" columns={columns} rows={allUsers} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users
