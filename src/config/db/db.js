import mongoose from "mongoose";

const { MONGO_URI } = process.env;

function connect_to_database() {
  mongoose.connect(MONGO_URI);
  console.log(`database connected to ${MONGO_URI}`);
}

export default connect_to_database;
