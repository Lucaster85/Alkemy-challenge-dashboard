import React, { Component } from 'react';
import Aux from '../hoc/Auxiliary';
import Backdrop from '../components/UI/Backdrop/Backdrop';
import Modal from '../components/UI/Modal/Modal';
import TransactionUploadForm from '../components/TransactionsUploadForm/TransactionsUploadForm';
import BalanceOutput from '../components/BalanceOutput/BalanceOutput';
import LastMoves from '../components/LastMoves/LastMoves';
import AllMoves from '../components/AllMoves/AllMoves';

class AdminApp extends Component {
    state = {
        Logged: false,
        userLoggedIn: 'Lucaster',
        balance: 0,
        entrys: {},
        expenses: {},
        lastTransactions: []
    }
    render(){
        return (
            <Aux>
                <Backdrop />
                <Modal />
                <TransactionUploadForm />
                <BalanceOutput />
                <LastMoves />
                <AllMoves />
            </Aux>
        )
    }
}


export default AdminApp;