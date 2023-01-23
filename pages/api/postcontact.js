import * as fs from 'node:fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
      let data = await fs.promises.readdir('contactdata');
      fs.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body),()=>{});
      res.status(200).json(["done"]);
    } else {
      // Handle any other HTTP method
      res.status(500).json(["allBlogs"]);
    }
  }