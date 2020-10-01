import React, { Component } from 'react';
import Aux from '../hoc/Auxiliary';
import Backdrop from '../components/UI/Backdrop/Backdrop';
import Modal from '../components/UI/Modal/Modal';

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
            </Aux>
        )
    }
}


export default AdminApp;