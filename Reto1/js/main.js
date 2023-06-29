var addButton = document.getElementById('addButton');
var removeButton = document.getElementById('removeButton');
var clearButton = document.getElementById('clearButton');
var elementInput = document.getElementById('elementInput');
var elementList = document.getElementById('elementList');

addButton.addEventListener('click', function () {
    var value = elementInput.value;
    if (value) {
        var li = document.createElement('li');
        li.textContent = value;
        elementList.appendChild(li);
        elementInput.value = '';
    }
});

removeButton.addEventListener('click', function () {
    var value = elementInput.value;
    if (value) {
        var items = elementList.getElementsByTagName('li');
        for (var i = 0; i < items.length; i++) {
            if (items[i].textContent === value) {
                elementList.removeChild(items[i]);
                break;
            }
        }
        elementInput.value = '';
    }
});

clearButton.addEventListener('click', function () {
    while (elementList.firstChild) {
        elementList.removeChild(elementList.firstChild);
    }
});
