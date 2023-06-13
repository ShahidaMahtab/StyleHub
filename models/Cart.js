const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  // {
  //   user: {
  //     type: mongoose.Types.ObjectId,
  //     ref: "User",
  //     required: true,
  //   },
  //   products: {
  //     type: mongoose.Types.ObjectId,
  //     ref: "Products",
  //     required: true,
  //   },
  // },
  // { timestamps: true }
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Please provide product name"],
      maxlength: [100, "Name can not be more than 100 characters"],
    },
    // image: {
    //   type: String,
    //   default: "/uploads/example.jpeg",
    // },
    price: {
      type: Number,
      required: [true, "Please provide product price"],
      default: 0,
    },
    color: {
      type: [String],
      required: true,
    },
    size: {
      type: [String],

      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 15,
    },
    email: {
      type: String,
      required: true,
    },

    // user: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  { timestamps: true }
);

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);
