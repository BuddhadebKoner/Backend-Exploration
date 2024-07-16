const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

// add Yours 
/*
const ACCESS_TOKEN_SECRET = '';
const REFRESH_TOKEN_SECRET = '';
const ACCESS_TOKEN_EXPIRES = '7d';
const REFRESH_TOKEN_EXPIRES = '30d';
*/ 

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));

const users = {
  user1: { password: 'password1' },
  user2: { password: 'password2' }
};

const refreshTokens = {};

const generateAccessToken = (user) => {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRES });
};

const generateRefreshToken = (user) => {
  const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRES });
  refreshTokens[refreshToken] = user.username;
  return refreshToken;
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

  if (user && user.password === password) {
    const accessToken = generateAccessToken({ username });
    const refreshToken = generateRefreshToken({ username });

    res.cookie('accessToken', accessToken, { httpOnly: true });
    res.cookie('refreshToken', refreshToken, { httpOnly: true });
    res.json({ accessToken, refreshToken });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.post('/token', (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken || !refreshTokens[refreshToken]) {
    return res.status(403).send('Refresh token is not valid');
  }

  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).send('Invalid refresh token');

    const newAccessToken = generateAccessToken({ username: user.username });
    res.cookie('accessToken', newAccessToken, { httpOnly: true });
    res.json({ accessToken: newAccessToken });
  });
});

const authenticateToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) return res.sendStatus(401);

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.get('/user', authenticateToken, (req, res) => {
  res.json({ username: req.user.username });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
