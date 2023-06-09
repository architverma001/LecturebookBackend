const Razorpay = require('razorpay');
const crypto = require('crypto');


module.exports.orders = (req,res)=>{
    var instance = new Razorpay({ key_id: 'rzp_test_ED1PrWcomjc9mw', key_secret: 'Sz6HYuRoy0izqDrzhVX5ygFu' })
    var options = {
        amount: req.body.amount*100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
        };
     instance.orders.create(options, function(err, order) {
    if(err){
        return res.send({ code: 200, msg: "Success-signature valid" });
    }
        return res.send({code:200,msg:"Success",data:order})
      

        });


  
}

module.exports.verify = (req,res)=>{
  
        let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
          
          var expectedSignature = crypto.createHmac('sha256','Sz6HYuRoy0izqDrzhVX5ygFu')
                                        .update(body.toString())
                                          .digest('hex');
                                         
         
      
          if(expectedSignature === req.body.response.razorpay_signature)
          {
            res.send(code=200,msg="Success-signature valid");
          }
          else{
            res.send(code=500,msg="Failure-signature invalid");
          }
            
         
      
}