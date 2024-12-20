const formatResponse = (success, data = null, message = '') => {
    return {
        success,
        data,
        message
    };
};

const sanitizeUser = (user) => {
    const { password, __v, ...sanitizedUser } = user.toObject();
    return sanitizedUser;
};

const generateRandomString = (length = 10) => {
    return Math.random().toString(36).substring(2, length + 2);
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const handleError = (error) => {
    if (error.code === 11000) {
        return 'Duplicate entry found';
    }
    return error.message || 'Internal server error';
};

module.exports = {
    formatResponse,
    sanitizeUser,
    generateRandomString,
    validateEmail,
    handleError
};
