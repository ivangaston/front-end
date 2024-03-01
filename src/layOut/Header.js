import React from 'react';
import "../styles/layOut/Header.css"

// En la etiqueta IMG con poner una barra ( / )  delante del nombre de la carpeta, en este caso IMAGES como podria ser cualquier nombre de carpeta que este en PUBLIC , la / detecta automaticamente que proviene de alli.

const Header = () => {
    return (
        <header>
            <div className='Holder'>
                <h1>StarCars</h1>
                <img src="/images/car.png" alt="" />
            </div>

            {/* <div className='holder'>
                <img src="/images/mainn.jpg" width='100' alt=""/>
            </div> */}
        </header>
    )
}
export default Header