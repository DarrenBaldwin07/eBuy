
// validate emails - only in helpers cuz might wanna use it more than once
export const valForm = (email) => {
    const validate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return validate.test(email);
};