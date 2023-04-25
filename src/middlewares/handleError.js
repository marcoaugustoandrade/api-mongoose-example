const handleError = (err, req, res, next) => {
  
  // ToDo: adicionar nos logs
  console.error(err.stack);
  res.status(500);
  res.send({ mensagem: 'Ocorreu um erro no servidor' });
};

export default handleError;