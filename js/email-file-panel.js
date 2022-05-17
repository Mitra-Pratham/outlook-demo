let selectedDocsArr = [];

const emailDocs = [
    {
        id: 1,
        name: 'meeting notes.txt',
        icon: 'fa-file-lines',
        docs: false,
        func:'javaScript:void(0);'
    },
    {
        id: 2,
        name: 'recap.docx',
        icon: 'fa-file-word',
        docs: false,
        func:'javaScript:void(0);'
    },
    {
        id: 3,
        name: 'deck.ppt',
        icon: 'fa-file-powerpoint',
        docs: false,
        func:'javaScript:void(0);'
    },
    {
        id: 4,
        name: 'invoices.xlsx',
        icon: 'fa-file-excel',
        docs: false,
        func:'javaScript:void(0);'
    }
]



const outerEmailFilePanel = `<div id="email-file-panel" class="mx-auto mb-0" tabindex="0">
<div class="px-3 py-2 border-bottom d-flex align-items-center justify-content-between">
    <h6 class="m-0">Upload Files from Selected Email</h6>
    <button class="btn btn-sm btn-new" onclick="moreFunctions.uploadEmailDocs.call()"><i class="fs-5 fa-solid fa-chevron-down"></i></button>
</div>
<div id="docs-panel" class="px-3 pt-3 collapse show">
      <div class="p-2 d-flex">
          <div class="icon"><i class="fs-3 fa-solid fa-envelope accent-color"></i></div>
          <div class="card-details ps-3">
              <div class="card-name" title="Collin v Tanner">Collin V Tanner</div>
              <div class="text-muted">
                  <span>Sent by John Smith on 3/22/21 1:02 PM </span>
              </div>
          </div>
      </div>
      <button class="btn btn-sm btn-new" type="button"><i class="fs-5 fa-solid fa-upload me-3"></i>Upload Email to Matter</button>
      <div class="my-2">
      <div class="h6 mb-0 pb-2 border-bottom">Documents in the email (${emailDocs.length})</div>
      <div id="email-selected-docs" class="pt-3">
      ${createEmailDocs()}
      <button class="btn btn-sm btn-outline-primary mt-2" type="button" onclick="getSelectedDocs()">Upload Selected Items</button>
      </div>
      </div>
  </div>
</div>`

function createEmailDocs(){
    let tempEmailDocsArr = emailDocs.map(createEmailDocsItems);
    return tempEmailDocsArr.join('');
}

function createEmailDocsItems(item){
    return `<div class="fw-normal pb-2 small rounded" title="${item.name}"><input class="form-check-input me-3" type="checkbox" value="${item.id}"><i class="fa-solid ${item.icon} accent-color me-2"></i><span class="truncate">${item.name}</span></div>`
}

$('#email-file-modal').append(outerEmailFilePanel);

async function getSelectedDocs(){
    selectedDocsArr = [];
    $('#email-selected-docs input:checked').each(function() {
        emailDocs.forEach((item) => {
            item.id == $(this)[0].value ? selectedDocsArr.push(item) : '';
        }) 
    });
    $('#card-container').append(selectedDocsArr.map(cardTemplate).join('')); //uploading
}


