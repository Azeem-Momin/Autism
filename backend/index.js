const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoutes');


const app = express();

// Middlewares to parse JSON and form data
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  

// Connect to MongoDB
async function connectDb() {
  try {
    await mongoose.connect("mongodb://localhost:27017/autism");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
}
connectDb();

app.use("/", userRouter);


// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// app.post('/register', async (req, res) => {
//   console.log(req.body);
//   const { username, email, password } = req.body;
//   try {
//       const user = new UserModel({ username, email, password }); 
//       await user.save();
//       return res.status(201).send({ message: 'User created successfully!' });
//   } catch (error) {
//       console.error(error); 
//       return res.status(500).send({ message: 'Something went wrong' });
//   }
// });

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//       const user = await UserModel.findOne({ email });
//       if (user && (await bcrypt.compare(password, user.password))) {
//           return res.send({ message: 'Login successful' });
//       } else {
//           return res.status(400).send({ message: 'Invalid credentials' });
//       }
//   } catch (error) {
//       console.error(error);
//       return res.status(500).send({ message: 'Something went wrong' });
//   }
// });



app.listen(3000, () => {
  console.log('Server is running on 3000');
});
