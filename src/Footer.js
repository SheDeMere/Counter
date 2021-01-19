import React from 'react';
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import Copyright from "./Copyright";

function Footer(props) {
    return (
        <div className={'footer'}>
            <div className="footer_one">
                <FooterLogo />
                <FooterMenu />
            </div>
            <Copyright />
        </div>
    );
}

export default Footer;