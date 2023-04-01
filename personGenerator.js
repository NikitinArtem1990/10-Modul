const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Елена",
            "id_2": "Александра",
            "id_3": "Татьяна",
            "id_4": "Алина",
            "id_5": "Ксения",
            "id_6": "Яна",
            "id_7": "Светлана",
            "id_8": "Екатерина",
            "id_9": "Марина",
            "id_10": "Валерия"
        }
    }`,

    thirdNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Петрович",
            "id_3": "Иванович",
            "id_4": "Сергеевич",
            "id_5": "Алексеевич",
            "id_6": "Ренатович",
            "id_7": "Олегович",
            "id_8": "Григорьевич",
            "id_9": "Патапович",
            "id_10": "Ильич"
        }
    }`,

    thirdNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ивановна",
            "id_2": "Сергеевна",
            "id_3": "Алексеевна",
            "id_4": "Ренатовна",
            "id_5": "Игоревна",
            "id_6": "Олеговна",
            "id_7": "Викторовна",
            "id_8": "Дмитриевна",
            "id_9": "Васильевна",
            "id_10": "Гавриловна"
        }
    }`,

    workFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Бухгалтер",
            "id_2": "Продавец",
            "id_3": "Секретарь",
            "id_4": "Уборщица",
            "id_5": "Курьер",
            "id_6": "Повар",
            "id_7": "Моляр",
            "id_8": "Кассир",
            "id_9": "Завхоз",
            "id_10": "Горничная"
        }
    }`,

    workMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Монтажник",
            "id_3": "Токарь",
            "id_4": "Сварщик",
            "id_5": "Крановщик",
            "id_6": "Водитель Камаза",
            "id_7": "Архитектор",
            "id_8": "Каменщик",
            "id_9": "Тестировщик",
            "id_10": "Програмист"
        }
    }`,

    birthMonthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,



    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        console.log(obj);
        console.log(prop);
        return obj.list[prop];
    },

    randomGender: function() {

       return (this.randomIntNumber(3, 1 < 1)) ? this.GENDER_MALE : this.GENDER_FEMALE;

    },
  

    randomFirstName: function() {

        if (this.person.gender === this.GENDER_FEMALE) {


        return this.randomValue(this.firstNameFemaleJson);
    }

        else 
        
        return this.randomValue(this.firstNameMaleJson);
        

      
    },

    randomSurname: function() {

        if (this.person.gender === this.GENDER_FEMALE) {


            return this.randomValue(this.surnameJson) + 'а';
        }
    
        else  {
    
            return this.randomValue(this.surnameJson);
    
    
    }
    },

    randomThirdname: function() {

        if (this.person.gender === this.GENDER_FEMALE) {


            return this.randomValue(this.thirdNameFemaleJson);
        
        }

        else {

            return this.randomValue(this.thirdNameMaleJson);
        }
    },


    randomBirthYear: function() {

        return this.randomIntNumber(1995, 1970) + " года рождения";




    },
    
    randomWork: function() {

        if (this.person.gender === this.GENDER_FEMALE) {


            return this.randomValue(this.workFemaleJson);
        
        }

        else {

            return this.randomValue(this.workMaleJson);
        }
    },

    randomBirthMonth: function() {

    return this.randomValue(this.birthMonthJson);
        
    },



    randomBirthDate: function() {

    if (this.person.birthMonth === 'Февраля') {

        return this.randomIntNumber(28, 1);
    }    
        else {
        
        if (this.person.birthMonth === 'Апреля')    {

        return this.randomIntNumber(30, 1);

         }

         if (this.person.birthMonth === 'Июня')    {

            return this.randomIntNumber(30, 1);
    
             }

             if (this.person.birthMonth === 'Сентября')    {

                return this.randomIntNumber(30, 1);
        
                 }

                 if (this.person.birthMonth === 'Ноября')    {

                    return this.randomIntNumber(30, 1);
            
                     }

        else {
        return this.randomIntNumber(31, 1);

    }}
},

    getPerson: function () {
        this.person = {};
        
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birth = this.randomBirthYear();
        this.person.thirdName = this.randomThirdname();
        this.person.work = this.randomWork();
        this.person.birthMonth = this.randomBirthMonth();
        this.person.birthDate = this.randomBirthDate();
        return this.person;
        
    }

     
 
    
};

