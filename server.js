import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import web from "./Routes/web.js"


const app = express()

app.use(cors());
app.use(express.json())



app.use(web);

app.use("*", (req, res) => res.status(400).json({error: "Page Not Found"}))

app.listen(4000, () => {
    console.log('listening at port 4000')
})

export default app
