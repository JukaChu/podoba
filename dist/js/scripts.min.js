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

// $(function() {
//     $('input[name="daterange"]').daterangepicker({
//         opens: 'left',
//         locale: {
//             format: 'DD/MM'
//         }
//     })
// });
let configObject = {
    language: 'auto',
    autoClose: true,
    showShortcuts: false,
    singleMonth: true,
    showTopbar: false,
    format: 'DD.MM.YYYY',
    container: '.acc-date__container',
    customOpenAnimation: function (cb) {
        $(this).fadeIn(300, cb);
    },
    customCloseAnimation: function (cb) {
        $(this).fadeOut(300, cb);
    },
    // getValue: function(s)
    // {
    //     if(!$(this).attr('readonly') && !$(this).is(':disabled') && s != $(this).val())
    //     {
    //         console.log($(this).val(s));
    //         console.log($(this).val(s));
    //         $(this).val(s);
    //     }
    // },
};

let configObjectS = {

    inline: true,
    alwaysOpen: true,
    language: 'auto',
    showShortcuts: false,
    singleMonth: true,
    showTopbar: false,
    format: 'DD.MM.YYYY',
    container: '.modal-calendar',
    customOpenAnimation: function (cb) {
        $(this).fadeIn(300, cb);
    },
    customCloseAnimation: function (cb) {
        $(this).fadeOut(300, cb);
    },
    // getValue: function(s)
    // {
    //     if(!$(this).attr('readonly') && !$(this).is(':disabled') && s != $(this).val())
    //     {
    //         console.log($(this).val(s));
    //         console.log($(this).val(s));
    //         $(this).val(s);
    //     }
    // },
};

function checkLanguage() {
    if (document.documentElement.lang === 'ru') {
        configObject.language = 'ru';
        configObjectS.language = 'ru';
    } else if (document.documentElement.lang === 'en') {
        configObject.language = 'en'
        configObjectS.language = 'en'
    } else {
        configObject.language = 'uk';
        configObjectS.language = 'uk';
    }
}

checkLanguage();
function startCalendar1 () {
    if (document.querySelector('.acc-date-picker .input-date-pick')) {
        $('.acc-date-picker .input-date-pick').dateRangePicker(configObject)
            .bind('datepicker-change', function (event, obj) {
                /* This event will be triggered when second date is selected */
                // console.log(this + 'THUS');
                let firstDay = obj.date1;
                let secondDay = obj.date2;
                let firstDayYear = firstDay.getFullYear();
                let firstDayMonth = 0;
                let firstDayDay = 0;
                let secondDayYear = secondDay.getFullYear();
                let secondDayMonth = secondDay.getMonth() + 1;
                let secondDayDay = secondDay.getDate();

                function dayDay() {
                    if (firstDay.getDate() < 10) {
                        firstDayDay = '0' + firstDay.getDate();
                    } else {
                        firstDayDay = firstDay.getDate();
                    }
                };

                function monthMonth() {
                    if ((firstDay.getMonth() + 1) < 10) {
                        firstDayMonth = '0' + (firstDay.getMonth() + 1);
                    } else {
                        firstDayMonth = firstDay.getMonth() + 1;
                    }
                };

                function dayDay2() {
                    if (secondDay.getDate() < 10) {
                        secondDayDay = '0' + secondDay.getDate();
                    } else {
                        secondDayDay = secondDay.getDate();
                    }
                };

                function monthMonth2() {
                    if ((secondDay.getMonth() + 1) < 10) {
                        secondDayMonth = '0' + (secondDay.getMonth() + 1);
                    } else {
                        secondDayMonth = secondDay.getMonth() + 1;
                    }
                };
                dayDay();
                monthMonth();
                dayDay2();
                monthMonth2();


                // console.log(obj);
                // console.log('First day:  ' + firstDayYear + '.'+ firstDayMonth + '.' + firstDayDay);
                // console.log('Last day:  ' + secondDayYear + '.'+ secondDayMonth + '.' + secondDayDay);
                [...document.querySelectorAll('.footer .acc-inputs input')].forEach((inp, k) => {
                    if (k === 0) {
                        let valu = `${firstDayYear}-${firstDayMonth}-${firstDayDay}`;
                        inp.value = valu;
                    } else {
                        let valu = `${secondDayYear}-${secondDayMonth}-${secondDayDay}`;
                        inp.value = valu;
                    }

                    // console.log(inp + ' valval')
                })
                // $('.footer .acc-inputs input').each((inp, k) => {
                //     console.log($(this));
                //
                // })
            });

    } else {

    }
}
startCalendar1();

let daysSlider = [...document.querySelectorAll('.menu-days.js-slider')];

