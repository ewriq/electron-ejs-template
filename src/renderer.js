document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../config.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var config = JSON.parse(xhr.responseText);
      var port = config.port;

      window.location.href = "http://localhost:" + port;
    }
  };
  xhr.send();
});
