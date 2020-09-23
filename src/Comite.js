import React from 'react'

export default function Comite(props){
    return (
        <>
            <div id={props.id} className={props.className} name={props.name}>
                <img className="responsive"src={props.loc_image} alt={props.name+"-banner"}/>
                <h1>{props.name}</h1>
                {props.children}
            </div>
        </>
    )      
}