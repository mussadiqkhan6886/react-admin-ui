import { useState } from "react"
import Add from "../../components/add/Add"
import DataTable from "../../components/dataTable/DataTable"
import { GridColDef } from "@mui/x-data-grid";
import { allProducts } from "../../data";
import "./products.scss"

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 230,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 110,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 130,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 120,
    type: "boolean",
  },
];

const Products = () => {

    const [open, setOpen] = useState(false)

  return (
    <div className="product">
      <div className="info">
        <h1>Product</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={allProducts} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Products
