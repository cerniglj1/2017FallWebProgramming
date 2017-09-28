exports.main = function(req, res) {
    const path = req.url;
  res.write("Hello world, you requested " + path);
  res.end;
};