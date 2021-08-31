
const restfull = require('node-restful')

const mongoose = restfull.mongoose



const credidSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: [true, 'Valor Requerido' ]}
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required:  [true, 'Valor Requerido' ] },
    status: { type: String, required: false, uppercase: true,
    enum:['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: {type: Number, min:1, max:12, required: [true, 'Valor Requerido' ]},
    year: {type:Number, min: 1970, max: 2100, required:  [true, 'Valor Requerido' ]},
    credits:[credidSchema],
    debts:[debtSchema]
})

module.exports = restfull.model('BilliCycle', billingCycleSchema)