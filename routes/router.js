var express_1 = require('express');
var router = express_1.Router();
router.get('/messages', function (req, res) {
    res.json({
        ok: true
    });
});
router.post('/messages', function (req, res) {
    var _a = req.body, content = _a.text, user = _a.user;
    res.json({
        ok: true,
        content: content,
        user: user
    });
});
router.post('/messages/:id', function (req, res) {
    var _a = req.body, content = _a.text, user = _a.user;
    var id = req.params.id;
    res.json({
        ok: true,
        content: content,
        user: user,
        id: id
    });
});
exports["default"] = router;
