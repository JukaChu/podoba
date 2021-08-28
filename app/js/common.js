let tabBtnSign = [...document.querySelectorAll('.single-sign-tab')];
let tabBtnSignTabs = [...document.querySelectorAll('.sign-tabs__item')];


function changeSignTab() {
    if (!tabBtnSign.length) {

    } else {
        tabBtnSign.forEach((tab, k) => {
            tab.addEventListener('click', () => {
                if (tab.classList.contains('active')) {

                } else {
                    document.querySelector('.single-sign-tab.active').classList.remove('active');
                    document.querySelector('.sign-tabs__item.active').classList.remove('active');
                    tab.classList.add('active');

                    tabBtnSignTabs[k].classList.add('active');
                }
            })
        })
    }

}


changeSignTab();

$(document).ready(function () {
    $('select.form-select').selectize({
        sortField: 'text'
    });
});