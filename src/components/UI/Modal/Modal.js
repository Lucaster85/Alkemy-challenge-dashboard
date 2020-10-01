import React from 'react';
import classes from './Modal.module.css';

const modal = props => (
    <div
        className={classes.Modal}
        style={{
            transform: /* props.show */ true ? 'translateY(0)' : 'translateY(-100)',
            opacity: /* props.show */ true ? '1' : '0'
        }}>
        {props.children}
    </div>
);

export default modal;