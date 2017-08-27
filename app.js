const express = require('express')
const app = express()

// app.get('/', (req, res) => {
// 	var apn = require('apn');

// 	var options = {
// 		token: {
// 			key: 'AuthKey_WV97FAUVT3.p8',
// 			keyId: 'WV97FAUVT3',
// 			teamId: '23EFP3FERN'
// 		},
// 		production: false
// 	};

// 	var apnProvider = new apn.Provider(options);

// 	let deviceToken = 'DC93EA6E671105011E641D2C81AA621EBAA4BC0B96F0722D649712303F33E940'

// 	var note = new apn.Notification();

// 	note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now. 
// 	note.badge = 1;
// 	note.sound = "ping.aiff";
// 	note.alert = "New diary from mom";
// 	note.payload = {'messageFrom': 'John Appleseed'};
// 	note.topic = "com.Sohn.CocoaBaby";

// 	apnProvider.send(note, deviceToken).then( (result) => {
// 		// see documentation for an explanation of result 
// 		console.log(result)
// 	});
// })

app.get('/notification/diary/:token', (req, res) => {
	var apn = require('apn');

	var options = {
		token: {
			key: 'AuthKey_B3LMY59MP4.p8',
			keyId: 'B3LMY59MP4',
			teamId: '87BH34CAP6'
		},
		production: true
	};

	var apnProvider = new apn.Provider(options);

	let deviceToken = req.params.token

	var note = new apn.Notification();

	note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now. 
	note.badge = 1;
	note.sound = "ping.aiff";
	note.alert = "New diary from mommy";
	// note.payload = {'messageFrom': 'John Appleseed'};
	note.topic = "com.Sohn.CocoaBaby";

	apnProvider.send(note, deviceToken).then( (result) => {
		// see documentation for an explanation of result 
		res.send('Success');
		console.log(result)
	});
})

app.get('/notification/comment/:token', (req, res) => {
	var apn = require('apn');

	var options = {
		token: {
			key: 'AuthKey_B3LMY59MP4.p8',
			keyId: 'B3LMY59MP4',
			teamId: '87BH34CAP6'
		},
		production: true
	};

	var apnProvider = new apn.Provider(options);

	let deviceToken = req.params.token

	var note = new apn.Notification();

	note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now. 
	note.badge = 1;
	note.sound = "ping.aiff";
	note.alert = "New comment from dad";
	// note.payload = {'messageFrom': 'John Appleseed'};
	note.topic = "com.Sohn.CocoaBaby";
	
	apnProvider.send(note, deviceToken).then( (result) => {
		// see documentation for an explanation of result 
		res.send('Success');
		console.log(result)
	});
})

app.listen(8080, () => console.log('Server running on port 8080!'))
