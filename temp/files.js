const fs = require('fs');


// reading file
// fs.readFile('../docs/blog.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log(data.toString());
//     }
// });


//writing file
// fs.writeFile('../docs/blog1.txt','File is written from nodejs', (err)=>{
//     if(err){
//         console.log(err);
//     }
// });


//directories
// if(!fs.existsSync('../assets')){
//     fs.mkdir('../assets', (err)=>{
//         if(err){
//             console.log(err);
//         } else{
//             console.log('Folder created.')
//         }
//     });    
// } else {
//     fs.rmdir('../assets', (err)=>{
//         if(err){
//             console.log(err);
//         } else {
//             console.log('Folder deleted.');
//         }
//     });
// }


//deleting files
