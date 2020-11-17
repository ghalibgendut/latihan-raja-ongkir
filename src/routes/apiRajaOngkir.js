const express = require('express')
const router = express.Router()
const axios = require('axios')

// Config Default Axios
axios.defaults.baseURL = process.env.BASEURL
axios.defaults.headers.common['key'] = process.env.API_KEY
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// Route Get Province
router.get(`/provinsi`, (req, res)=>{
    axios.get(`/province`)
        .then(response => res.json(response.data))
        .catch(err => res.send(err))
})

// Get City by provinceId
router.get(`/kota/:id`, (req, res)=>{
    const id = req.params.id
    axios.get(`/city?province=${id}`)
        .then(response => res.json(response.data))
        .catch(err => res.send(err))
})

// asal = id Kota asal, tujuan = id kota tujuan, berat = satuan berat dalam gram, kurir = string jne, pos, tiki
router.get(`/ongkos/:asal/:tujuan/:berat/:kurir`, (req,res)=>{
    const param = req.params
    axios.post(`/cost`, {
        origin: param.asal,
        destination: param.tujuan,
        weight: param.berat,
        courier: param.kurir
    })
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
})




module.exports = router