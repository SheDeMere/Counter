import React from 'react';
import Number from "./Number";
import Button from "./Button";

function Main(props) {
    return (
        <div className={'main'}>
            <Number />
            <Button />
        </div>
    );
}

export default Main;