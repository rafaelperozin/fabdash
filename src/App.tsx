import React from 'react';
import {ThemeProvider} from 'styled-components';

import {UserProvider} from 'src/contexts/user.context';
import {GlobalRouters} from 'src/routers/GlobalRouters';

import './styles/theme/reset.css';
import './styles/theme/modal.css';

function App() {
	return (
		<UserProvider>
			<ThemeProvider theme={{mode: 'light'}}>
				<GlobalRouters />
			</ThemeProvider>
		</UserProvider>
	);
}

export default App;
