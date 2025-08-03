import "./dataTable.scss"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
    columns: GridColDef[],
    rows: object[],
    slug: string
}

const DataTable = (props: Props) => {

  const [data, setData] = useState(props.rows)

    const handleDelete = (id: number) => {
        setData(data.filter((item : any) => item.id !== id))
    }

    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width:200,
        renderCell: (params) => (
            <div className="action" style={{display: "flex"}}>
                <Link to={`/${props.slug}/${params.row.id}`}>
                    <img src="/view.svg" alt="view icon" />
                </Link>
                <div className="delete" onClick={() => handleDelete(params.row.id)} >
                    <img src="/delete.svg" alt="delete icon" />
                </div>
            </div>
        )
    }

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        showToolbar
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable
