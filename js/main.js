let folderLevel = 0;
let folderNumber = 0;
let fileIcon = `fa-file-lines`;

let docMove = true;

function upDown() {
    switch (folderLevel) {
        case 1:
            docMove = true;
            createMatters()
            folderLevel = 0 //step back
            break;
        case 2:
            docMove = true;
            $('#bread-crumb').children().last().remove();
            createMattersDetails()
            folderLevel = 1 //step back
            break;
        case 3:
            docMove = false;
            $('#bread-crumb').children().last().remove();
            createLevel1();
            folderLevel = 2 //step back
            break;
        case 4:
            docMove = false;
            $('#bread-crumb').children().last().remove();
            createLevel2();
            folderLevel = 3 //step back
            break;
        default:
            break;
    }
}

function toggleNewFolderLitebox(){
    $('#new-folder-panel').toggle();
}

function toggleFileLitebox(){
    $('#upload-file-panel').toggle();
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
      let data = {
          name:$(ev.target).text(),
          value:$(ev.target).attr('value')
      }
    ev.dataTransfer.setData("text",JSON.stringify(data));
  }
  
  function drop(ev) {
    ev.preventDefault();
    let fName = ev.dataTransfer.getData("text");
    let fProp = JSON.parse(fName);
    toggleFileLitebox();
    $('#fileName').val(fProp.name);
    fileIcon = fProp.value;
  }

function createFolder(){
    let tempFolderName = String($('#folderName').val());
    let tempFolder = {
        id:'new'+folderNumber,
        name:`${tempFolderName}`,
        icon:'fa-folder',
        docs:false,
    }
    let tempFolderArr = cardTemplate(tempFolder);

    toggleNewFolderLitebox();
    $('#card-container').append(tempFolderArr);
    folderNumber++;
}

function uploadFile(name){
    let tempFileName = String($('#fileName').val());
    let tempFile = {
        id:'new'+folderNumber,
        name:`${tempFileName}`,
        icon:`${fileIcon}`,
        docs:false,
    }
    let tempFileArr = cardTemplate(tempFile);

    toggleFileLitebox();
    $('#card-container').append(tempFileArr);
    folderNumber++;
}
