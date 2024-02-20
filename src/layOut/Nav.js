import { Link } from "react-router-dom";


const Nav =()=>{
    return(
        <nav>
            <div>
                <ul>
                    <li><Link to ='/'>Home</Link></li>
                    <li><Link to='/nosotros'>Nosotros</Link></li>
                    <li><Link to='/services'>Servicios</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav