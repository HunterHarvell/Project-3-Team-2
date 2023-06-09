const { GraphQLError } = require("graphql");
const { User, Expense, Income } = require("../models");
const { signToken } = require("../utils/auth");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const resolvers = {
  Query: {
    users: async () => {
      console.log("hitting user query");
      const users = await User.find();
      console.log({ users });
      return users;
    },
    singleUser: async (parent, args, context) => {
      if (context.user) {
        // const user = await User.findById("64162ceb3b60454e221a6bb3")
        const userIncome = await User.findById(context.user._id)
          .populate("income")
          .populate("expense");
        console.log("getting single user", {userIncome}, "Income", userIncome.income);
        return userIncome;
    }
      },
      // income: async () => {
        // if (context.user) {
          // const userIncome = await User.findById("64162ceb3b60454e221a6bb3")
    //       const userIncome = await User.findById(context.user._id)
    //         .populate("income")
    //         .populate("expense");
    //       console.log("getting single user", {userIncome}, "Income", userIncome.income);
    //       return userIncome.income;
    //   // }
    //     },
    // income: async () => {
    //   return await User.find().populate("income");
    // },
    // expense: async () => {
    //   return await Expense.find();
    // },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new GraphQLError("Incorrect credentials", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new GraphQLError("Incorrect credentials", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }

      const token = signToken(user);

      return { token, user };
    },

    addIncome: async (parent, { text, amount }, context) => {
      console.log("USER ID", context?.user?._id);
      if (context.user) {
        const addedIncome = new Income({ text, amount });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { income: addedIncome },
        });
        // await User.findByIdAndUpdate("6415f8a56678d1979032fac4", {
        //   $push: { income: addedIncome },
        // });
        console.log("ADDING INCOME", addedIncome);
        return addedIncome;
      }

      throw new GraphQLError("Not logged in!", {
        extensions: {
          code: "UNAUTHENTICATED",
        },
      });
    },
    addExpense: async (parent, { text, amount }, context) => {
      console.log(context);
      if (context.user) {
        const addedExpense = new Expense({ text, amount });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { expense: addedExpense },
        });

        return addedExpense;
      }

      throw new GraphQLError("Not logged in!", {
        extensions: {
          code: "UNAUTHENTICATED",
        },
      });
    },
    updateIncome: async (parent, { text, amount }) => {
      return await Income.findByIdAndUpdate(
        text,
        { $push: { income: amount } },
        { new: true }
      );
    },
    updateExpense: async (parent, { text, amount }) => {
      return await Expense.findByIdAndUpdate(
        text,
        { $push: { expense: amount } },
        { new: true }
      );
    },
    deleteIncome: async (parent, { text, amount }) => {
      return await Income.findByIdAndUpdate(
        text,
        { $pull: { income: amount } },
        { new: true }
      );
    },

    // deleteIncome: async (parent, { text }, context) => {
    //   if (context.user) {
    //     const deletedIncome = await Income.findOneAndDelete({
    //       text,
    //       income: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { income: deletedIncome._id } }
    //     );

    //     return deletedIncome;
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },

    deleteExpense: async (parent, { text, amount }) => {
      return await Expense.findByIdAndUpdate(
        text,
        { $pull: { expense: amount } },
        { new: true }
      );
    },
  },
};
module.exports = resolvers;
