import React from 'react';
import {ThemeProvider} from 'styled-components';

import {StoreProvider} from 'src/contexts/store.context';
import {GlobalRouters} from 'src/routers/GlobalRouters';

import './styles/theme/reset.css';
import './styles/theme/modal.css';

function App() {
	return (
		<StoreProvider>
			<ThemeProvider theme={{mode: 'light'}}>
				<GlobalRouters />
			</ThemeProvider>
		</StoreProvider>
	);
}

export default App;
