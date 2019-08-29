import {Router, Request, Response} from 'express';
import Server from '../class/server';

const router = Router();
const server = Server.instance;

router.get('/messages', (req: Request, res: Response)=>{
    res.json({
        ok: true
    })
})

router.post('/messages', (req: Request, res: Response)=>{

    const {text: body, user: from} = req.body;
    server.io.emit('newMessage', {body, from});

    res.json({
        ok: true,
        body,
        from
    })
})

router.post('/messages/:id', (req: Request, res: Response)=>{

    const {text: content, user} = req.body;
    const {id} = req.params;


    console.log('emit private message');
    
    server.io.in(id).emit('privateMessage', {content, user});

    res.json({
        ok: true,
        content,
        user,
        id
    })
})

export default router;