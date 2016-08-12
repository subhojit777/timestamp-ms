# Timestamp Microservice
You can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

## Usage
https://subhojit777-timestampms.herokuapp.com/1467504000 returns
```json
{"unix":"1467504000","natural":"July 3, 2016"}
```

[https://subhojit777-timestampms.herokuapp.com/July 3, 2016](https://subhojit777-timestampms.herokuapp.com/July%203,%202016) returns
```json
{"unix":"1467504000","natural":"July 3, 2016"}
```

## Demo
https://subhojit777-timestampms.herokuapp.com

P.S. [Clementime.js](http://www.clementinejs.com) boilerplate has been used.
