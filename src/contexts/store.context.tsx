import React, {ReactNode} from 'react';
import {createContext} from 'react';

const StoreContext = createContext<string>('something');

export interface StoreProviderProps {
	children: ReactNode;
}

export const StoreProvider = ({children}: StoreProviderProps) => (
	<StoreContext.Provider value={'something'}>{children}</StoreContext.Provider>
);
