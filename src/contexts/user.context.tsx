import React, {useState, createContext, ReactNode, useEffect} from 'react';

import {userData} from 'src/api/users/users.api';
import {User} from 'src/api/users/users.model';

interface UserProviderProps {
	children: ReactNode;
}

interface UserContext {
	user: User;
	updateUser: (user: User) => void;
}

export const initialUser: User = {
	name: '',
	image: '',
	siren: 0,
	fullAddress: '',
	accounts: [],
};

export const UserContext = createContext<UserContext>({
	user: initialUser,
	updateUser: () => undefined,
});

export const UserProvider = ({children}: UserProviderProps): JSX.Element => {
	const [user, setUser] = useState<User>(initialUser);

	useEffect(() => {
		userData().then((user) => setUser(user));
	}, []);

	const updateUser = (user: User): void => setUser(user);

	return <UserContext.Provider value={{user, updateUser}}>{children}</UserContext.Provider>;
};
