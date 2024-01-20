import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
    return (
        <header className='header'>
            <section>
                <div>
                    <h2 className='banner'>
                        LITTLE LEMON
                    </h2>
                    <h3>Chicago</h3>
                    <p>We are a family restaurant, focused on traditional recipes served with indian style.<br></br>
                         Come take a visit</p>
                    <Link to="/booking"><button aria-label='on Click'>Reserve a table</button></Link>
                </div>
                <div className='banner-img'>
                    <img src={bannerImg} alt='bannerimg'/>
                </div>
            </section>

        </header>
    );
};

export default Header;