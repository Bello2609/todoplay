import React from "react";
// import clsses from ""
const ListItem = (props)=>{
    return(
        <div>
            <input type="checkbox" onChange={props.checked}/>
            <label>{props.text}</label>
            <button type="submit" onClick={props.clicked}>delete</button>
        </div>
    );
}
export default ListItem;