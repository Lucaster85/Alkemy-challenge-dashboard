import React from 'react';
import Table from '../Table/Table';
import classes from './LastMoves.module.css';

const lastMoves = props => (
    <div className={classes.LastMoves}>
        ULTIMOS MOVIMIENTOS
        <Table />
    </div>
);

export default lastMoves;