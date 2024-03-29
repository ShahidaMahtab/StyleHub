const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			trim: true,
			required: [true, 'Please provide product name'],
			maxlength: [100, 'Name can not be more than 100 characters'],
		},
		price: {
			type: String,
			required: [true, 'Please provide product price'],
		},
		// description: {
		//   type: String,
		//   required: [true, "Please provide product description"],
		//   maxlength: [1000, "Description can not be more than 1000 characters"],
		// },
		image: {
			type: String,
			default: '/uploads/example.jpeg',
		},
		category: {
			type: String,
			required: [true, 'Please provide product category'],
			enum: ['men', 'women', 'leatherGoods', 'jewelry'],
		},
		subcategory: {
			type: String,
			required: [true, 'Please provide product sub category'],
		},
		color: {
			type: [String],
			default: ['red', 'black', 'blue'],
			required: true,
		},
		size: {
			type: [String],
			default: ['s', 'm', 'l', 'xl'],
			required: true,
		},

		quantity: {
			type: Number,
			required: true,
			default: 15,
		},

		// user: {
		//   type: mongoose.Types.ObjectId,
		//   ref: "User",
		//   required: true,
		// },
	},
	{ timestamps: true }
);

export default mongoose.models.Products ||
	mongoose.model('Products', ProductSchema);
