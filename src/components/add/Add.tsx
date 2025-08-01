import { GridColDef } from "@mui/x-data-grid"
import "./add.scss"
import React, { FormEvent } from "react"

type Props = {
    slug: string,
    columns: GridColDef[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Add = (props: Props) => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

  return (
    <div className="add">
      <div className="modal">
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
