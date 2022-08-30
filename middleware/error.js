const { CustomApiError } = require("../customError/customError");
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).send({ msg: err.message });
  }
  return res.status(500).send("{ msg: err }");
};
module.exports = errorHandler;
