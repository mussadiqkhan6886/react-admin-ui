import { GridColDef } from "@mui/x-data-grid";
import { orders } from "../../data";
import "./order.scss"
import OrderTable from "../../components/orderTable/OrderTable";

const columns: GridColDef[] = [
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "./noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 230,
  },
  {
    field: "customerName",
    type: "string",
    headerName: "Customer Name",
    width: 200,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 130,
  },
  {
    field: "status",
    headerName: "Status",
    type: "string",
    width: 100,
  },
  {
    field: "orderId",
    headerName: "Order Id",
    width: 100,
    type: "string",
  },
  {
    field: "location",
    headerName: "Location",
    width: 120,
    type: "string",
  },
];

const Order = () => {

  return (
    <div className="product">
      <div className="info">
        <h1>Orders</h1>
      </div>
      <OrderTable slug="Orders" columns={columns} rows={orders} />
    </div>
  )
}

export default Order
