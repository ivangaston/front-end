import React from "react";

const ContactoPage = () => {
    return (
        <main className="holder contacto">
            <div className="datos-contacto">
                <h2>Puede comunicarse de la siguiente manera :</h2>
                <form class="formulario" action="" method="">
                    <label for="nombre">Nombre</label>
                    <input type="text" />

                    <label for="email">E-mail</label>
                    <input type="text" />

                    <label for="telefono">Telefono</label>
                    <input type="text" />

                    <label for="mensaje">Comentario</label>
                    <textarea rows="5" cols="25"></textarea>

                    <input type="submit" value="Enviar" />

                </form>
                <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20059.116460080368!2d-3.604929285206549!3d40.3695422394045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2ses!4v1708704774816!5m2!1ses-419!2ses" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>

    );
}

export default ContactoPage;