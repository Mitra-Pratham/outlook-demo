const quickNavItems = [{
    id: 1,
    name: `Documents`,
    padding: 'ps-3',
    items: [
        {
            id: 'd-1',
            name: 'Emails',
            padding: 'ps-4',
            items: [
                {
                    id: 'de-1',
                    name: 'Notes',
                    padding: 'ps-1',
                    files:true,
                },
                {
                    id: 'de-2',
                    name: 'Recordings',
                    padding: 'ps-1',
                    files:true,
                },
                {
                    id: 'de-3',
                    name: 'Maps',
                    padding: 'ps-1',
                    files:true,

                },
                {
                    id: 'de-4',
                    name: 'Discussions',
                    padding: 'ps-1',
                    files:true,

                },
                {
                    id: 'de-5',
                    name: 'Spreadsheets',
                    padding: 'ps-1',
                    files:true,

                },

            ],
            parentClass: "",
            childClass: "",
            aria: "false",
        },
        {
            id: 'f-1',
            name: 'Files',
            padding: 'ps-4',
            items: [
                {
                    id: 'fe-1',
                    name: 'Notes',
                    padding: 'ps-1',
                    files:true,
                },
                {
                    id: 'fe-2',
                    name: 'Recordings',
                    padding: 'ps-1',
                    files:true,
                },
                {
                    id: 'fe-3',
                    name: 'Maps',
                    padding: 'ps-1',
                    files:true,

                },
                {
                    id: 'fe-4',
                    name: 'Discussions',
                    padding: 'ps-1',
                    files:true,

                },
                {
                    id: 'fe-5',
                    name: 'Spreadsheets',
                    padding: 'ps-1',
                    files:true,

                },

            ],
        },
        {
            id: 'p-1',
            name: 'Presentations',
            padding: 'ps-4',
            items: [
                {
                    id: 'pe-1',
                    name: 'Notes',
                    padding: 'ps-1',
                    files:true,
                },
                {
                    id: 'pe-2',
                    name: 'Recordings',
                    padding: 'ps-1',
                    files:true,
                },
                {
                    id: 'pe-3',
                    name: 'Maps',
                    padding: 'ps-1',
                    files:true,

                },
                {
                    id: 'pe-4',
                    name: 'Discussions',
                    padding: 'ps-1',
                    files:true,

                },
                {
                    id: 'pe-5',
                    name: 'Spreadsheets',
                    padding: 'ps-1',
                    files:true,

                },
            ],
            parentClass: "",
            childClass: "",
            aria: "false",
        },
        {
            id: 'c-1',
            name: 'Case Files',
            padding: 'ps-4',
            items: [
                {
                    id: 'ce-1',
                    name: 'Notes',
                    padding: 'ps-1',
                    files:true,
                },
                {
                    id: 'ce-2',
                    name: 'Recordings',
                    padding: 'ps-1',
                    files:true,
                },
                {
                    id: 'ce-3',
                    name: 'Maps',
                    padding: 'ps-1',
                    files:true,

                },
                {
                    id: 'ce-4',
                    name: 'Discussions',
                    padding: 'ps-1',
                    files:true,

                },
                {
                    id: 'ce-5',
                    name: 'Spreadsheets',
                    padding: 'ps-1',
                    files:true,

                },
            ],
            parentClass: "",
            childClass: "",
            aria: "false",
        },
        {
            id: 'm-1',
            name: 'Medical Records',
            padding: 'ps-4',
            items: [
                {
                    id: 'me-1',
                    name: 'Notes',
                    padding: 'ps-1',
                    files:true,
                },
                {
                    id: 'me-2',
                    name: 'Recordings',
                    padding: 'ps-1',
                    files:true,
                },
                {
                    id: 'me-3',
                    name: 'Maps',
                    padding: 'ps-1',
                    files:true,

                },
                {
                    id: 'me-4',
                    name: 'Discussions',
                    padding: 'ps-1',
                    files:true,

                },
                {
                    id: 'me-5',
                    name: 'Spreadsheets',
                    padding: 'ps-1',
                    files:true,

                },
            ],
            parentClass: "",
            childClass: "",
            aria: "false",
        },
        {
            id: 'r-1',
            name: 'Research',
            padding: 'ps-4',
            items: [
                {
                    id: 're-1',
                    name: 'Notes',
                    padding: 'ps-1',
                    files:true,
                },
                {
                    id: 're-2',
                    name: 'Recordings',
                    padding: 'ps-1',
                    files:true,
                },
                {
                    id: 're-3',
                    name: 'Maps',
                    padding: 'ps-1',
                    files:true,

                },
                {
                    id: 're-4',
                    name: 'Discussions',
                    padding: 'ps-1',
                    files:true,

                },
                {
                    id: 're-5',
                    name: 'Spreadsheets',
                    padding: 'ps-1',
                    files:true,

                },
            ],
            parentClass: "",
            childClass: "",
            aria: "false",
        },
    ],
    parentClass: "",
    childClass: "show",
    aria: "true"
},
]

const quickFiles = [
    {
        id:1,
        name:'meeting notes.txt',
        icon:'fa-file-lines',
        docs:false,
    },
    {
        id:2,
        name:'recap.docx',
        icon:'fa-file-word',
        docs:false,
    },
    {
        id:3,
        name:'deck.ppt',
        icon:'fa-file-powerpoint',
        docs:false,
    },
    {
        id:4,
        name:'invoices.xlsx',
        icon:'fa-file-excel',
        docs:false,
    }
]

function leftNavTemplate(arr) {
    return `<nav class="bd-links pt-3 pb-3 px-lg-3 px-md-2 px-sm-2 px-2">${createNavList(arr)}</nav>`;
}

function createNavListTemplate(el) {
    return `<div class="mb-2">
    <button class="btn d-flex align-items-center rounded w-100 ${el.parentClass}" data-bs-toggle="collapse" aria-expanded=${el.aria} data-bs-target="#quickNav-${el.id}">${el.name}</button>
    <div id="quickNav-${el.id}" class="collapse ${el.childClass} ${el.padding}">
    ${el.items ? createNavList(el.items) : ''}
    ${el.files == true ? createNavListItems(quickFiles) : ''}
    </div>
  </div>`;
}

function createNavListItems(items) {
    let tempItemArr = items.map((item) => {
            return `<a href="" class="d-block fw-normal pb-1 small rounded"><i class="fa-solid ${item.icon} accent-color me-2"></i>${item.name}</a>`;
    });
    return tempItemArr.join("");
}

function createNavList(arr) {
    let tempNavListArr = arr.map(createNavListTemplate);
    return tempNavListArr.join("");
}


$('#quick-nav-panel').append(leftNavTemplate(quickNavItems));