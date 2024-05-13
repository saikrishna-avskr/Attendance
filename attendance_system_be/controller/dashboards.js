const router = require("express").Router();
const ProfessorModel = require("../models/Professor");
var MongoClient = require('mongoclient');
var url = "mongodb://localhost:27017";

router.get('/viewSubjectClasses', (req, res) => {
    ProfessorModel.findOne(req.query)
        .then(professor => {
            responseObject = {
                subjects: [],
                isClass
            }
        })
        .catch(err => {

        })
})

router.get('/viewProfessorDetails', (req, res) => {
    ProfessorModel.find({isHOD : false})
    .then(prof =>{
        return res.json({Status : true, professor : prof})
    })
    .catch(err=>{
        return res.json(err)
    })
})

module.exports = router;