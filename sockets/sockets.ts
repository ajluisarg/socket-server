import { Socket } from "socket.io";
import { UserList} from '../class/user-list';
import { User } from "../class/user";

export const connectedUsers = new UserList();


export const disconnect = (socket: Socket) => {
    socket.on('disconnect', () => {
        console.log('disconnected');
        connectedUsers.deleteUser(socket.id);
    })
}

export const receibeMessage = (socket: Socket, io: SocketIO.Server) => {
    socket.on('message', (payload) => {
        console.log(`message received ${payload.body}`);
        io.emit('newMessage', payload);
    })
}

export const configUser = (socket: Socket) => {
    socket.on('config-user', (payload, callback: Function) => {
        console.log(`config-user ${payload.name}`);
        connectedUsers.updateName(socket.id, payload.name);
        callback({
            ok: true
        })
    })
}

export const connectUser = (socket: Socket) =>{
    const user = new User(socket.id);
    connectedUsers.addUser(user);
}