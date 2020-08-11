import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Statement from "./pages/Statement";
import StatementTeste from "./pages/StatementTeste";
import Transaction from "./pages/Transaction";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={StatementTeste} />
                <Route path="/transaction" component={Transaction} />
            </Switch>
        </BrowserRouter>
    )
}