getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log("请求css成功");

            const style = document.createElement('style');
            style.innerHTML = request.response;
            document.head.appendChild(style);
        }
    };
    request.send();
};

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js');
    request.onreadystatechange = () => {

        if (request.readyState === 4 && request.status === 200) {
            console.log("请求JS成功");

            const script = document.createElement('script');
            script.innerHTML = request.response;
            document.body.appendChild(script);
        }
    }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html');
    request.onreadystatechange = () => {

        if (request.readyState === 4 && request.status === 200) {
            console.log("请求HTML成功");

            const div = document.createElement('div');
            div.innerHTML = request.response;
            document.body.appendChild(div);
        }
    }
    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log("请求XML成功");

            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
        }
    }
    request.send();
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {

        if (request.readyState === 4 && request.status === 200) {
            console.log("请求JSON成功");

            const object = JSON.parse(request.response);
            myName.textContent = object.name;
        }
    }
    request.send();
}