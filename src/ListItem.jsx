import React from "react";

const ListItem = (props)=>{
    return(
        <ol>
            <li>{props.text}</li>
            <button type="submit" onClick={props.clicked}>delete</button>
        </ol>
    );
}
export default ListItem;