// import {getToken} from './auth';
const axios = require('axios');
module.exports = async function(context, mySbMsg) {
    try{
        context.log('JavaScript ServiceBus queue trigger function processed message', mySbMsg);
        // let token = await getToken(context);
        // context.log(token, "00000000000 token");
        const response = await axios.post('https://dream-nosoftware-499.my.salesforce.com/services/data/v25.0/sobjects/Contact/', {
            "FirstName":"Parth2",
            "LastName":"Agrawal2",
            "Email":"parthagrawaltest2@gmail.com",
            "Phone":"00998877667782"
        }, {headers: {
            Authorization: `Bearer 00D5h000008MFL8!ARwAQBrDEPkHpcAaLa7U0G1PvX19Vtlms_8TEQz5hzkPUaIfU.alUD9VFqe.wYRnyQxU3cnzKTpAYaC.gZYrDmbzjEk2MFDe`
        }});
    
        context.log(response.data, "------------------ response data")

    } catch(err){
        context.log('JavaScript ServiceBus queue trigger function processed message err', err);
    }
    // https://www.youtube.com/watch?v=nXRtJmcXScY&list=PLUGpDBDXjE931vW6uquJIOcaGaxAoP6gN&index=8
    // https://beautifuldawndesigns.net/easy-sketch-ideas-beginners-can-draw/
};