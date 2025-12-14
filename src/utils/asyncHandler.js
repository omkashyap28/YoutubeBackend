// try catch syntax
function asyncHandler(func) {
  return async function (req, res, next) {
    try {
      await func(req, res, next);
    } catch (error) {
      res.send(error.code || 500).json({
        seccess: false,
        message: error.message,
      });
    }
  };
}

// Promise syntax
function asyncHandler(func) {
  return function (req, res, next) {
    Promise
      .resolve(func(req, res, next))
      .reject((err) => next(err));
  };
}
