import React from 'react'

export default function Secretariado(props){
    return (
        <>
            <div id={props.className} name={props.name}>
                {props.children}
            </div>
        </>
    )      
}