let prom1=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("not done")
    }
    else{
        
        setTimeout(()=>{
            console.log('done 1');
            resolve("done")
        },2000)
    }

    
}
)

prom1.then((data)=>console.log(data)).catch((err)=>console.log(err))