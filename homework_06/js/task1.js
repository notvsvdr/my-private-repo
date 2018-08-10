const http = {
    get: (url) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = (error) => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.status);
                    }
                }
            }

            xhr.ontimeout = function () {
                reject('timeout');
            }
            xhr.open('GET', url, true);
            xhr.send();
        });
    },

    post: (url, requestBody) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = (error) => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.status);
                    }
                }
            }

            xhr.ontimeout = function () {
                reject('timeout');
            }

            xhr.open('POST', url, true);
            xhr.send(requestBody);
        });
    }
};