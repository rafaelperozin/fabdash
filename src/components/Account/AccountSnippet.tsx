import React from 'react';

import {Accounts} from 'src/api/users/users.model';
import {AccountActions} from 'src/components/Account/AccountActions';
import {BorderContainer, Label, TextFielset} from 'src/styles/theme';
import {formatMoney} from 'src/utils/format-money';

interface AccountSnippetProps {
	account: Accounts;
	actions?: boolean;
}

export const AccountSnippet = React.memo(({account, actions = false}: AccountSnippetProps) => {
	return (
		<BorderContainer>
			<TextFielset>
				<Label>Account Number:</Label>
				<span>{account.account_id}</span>
			</TextFielset>
			<TextFielset>
				<Label>Balance:</Label>
				<span>{formatMoney(account.balance, account.currency)}</span>
			</TextFielset>
			{actions && <AccountActions id={account.account_id} />}
		</BorderContainer>
	);
});
