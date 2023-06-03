const express = require('express');
const app = express();

const PORT = process.env.port||4800;

const dummyManagement = require('./dummyManagementRoute/dummymanagementRoute')

app.use('/dummyManagement',dummyManagement)








app.listen(PORT, ()=>{
    console.log(`My server is running on this ${PORT}`);
})



