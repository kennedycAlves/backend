const express = require('express')
const { route } = require('./server')

module.exports = function(server){

    const router = express.Router()

    server.use('/api', router)


    const billingCycleSevice = require('../api/billiCycle/billingCycleService')

    billingCycleSevice.register(router, '/billingCycles')

    // router.route('/teste').get(function(req, res, next){
    //     res.send('funcionou')
    //     console.log('Funcionou')
    // })

    

}