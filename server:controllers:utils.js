exports.collectData = function (request, callback) {
  var data = '';

  request.on('data', function(chunk) {
    data += chunk;
  })

  request.on('end', function() {
    calback(JSON.parse(data));
  })
}