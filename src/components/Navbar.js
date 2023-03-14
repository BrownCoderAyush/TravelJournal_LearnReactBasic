import '../css/navbar.css';
import logo from '../logo.png';


export default function Navbar(){
    return (
        <nav>
            <img src = {logo} alt="noo" className="nav--logo" />
        </nav>
    )
}