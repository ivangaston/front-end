import React from 'react' ;
// En la etiqueta IMG con poner una barra ( / )  delante del nombre de la carpeta, en este caso IMAGES como podria ser cualquier nombre de carpeta que este en PUBLIC , la / detecta automaticamente que proviene de alli.

const Header =()=>{
    return(
        <header>
            <div className='Holder'>
                <img src="/images/logo.png" width='100' alt=""/>
                <h1>Bienvenido a StarCars</h1>
            </div>
        </header>
    )
}
export default Header