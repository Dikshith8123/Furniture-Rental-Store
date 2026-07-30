const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://rdik2687_db_user:dikshith8123@cluster0.ydt2rfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();