export const regex = {
  integer: /^[0-9]+$/,
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /^[A-Za-z0-9]{5,12}$/,
};
