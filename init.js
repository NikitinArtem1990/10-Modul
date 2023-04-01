
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
   
    
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('birthYearOutput').innerText = initPerson.birth;
    document.getElementById('thirdNameOutput').innerText = initPerson.thirdName;
    document.getElementById('workOutput').innerText = initPerson.work;
    document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
    document.getElementById('birthDateOutput').innerText = initPerson.birthDate;
};


let btnAcnive = document.getElementById('btnActive');
btnActive.addEventListener('click', function() 
{

return window.onload();

});

let btnClear = document.getElementById('btnClear');

btnClear.addEventListener('click', function()

{

document.getElementById('genderOutput').innerText = "Генерация пола";
document.getElementById('firstNameOutput').innerText = "Генерация имени";
document.getElementById('surnameOutput').innerText = "Генерация фамилии";
document.getElementById('birthYearOutput').innerText = "Генерация года рождения";
document.getElementById('thirdNameOutput').innerText = "Генерация Отчества";
document.getElementById('workOutput').innerText = "Генерация должности";
document.getElementById('birthMonthOutput').innerText = "Генерация месяца";
document.getElementById('birthDateOutput').innerText = "Генерация дня";

})
