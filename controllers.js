const {Books} = require('./schemas');

module.exports.insertbook = async(req,res)=>{
    const bk = new Books({
    email: req.body.email,
    password: req.body.password,
    })
    const book = await Books.findOne({email:(req.body.email)});
    if(book)
         return res.send({msg:"bookss exist in db"});
    const savedbks = await bk.save();
    res.send(savedbks);
}