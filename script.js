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
    items = fetch("https://jbrnbwq2kb.execute-api.ap-northeast-2.amazonaws.com/dev/scan")
        .then(response => response.json())
        .then(result => {
            body = JSON.parse(result.body);
            console.log(body.Items)
            for (var post of body.Items) {
                var div = document.createElement("div");
                div.className = "post"
                var text = document.createElement("span");
                text.className = "text"
                var text_text = document.createTextNode(post.text);
                var time = document.createElement("span");
                time.className = "time"
                var time_text = document.createTextNode(post.time);
                text.appendChild(text_text);
                time.appendChild(time_text);
                div.appendChild(text);
                div.append(time);
                document.body.appendChild(div);
            }
        })
        .catch(error => console.log("error", error));
}