var colors = generateRandomFields(6);

var fields = document.querySelectorAll('.color-field');
var pickedField = pickField();
var questionColor = document.getElementById('question-color');
var barInformation = document.getElementById('tools-button--information');

var resetButton = document.getElementById('tools-button--reset');

resetButton.addEventListener("click", function () {
    colors = generateRandomFields(6);
    pickedField = pickField();
    questionColor.textContent = pickedField;
    for (i = 0; i < fields.length; i++) {
        fields[i].style.backgroundColor = colors[i];
    }
    document.getElementById('main-bar').style.backgroundColor = '#333';
    resetButton.textContent = "Inne pola";
    barInformation.textContent = '';
});

questionColor.textContent = pickedField;

for (i = 0; i < fields.length; i++) {
    fields[i].style.backgroundColor = colors[i];

    fields[i].addEventListener('click', function () {
        var clickedField = this.style.backgroundColor;
        if (clickedField === pickedField) {
            barInformation.textContent = 'Gratulacje! Prawidłowa odpowiedź.';
            changeFields(clickedField);
            resetButton.textContent = "Chcesz zagrać jeszcze raz?";
            document.getElementById('main-bar').style.backgroundColor = pickedField;

        } else {
            this.style.backgroundColor = '#333';
            barInformation.textContent = 'Niestety. To błędna odpowiedź.';
        }

    })
}

function changeFields(field) {
    for (var i = 0; i < fields.length; i++) {
        fields[i].style.backgroundColor = field;
    }
}

function pickField() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomFields(num) {
    var arr = [];
    for (i = 0; i < num; i++) {
        arr.push(randomField());
    }
    return arr;
}

function randomField() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}