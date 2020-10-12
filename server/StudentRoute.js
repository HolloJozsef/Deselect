import express from 'express';
import Student from './student'
const router = express.Router();

router.get("/allStudents",async (req,res)=>{
    const student = await Student.find({});
    res.send(student);
})

router.post("/save",async (req,res)=>{
 const student=new Student({
        id:req.body.id,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age,
        nationality:req.body.nationality,
 });

 student.save().then(data=>{res.json(data)});
})
router.get("/create",async (req,res)=>{
    try{
        const student1=new Student({
            id:1,
            firstName:"John",
            lastName:'Doe',
            age:24,
            nationality:"English",
        });
        const student2=new Student({
            id:2,
            firstName:"Jan",
            lastName:'Dewaele',
            age:27,
            nationality:"Belgian"
        });
        const student3=new Student({
            id:3,
            firstName:"Jonathan",
            lastName:'Van Driessen',
            age:33,
            nationality:"Belgian"
        });
        const student4=new Student({
            id:4,
            firstName:"Anthony",
            lastName:'Lamot',
            age:30,
            nationality:"Belgian"
        });
        const student5=new Student({
            id:5,
            firstName:"Tim",
            lastName:'Ferris',
            age:36,
            nationality:"American"
        });
        const student6=new Student({
            id:6,
            firstName:"Melinda",
            lastName:'Gates',
            age:63,
            nationality:"American"
        });
        const student7=new Student({
            id:7,
            firstName:"Jan",
            lastName:'De Hollander',
            age:13,
            nationality:"Dutch"
        });
        const student8=new Student({
            id:8,
            firstName:"Maarten",
            lastName:'De Viendt',
            age:47,
            nationality:"Dutch"
        });
        const student9=new Student({
            id:5,
            firstName:"Furkan",
            lastName:'Kursun',
            age:23,
            nationality:"Turkish"
        });
        const newStudent=await student1.save();
        student2.save();
        student3.save();
        student4.save();
        student5.save();
        student6.save();
        student7.save();
        student8.save();
        student9.save();
        res.send(newStudent);
    }catch(error){
        res.send({msg:error.message});
    }
   
})


export default router;