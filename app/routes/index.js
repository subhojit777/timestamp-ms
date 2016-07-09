'use strict';

var path = process.cwd();
// http://stackoverflow.com/a/1643468/1233922
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

module.exports = function (app) {

  app.route('/').get(function(req, res) {
    res.sendFile(path + '/public/index.html');
  });

  app.route('/:date').get(function(req, res) {
    if (isNaN(req.params.date)) {
      var dateParts = req.params.date.split(' ');

      // Handle favicon.ico request.
      // https://gist.github.com/kentbrew/763822
      if (dateParts[0] === 'favicon.ico') {
        res.set('Content-Type', 'image/x-icon');
        res.status(200).end();
      }
      else {
        try {
          var date = new Date(Date.UTC(dateParts[2], monthNames.indexOf(dateParts[0]), dateParts[1].replace(',', '')));
          res.status(200).json({
            'unix': (date.getTime() / 1000).toString(),
            'natural': req.params.date
          });
        }
        catch (e) {
          res.status(200).send('Incorrect date format');
        }
      }
    }
    else {
      var date = new Date(req.params.date * 1000);
      res.status(200).json({
        'unix': req.params.date,
        'natural': monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
      });
    }
  });

};
