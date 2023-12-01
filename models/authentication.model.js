const mongoose = require("mongoose");
const { Schema } = mongoose;

const authSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    tokens: [
      {
        type: String,
        unique: true
      }
    ],
    subscribed: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: true
  }
);

const auth = mongoose.model("users", authSchema);

auth.createIndexes().catch((error) => {
  console.error("Error creating indexes:", error);
});

module.exports = auth;