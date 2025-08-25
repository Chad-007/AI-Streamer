import  express from "express";  
import dotenv from "dotenv"
const app = express();
dotenv.config()
app.use(express.json());

// get the news first
app.get("/news",async (req:any,res:any)=>{
  const NEW_API = process.env.NEWS_API
  const response = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${NEW_API}`);
  const data:{articles :any[]} = await response.json()
  console.log(data)
  res.json({message:"fetched news",articles:data.articles})
});


app.listen(3000);


// hey there

