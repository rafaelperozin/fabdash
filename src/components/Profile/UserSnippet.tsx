import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';

import {UserSnippetContainer, UserSnippetFigure} from 'src/components/Profile/user-snippet.style';
import {useStore} from 'src/contexts/store.context';
import {LinkNoStyle} from 'src/styles/theme';

export const UserSnippet = observer(() => {
	const {
		user: {name, image, fetchUser},
	} = useStore();

	useEffect(() => {
		fetchUser();
	}, [fetchUser]);

	return (
		<LinkNoStyle to="/profile">
			<UserSnippetContainer>
				<UserSnippetFigure>
					<img src={image} alt={name} />
				</UserSnippetFigure>
				<p>{name}</p>
			</UserSnippetContainer>
		</LinkNoStyle>
	);
});
