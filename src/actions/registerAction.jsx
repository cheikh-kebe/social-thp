export const registerRequest = (loading) => {
  return {
    type: "REGISTER_REQUEST",
    loading
  };
};

export const registerSuccess = (username,email,password) => {
  return {
    type: "REGISTER_SUCCESS",
    username,
    email,
    password
  };
};

export const registerFailure = (error) => {
  return {
    type: "REGISTER_FAILURE",
    error,
  };
};
