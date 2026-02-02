


function addSceneImage(width, parent, imgPath) {
    var vignetteContainer = document.getElementById(parent);
    var vignetteImage = document.createElement('img');
    vignetteImage.src = imgPath; // Path to your image
    vignetteImage.style.width = width; // Adjust width as needed
    vignetteImage.style.height = 'auto'; // Maintain aspect ratio
    vignetteImage.style.borderRadius = '10px'; // Optional: add some border radius
    vignetteImage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Optional: add some shadow
    vignetteImage.style.margin = '10px'; // Optional: add some margin
    vignetteImage.style.display = 'block'; // Center the image

    vignetteContainer.appendChild(vignetteImage);
    return vignetteImage;
}


function runPhaser(width, height, parent) {

    console.log('Phaser parameters:', window.MedievalScene, window.gameConfig);

    var config = {
        type: Phaser.AUTO,
        parent: parent,
        width: width,
        height: height,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false,
                tileBias: 8
            }
        },
        scene: window.MedievalScene,
        pixelArt: true,
        scale: {
            mode: Phaser.Scale.NONE,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        fps: { forceSetTimeOut: true, target: 30 },
        render: {
            preserveDrawingBuffer: true 
        },
    };
    
    return new Phaser.Game(config);
}


function vignetteToPhaser(vignette) {
    let strSplit = vignette.split('_');

    let characterChoices = [];

    let tables = 1
    let items;
    if (strSplit[0] == 'sim') {
        tables = 2;
        items = 'apple1-orange1-apple1-orange1';
        if (strSplit[1].slice(-1)[0] == 'A') {
            characterChoices.push('apple')
        } else {
            characterChoices.push('orange')
        }

        if (strSplit[2].slice(-1)[0] == 'A') {
            characterChoices.push('apple')
        } else {
            characterChoices.push('orange')
        }
    } else {
        if (strSplit[1].length == 3) {
            if (strSplit[1].includes('AA')) {
                items = 'apple1-apple1-orange1';
            } else {
                items = 'apple1-orange1-orange1';
            }
        } else if (strSplit[1].length == 4) {
            items = 'apple1-apple1-orange1-orange1';
        } else {
            items = 'apple1-orange1';
        }

        if (strSplit[2].slice(-1)[0] == 'A') {
            characterChoices.push('apple')
        } else {
            characterChoices.push('orange')
        }
        characterChoices.push('sitting')
    }

    let characters = `AB`
    let characterColors = ['red', 'green']
    if (strSplit.slice(-1)[0].includes('present')) {
        characters = 'ABC'
        characterColors.push('purple')
        characterChoices.push('sitting')
    }

    var sceneStr = `${tables}_${characters}_${items}`;

    return {
        sceneStr: sceneStr,
        characterChoices: characterChoices,
        characterColors: characterColors,
    }
    
}  