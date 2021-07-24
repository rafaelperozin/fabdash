import {faCog, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import {NavIcon, Navigation, NavLink} from 'src/components/Sidebar/styles/navigation.styles';

export const SecondaryNavigation = React.memo(() => {
	return (
		<Navigation>
			<NavLink to="/coming-soon">
				<NavIcon icon={faQuestionCircle} />
				Support
			</NavLink>
			<NavLink to="/coming-soon">
				<NavIcon icon={faCog} />
				Settings
			</NavLink>
		</Navigation>
	);
});