function startDaySlider() {
    if (!daysSlider.length) {

    } else {
        daysSlider.forEach((sld) => {
            let btnPrev = sld.querySelector('.btn-slid--prev');
            let btnNext = sld.querySelector('.btn-slid--next');


            const swiper = new Swiper(sld, {
                // Optional parameters
                direction: 'horizontal',
                loop: false,
                slidesPerView: 5,
                slidesPerGroup: 1,
                // If we need pagination

                // Navigation arrows
                navigation: {
                    nextEl: btnNext,
                    prevEl: btnPrev,
                    disabledClass: 'disabled'
                },

                breakpoints: {
                    240: {
                        draggable: true,
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    330: {
                        draggable: true,
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    650: {
                        draggable: true,
                        slidesPerView: 4,
                    },
                    1024: {
                        draggable: true,

                    },
                    1201: {
                        draggable: false,
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },

                }
                // And if we need scrollbar

            });
        })
    }
}

startDaySlider();


let menuTab = [...document.querySelectorAll('.menu-tab')];

function changeDayTab() {
    if (!menuTab.length) {

    } else {
        menuTab.forEach((daytab, m) => {
            let menuDayBtn = [...daytab.querySelectorAll('.menu-day')];

            menuDayBtn.forEach((day, k) => {
                day.addEventListener('click', () => {
                    let dayTab = day.closest('.menu-tab');

                    let suggestDay = [...dayTab.querySelectorAll('.day-tab')][k];
                    if (day.classList.contains('active')) {

                    } else {
                        dayTab.querySelector('.menu-day.active').classList.remove('active');
                        day.classList.add('active');
                        [...dayTab.querySelectorAll('.day-tab')].forEach((btn) => {
                            btn.classList.remove('active');
                        });
                        suggestDay.classList.add('active');
                    }

                })
            })
        });

    }
}
changeDayTab();
let menuTabs = [...document.querySelectorAll('.menu-tab')];
let singleType = [...document.querySelectorAll('.single-type')];

function changeTypeDay() {
    if (!menuTabs.length) {

    } else {

        singleType.forEach((dt, z) => {
            dt.addEventListener('click', () => {
                if (dt.classList.contains('active')) {

                } else {
                    singleType.forEach((bt) => {
                        bt.classList.remove('active');
                    });
                    menuTabs.forEach((tb, l) => {
                        tb.classList.remove('active');
                    });
                    menuTabs[z].classList.add('active');
                    dt.classList.add('active');
                }
            })
        })
    }
}
changeTypeDay();


let btnCalendar = [...document.querySelectorAll('.btn-calendar')];

function openModalCalendar() {
    if (!btnCalendar.length) {

    } else {
        btnCalendar.forEach((btn) => {
            btn.addEventListener('click', () => {
                document.body.classList.add('no-scroll');
                document.querySelector('.modal-window__calendar').classList.add('open');
            })
        })
    }
}
openModalCalendar();
function ifCalendar2() {
    if (document.querySelector('.btn-calendar')) {
        $('.btn-calendar').dateRangePicker(configObjectS)
            .bind('datepicker-change', function (event, obj) {
                /* This event will be triggered when second date is selected */
                // console.log(this + 'THUS');

                let firstDay = obj.date1;
                let secondDay = obj.date2;
                let firstDayYear = firstDay.getFullYear();
                let firstDayMonth = 0;
                let firstDayDay = 0;
                let secondDayYear = secondDay.getFullYear();
                let secondDayMonth = secondDay.getMonth() + 1;
                let secondDayDay = secondDay.getDate();

                function dayDay() {
                    if (firstDay.getDate() < 10) {
                        firstDayDay = '0' + firstDay.getDate();
                    } else {
                        firstDayDay = firstDay.getDate();
                    }
                };

                function monthMonth() {
                    if ((firstDay.getMonth() + 1) < 10) {
                        firstDayMonth = '0' + (firstDay.getMonth() + 1);
                    } else {
                        firstDayMonth = firstDay.getMonth() + 1;
                    }
                };

                function dayDay2() {
                    if (secondDay.getDate() < 10) {
                        secondDayDay = '0' + secondDay.getDate();
                    } else {
                        secondDayDay = secondDay.getDate();
                    }
                };

                function monthMonth2() {
                    if ((secondDay.getMonth() + 1) < 10) {
                        secondDayMonth = '0' + (secondDay.getMonth() + 1);
                    } else {
                        secondDayMonth = secondDay.getMonth() + 1;
                    }
                };
                dayDay();
                monthMonth();
                dayDay2();
                monthMonth2();


                // console.log(obj);
                // console.log('First day:  ' + firstDayYear + '.'+ firstDayMonth + '.' + firstDayDay);
                // console.log('Last day:  ' + secondDayYear + '.'+ secondDayMonth + '.' + secondDayDay);
                [...document.querySelectorAll('.footer .acc-inputs input')].forEach((inp, k) => {
                    if (k === 0) {
                        let valu = `${firstDayYear}-${firstDayMonth}-${firstDayDay}`;
                        inp.value = valu;
                    } else {
                        let valu = `${secondDayYear}-${secondDayMonth}-${secondDayDay}`;
                        inp.value = valu;
                    }

                    // console.log(inp + ' valval')
                })
                // $('.footer .acc-inputs input').each((inp, k) => {
                //     console.log($(this));
                //
                // })
            });

    } else {

    }
}
ifCalendar2();

let calendarModal = document.querySelector('.modal-window__calendar');

function controlModalCalendar() {
    if (!calendarModal) {

    } else {
        let closeBtn = calendarModal.querySelector('.close');
        let contBtn = calendarModal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            calendarModal.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
        contBtn.addEventListener('click', () => {
            calendarModal.classList.remove('open');
            document.body.classList.remove('no-scroll');
        })
    }

}

let modals = [...document.querySelectorAll('.modal-window')];

function modalWindows() {
        if (!modals.length) {

        } else {
            modals.forEach((mdl) => {
                mdl.addEventListener('click', () => {
                    mdl.classList.remove('open');
                    document.body.classList.remove('no-scroll');
                });
                mdl.querySelector('.modal-container').addEventListener('click', (e) => {
                    e.stopPropagation();
                })
            })
        }
}
modalWindows();
controlModalCalendar();
