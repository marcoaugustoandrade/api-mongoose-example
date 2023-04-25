const handleNotFound = (req, res) => {
  res.status(404);
  res.send({ message: 'Endpoint not found' });
}

export default handleNotFound;