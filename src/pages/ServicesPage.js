import React from "react";
import'../styles/pages/ServicesPage.css'

const ServicesPage = () => {
    return (
        <main className="holder services-page">
            <h2>Nuestros Servicios</h2>
            <div className="tabla-servicios">
                <table border="1">
                    <tr>
                        <th>#ID</th>
                        <th>Neumáticos</th>
                        <th>Frenos</th>
                        <th>Suspensiones</th>
                    </tr>
                    <tr>
                        <th>#156156</th>
                        <td>Michelin</td>
                        <td>Brembo</td>
                        <td>Bilstein</td>
                    </tr>
                    <tr>
                        <th>#884816</th>
                        <td>Goodyear</td>
                        <td>EBC Brakes</td>
                        <td>KYB</td>
                    </tr>
                    <tr>
                        <th>#952062</th>
                        <td>Pirelli</td>
                        <td>Wilwood</td>
                        <td>Ohlins</td>
                    </tr>
                </table>
            </div>
        </main>

    );
}

export default ServicesPage;