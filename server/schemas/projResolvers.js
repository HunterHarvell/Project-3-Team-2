const { GraphQLError } = require("graphql");
const { User, Expenses, Income } = require("../models");
const { signToken } = require("../utils/auth");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const resolvers = {
  Query: {
    user: async () => {
      return await User.find();
    },
    income: async () => {
      return await Income.find();
    },
    expense: async () => {
      return await Expenses.find();
    },
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

    addIncome: async (parent, { amount }, context) => {
      console.log(context);
      if (context.user) {
        const addedIncome = new Order({ amount });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { income: addedIncome },
        });

        return addedIncome;
      }

      throw new GraphQLError("Not logged in!", {
        extensions: {
          code: "UNAUTHENTICATED",
        },
      });
    },
    addexpense: async (parent, { amount }, context) => {
      console.log(context);
      if (context.user) {
        const addedExpense = new Income({ amount });

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
      return await Expenses.findByIdAndUpdate(
        text,
        { $push: { expense: amount } },
        { new: true }
      );
    },
  },
};
