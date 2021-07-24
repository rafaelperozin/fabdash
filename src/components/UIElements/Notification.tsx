import {
	faCheckCircle,
	faExclamationTriangle,
	faLightbulb,
	faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import {useMemo} from 'react';

import {
	NotificationIcon,
	NotificationText,
	NotificationTitle,
	NotificationWrap,
} from 'src/components/UIElements/notifications.style';

export interface NotificationProps {
	type: 'TIP' | 'WARNING' | 'ERROR' | 'SUCCESS';
	children: string;
}

export const Notification = ({type, children}: NotificationProps) => {
	const faIcon = useMemo(() => {
		switch (type) {
			case 'TIP':
				return faLightbulb;
			case 'WARNING':
				return faExclamationTriangle;
			case 'ERROR':
				return faTimesCircle;
			case 'SUCCESS':
				return faCheckCircle;
		}
	}, [type]);

	return (
		<NotificationWrap type={type}>
			<NotificationIcon type={type} icon={faIcon} />
			<NotificationTitle type={type}>{`${type}:`}</NotificationTitle>
			<NotificationText type={type}>{children}</NotificationText>
		</NotificationWrap>
	);
};
