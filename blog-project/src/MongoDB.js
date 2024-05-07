const { MongoClient } = require('mongodb');

// Create a new MongoClient instance
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1, // Check compatibility with your server version
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Access the "test" database and "Blogs" collection
    const database = client.db("test");
    const collection = database.collection("Blogs");

    // Insert a blog post document
    const insertResult = await collection.insertOne({ title: "My First Blog Post", content: "Hello, world!" });
    console.log("Inserted blog post ID:", insertResult.insertedId);

    // Find blog posts
    const findResult = await collection.find({}).toArray();
    console.log("Found blog posts:", findResult);

    // // Update a blog post
    // const updateResult = await collection.updateOne({ title: "My First Blog Post" }, { $set: { content: "Updated content!" } });
    // console.log("Updated blog post count:", updateResult.modifiedCount);

    // Delete a blog post
    const deleteResult = await collection.deleteOne({ title: "My First Blog Post" });
    console.log("Deleted blog post count:", deleteResult.deletedCount);
  } catch (err) {
    console.error("Error performing MongoDB operations:", err);
  } finally {
    // Close the client connection when done
    await client.close();
  }
}

run().catch(console.error);
