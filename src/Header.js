import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";

function Header(props) {
    return (
        <div className={'headers'}>
            <Logo />
            <Menu />
        </div>
    );
}

export default Header;