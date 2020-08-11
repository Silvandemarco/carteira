import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

export default function Transaction() {
    const [description, setDescription] = useState('');
    const [value, setvalue] = useState(0);
    const [date, setDate] = useState('');
    const [account_id, setAccount] = useState(0);
    const [category_id, setCategory] = useState(0);
    
    const history = useHistory();

    async function handleTransaction(e) {
        e.preventDefault();

        const data = {
            description,
            value,
            date,
            account_id,
            category_id,
        };
        console.log(data);

        try {
            const response = await api.post('transactions', data);

            alert('Cadastrado com sucesso.');

            history.push( "/" );
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
        
    }

    return (
        <div className="transaction-container">
            <div className="content">
                <form onSubmit={handleTransaction}>
                    <input type="text" 
                        placeholder="Descrição da transação" 
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input type="number" placeholder="R$ 0,00" value={value} onChange={e => setvalue(e.target.value)}/>
                    <input type="date"  value={date} onChange={e => setDate(e.target.value)}/>
                    <input type="number"  value={account_id} onChange={e => setAccount(e.target.value)}/>
                    <input type="number"  value={category_id} onChange={e => setCategory(e.target.value)}/>
                    <button className='button' type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}

