import React from 'react';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';
import classes from './Table.module.css';

const table = props => {
    let headers = [
        'Concepto',
        'Monto',
        'Fecha',
        'Tipo',
        'Acción'
    ]
    return(
        <div>
            <table className={classes.Table}>
                <TableHead data={headers} />
                <TableBody />
            </table>
        </div>
)};

export default table;