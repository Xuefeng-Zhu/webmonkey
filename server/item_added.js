var Firebase = require("firebase");

var ref = new Firebase("https://webmonkey.firebaseio.com");

ref.on("child_added", function(dataSnapshot){
	console.log("Welcome to Webmonkey, " + dataSnapshot.val());
});