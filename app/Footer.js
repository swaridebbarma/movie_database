import React from 'react';
import "./Footer.css";
function Footer() {
    return (
        <div className="footer">
            <p>© {new Date().getFullYear()} Movie Search App. All rights reserved.</p>
            <p>Developed by [SWARI/DEVIKA]</p>
        </div>
    )
}

export default Footer;
