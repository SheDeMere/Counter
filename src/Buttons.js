import { useState } from "react";

function Buttons(props) {
    function plus() {
        if (props.counter < 5) {
            props.setCounter(props.counter + 3)
        }
    }
    function minus() {
        if(props.counter > 0) {
            props.setCounter(props.counter - 2)
        }
    }
    function reset() {
        props.setCounter(0)
    }

    return (
        <div>
            <button onClick={plus} className={'enlarge'}>Увеличить</button>
            <button onClick={minus} className={'reduce'}>Уменьшить</button>
            <button onClick={reset} className={'reset'}>Сбросить</button>
        </div>
    );
}

export default Buttons;