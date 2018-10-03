const MongoClient = require('mongodb').MongoClient;
const dbname='mydb'
MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true},(err,dbb)=>
{
  if(err)
  {
    console.log('eror occured',err);
  }
  else {
    const db= dbb.db(dbname);
    console.log('connection succesfull');
    //  this was for insert.......
//   db.collection('Todos').insertOne(
//     {
//     name: 'kaushik',
//     age:20,
//     marks:95
//     }
//   ,(err,res)=>
// {
//   if(err)
//   {
//     console.log('error occur while inserting  : ',err);
//   }
//   else {
//     console.log(JSON.stringify(res.ops,null,2));
//   }
// });
//
// db.collection('Todos').insertMany(
//   [{
//   name: 'karan',
//   age:25,
//   marks:20
// },{name: 'raidu',
// age:22,
// marks:22}]
// ,(err,res)=>
// {
// if(err)
// {
//   console.log('error occur while inserting  : ',err);
// }
// else {
//   console.log(JSON.stringify(res.ops,null,2));
// }
// });




// db.collection('Todos').find({name:'kaushik'}).toArray().then((docs)=>{
//   console.log(docs);
// });

// db.collection('Todos').find({marks:{$gt: 94, $lt:96}}).toArray().then((docs)=>{
//   console.log(docs);
// });

//find returns cursor (which is basically a pointer) to the docs that satisy the query ...toArray load all the docs pointed by cursor in an array

// db.collection('Todos').find().sort({marks:1}).toArray().then((docs)=>
// {
//   console.log(docs[docs.length-1]);
// });
// --> gives marks in sorted order ..

// db.collection('Todos').find().sort({marks:1}).count().then((docs)=>
// {
//   console.log(docs);
// });


// db.collection('Todos').find().sort({marks:1}).limit(1).toArray().then((docs)=>
// {
//   console.log(docs);
// });
// --> it gives the lowest marks student data

// db.collection('Todos').deleteOne({name:'kaushik'}).then((res)=>
// {
//   console.log(res);
// });

//
// db.collection('Todos').findOneAndDelete({name:'kaushik'}).then((res)=>
// {
//   console.log(res);
// });


//  ||-> update part..........

// db.collection('Todos').findOneAndUpdate(
//   {name:'raidu'},
//  {
//    $inc:{
//    marks :25
//  }
// },
// {
//   returnOriginal:false
// }
//
// ).then((res)=>
// {
//   console.log(res);
// });



// NOW SOME AGGREGATION AND GROUPBY.......

// db.collection('Todos').aggregate(
//   [
//     {$group :{_id:"$name",totmarks:{$sum:"$marks"}}}
//   ]
// ).toArray().then((res)=>
// {
//   console.log(res);
// });

 // this will do group by name..&will sum the marks of one name ..
//

// var yy=new Promise((response,request)=>{db.collection('Todos').find().sort({marks:1}).limit(1).toArray().then((docs)=>
//  {
//   response(docs[0].marks);
//   //console.log(typeof docs[0].marks);
//  })});


 //
 // db.collection('Todos').deleteOne({marks:yy.then((res)=>{return res;})});


 //console.log(yy.marks);
//  var mm;
//   yy.then((res)=>
// {
// console.log(typeof res);
// mm=res;
// });
// console.log(mm);


// db.collection('Todos').aggregate(
//   [
//    {$group:{_id:null,sal:{$max:"$marks"}}}
//
//   ]
// ).toArray().then((res)=>console.log(res));
// gives person withn max marks...

// db.collection('Todos').findOneAndDelete(
//   {name:{$regex:'.'}},
//   {sort:{"marks":1}}
// ).then((res)=>
// {
//   console.log(res);
// });
// deletes the person with lowest marks... name:$regex:'.' --> name may be anything
    dbb.close();



  }
});
