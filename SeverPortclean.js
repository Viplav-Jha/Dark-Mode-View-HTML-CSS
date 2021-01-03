 private purgeMyNode(()=>{
    const pw = "mypassword";
    const cmd ="echo "+pw+" | sudo -S lsof -i :"+(process.env.PORT)+" -sTCP:LISTEN | awk 'NR >1 {print $2}' |xargs kill -15";
    exec(cmd,(error,stdout,stderr) => {
        setTimeout(()=> {
            console.log('Begin starting server');
            callback();
        },1000);
        if(error) {
            console.log('No previous instance to clean');
            return;
        }
        if(stderr){
          
            console.log('No previous instance to clean');
            return;
        }
    console.log('No previous instance to clean')
      
    })  
});
