import mongoose from "mongoose"


 const Connection = async(username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ordb4wf-shard-00-00.8eiyk1i.mongodb.net:27017,ac-ordb4wf-shard-00-01.8eiyk1i.mongodb.net:27017,ac-ordb4wf-shard-00-02.8eiyk1i.mongodb.net:27017/?ssl=true&replicaSet=atlas-h9e4z4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=SoftScript`;
        try {
       await mongoose.connect(URL, { 
     });
       console.log(`databse connected succesfully`)
    } catch (error) {
     console.log(`error while connecting`, error)
    }
}
export default Connection;