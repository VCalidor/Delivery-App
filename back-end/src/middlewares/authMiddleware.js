const jwt = require('jsonwebtoken');
const fs = require('fs');
const { StatusCodes } = require('http-status-codes');
const { user } = require('../database/models');

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });

  try {
    const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');

    const decoded = jwt.verify(token, secret);
    
    const getUser = await user.findOne({ where: { email: decoded.email } });

    if (!user) return res.status(401).json({ message: 'Error to find user' });

    req.user = getUser;

    next();
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authMiddleware;