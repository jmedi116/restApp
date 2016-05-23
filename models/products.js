var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema-> how are going to export the info
var productSchema=new mongoose.Schema({
  name:String,
  sku:String,
  price: Number
});

module.exports=restful.model('Products', productSchema);
