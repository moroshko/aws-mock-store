### Usage

Run `npm install`, and you are ready to go.

###### Set up

    var mockStore = require('aws-mock-store');

###### Store object

    mockStore.create(myObject, function(err, createdObjectId) {
      if (err) {
        console.log(err);
      } else {
        console.log("Randomly generated unique object id: ", createdObjectId);
      }
    });
    
###### Get object

    mockStore.get(objectId, function(err, object) {
      if (err) {
        console.log(err);
      } else {
        console.log("Retrieved object: ", object);
      }
    });
