var callAPI = (text) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "text": text });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("https://jbrnbwq2kb.execute-api.ap-northeast-2.amazonaws.com/dev", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => alert('error', error));
}

var scan = () => {
    fetch("https://jbrnbwq2kb.execute-api.ap-northeast-2.amazonaws.com/dev/scan")
        .then(response => response.text())
        .then(result => console.log(JSON.parse(result).body))
        .catch(error => console.log("error", error));
}