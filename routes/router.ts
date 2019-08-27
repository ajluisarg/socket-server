import {Router, Request, Response} from 'express';

const router = Router();

router.get('/messages', (req: Request, res: Response)=>{
    res.json({
        ok: true
    })
})

router.post('/messages', (req: Request, res: Response)=>{

    const {text: content, user} = req.body;

    res.json({
        ok: true,
        content,
        user
    })
})

router.post('/messages/:id', (req: Request, res: Response)=>{

    const {text: content, user} = req.body;
    const {id} = req.params;
    res.json({
        ok: true,
        content,
        user,
        id
    })
})

export default router;