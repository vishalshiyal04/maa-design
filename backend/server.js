const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (This creates the maa-embroidery database locally)
const MONGO_URI = "mongodb://127.0.0.1:27017/maa-embroidery";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Successfully!"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Define the Mongoose Schema for the Form
const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);

// Basic Health Check Route
app.get("/api/health", (req, res) => {
  res.json({ message: "Maa Embroidery API is running securely." });
});

// The POST Route to handle contact form submissions
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const newInquiry = new Inquiry({ name, email, phone, message });
    await newInquiry.save();

    console.log("New message received from:", name);
    res
      .status(201)
      .json({ success: true, message: "Inquiry saved successfully" });
  } catch (error) {
    console.error("Error saving inquiry:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
