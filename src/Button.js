import React from 'react';

function Button(props) {
    return (
        <div className={'buttonSection'}>
            <div className={'enlarge'}>
                Увеличить
            </div>
            <div className={'reduce'}>
                Уменьшить
            </div>
            <div className={'reset'}>
                Cбросить
            </div>
        </div>
    );
}

export default Button;