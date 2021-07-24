import {faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import {UserSnippet} from 'src/components/Profile/UserSnippet';
import {MainNavigation} from 'src/components/Sidebar/Navigation/MainNavigation';
import {SecondaryNavigation} from 'src/components/Sidebar/Navigation/SecondaryNavigation';
import {Aside, BrandLink, BrandName, ToggleMenu} from 'src/components/Sidebar/styles/sidebar.style';

export const Sidebar = () => {
	return (
		<Aside>
			<div>
				<ToggleMenu icon={faChevronCircleLeft} />
				<BrandLink to="/">
					<BrandName>FABDASH</BrandName>
				</BrandLink>
				<UserSnippet />
				<MainNavigation />
			</div>
			<div>
				<SecondaryNavigation />
			</div>
		</Aside>
	);
};
