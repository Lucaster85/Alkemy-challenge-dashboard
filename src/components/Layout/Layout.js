import React from 'react';
import Aux from '../../hoc/Auxiliary';

const layout = props => (
    <Aux>
        <h1>TOOLBAR</h1>
        <main>
            {props.children}
            CONTENIDO
        </main>
    </Aux>
);

export default layout;