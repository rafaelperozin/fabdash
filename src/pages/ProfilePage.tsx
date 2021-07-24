import React, {useContext} from 'react';

import {UserContext} from 'src/contexts/user.context';
import {BorderContainer, Label, Main, TextFielset, Title} from 'src/styles/theme';

export const ProfilePage = React.memo(() => {
	const {user} = useContext(UserContext);

	return (
		<Main>
			<Title>Profile</Title>
			<BorderContainer>
				<TextFielset>
					<Label>Name:</Label>
					<span>{user?.name}</span>
				</TextFielset>
				<TextFielset>
					<Label>SIRET:</Label>
					<span>{user?.siren}</span>
				</TextFielset>
				<TextFielset>
					<Label>Address:</Label>
					<span>{user?.fullAddress}</span>
				</TextFielset>
				<TextFielset>
					<Label>N. Of Accounts:</Label>
					<span>{user?.accounts.length}</span>
				</TextFielset>
			</BorderContainer>
		</Main>
	);
});
