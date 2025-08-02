import "./setMode.scss";
import { Context } from "../../context/Context";
import { useContext } from "react";

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SetMode = (props: Props) => {

    const {mode, setMode} = useContext(Context)

  return (
    <div className="setMode">
      <div className="settings">
        <p onClick={() => props.setOpen(false)} className="cross">X</p>
        <h2>Set Mode</h2>
        <div className="mode">
            <div onClick={() => {setMode("dark")
                console.log(mode)
            }} className="darkCircle circle"></div>
            <p >Dark Mode</p>
        </div>
        <div className="mode">
            <div onClick={() => {setMode("light")
                console.log(mode)
            }} className="lightCircle circle"></div>
            <p>Light Mode</p>
        </div>
      </div>
    </div>
  )
}

export default SetMode
