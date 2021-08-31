const billingCycle = require('./billingCycle')
const BillingCycle = require('./billingCycle')

//Cria os métodos abaixo automaticamante com base no mapeamento do arquivo billingCycle
BillingCycle.methods(['get', 'post', 'put', 'delete'])


//habilita o retorno do dado atulizado após um put e executa as valodoções do mapeamento 
billingCycle.updateOptions({new: true, runValidators:true})


module.exports = BillingCycle