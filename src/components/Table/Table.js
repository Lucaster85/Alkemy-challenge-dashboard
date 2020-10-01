import React from 'react';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';
import classes from './Table.module.css';

const table = props => (
    <div>
        <table>
            <TableHead />
            <TableBody />
        </table>
    </div>
);

export default table;