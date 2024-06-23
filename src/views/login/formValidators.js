function validateUserName(rule, value, callback) {
  console.log("validateUsername");
  console.log("rule: ", rule, " value: ", value);
  if (value === "") callback(new Error("用户名必填"));
  else {
    callback();
  }
}
function validatePassword(rule, value, callback) {
  console.log("validatePassword");
  console.log("rule: ", rule, " value: ", value);
  if (value === "") callback(new Error("密码必填"));
  else {
    callback();
  }
}

export { validatePassword, validateUserName };
