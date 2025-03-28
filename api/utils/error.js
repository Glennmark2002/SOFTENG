export const middleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal servel error';
  return res.status(statusCode).json({
    success : false,
    message,
    statusCode
  })
}