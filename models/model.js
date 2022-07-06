const mongoose = require("mongoose");
const validator = require("validator");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Ismingizni kiritishingiz shart"],
    minLength: 2,
    maxLength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Emailingizni kiriting"],
    unique: [true, "Bunday email allaqachon ro'yhatdan o'tilgan"],
    lowerCase: true,
    validate: {
      validator: function (val) {
        return validator.isEmail(this.email);
      },
      message: "Email xato",
    },
  },
  password: {
    type: String,
    required: [true, "Parol kiriting"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Mos parol kiriting"],
    select: false,
    validate: {
      validator: function (val) {
        return this.password === val;
      },
      message: "Moslikda xato",
    },
  },
});

const Schema1 = mongoose.model("collection1", schema);

module.exports = Schema1;
