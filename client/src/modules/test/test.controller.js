const TestController = {};

const ENV = import.meta.env;

//https://localhost:8081/adj-api
const API_URL = 'https://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}/${ENV.VITE_API_BASE}';

TestController.callToAPI = async () => {
    await fetch('${API_URL}/test', {
        method: 'GET', 
        headers: {'Accept':'application/json'

        }
    }).then(res => res.json()).then(res => 
        {console.log(res);}
    ).catch(console.log);
}

export default TestController;