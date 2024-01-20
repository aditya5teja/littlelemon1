import React from 'react';
import logo from '../images/Logo .svg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family resturant, focused on traditional recipe served with a modern twist </p>


                </div>
                <div>
                    <h3>Important links</h3>
                    <ul>
                        <li> <a href='/'>Home</a></li>
                        <li> <a href='/'>About</a></li>
                        <li> <a href='/'>Menu</a></li>
                        <li> <a href='/'>Reservations</a></li>
                        <li> <a href='/'>Order Online</a></li>
                        <li> <a href='/'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact info</h3>
                    <ul>
                        <li>Address: <br/>123 Towncity, USA</li>
                        <li>Phone: <br/>738272829</li>
                        <li>email: <br/>littlelemon@lemon.com</li>
                    </ul>
                </div>
                <div>
                <h3>Social media</h3>
                <ul>
                    <li> <a href='/'>Facebook</a></li>
                    <li> <a href='/'>Instagram</a></li>
                    <li> <a href='/'>Twitter</a></li>
                
                
                 </ul>   
                </div>
            </section>
        </footer>
    );
};

export default Footer;