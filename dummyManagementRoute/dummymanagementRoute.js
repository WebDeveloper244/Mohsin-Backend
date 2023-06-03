const express = require('express');
const Router = express.Router()

// destruct
const {
    productController
} = require('../dummyManagementController/dummyManagementController');

Router.post('/productController',productController)

// crete   post
// read    get
// update  post
// delete  delete

// c create
// r read
// u update
// d delete

module.exports=Router; 