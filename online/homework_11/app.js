var rootNode = document.getElementById('root');
var treeView = document.createElement('ul');

function setEventListeners() {

  var paragraphs = document.querySelectorAll('.forListener');

  for (var elem of paragraphs) {
    elem.addEventListener('click', function () {

      if (this.parentElement.className === 'folder') {
        if (this.nextElementSibling.style.display === 'none') {
          this.nextElementSibling.style.display = 'block';
          this.firstElementChild.innerHTML = 'folder_open';
        } else {
          this.nextElementSibling.style.display = 'none';
          this.firstElementChild.innerHTML = 'folder';
        }
      }
    });
  }
}

function checkStructure(arr, prevDir) {

  for (let i = 0; i < arr.length; i++) {

    var newDir = document.createElement('ul');
    var listItem = document.createElement('li');
    var paragraph = document.createElement('p');
    var span = document.createElement('span');
    var icon = document.createElement('i');

    icon.className = 'material-icons';
    icon.innerHTML = 'insert_drive_file';
    newDir.style.display = 'none';
    span.innerHTML = arr[i].title;
    listItem.className = 'file';
    paragraph.className = 'forListener';

    paragraph.appendChild(icon);
    paragraph.appendChild(span);
    listItem.appendChild(paragraph);

    prevDir.appendChild(listItem);

    if (arr[i].folder) {
      listItem.className = 'folder';
      icon.innerHTML = 'folder';

      if (arr[i].children) {
        listItem.appendChild(newDir);
        checkStructure(arr[i].children, newDir);
      } else {
        paragraph = document.createElement('p');
        paragraph.className = 'italic';
        paragraph.innerHTML = 'Folder is empty';
        paragraph.style.display = 'none';
        listItem.appendChild(paragraph);
      }
    }
  }
}

checkStructure(structure, treeView);
rootNode.appendChild(treeView);
setEventListeners();