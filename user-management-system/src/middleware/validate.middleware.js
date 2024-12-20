const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            });
        }
        next();
    };
};

const schemas = {
    userRegister: Joi.object({
        username: Joi.string().required().min(3),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6)
    }),
    userLogin: Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required()
    })
};

module.exports = {
    validateRequest,
    schemas
};
