import React from 'react';

import {Modal} from 'src/components/Modal/Modal';

interface AccountDetailsModalProps {
	status: boolean;
	setStatus: (status: boolean) => void;
}

export const AccountDetailsModal = React.memo(({status, setStatus}: AccountDetailsModalProps) => {
	return (
		<Modal open={status} onClose={() => setStatus(false)}>
			<h1>Aweosme Modal</h1>
			<p>
				We don't need to use modal here, but I added it to show how to handle modals using portals.
			</p>
		</Modal>
	);
});
