import {observer} from 'mobx-react-lite';
import React from 'react';

import {useStore} from 'src/contexts/store.context';
import {BorderContainer, Label, Main, TextFielset, Title} from 'src/styles/theme';

export const ProfilePage = observer(() => {
	const {
		user: {name, siren, fullAddress, accounts, countTransactions},
	} = useStore();

	return (
		<Main>
			<Title>Profile</Title>
			<BorderContainer>
				<TextFielset>
					<Label>Name:</Label>
					<span>{name}</span>
				</TextFielset>
				<TextFielset>
					<Label>SIRET:</Label>
					<span>{siren}</span>
				</TextFielset>
				<TextFielset>
					<Label>Address:</Label>
					<span>{fullAddress}</span>
				</TextFielset>
				<TextFielset>
					<Label>N. Of Accounts:</Label>
					<span>{accounts?.length}</span>
				</TextFielset>
				<TextFielset>
					<Label>N. Of Transactions:</Label>
					<span>{countTransactions()}</span>
				</TextFielset>
			</BorderContainer>
		</Main>
	);
});
