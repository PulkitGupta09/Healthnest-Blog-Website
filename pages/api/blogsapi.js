
import * as fs from 'node:fs';
export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata");
  // res.status(200).json(data);
  let allBlogs = [];
  let myfile;
  // ***********forEach function cant able to await because of certain limitation so use traditional for loop instead.************
  // data.forEach(async (item)=>{
  //       // console.log(item);
  //       myfile = await fs.promises.readFile(('blogdata/' + item),'utf-8');
  //       allBlogs.push(JSON.parse(myfile));    
  //     })
  // *****************************************************************************************************************************
  for (let index = 0; index < data.length; index++) {
    myfile = await fs.promises.readFile(('blogdata/' + data[index]),'utf-8')
          allBlogs.push(JSON.parse(myfile));    
      }
      res.status(200).json(allBlogs);

  // fs.promise.readdir("blogdata",'utf-8',(err,data)=>{
  //   console.log(data);
  //   let allBlogs = [];
  //   data.forEach((item)=>{
  //     console.log(item)
  //     fs.readFile(('blogdata/' + item),(err,data)=>{
  //       allBlogs.push(data);
  //     })
  //   })
  // })
}
