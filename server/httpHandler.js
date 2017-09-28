exports.main = function(req, res) {
    const path = req.path
  res.write("Hello world, you requested " + path);
  res.end;
};