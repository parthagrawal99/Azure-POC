const axios = require('axios');
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('JavaScript HTTP trigger function processed a request.1');
    try{
        let res1 = await axios.get('https://cat-fact.herokuapp.com/facts/');
    
        let data = res1.data;
        context.log(data, "------------- data");
        const name = (req.query.name || (req.body && req.body.name));
        const responseMessage = name
            ? "Hello----------, " + name + ". This HTTP triggered function executed successfully."
            : "----------This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.-----------";
    
        context.res = {
            status: 200, /* Defaults to 200 */
            body: responseMessage,
            // test: "test"
            data: data
        };
    } catch(err){
        context.log(err, "this is the error");
        context.res = {
            status: 500, /* Defaults to 200 */
            // body: responseMessage,
            test: "test",
            // data: data,
            err:err
        };
    }
}