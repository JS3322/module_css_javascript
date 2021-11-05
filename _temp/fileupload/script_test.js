var inputEl = document.querySelector('#input');
inputEl.addEventListener('change', function (event) {
    // FileList
    var fileList = inputEl.files || event.target.files;
    // File
    var file = fileList[0];
    var reader = new FileReader();
    reader.onload = function (progressEvent) {
        console.log(progressEvent.target.result);
    };
    reader.readAsText(file);
});