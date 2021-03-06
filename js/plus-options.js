const plusOptions = [
    {
        id: 1,
        name: 'Upload Files Here',
        icon: 'fa-file-arrow-up',
        func:`javascript:void(0)`
    },
    // {
    //     id: 2,
    //     name: 'Upload Files from Email',
    //     icon: 'fa-envelope',
    //     func:`moreFunctions.uploadEmailDocs.call()`
    // },
    {
        id: 3,
        name: 'Create New Sub Folder',
        icon: 'fa-folder-plus',
        func:`toggleLitebox('#new-folder-panel')`
    },
    {
        id: 4,
        name: 'Cut',
        icon: 'fa-scissors',
        func:`moreFunctions.multiCut()`
    },
    {
        id: 5,
        name: 'Copy',
        icon: 'fa-copy',
        func:`moreFunctions.multiCopy()`
    },
    {
        id: 6,
        name: 'Paste',
        icon: 'fa-clipboard',
        func:`moreFunctions.paste()`
    },
    {
        id: 7,
        name: 'Toggle Select Mode',
        icon: 'fa-square-check',
        func: `moreFunctions.selectMode()`
    },
]

const plusOptionsTemplate = `<button class="btn btn-sm btn-primary btn-quick ms-3 dropdown-toggle" type="button"
id="dropdown-plus-options" data-bs-toggle="dropdown" aria-expanded="false">
<i class="fa-solid fa-plus"></i>
</button>
<ul class="dropdown-menu" aria-labelledby="dropdown-plus-options">
${plusOptions.map(createPlusOptions).join("")}
</ul>`

function createPlusOptions(el) {
    return `<li class="w-100">
    <button type="button" onclick="${el.func ? el.func : 'javaScript:void(0)'}"
        class="btn btn-sm btn-new d-inline-flex align-items-center p-2 mx-2" data-bs-toggle="collapse" data-bs-target="${el.bsTarget ? el.bsTarget : ''}">
        <i class="fa-solid ${el.icon} me-2"></i>${el.name}
    </button>
</li>`
}

$('#plus-options').append(plusOptionsTemplate);