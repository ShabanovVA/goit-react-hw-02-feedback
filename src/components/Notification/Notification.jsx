import PropTypes from 'prop-types'
import { NotificationMsg } from './Notification.styled';

export const Notification = ({ message }) => {
    return <NotificationMsg>{message}</NotificationMsg>
}

Notification.propTypes = {
    message: PropTypes.string,
};