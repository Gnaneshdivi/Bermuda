var router = require('express').Router();


router.use('/auth', require('./Authentation/auth'));
router.use('/project', require('./projects/project'));
router.use('/profile', require('./profile/profile'));
router.use('/dashboard', require('./dashboard/dashbaord'));
router.use('/dashboard', require('./data/data'));

module.exports = router;