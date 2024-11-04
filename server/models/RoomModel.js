const mongoose = require("mongoose");



const roomSchema = new mongoose.Schema({
     users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
     }],
     messages: [{
      messageId: {
         type: mongoose.Schema.Types.ObjectId,
         default: mongoose.Types.ObjectId(),
      },
      senderId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      time: {
            type: Date,
            default: Date.now()
      }
     }]
});