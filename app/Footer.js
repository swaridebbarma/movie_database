import React from 'react';
import { FaYoutube, FaFacebook, FaFilm } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <p>© {new Date().getFullYear()} Movie Search App</p>
            <p>Developed by [Swari & Devika]</p>

            <div className='text'>Connect with us</div>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="youtube-icon">Youtube 
                <FaYoutube />
            </a>

            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook-icon">Facebook
                    <FaFacebook />
            </a>

            <a href="https://www.jiocinema.com" target="_blank" rel="noopener noreferrer" className="jiocinema-icon">Jio Cinema
                <FaFilm />
            </a>
        </div>

    );
}

export default Footer;
