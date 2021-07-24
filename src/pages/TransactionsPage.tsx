import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import {AccountSnippet} from 'src/components/Account/AccountSnippet';
import {Notification} from 'src/components/UIElements/Notification';
import {useAccounts} from 'src/hooks/accounts.hook';
import {IdParam} from 'src/models/params.model';
import {Main, Title} from 'src/styles/theme';

export const TransactionsPage = () => {
	const {id} = useParams<IdParam>();

	const {getAccount} = useAccounts();
	const currentAccount = useMemo(() => getAccount(id), [id]);
	/**
	 * NOTE: I'm handling wrong or undefined ID.
	 * NOTE: Please, try changing the ID in the URL Params.
	 */

	return (
		<Main>
			<Title>Transactions</Title>
			{currentAccount ? (
				<AccountSnippet account={currentAccount} />
			) : (
				<Notification type="ERROR">Sorry, Account not found.</Notification>
			)}
		</Main>
	);
};
