const { MailtrapClient } = require("mailtrap");
const dotenv = require('dotenv');


dotenv.config();

const token = process.env.MAILTRAP_API_TOKEN;

// console.log(process.env.MAILTRAP_API_TOKEN);

exports.mailtrapClient = new MailtrapClient({
  token,
});

exports.sender = {
  email: "hello@demomailtrap.co",
  name: "Voz Media",
};
