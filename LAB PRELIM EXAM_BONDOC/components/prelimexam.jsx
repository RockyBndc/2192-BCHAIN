/*BONDOC, RAQUEL ANN P. /  WD-401 */
import React from "react";

function Luffy(){
    return(
    <div>
    <h2 className="onHand">My Strawhat</h2>
    <h2 className="onHand">Gum Gum Fruit</h2>
    <h2 className="notOnHand">The Red Vest</h2>
    </div>
    );
}

function NotChecked(props){
    const isLuffy = props.isLuffy;
    if(isLuffy){
        return(
        <Luffy />
        );
    }
    return(
        <div>
        <h2>My Strawhat</h2>
        <h2>Gum Gum Fruit</h2>
        <h2>The Red Vest</h2>
    </div>
    );
}

export default function App(){
    return(
    <div>
        <NotChecked
            isLuffy={true}
        />
    </div>
);
}

