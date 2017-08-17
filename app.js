const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Hi');
	var apn = require('apn');

	var options = {
		token: {
		key: 'AuthKey_WV97FAUVT3.p8',
		keyId: 'WV97FAUVT3',
		teamId: '23EFP3FERN'
		},
		production: false
	};

var apnProvider = new apn.Provider(options);

let deviceToken = 'DC93EA6E671105011E641D2C81AA621EBAA4BC0B96F0722D649712303F33E940'

var note = new apn.Notification();

note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now. 
note.badge = 3;
	note.sound = "ping.aiff";
	note.alert = "KimDadong";
	note.payload = {'messageFrom': 'John Appleseed'};
note.topic = "com.Sohn.CocoaBaby";

apnProvider.send(note, deviceToken).then( (result) => {
		// see documentation for an explanation of result 
		console.log(result)
		});
})

app.listen(3000, () => console.log('Server running on port 3000!'))
