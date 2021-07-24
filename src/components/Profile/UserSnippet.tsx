import React, {useContext} from 'react';

import {UserSnippetContainer, UserSnippetFigure} from 'src/components/Profile/user-snippet.style';
import {UserContext} from 'src/contexts/user.context';
import {LinkNoStyle} from 'src/styles/theme';

export const UserSnippet = React.memo(() => {
	const {user} = useContext(UserContext);

	return (
		<LinkNoStyle to="/profile">
			<UserSnippetContainer>
				<UserSnippetFigure>
					<img src={user?.image} alt={user?.name} />
				</UserSnippetFigure>
				<p>{user?.name}</p>
			</UserSnippetContainer>
		</LinkNoStyle>
	);
});
