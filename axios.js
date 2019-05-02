const axios = require('axios');
//Promise ES6
//axios.get(" http://localhost:4000/users")
//    .then(
//        resp => {
//            data = resp.data;
//            data.map(e =>{
//                console.log(`${e.first_name},${e.last_name},${e.email}`);
//            });
//        })
//    .catch(
//        error =>{
//            console.log(error);
//        });

//Async/Await ES7
(async()=>{
    try{
        let resp = await axios.get('http://localhost:4000/users');
        resp.data.map(e=>{
            console.log(`${e.first_name},${e.last_name},${e.email}`);
        });
    }catch(error){
        console.log(error);
    }
})();