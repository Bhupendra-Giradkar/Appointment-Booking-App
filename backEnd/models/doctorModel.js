import mongoose from "mongoose";
const doctorSchema= new mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    password: { type: String, require: true },
    image: { type: String, require: true },
    speciality: { type: String, require: true },
    degree: { type: String, require: true },
    experience: { type: String, require: true },
    about: { type: String, require: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, require: true },
    address: { type: Object, require: true },
    date: { type: Number, require: true },
    
    // when data created we get know when doctor slot avail/ unavail
    slots_booked: { type: Object, default:{} },
    // write minimize:false due to use empty object in default if true then we cant create doctor date with empty object
},{minimize:false})

// if model doctor avail use it if not create
const doctorModel=mongoose.models.doctor || mongoose.model('doctor',doctorSchema)

export default doctorModel
