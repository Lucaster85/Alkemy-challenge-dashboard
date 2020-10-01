import React from 'react';
import Table from '../Table/Table';
import classes from './AllMoves.module.css';

const allMoves = props => (
    <div className={classes.AllMoves}>
        TODOS LOS MOVIMIENTOS
        <Table />
    </div>
)

export default allMoves;