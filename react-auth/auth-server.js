// auth-server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Mock user data
const users = [
  { username: 'theo', password: 'password1', user: 'Theo' },
  { username: 'alex123', password: 'password2', user: 'Alex' },
];

// Authentication endpoint: POST /login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  // Generate authentication token
  const token = generateToken(user);
  res.json({ token, user: user.user });
});

function generateToken(user) {
  return `generated-token-for-${user.username}`;
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
