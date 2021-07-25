import React, {ReactNode} from 'react';
import {createContext} from 'react';

import {userStore, UserStoreType} from 'src/stores/user.store';

const StoreContext = createContext<UserStoreType | undefined>(undefined);

export interface StoreProviderProps {
	children: ReactNode;
}

export const StoreProvider = ({children}: StoreProviderProps) => (
	<StoreContext.Provider value={userStore}>{children}</StoreContext.Provider>
);
