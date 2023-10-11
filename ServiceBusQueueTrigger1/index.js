// import {getToken} from './auth';
const axios = require('axios');
module.exports = async function(context, mySbMsg) {
    try{
        context.log('JavaScript ServiceBus queue trigger function processed message', mySbMsg);
        let token = await getToken();
        const response = await axios.post('https://dream-nosoftware-499.my.salesforce.com/services/data/v25.0/sobjects/Contact/', {
            "FirstName":"Parth",
            "LastName":"Agrawal",
            "Email":"parthagrawaltest@gmail.com",
            "Phone":"0099887766778"
        }, {headers: {
            Authorization: `Bearer ${token}`
        }});
    
        context.log(response.data, "------------------ response data")

    } catch(err){
        context.log('JavaScript ServiceBus queue trigger function processed message err', err);
    }
    // https://www.youtube.com/watch?v=nXRtJmcXScY&list=PLUGpDBDXjE931vW6uquJIOcaGaxAoP6gN&index=8
    // https://beautifuldawndesigns.net/easy-sketch-ideas-beginners-can-draw/
};