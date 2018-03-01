var rootNode = document.getElementById('root');
checkHash();


function showTanksList(tanks) {

    while (rootNode.firstChild) {
        rootNode.removeChild(rootNode.firstChild);
    }

    let header = document.createElement('div');
    header.className = 'thumbnails-header';
    let h1 = document.createElement('h1');
    h1.innerHTML = "Most popular tanks";
    
    header.appendChild(h1);
    

    let contentWrapper = document.createElement('div');
    contentWrapper.className = 'thumbnails-content-wrapper';
    
    tanks.forEach(element => {
        
        let tankContainer = document.createElement('div');
        tankContainer.className = 'thumbnails-tank-container';
        let tankImg = document.createElement('img');
        tankImg.className = 'thumbnails-tank-img';
        tankImg.src = element.preview;

        tankContainer.appendChild(tankImg);
        
        let infoWrapper = document.createElement('div');
        infoWrapper.className = 'thumbnails-info-wrapper';

        let flagImg = document.createElement('img');
        flagImg.src = element.country_image;
        flagImg.setAttribute('title', element.country);
        let tankLvl = document.createElement('p');
        tankLvl.innerHTML = element.level;
        let model = document.createElement('p');
        model.innerHTML = element.model;
        model.className = "thumbnails-tank-model";
        model.setAttribute('title', element.model);
        model.style.cursor = 'pointer';
        infoWrapper.appendChild(flagImg);
        infoWrapper.appendChild(tankLvl);
        infoWrapper.appendChild(model);

        tankContainer.appendChild(infoWrapper);

        contentWrapper.appendChild(tankContainer);
        
        //ACTION
        tankContainer.addEventListener("click", function() {
            location.hash = element.model;
        });

    });

    rootNode.appendChild(header);
    rootNode.appendChild(contentWrapper);

}

function showTankDetail(tanks) { 
    let currentTank = tanks.find((tank) => {
        if(tank.model === location.hash.substr(1)) {
            return tank
        }
    });
    while (rootNode.firstChild) {
        rootNode.removeChild(rootNode.firstChild);
    }

    let header = document.createElement('div');
    header.className = "detail-header";

    let flagImg = document.createElement('img');
    flagImg.setAttribute('src', currentTank.country_image);
    flagImg.setAttribute('title', currentTank.country);

    let modelName = document.createElement('h1');
    modelName.className = "detail-tank-model";
    modelName.innerHTML = `${currentTank.model.toUpperCase()} (level ${currentTank.level})`;

    header.appendChild(flagImg);
    header.appendChild(modelName);

    contentWrapper = document.createElement('div');
    contentWrapper.className = 'detail-content-wrapper';

    let preview = document.createElement('div');
    preview.className = "detail-preview";
    let previewH = document.createElement('h2');
    previewH.innerHTML = "Preview";
    let tankImg = document.createElement('img');
    tankImg.setAttribute('src', currentTank.preview);

    let characteristic = document.createElement('div');
    characteristic.className = "detail-characteristic";
    let characteristicH = document.createElement('h2');
    characteristicH.innerHTML = "Characteristic";
    characteristic.appendChild(characteristicH);
    let detailTable = document.createElement('table');
    detailTable.border = 1;

    for (key in currentTank.details) {
        let tr = document.createElement('tr');
        let property = document.createElement('td');
        property.innerHTML = key.replace(/_/g, ' ');

        let value = document.createElement('td');
        value.innerHTML = currentTank.details[key];

        tr.appendChild(property);
        tr.appendChild(value);
        detailTable.appendChild(tr);
    }

    let goBackButton = document.createElement('h3');
    goBackButton.innerHTML = "Back to list view";
    goBackButton.className = "go-back-button";
    goBackButton.addEventListener("click", function() {
        location.hash = '';
    });

    preview.appendChild(previewH);
    preview.appendChild(tankImg);
    characteristic.appendChild(detailTable);
    contentWrapper.appendChild(preview);
    contentWrapper.appendChild(characteristic);

    rootNode.appendChild(header);
    rootNode.appendChild(contentWrapper);
    rootNode.appendChild(goBackButton);
}

window.onhashchange = checkHash;

function checkHash() {
    if (location.hash == '') {
        showTanksList(tanks);
    } else {
        showTankDetail(tanks);
    }
}