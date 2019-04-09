"use strict";

(function () {
    fetch("proxy.php?url=http://api.namnapi.se/v2/names.json?gender=both&type=firstname&limit=3")
    .then(function (response) {
        return response.json();
    }).then(function(result) {
        console.log(result);
    });
})();
