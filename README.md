# api-proxy

To solve problems with CORS (Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing).)

## Usage

Send the troubling URL as a url-encoded string in the url GET param.

```javascript
var url = encodeURIComponent("http://example.com/index.php?firstname=Emil&lastname=Folino");

fetch("proxy.php?url=" + url)
.then(function (response) {
    return response.json();
}).then(function(result) {
    console.log("With proxy: ", result);
});
```

### Deployed

The script is deployed at BTH's studentserver: [http://www.student.bth.se/~efostud/api-proxy/proxy.php](http://www.student.bth.se/~efostud/api-proxy/proxy.php)

```javascript
var url = encodeURIComponent("http://example.com/index.php?firstname=Emil&lastname=Folino");

fetch("http://www.student.bth.se/~efostud/api-proxy/proxy.php?url=" + url)
.then(function (response) {
    return response.json();
}).then(function(result) {
    console.log("With proxy: ", result);
});
```
