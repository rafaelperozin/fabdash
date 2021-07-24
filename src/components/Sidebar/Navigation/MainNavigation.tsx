import {faAddressCard, faChartLine, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import {NavIcon, Navigation, NavLink} from 'src/components/Sidebar/styles/navigation.styles';

export const MainNavigation = React.memo(() => {
	return (
		<Navigation>
			<NavLink to="/">
				<NavIcon icon={faChartLine} />
				Dashboard
			</NavLink>
			<NavLink to="/profile">
				<NavIcon icon={faUserCircle} />
				Profile
			</NavLink>
			<NavLink to="/accounts">
				<NavIcon icon={faAddressCard} />
				Accounts
			</NavLink>
		</Navigation>
	);
});
