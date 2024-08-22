/*
Example Use:
If you call validateForm("John", "john123", "john@example.com", "1234567890"), it will return:

valid: true (all fields are correct)
invalid: { name: false, username: false, email: false, mobile: false } (no invalid fields)
If you call validateForm("", "john123", "john@example", "123"), it will return:

valid: false (some fields are incorrect)
invalid: { name: true, username: false, email: true, mobile: true } (name is missing, and email and mobile are incorrectly formatted)


*/
const validateForm = (name, username, email, mobile,checkbox) => {
  
  let valid = true;
  let invalid = {
    name: false,
    username: false,
    email: false,
    mobile: false,
    checkbox:false,
  };

  if (!name || !username || !email || !mobile || !checkbox) {
    console.log(checkbox)
    valid = false;
    invalid = {
      name: !name,
      username: !username,
      email: !email,
      mobile: !mobile,
      checkbox:!checkbox
    };
  }
  // test checks the email and phone are formated/same structure or not
  const emailRegEx =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const mobileRegEx = /^\d{10}$/;

  if (!emailRegEx.test(email) || !mobileRegEx.test(mobile)) {
    invalid = {
      ...invalid,
      email: !emailRegEx.test(email),
      mobile: !mobileRegEx.test(mobile),
    };
    valid = false;
  }
  return {
    valid,
    invalid,
  };
};
export default validateForm;
