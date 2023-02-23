const { User, Book } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("books").populate({
        path: "books",
      });
    },
    books: async () => {
      return await Book.find({});
    },
    books: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Book.find(params);
    },
  },
};

module.exports = resolvers;

//   Mutation: {                                         // reread on Mutation
//     createMatchup: async (parent, args) => {
//       const matchup = await Matchup.create(args);
//       return matchup;
//     },
//     createVote: async (parent, { _id, techNum }) => {
//       const vote = await Matchup.findOneAndUpdate(
//         { _id },
//         { $inc: { [`tech${techNum}_votes`]: 1 } },
//         { new: true }
//       );
//       return vote;
//     },
//   },
// };

// },
// books: async (parent, { _id }) => {
//   const params = _id ? { _id } : {};
//   return Book.find(params);
// },
// },
// };
