const { body } = require('express-validator')

exports.rules = (() => {
    return [
        body('account_name').notEmpty(),
        body('email').isEmail(),
        body('password').isLength({ min: 3 })
    ]
})()