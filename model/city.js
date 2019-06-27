const express = require('express');
const router = express.Router();
const axios = require('axios');
var APIkey = "0df6d5bf733214af6c6644eb8717c92c";


router.get('/kota/all', function(req,res){
    axios.get("https://api.rajaongkir.com/starter/city",{
        headers:{
            key:APIkey
        },
        // params:{
        //     id:req.params.id
        // }
    }).then((response)=>{
        res.status(200).json(response.data.rajaongkir.results);
})
})
router.get('/kota/:province/', function(req,res){
    axios.get("https://api.rajaongkir.com/starter/city",{
        headers:{
            key:APIkey
        },
        params:{
            province:req.params.province
        }
    }).then((response)=>{
        res.status(200).json(response.data.rajaongkir.results);
})
})



module.exports = router