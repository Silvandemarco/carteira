import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import api from '../../services/api'
import './styles.css';

export default function Statement() {
    const date = new Date();
    const [ transactions, setTransactions ] = useState([]);
    const [ accounts, setAccounts ] = useState([]);
    const [ selectedAccounts, setSelectedAccounts ] = useState([]);
    const [ month, setMonth ] = useState(date.getFullYear()+'-'+("00" + (date.getMonth()+1)).slice(-2)); 
    const [ categories, setCategories] = useState([]);
    const [ category, setCategory] = useState();


    function ultimoDiaMes(month) {
        const date = new Date(month+'-01T00:00:00-0300');
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }

    useEffect(() => {
        api.get('transactions', {params: {
            "accounts": selectedAccounts, 
            "from_date": new Date(month+'-01T00:00:00-0300'),
            "to_date": ultimoDiaMes(month),
            "category": category
        }}).then(response => {
            setTransactions(response.data);
        })
    },[selectedAccounts,month, category]);

    useEffect(() => {
        api.get('accounts').then(response => {
            setAccounts(response.data);
        })
    },[]);

    useEffect(() => {
        api.get('categories').then(response => {
            setCategories(response.data);
        })
    },[]);

    function handleSelectItem(id) {
        const alreadySelected = selectedAccounts.findIndex(item => item === id);

        if (alreadySelected >= 0) {
            const filteredAccounts = selectedAccounts.filter(item => item !== id);
            setSelectedAccounts(filteredAccounts)
        }else{
            setSelectedAccounts([ ...selectedAccounts, id ]);
        }
        
    }


    return (
        <div className="statement-container">
            <header>
                <div className="filtros">
                    <select name="categories" id="categories" onChange={e => setCategory(e.target.value)}>
                        <option value="0">Selecione a categoria</option>
                        {categories.map(category => (
                            <option value={category.id} >{category.description}</option>
                        ))}
                    </select>
                    <input type="month" name="month" id="month" value={month} onChange={e => setMonth(e.target.value)}/>
                    <Link className="button" to="/transaction" >Nova transação</Link>
                </div>
                
                <div className="contas">
                    <legend>
                        <h2>Contas</h2>
                    </legend>
                    <ul className="items-grid">
                        {accounts.map(account => (
                            <li 
                                key={account.id} 
                                onClick={() => handleSelectItem(account.id)}
                                className={selectedAccounts.includes(account.id) ? 'selected' : ''}
                            >
                                <span>{account.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>

            
            <div className="transacoes">
                <legend>
                    <h1>Últimas transações</h1>
                </legend>

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
        </div>
    );
}