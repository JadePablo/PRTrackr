import mongoose from 'mongoose'

const gymSchema = mongoose.Schema({
    gymName: String,
    address: String,
    prs: [{creator: String, lift: String, weight: Number, reps: Number, url: String}]
})

const Gym = mongoose.model('Gym',gymSchema)

export default Gym