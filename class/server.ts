import express from 'express';
import { SERVER_PORT } from '../global/enviroment';
import socketIO from 'socket.io';
import http from 'http';

import * as socket from '../sockets/sockets'

export default class Server{
     public app: express.Application;
     public port: number;
     public io: socketIO.Server;

     private httpServer: http.Server;

     private static _instance: Server;

     private constructor(){
         this.app = express();
         this.port = SERVER_PORT;
         this.httpServer = new http.Server(this.app);
         this.io = socketIO(this.httpServer);
         this.listenSockets();
     }

     public static get instance(){
        return this._instance || (this._instance = new this())
     }

     public start(callback: ()=>void){
         this.httpServer.listen(this.port, callback);
     }


     private listenSockets(){
         console.log('listening socket connections');
         this.io.on('connection', client =>{
             console.log(`client ${client.id} connected`);

             socket.connectUser(client);
             socket.configUser(client);
             socket.disconnect(client);
             socket.receibeMessage(client, this.io);
         })
     }
}