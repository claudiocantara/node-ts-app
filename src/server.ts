import 'dotenv/config';
import express, { Express } from "express"
import cors from "cors";
import bodyParser from "body-parser";
import mongoInstance from "./database";
import RoutesRoot from './routes'

const app: Express = express();

const PORT: string | number  = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',  RoutesRoot.initRoutes())

app.use(cors());
mongoInstance('testemongodb+srv://claudiocantara:p02zon5gNM8v7cwZ@cluster0.f9sbs.mongodb.net/teste?retryWrites=true&w=majority')

app.listen(PORT, () => {
  console.log(`Lisnten at port ${PORT}, have fun!`)
})

