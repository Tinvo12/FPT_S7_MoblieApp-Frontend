import { io } from 'socket.io-client';
import { ENV } from '../config/env';

let socket;

export const initiateSocketConnection = (bookingId) => {
	socket = io(ENV.SOCKET_URL, {
		transports: ['websocket'],
	});
	console.log(`Connecting to socket...`);
	if (socket && bookingId) socket.emit('join_chat', bookingId);
};

export const disconnectSocket = () => {
	console.log('Disconnecting socket...');
	if (socket) socket.disconnect();
};

export const subscribeToChat = (cb) => {
	if (!socket) return(true);
	socket.on('receive_message', msg => {
		console.log('Websocket event received!');
		return cb(null, msg);
	});
};

export const sendMessage = (messageData) => {
	if (socket) socket.emit('send_message', messageData);
};
