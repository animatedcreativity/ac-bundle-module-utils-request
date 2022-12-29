exports = module.exports = exports = module.exports = function() {
  var mod = {
    data: async function(request, prop) {
      if (!app.has(prop)) prop = "";
      var data = await request.text();
      try { var json = JSON.parse(data); } catch (error) {}
      if (app.has(json)) {
        if (app.has(prop)) return json[prop];
        return json;
      }
    }
  };
  return mod;
}