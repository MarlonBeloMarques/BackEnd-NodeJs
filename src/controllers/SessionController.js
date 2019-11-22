const User = require('../models/User');

//index, show, update, destroy

module.exports = {
    async store(req, res) { //criar uma sessão
        const { email } = req.body;
        let user = await User.findOne({ email });

        if (!user) {
            const user = await User.create({ email });
        }
        
        return res.json(user);
    }
};