import Model from "./Model.js"
export const saved=async(req,res)=>{
try{
    const form=new Model(req.body);
    await form.save();
    res.status(201).json({message:'connected true'})
}catch{
    res.status(500).json({message:'error'});
}
}
export const seen=async(req,res)=>{
try{
    const show= await Model.find().sort({_id:-1})
    res.json(show);
    
}catch{
    res.status(500).json({message:'error'});
}
}