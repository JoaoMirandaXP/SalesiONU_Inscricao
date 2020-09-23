import React from 'react'

export default function Header(){
    //Aqui ficará o menu inicial 
    return (
        <>
            <div id="header">
                <img 
                className="responsive"
                alt="SalesiONU Online"
                src="/UI/banner_salesionu.png"/>
                <nav id="menu" >
                    <ul>
                        <li id="comite-link"className="acnur"><a href="#acnur">ACNUR</a></li>
                        <li id="comite-link"className="csnu"><a href="#csnu">CSNU</a></li>
                        <li id="comite-link"className="oms"><a href="#oms">OMS</a></li>
                        <li id="comite-link"className="imprensa"><a href="#imprensa">Imprensa</a></li>
                        <li id="site-salesionu"className="minuto-salesionu"><a href="http://192.168.15.22">Minuto Salesionu</a></li>
                        <li id="comite-link"className="inscricao-menu"><a href="#form-inscricao">Inscrição</a></li>

                    </ul>
                </nav>
            </div>
        </>
    )
}