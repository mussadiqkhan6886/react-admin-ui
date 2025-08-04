import "./orderTable.scss"
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type Props = {
    columns: GridColDef[],
    rows: object[],
    slug: string
}

const OrderTable = (props: Props) => {

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        showToolbar
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnFilter
        
      />
    </div>
  )
}

export default OrderTable
