
function generate() {
var arr = ['Маг', 'Воин', 'Стрелок', 'Призыватель'];    
var rand = Math.floor(Math.random() * arr.length);
var concat = arr[rand];
document.getElementById("clac").innerHTML = (concat);
}

//разделение от бленча

function Narisovat() {
	var arr = [
	//Боссы 
	'Королевский слизень',
	'Глаз Ктулху',
    'Пожиратель миров',
    'Мозг Ктулху',
    'Королева пчёл',
    'Скелетрон',
    'Стена плоти',
    'Королева слизней',
    'Близнецы',
    'Уничтожитель',
    'Скелетрон Прайм',
    'Плантера',
    'Императрица света',
    'Голем',
    'Герцог Рыброн',
    'Культист-лунатик',
    'Небесные башни',
    'Лунный Лорд',
	'Траурное дерево',
	'Тыквенный король',
	'Сантанк',
	'Злая ель',
	'Ледяная королева',
	'Летучий голландец',
	'Летающая тарелка марсиан',
	'Бэтси',
	//NPC
	'Гид',
	'Торговец',
	'Зоолог',
	'Гольфист',
	'Медсестра',
	'Трактирщик',
	'Тусовщица',
	'Волшебник',
	'Подрывник',
	'Гоблин-инженер',
	'Портной',
	'Продавец красителей',
	'Продавец оружия',
	'Паромеханик',
	'Дриада',
	'Маляр',
	'Знахарь',
	'Стилист',
	'Рыбак',
	'Пират',
	'Механик',
	'Сборщик налогов',
	'Киборг',
	'Трюфель',
	'Принцесса',
	//Ситуации
	'Моя битва с боссом',
	'Перинг',
	'Вечеринка',
	'Мой персонаж',
	'Гифт другу',
    //Мобы
	'Злые кости',
	'Гриб-крабоид',
	'Муравьиный лев',
    'Муравьиный воитель',
    'Слизень-детёныш',
    'Пчела',
	'Чёрный слизень',
	'Пылающее колесо',
    'Кровавый ползун',
	'Голубая медуза',
	'Синий слизень',
    'Костяной змей',
	'Пещерная летучая мышь',
	'Кошенильный червец',
    'КрабКраб',
	'Кримера',
    'Проклятый череп',
    'Демон',
	'Демонический глаз',
	'Страж темницы',
	'Слизень темницы',
    'Пожиратель душ',
	'Лицемонстр',
	'Огненный бес',
	'Гоблин-разведчик',
	'Гранитный элементаль',
	'Гранитный голем',
	'Зелёный слизень',
	'Адская летучая',
	'Шершень',
	'Ледяная летучая мышь',
	'Ледяной слизень',
	'Тело метеора',
	'Мать слизней',
	'Зомби-гриб',
	'НимфаНимфа',
	'Пинки',
	'Красный слизень',
	'Саламандра',
	'Хвататель',
	'Снежный флинкс',
	'Шипастый слизень',
	'Демон вуду',
	'Жёлтый слизень',
	'Зомби'
	];    
//Код будет дополнятся 
	
var rand = Math.floor(Math.random() * arr.length);
var concat = arr[rand];
document.getElementById("Nar").innerHTML = (concat);
}
