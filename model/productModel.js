const mongoose = require('mongoose');



const productSchema = mongoose.Schema({
    userId : String,
    name: String,
    description: String,
    category: {
        type: String,
        enum: ["Clothing", "Electronics", "Furniture", "Other"]
    },
    image: String,
    location: String,
    postedAt: Date,
    price: Number
}, {
    versionKey: false
})



const productModel = mongoose.model('product', productSchema);


module.exports = { productModel };