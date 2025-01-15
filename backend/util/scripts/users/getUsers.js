import mongoose from 'mongoose'
// import config from '../../config/index.js'
import User from '../../../models/user.model.js'

const MONGO_URI = 'mongodb://localhost:27017/twitter-clone-01'

async function getUsers () {
  // Connect to the Mongo Database.
//   mongoose.Promise = global.Promise
//   mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(MONGO_URI)

//   const users = await User.find({}, '-password')
const users = await User.find({})
  console.log(`users: ${JSON.stringify(users, null, 2)}`)

  mongoose.connection.close()
}
getUsers()
