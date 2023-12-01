const mongoose = require("mongoose");
const { Schema } = mongoose;

const jokesSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    setup: {
      type: String,
      required: true,
    },
    punchline: {
      type: String,
      required: true,
    }
    
  },
  {
    timestamps: true,
  }
);

const jokes = mongoose.model("jokes", jokesSchema);

jokes.createIndexes().catch((error) => {
  console.error("Error creating indexes:", error);
});

module.exports = jokes;