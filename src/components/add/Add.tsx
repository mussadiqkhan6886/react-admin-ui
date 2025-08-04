import { GridColDef } from "@mui/x-data-grid"
import "./add.scss"
import React, { FormEvent, useContext } from "react"
import { MenuContext } from "../../Context/MenuContext"

type Props = {
    slug: string,
    columns: GridColDef[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Add = (props: Props) => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      props.setOpen(false)
        e.preventDefault()
    }

     const {mode} = useContext(MenuContext)
    
      const light = {
        background: "rgb(243 244 246)",
        color: "black"
      }
    
      const navbarStyle = mode === "dark" ? {} : light;

  return (
    <div className="add">
      <div style={navbarStyle} className="modal">
        <span onClick={() => props.setOpen(false)} className="close">X</span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit}>
            {props.columns.filter(item => item.field !== "id" && item.field !== "img")
            .map(col => (
                <div key={col.headerName} className="item">
                    <label htmlFor={col.headerName}>{col.headerName}</label>
                    <input type={col.type} placeholder={col.field} />
                </div>
            ))}
            <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Add
