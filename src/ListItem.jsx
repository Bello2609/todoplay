import React from "react";
// import clsses from ""
const ListItem = (props)=>{
    const style = {
        textDecoration: "line-through"
    }
    return(
        <div>
            <input type="checkbox" onChange={props.checked}/>
            <label style = {props.style ? style: null}>{props.text}</label>
            <button type="submit" onClick={props.clicked}>delete</button>
        </div>
    );
}
export default ListItem;