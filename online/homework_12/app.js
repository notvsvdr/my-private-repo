function createThumbnails(tanks) {
  var thumbnails = document.createElement('div');
  thumbnails.id = 'thumbnails';

  var heading = document.createElement('h1');
  heading.innerHTML = 'Most popular tanks';
  thumbnails.appendChild(heading);

  tanks.forEach(tank => {
    var tankThumbnail = document.createElement('div');
    tankThumbnail.innerHTML = `<img class="tank-image" src="${tank.preview}">
                               <p><img class="country-image" src="${tank.country_image}">
                               <span> <span class="level">${tank.level}</span> ${tank.model}</span></p>`;

    tankThumbnail.addEventListener('click', function () {
      location.hash = tank.model.split(' ').join('_');
    });

    thumbnails.appendChild(tankThumbnail);
  });

  root.appendChild(thumbnails);
}

function createDetails(tanks) {
  var tankDetails = document.createElement('div');
  tankDetails.id = 'tank-details';
  var currHash = location.hash.split('_').join(' ').slice(1);

  tanks.forEach(function (tank) {
    if (currHash === tank.model) {
      var heading = document.createElement('h1');
      heading.innerHTML = `<img src="${tank.country_image}"> <span>${tank.model}</span> (<span class="level-lowercase">level</span> ${tank.level})`;
      tankDetails.appendChild(heading);

      var preview = document.createElement('div');
      preview.innerHTML = `<h2>Preview</h2><img src="${tank.preview}">`;
      tankDetails.appendChild(preview);

      var table = document.createElement('table');
      var tableCaption = document.createElement('caption');
      tableCaption.innerHTML = 'Characteristic';
      table.appendChild(tableCaption);

      for (var key in tank.details) {
        var row = document.createElement('tr');
        var validString = key.replace(new RegExp('_', 'g'), ' ');
        row.innerHTML = `<td class="characteristic">${validString}</td><td>${tank.details[key]}</td>`;
        table.appendChild(row);
      }

      tankDetails.appendChild(table);
      var backToList = document.createElement('a');
      backToList.innerHTML = 'Back to list view';
      backToList.setAttribute('href', '#');
      preview.appendChild(backToList);
    }

  });
  root.appendChild(tankDetails);
}


var root = document.getElementById('root');
window.onhashchange = hashChanged;

hashChanged();

function hashChanged() {
  if (root.hasChildNodes()) {
    root.removeChild(root.firstChild);
  }

  if (location.hash === '') {
    createThumbnails(tanks);
  } else {
    createDetails(tanks);
  }
}
