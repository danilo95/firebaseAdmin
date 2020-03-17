let error;
export const emailValidation = value => {
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? (error = "Invalid email address")
    : (error = false);
  return error;
};

export const required = value => {
  !value ? (error = "Required") : (error = false);
  return error;
};
