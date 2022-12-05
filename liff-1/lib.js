function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var myliffId = "1657707255-WVxqmM35"; //getParameterByName('liffId')
liff.init({ liffId:  myliffId}, () => {
    if (!liff.isLoggedIn()) {liff.login();}

    setTimeout(() => {
      if (getParameterByName('type') == "text"){
        liff.sendMessages([
          {
            type: 'text',
            text: getParameterByName('text')
          }
        ])
        .then(() => {liff.closeWindow()})
        .catch((err) => {window.location = "/liffv2/error.html"})
      };

      if (getParameterByName('type') == "image"){
        liff.sendMessages([
          {
            type: 'image',
            originalContentUrl: getParameterByName('img'),
            previewImageUrl: getParameterByName('img')
          }
        ])
        .then(() => {liff.closeWindow()})
        .catch((err) => {window.location = "/liffv2/error.html"})
      };

      if (getParameterByName('type') == "video"){
        liff.sendMessages([
          {
            type: 'video',
            originalContentUrl: getParameterByName('ocu'),
            previewImageUrl: getParameterByName('piu')
          }
        ])
        .then(() => {liff.closeWindow()})
        .catch((err) => {window.location = "/liffv2/error.html"})
      };

      if (getParameterByName('type') == "audio"){
        liff.sendMessages([
          {
            type: 'audio',
            originalContentUrl: getParameterByName('link'),
            duration: 60000
          }
        ])
        .then(() => {liff.closeWindow()})
        .catch((err) => {window.location = "/liffv2/error.html"})
      };

    }, 1)


}, err => console.error(err.code, err.message));