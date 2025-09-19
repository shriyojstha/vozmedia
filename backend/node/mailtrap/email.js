// const { MailtrapClient } = require("mailtrap");
const { mailtrapClient, sender } = require("./mailtrap.config");
const { VERIFICATION_EMAIL_TEMPLATE } = require("./emailTemplate");

exports.sendVerificationEmail = async (email, token) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", token),
      category: "Email Verification",
    });
  } catch (error) {
    console.error(error);
    throw new Error(`${error}`);
  }
};

exports.sendWelcomeEmail = async (email, username) => {
  const recipient = [{ email }];
  console.log(email, username, { email });
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "1d771323-309e-454a-a221-221c5c6aa0a1",
      template_variables: {
        company_info_name: "voz media",
        name: username,
        company_info_address: "Inacho, Bhaktapur",
        company_info_city: "Bhaktapur",
        company_info_zip_code: "44800",
        company_info_country: "Nepal",
      },
    });

  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
