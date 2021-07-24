import React, {useContext} from 'react';

import {Accounts} from 'src/api/users/users.model';
import {AccountHeader} from 'src/components/Account/AccountHeader';
import {AccountSnippet} from 'src/components/Account/AccountSnippet';
import {UserContext} from 'src/contexts/user.context';
import {Main, TwoColumns} from 'src/styles/theme';

export const AccountsPage = () => {
	const {user} = useContext(UserContext);

	return (
		<Main>
			<AccountHeader counter={user.accounts.length} />
			<TwoColumns>
				{user.accounts.map((account: Accounts) => (
					<AccountSnippet key={account.account_id} account={account} actions={true} />
				))}
			</TwoColumns>
		</Main>
	);
};
