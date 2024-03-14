const dbConnect = require('./mongodb');

const updateData = async ()=>{
    let data = await dbConnect();
    let result = await data .updateMany(
        {name:'Bablu'},{
            $set: {name: 'Khatra'}
        }
    )
    console.log(result)
}

updateData();