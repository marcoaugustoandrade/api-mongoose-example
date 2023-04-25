const handleValidationError = (err, req, res, next) => {
  
  if (err.name === 'ValidationError') {
    
    const errors = {};
    
    for (let field in err.errors) {
      errors[field] = err.errors[field].message;
    }
    res.status(422);
    res.send({ errors });
  } else {
    next(err);
  }
}

export default handleValidationError;