const errorHandling = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message;
  return res.status(statusCode).json(message);
};
export default errorHandling;
