import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import api from '../../services/api'
import './styles.css';

export default function Statement() {
    const [ transactions, setTransactions ] = useState([]);

    useEffect(() => {
        api.get('transactions').then(response => {
            setTransactions(response.data);
        })
    },[]);


    return (
        <div className="statement-container">
            <header>
                <Link className="button" to="/transaction" >Nova transação</Link>
            </header>

            <ul className="contas-grid">
                <li>
                    <span>Dinheiro</span>
                </li>
                <li>
                    <span>Nubank</span>
                </li>
                <li>
                    <span>Caixa</span>
                </li>
            </ul>

            <h1>Últimas transações</h1>

            <ul> 
                {transactions.map(transaction => (
                    <li key={transaction.Id}>
                        <div>
                            <FiShoppingCart size={26} color="#E02041"/>
                        </div>
                        <div>
                            <span>{Intl.DateTimeFormat('pt-BR').format(Date.parse(transaction.date))}</span>
                            <strong>{transaction.category.description}</strong>
                            <p>{transaction.description}</p>
                        </div>
                        <div className="right">
                            <span>{transaction.account.description}</span>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(transaction.value)}</p>
                        </div>
                </ li>
                ))}
            </ ul>
        </div>
    );
}