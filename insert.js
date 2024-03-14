const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            {name:'Vikram', Brand:'Samsung Lover', DeviceWorth:106000},
            {name:'Aryan', Brand:'New Samsung ka 14', DeviceWorth:61000},
            {name:'Ayush', Brand:'Samsung Lody', DeviceWorth:48000},
            {name:'Soumya', Brand:'Apple ka 14', DeviceWorth:74000},
            {name:'Bablu', Brand:'Gareebi ka 14', DeviceWorth:0}
        ]
    );   
    if(result.acknowledged){
        console.log("data inserted")
    }
}

insert();