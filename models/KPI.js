import mongoose from "mongoose";

import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema
loadType(mongoose)

const daySchema = new Schema(
    {
        day: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100,
        },

        expensess: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100,
        },

    

   
    },
    { toJSON: {getters: true}}
   

)

const monthSchema = new Schema(
    {
        month: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100,
        },

        expensess: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100,
        },

        operationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100,
        },

        nonOperationExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100,
        },
    },
    { toJSON: {getters: true}}
)

const KPISchema = new Schema(
    {
        totalProfit:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100,

        },


        totalRevenue:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100,

        },

        totalExpenses:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100,

        },


        expenseByCategory:{
            type: Map,
            of: {
                type: mongoose.Types.Currency,
                currency: "USD",
                get: (v) => v/100
            }
        

        },

        monthlyData: [monthSchema],
        dailyData: [daySchema]
    },
    {timestamps: true, toJSON:{getters:true
    }}

);

const KPI = mongoose.model("KPI", KPISchema)

export default KPI