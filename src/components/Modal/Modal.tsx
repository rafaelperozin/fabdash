import {faTimes} from '@fortawesome/free-solid-svg-icons';
import React, {ReactNode, useEffect, useRef} from 'react';
import ReactDom from 'react-dom';

import {ModalBackground, ModalBox, ModalClose} from 'src/components/Modal/modal.style';

export interface ModalProps {
	children: ReactNode;
	open: boolean;
	onClose: () => void;
}

export const Modal = ({children, open, onClose}: ModalProps) => {
	const modalContainer = useRef<HTMLElement>(document.getElementById('modal')!);

	useEffect(() => {
		open ? (document.body.className = 'modal-show') : document.body.classList.remove('modal-show');
	}, [open]);

	if (!open) return null;

	return ReactDom.createPortal(
		<div>
			<ModalBackground onClick={() => onClose()} />
			<ModalBox>
				<ModalClose icon={faTimes} onClick={() => onClose()} />
				<div>{children}</div>
			</ModalBox>
		</div>,
		modalContainer.current,
	);
};
