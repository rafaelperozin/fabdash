import React from 'react';
import {Link} from 'react-router-dom';

import {Main, Title} from 'src/styles/theme';

export const NotFoundPage = React.memo(() => {
	return (
		<Main>
			<Title>Ops, page not found.</Title>
			<Link to="/">Go Home</Link>
		</Main>
	);
});
