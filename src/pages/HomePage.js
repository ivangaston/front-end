import React from "react";
import '../styles/pages/HomePages.css'

const HomePage = () => {
    return (

        <main>
            <div className='main_galery'>

                <div className='sub_galery'>
                    <h2>Vehiculos</h2>
                    <img src="\images\tarjeta1.jpg" alt="" />
                </div>

                <div className='sub_galery'>
                    <h2>Llantas</h2>
                    <img src="\images\tarjeta2.jpg" alt="" />
                </div>

                <div className='sub_galery'>
                    <h2>Repuestos</h2>
                    <img src="\images\tarjeta3.jpg" alt="" />
                </div>

            </div>


        </main>


    );
}

export default HomePage;