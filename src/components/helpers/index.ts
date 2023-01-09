export const slisedName = (text: string): string => {
  let sliced = text.slice(0, 8);
  if (sliced.length < text.length) {
    sliced += '...';
  }
  return sliced;
};

export const signinValidation = (
  email: string,
  password: string,
  setIsErrorEmail: any,
  setIsValid: any
): void => {
  const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

  if (email) {
    emailValid ? setIsErrorEmail(false) : setIsErrorEmail(true);
  }

  emailValid && password.length > 3 ? setIsValid(true) : setIsValid(false);
};

export const signupValidation = (
  email: string,
  fullName: string,
  password: string,
  setIsErrorEmail: any,
  setIsErrorFullName: any,
  setIsErrorPassword: any,
  setIsValid: any
): void => {
  const minLengthFullName = fullName.length > 3;
  const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  const passwordValid = password.match(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/
  );

  minLengthFullName && emailValid && passwordValid
    ? setIsValid(true)
    : setIsValid(false);

  if (fullName) {
    minLengthFullName ? setIsErrorFullName(false) : setIsErrorFullName(true);
  }
  if (email) {
    emailValid ? setIsErrorEmail(false) : setIsErrorEmail(true);
  }
  if (password) {
    passwordValid ? setIsErrorPassword(false) : setIsErrorPassword(true);
  }
};
