const mongoose = require("mongoose");

// Establish MongoDB connection
mongoose
  .connect("mongodb://0.0.0.0:27017/dummy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log("Could not connect to MongoDB = ", e);
  });

// Define User Schema
const userSchema = mongoose.Schema({
  _id: Number,
  email: String,
});

// Define BlogPost Schema
const blogPostSchema = mongoose.Schema(
  {
    title: String,
    authorId: Number,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Define virtual field `email` on BlogPost Schema
blogPostSchema.virtual("email", {
  ref: "User",
  localField: "authorId",
  foreignField: "_id",
  justOne: true,
});

// Compile User and BlogPost models
const User = mongoose.model("User", userSchema);
const BlogPost = mongoose.model("BlogPost", blogPostSchema);

// Function to initialize and interact with the database
async function main() {
  try {
    // Create a User document
    await User.create({ _id: 1, email: "test@gmail.com" });

    // Create a BlogPost document with authorId referencing the User
    await BlogPost.create({ title: "Introduction to Mongoose", authorId: 1 });

    // Find a BlogPost and populate the `email` virtual field
    const doc = await BlogPost.findOne().populate("email");

    // Access the email directly from the populated virtual field
    console.log(doc.email); // 'test@gmail.com'
    console.log(doc.title); // 'Introduction to Mongoose'

    console.log(doc);

    // Access the email directly on the BlogPost document (using virtual)
    console.log("Ram", doc.email); // 'test@gmail.com'

    // Close the database connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the main function to execute the code
main();
