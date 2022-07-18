  function controllerHandler(controllers) {
  return async (req, res, next) => {
    try {
      await controllers(req, res, next);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'internal servor error'});
    }
  };
}
module.exports = controllerHandler;