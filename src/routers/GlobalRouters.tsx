import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import {Sidebar} from 'src/components/Sidebar/Sidebar';
import {AccountsPage} from 'src/pages/AccountsPage';
import {ComingSoon} from 'src/pages/ComingSoon';
import {DashboardPage} from 'src/pages/DashboardPage';
import {NotFoundPage} from 'src/pages/NotFoundPage';
import {ProfilePage} from 'src/pages/ProfilePage';
import {TransactionsPage} from 'src/pages/TransactionsPage';

export const GlobalRouters = () => {
	return (
		<Router>
			<Sidebar />
			<Switch>
				{/* PAGES */}
				<Route exact path="/" component={DashboardPage} />
				<Route exact path="/profile" component={ProfilePage} />
				<Route exact path="/accounts" component={AccountsPage} />
				<Route exact path="/transactions" component={TransactionsPage} />
				<Route exact path="/transactions/:id" component={TransactionsPage} />
				<Route exact path="/coming-soon" component={ComingSoon} />
				<Route exact path="/404" component={NotFoundPage} />
				{/* When don't find any route */}
				<Redirect to="/404" />
			</Switch>
		</Router>
	);
};
