const { User } = require('./models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate('savedBooks');
    },
    user: async (_, { username }) => {
      return await User.findOne({ username }).populate('savedBooks');
    },
  },
  Mutation: {
    createUser: async (_, { username, email, password }) => {
      if (!/.+@.+\..+/.test(email)) {
        throw new Error('Must use a valid email address');
      }
      return await User.create({ username, email, password });
    },
  },
};

module.exports = resolvers;
