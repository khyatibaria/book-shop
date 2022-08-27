export const isValid = (value) => {
  if (value.length > 0 || value === "undefined" || value === null) {
    return false;
  } else {
    return true;
  }
};

export const passwordValidation = (value) => {
  if (value.length >= 6) {
    return false;
  } else {
    return true;
  }
};
