// Объявление переменных
let themeButtonDark = document.querySelector('.theme-button-dark');
let themeButtonLight = document.querySelector('.theme-button-light');
let fontButtonSansSerif = document.querySelector('.font-button-sans-serif');
let fontButtonSerif = document.querySelector('.font-button-serif');

// Изменение темы светлой на тёмную
themeButtonDark.onclick = function () {
    themeButtonDark.classList.add('active');
    themeButtonLight.classList.remove('active');
    document.body.classList.add('dark');
};

// Изменение темы светлой на тёмную
themeButtonLight.onclick = function () {
    themeButtonLight.classList.add('active');
    themeButtonDark.classList.remove('active');
    document.body.classList.remove('dark')
};

// Тема без засечек
fontButtonSansSerif.onclick = function () {
    fontButtonSansSerif.classList.add('active');
    fontButtonSerif.classList.remove('active');
    document.body.classList.remove('serif');
};

// Тема с засечками
fontButtonSerif.onclick = function () {
    fontButtonSansSerif.classList.remove('active');
    fontButtonSerif.classList.add('active');
    document.body.classList.add('serif');
};

// Развёртывание статей
let shortArticles = document.querySelectorAll('.blog-article.short');

for (let shortArticle of shortArticles) {
    let moreButton = shortArticle.querySelector('.more');
    moreButton.onclick = function () {
        shortArticle.classList.remove('short');
    };
};

// Изменение раскладки товаров
let cardViewButtonGrid = document.querySelector('.card-view-button-grid');
let cardViewButtonList = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

// Раскладка карточками
cardViewButtonGrid.onclick = function () {
    cardViewButtonGrid.classList.add('active');
    cardViewButtonList.classList.remove('active');
    cards.classList.remove('list');
};

// Раскладка списком
cardViewButtonList.onclick = function () {
    cardViewButtonList.classList.add('active');
    cardViewButtonGrid.classList.remove('active');
    cards.classList.add('list');
};

// Галерея
let activePhoto = document.querySelector('.active-photo');
let previewList = document.querySelectorAll('.preview-list li a')

for (let preview of previewList) {
    preview.onclick = function (evt) {
        evt.preventDefault();

        let currentActive = document.querySelector('.preview-list .active-item');
        currentActive.classList.remove('active-item');
        preview.classList.add('active-item');

        activePhoto.src = preview.href;
    };
};

