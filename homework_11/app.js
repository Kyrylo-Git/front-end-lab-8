var doc = document;

var rootNode = doc.getElementById("root");

var parrentContainer = doc.createElement('ul');
createTree(structure, parrentContainer);

rootNode.appendChild(parrentContainer);

function folderAction() {
    var icon = this.firstChild.innerHTML;
    if(icon === "folder") {
        this.firstChild.innerHTML = "folder_open";
    } else {
        this.firstChild.innerHTML = "folder";
    }

    var nextElement = this.nextElementSibling.style.display;
    if(nextElement === "none") {
        this.nextElementSibling.style.display = "block";
    } else {
        this.nextElementSibling.style.display = "none";
    }
}

function createTree(structure, parrentContainer) {

    structure.forEach(function (obj) {
        var container = doc.createElement('li');
        var wrapper = doc.createElement('p');
        var icon = doc.createElement('i');
        icon.className = "material-icons";
        var title = doc.createElement('span');

        if (obj.folder) {
            icon.innerHTML = "folder";
            icon.className = "material-icons folder"
            wrapper.addEventListener("click", folderAction);
        } else {
            icon.innerHTML = "insert_drive_file";
            icon.className = "material-icons file";
        }

        title.innerHTML = obj.title;
        wrapper.appendChild(icon);
        wrapper.appendChild(title);
        container.appendChild(wrapper);

        parrentContainer.appendChild(container);

        if (obj.folder && !obj.children) {

            var emptyFolder = doc.createElement('ul');
            var liWithText = doc.createElement('li');
            var text = doc.createElement('p');
            text.className = "emptyFolderText";

            text.innerHTML = "Folder is empty";
            text.style.fontStyle = "italic";

            emptyFolder.appendChild(text);

            emptyFolder.appendChild(liWithText);
            emptyFolder.style.display = "none";
            
            container.appendChild(emptyFolder);

        }

        if (obj.children) {
            var childrenUl = doc.createElement('ul');
            container.appendChild(childrenUl);
            childrenUl.style.display = "none";
            createTree(obj.children, childrenUl);
        }
    });
}
