"use strict";

(function () {
    var url = encodeURIComponent("http://api.namnapi.se/v2/names.json?gender=both&type=firstname&limit=3");

    fetch(url)
    .then(function (response) {
        return response.json();
    }).then(function(result) {
        console.log(result);
    }).catch(function() {
        console.error("Couldn't connect due to CORS");
    });

    fetch("proxy.php?url=" + url)
    .then(function (response) {
        return response.json();
    }).then(function(result) {
        console.log("With proxy: ", result);
    });

    fetch("http://www.student.bth.se/~efostud/api-proxy/proxy.php?url=" + url)
    .then(function (response) {
        return response.json();
    }).then(function(result) {
        console.log("With proxy: ", result);
    });
})();
