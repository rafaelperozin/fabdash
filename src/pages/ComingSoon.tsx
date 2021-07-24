import React from 'react';
import {Link} from 'react-router-dom';

import {Main, Title} from 'src/styles/theme';

export const ComingSoon = React.memo(() => {
	return (
		<Main>
			<Title>Coming Soon!</Title>
			<p>Please, try later.</p>
			<Link to="/">Go Home</Link>
		</Main>
	);
});
