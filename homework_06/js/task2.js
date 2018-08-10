const getIpAdressButton = document.getElementById('get-ip-adress');
const container = document.getElementById('container');
const validateResponseButton = document.createElement('button');
const loader = document.createElement('img');
loader.setAttribute('src', 'https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif');
let dataObj = {};


const getIpInfo = () => {
    hideInfo();
    showInfo(loader);
    let ipAdress = document.getElementById('ip-adress').value;

    if(!validateIpAdress(ipAdress)) {
        document.getElementById('ip-adress').value = '';
        hideInfo();
        generateInfo(`Ip adress ${ipAdress} is not valid`);
        return;
    }
    
    http.get(`https://ipapi.co/${ipAdress}/json`)
        .then((dataStr) => {
            dataObj = JSON.parse(dataStr);
            hideInfo();
            showInfo(generateTable(dataObj));
        })
        .catch((error) => {
            hideInfo();
            generateInfo(`${error}`);
        });
}

const validateIpInfo = () => {
    hideInfo();
    showInfo(loader);
    http.post('https://shrouded-garden-94580.herokuapp.com/', JSON.stringify(dataObj))
        .then((response) => {
            hideInfo();
            generateInfo(response);
            document.getElementById('ip-adress').value = '';
            validateResponseButton.removeEventListener('click', validateIpInfo);
        })
        .catch((error) => {
            hide();
            generateInfo(`${error}`);
        });
}

const validateIpAdress = (adress) => {
    return	 (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(adress));
}

const generateTable = (data) => {

    const table = document.createElement('table');
    for(let key in data) {
        const tr = document.createElement('tr');
        const firstTd = document.createElement('td');
        const secondTd = document.createElement('td');
        firstTd.innerText = key.replace(/_/g, ' ');
        secondTd.innerText = data[key];
        tr.appendChild(firstTd);
        tr.appendChild(secondTd);
        table.appendChild(tr);
    }

    validateResponseButton.innerText = 'Validate Response';
    table.appendChild(validateResponseButton);
    validateResponseButton.addEventListener('click', validateIpInfo);

    return table;
}

const generateInfo = (message) => {
    let p = document.createElement('p');
    p.innerText = message;
    showInfo(p);
}

const showInfo = (item) => {
    container.appendChild(item);
}

const hideInfo = () => {
    container.innerHTML = '';
}

getIpAdressButton.addEventListener('click', getIpInfo);
