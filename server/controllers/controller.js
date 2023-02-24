import Gym from '../models/gyms.js'

//gym controllers
async function getGyms (req,res) {
    try {
        const gyms = await Gym.find()

        res.send(gyms) //expected: ARRAY [] of Gym documents
    } catch (error) { 
        console.log(error)
    }
}

async function submitGym (req,res) {

    const newgym = new Gym(
        {gymName: req.body.gymName,
        address: req.body.address
    })

    try {
        await newgym.save()
        Gym.find(function (err,gyms) {
          res.send(gyms) //expected: ARRAY of Gym documents 
                         //including the new gym
        })
    } catch (error) {
        console.log(error)
    }
}
// gym/pr controllers

async function getPrs (req,res) {
    const gym = req.params.gymName

    Gym.findOne({gymName: gym},function(err,foundGym) {
        try {
            res.send(foundGym.prs) //expected: ARRAY[] of pr objects from a Gym document with its 'gymName' = name
        } catch (error) {
            console.log(error)
        }
    })
}

async function submitPr(req,res) {
    const gym = req.params.gymName
    const {creator,lift,weight,reps} = req.body
    const updatePrs = {
        $push: {prs: {creator,lift,weight,reps}}
    }

    try {
        await Gym.findOneAndUpdate({gymName: gym},updatePrs,{new: true})
        
        Gym.findOne({gymName: gym},function(err,foundGym) {
            res.send(foundGym.prs) //expected: ARRAY[] of pr objects (including the pr just submitted) from a Gym document with its 'gymName' = name
        })
    } catch (error) {
        console.log(error)
    }
}

export {getGyms,submitGym,getPrs,submitPr}