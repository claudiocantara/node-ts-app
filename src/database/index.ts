import { connect, connection } from "mongoose";

export default (db: string) => {
  const initCon = () => {
    connect(
      db, 
      { useNewUrlParser: true,
        useUnifiedTopology: true
      }
      ) 
      .then(() => console.log('Mongo Connected'))
      .catch((error) => {
        console.log(error);
        return process.exit(1);
      })
  }

  initCon();

  connection.on('disconnected',  initCon);

}