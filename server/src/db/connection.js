import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("conected to database");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default dbConnection;
