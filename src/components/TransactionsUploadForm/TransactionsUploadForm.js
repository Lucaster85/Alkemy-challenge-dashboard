import React from 'react';
import classes from './TransactionsUploadForm.module.css';

const transactionUploadForm = props => {
    return (
        <div className={classes.Transaction}>
            <form action="" method="post">
                <label htmlFor="">Concepto</label>
                <input type="text"/><br/>
                <label htmlFor="">Monto</label>
                <input type="number"/><br/>
                <label htmlFor="">Fecha</label>
                <input type="date"/><br/>
                <label htmlFor="">Tipo</label>
                <select name="" id="">
                    <option value="">TEST 1</option>
                    <option value="">TEST 2</option>
                </select><br/>
                <label htmlFor="">Categoria</label>
                <select name="" id="">
                    <option value="">TEST 1</option>
                    <option value="">TEST 2</option>
                </select>
                <button>CREAR</button><br/>
            </form>
        </div>
    )
};

export default transactionUploadForm;