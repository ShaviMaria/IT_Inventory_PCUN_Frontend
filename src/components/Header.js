import MHILogo from '../assets/pictures/Melia_Hotels_International_logo_White.png';
import MITLogo from '../assets/pictures/MIT_Logo.png';
import '../css/Header.css';
const Header = () => {
    return (
        <header className="header">
           <div className='header-container'>
                <div className="melia-hotels-international-logo-container">
                    <img alt='Melia Hotels International Logo' src={MHILogo}></img>
                </div>
                <div className='mit-logo-container'>
                    <img alt='MIT Logo' src={MITLogo}></img>
                </div>
            </div> 
            
        </header>
    )
}

export default Header;