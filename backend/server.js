const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const Post = require("./models/Post");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Simple CORS local testing ke liye
app.use(cors());
app.use(express.json());

// DATABASE CONNECTION
const MONGO_URI = process.env.MONGO_URI;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Successfully!"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ADMIN LOGIN
app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body;
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "2h" });
    res
      .status(200)
      .json({ success: true, token, message: "Login Successful!" });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Invalid Email or Password!" });
  }
});

// 1. INQUIRY SYSTEM
const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: "Pending" },
});
const Inquiry = mongoose.model("Inquiry", inquirySchema);

app.get("/api/health", (req, res) => res.json({ message: "API running." }));

app.post("/api/contact", async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    await newInquiry.save();
    res.status(201).json({ success: true, message: "Saved" });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

app.get("/api/inquiries", async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

app.patch("/api/inquiries/:id/status", async (req, res) => {
  try {
    await Inquiry.findByIdAndUpdate(req.params.id, { status: req.body.status });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

app.delete("/api/inquiries/:id", async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

// 2. BLOG SYSTEM
app.post("/api/blogs", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json({ success: true, post: newPost });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

app.get("/api/blogs", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

app.put("/api/blogs/:id", async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, post: updated });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

app.delete("/api/blogs/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

// 3. GALLERY SYSTEM
const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const GalleryItem = mongoose.model("Gallery", gallerySchema);

app.post("/api/gallery", async (req, res) => {
  try {
    const newItem = new GalleryItem(req.body);
    await newItem.save();
    res.status(201).json({ success: true, item: newItem });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding image" });
  }
});

app.get("/api/gallery", async (req, res) => {
  try {
    const items = await GalleryItem.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching images" });
  }
});

app.delete("/api/gallery/:id", async (req, res) => {
  try {
    await GalleryItem.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Image deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting image" });
  }
});

app.put("/api/gallery/:id", async (req, res) => {
  try {
    const updatedItem = await GalleryItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(200).json({ success: true, item: updatedItem });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating image" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
