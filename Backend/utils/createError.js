const createError = (status, message) => {
  const error = new Error();
  error.status = status;
  error.message = message;

  console.log("Error: " + message);

  return error;
};

export default createError;
