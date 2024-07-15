const mongoose = require("mongoose");
const Document = require("./Model/Document");
const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // Define a port for your Express server

connectToMongo();
app.use(cors());
app.use(express.json());

// Import and use routes
app.use('/api/auth', require('./Routes/auth'));

// Start the Express server
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});

// Initialize Socket.io
const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const defaultValue = "";

io.on("connection", (socket) => {
  socket.on("get-document", async (documentId) => {
    const document = await findOrCreateDocument(documentId);
    if (!document) return;

    socket.join(documentId);
    socket.emit("load-document", document.data);

    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("save-document", async (data) => {
      await Document.findByIdAndUpdate(documentId, { data });
    });
  });

  socket.on("disconnect", () => {
    socket.removeAllListeners();
  });
});

async function findOrCreateDocument(id) {
  if (id == null) return null;

  const document = await Document.findById(id);
  if (document) return document;
  return await Document.create({ _id: id, data: defaultValue });
}
