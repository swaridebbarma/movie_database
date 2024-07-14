import React from 'react';
import "./Footer.css";
function Footer() {
    return (
        <div className="footer">
            <p>© {new Date().getFullYear()} Movie Search App</p>
            <p>Developed by [Swari & Devika]</p>
        </div>
    );
};

export default Footer;
