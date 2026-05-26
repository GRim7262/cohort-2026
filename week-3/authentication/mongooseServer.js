const mongoose = require("mongoose");

mongoose.connect("")

const User = mongoose.model('Users', {
    name: String,
    email: String,
    password: String
})

const user = new User({
    name: "Vinal",
    email: "test@mail.com",
    password: "12jffd"
})

user.save()
    .then(() => console.log("User saved"))