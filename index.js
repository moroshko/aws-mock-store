var uuid = require('node-uuid');
var store = {};

function create(object, cb) {
  var newObjectId = uuid.v1();

  store[newObjectId] = object;

  cb(null, newObjectId);
}

function get(objectId, cb) {
  cb(null, store[objectId]);
}

module.exports = {
  create: create,
  get: get
};
