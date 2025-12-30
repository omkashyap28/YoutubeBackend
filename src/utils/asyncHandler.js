function asyncHandler(func) {
  return function (req, res, next) {
    Promise.resolve(func(req, res, next)).reject((err) => next(err));
  };
}

module.exports = asyncHandler;
