import axios from "axios"; 

const getUsers=()=>{
    return new Promise(async(resolve,reject)=>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
    });
};
const getPost=(post_id)=>{
    return new Promise(async(resolve,reject)=>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
 
        resolve(data);
    });
};


Promise.all([getUsers(),getPost(1)]).then(console.log).catch(console.log);