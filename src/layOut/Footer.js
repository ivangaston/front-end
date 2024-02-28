import React from 'react';
import '../styles/layOut/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='links-footer'>

                <a href="https://facebook.com">
                    <img src="/images/facebook-circle-logo-24.png" alt="" />
                </a>

                <a href="https://instagram.com">
                    <img src="/images/instagram-logo-24.png" alt="" />
                </a>

                <a href="/contacto">
                    <img src="/images/message-regular-24.png" alt="" />
                </a>

            </div>

            <div className='parrafo-footer'>
                <p>Derechos Reservados &copy;StarCars</p>
            </div>

            <div className='home-footer'>
                <a href="/">
                    <img src="/images/logo.png" alt="" />
                </a>
            </div>

        </footer>
    )
}
export default Footer