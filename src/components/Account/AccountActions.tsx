import React, {useCallback, useState} from 'react';

import {AccActionLink, AccActions, FakeLink} from 'src/components/Account/account.style';
import {AccountDetailsModal} from 'src/components/Account/AccountDetailsModal';

interface AccountActionsProps {
	id: string;
}

export const AccountActions = React.memo(({id}: AccountActionsProps) => {
	const [modalStatus, setModalStatus] = useState<boolean>(false);

	const handleDetails = useCallback((): void => {
		console.log('show details in modal');
		setModalStatus(true);
	}, []);

	return (
		<>
			<AccActions>
				<FakeLink onClick={() => handleDetails()}>Details</FakeLink>
				<AccActionLink to={`/transactions/${id}`}>Transactions</AccActionLink>
			</AccActions>
			<AccountDetailsModal
				status={modalStatus}
				setStatus={(status: boolean) => setModalStatus(status)}
			/>
		</>
	);
});
