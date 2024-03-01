
const { default: mongoose } = require('mongoose');
const utils = require('../helpers/utils');
const User = require('../models/user');

const addUser = async (request, reply) => {
  try {
    const userBody = request.body;

    userBody.fullName = utils.getFullName(userBody.firstName, userBody.lastName);
    delete userBody.firstName;
    delete userBody.lastName;

    const user = new User(userBody);
    const addedUser = await user.save();
    
    return addedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUsers = async (request, reply) => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getSingleUser = async (request, reply) => {
  try {
    const userId = request.params.id;
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
  }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteUser = async (request, reply) => {
  try {
 
    const userId = request.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      throw new Error('User not found');
    }

    return deletedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};






module.exports = {
  addUser,
  getUsers,
  getSingleUser,
  deleteUser,
};


// getUsers
// getSingleUser
// deleteUser

// bonus : validation, updateUser