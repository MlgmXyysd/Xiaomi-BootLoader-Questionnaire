
function http(method, url, data, headers, callback, failureCallback = null) {
    let httpRequest = new XMLHttpRequest();

    httpRequest.open(method, url, true);
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === httpRequest.DONE) {
            data = JSON.parse(httpRequest.response);
            if (httpRequest.status === 200) callback(data);
            else failureCallback?.(httpRequest.status, data);
        }
    }

    let key, value;

    if (headers != null) {
        for ([key, value] of headers) {
            httpRequest.setRequestHeader(key, value);
        }
    }

    httpRequest.send(data);
}

function httpPromise(method, url, data, headers) {
    return new Promise((resolve, reject) => {
        http(method, url, data, headers, (result) => {
                resolve(result);
            },
            (_code, data) => {
                reject(data);
            })
    });
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

  
function timeToString(time) {
    let minute = Math.floor(time / 60);
    let second = time % 60;
    return (minute < 10 ? "0" : "") + minute + ":" + (second < 10 ? "0" : "") + second;
}

function showImageDialog(headline, description, src) {
    mdui.dialog({
        headline,
        description,
        body: '<img src="' + src + '" style="max-width: 100%;">',
        actions: [{
            text: '关闭'
        }],
        closeOnOverlayClick: true
    });
}
