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
    fetch("https://api.dongmini.net/", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => alert('error', error));
}

var scan = () => {
    items = fetch("https://api.dongmini.net/scan")
        .then(response => response.json())
        .then(result => {
            body = JSON.parse(result.body);
            for (var post of body.Items.sort((a, b) => { return b.time - a.time })) {
                var div = document.createElement("div");
                div.className = "post"
                var text = document.createElement("span");
                text.className = "text"
                var text_text = document.createTextNode(post.text);
                var time = document.createElement("span");
                time.className = "time"
                var date = new Date(post.time * 1000);
                var time_text = document.createTextNode(date.toString().slice(0, 24));
                text.appendChild(text_text);
                time.appendChild(time_text);
                div.appendChild(text);
                div.append(time);
                document.body.appendChild(div);
            }
        })
        .catch(error => console.log("error", error));
}