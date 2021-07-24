import React from 'react';

import {Label, TextFielset, Title} from 'src/styles/theme';

interface AccountHeaderProps {
	counter: number;
}

export const AccountHeader = React.memo(({counter}: AccountHeaderProps) => {
	return (
		<>
			<Title>Accounts</Title>
			<TextFielset>
				<Label>Total Accounts</Label>
				<span>{counter}</span>
			</TextFielset>
		</>
	);
});
