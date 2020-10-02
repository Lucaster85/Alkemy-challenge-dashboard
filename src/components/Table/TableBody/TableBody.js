import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './TableBody.module.css';

const tableBody = props => (
    <tbody className={classes.TableBody}>
        <tr>
            <td>TEST 1</td>
            <td>TEST 2</td>
            <td>TEST 3</td>
            <td>TEST 4</td>
            <td><Button>editar</Button></td>
            <td><Button>eliminar</Button></td>
        </tr>
        <tr>
            <td>TEST 1</td>
            <td>TEST 2</td>
            <td>TEST 3</td>
            <td>TEST 4</td>
            <td><Button>editar</Button></td>
            <td><Button>eliminar</Button></td>
        </tr>
        <tr>
            <td>TEST 1</td>
            <td>TEST 2</td>
            <td>TEST 3</td>
            <td>TEST 4</td>
            <td><Button>editar</Button></td>
            <td><Button>eliminar</Button></td>
        </tr>
    </tbody>
);

export default tableBody;