import React from 'react';
import Table from '../Table/Table';
import Button from '../UI/Button/Button';
import classes from './AllMoves.module.css';

const allMoves = props => (
    <div className={classes.AllMoves}>
        Historial
        <Button>Ver todo</Button>
        <Button>Ver ingresos</Button>
        <Button>Ver egresos</Button>
        <Table />
    </div>
)

export default allMoves;