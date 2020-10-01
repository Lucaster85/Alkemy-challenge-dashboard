import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = props => (
    /* props.show */ true ? <div className={classes.Backdrop} onClick={props.modalClosed}></div> : null
);

export default backdrop;