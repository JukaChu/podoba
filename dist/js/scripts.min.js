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
    customOpenAnimation: function(cb)
    {
        $(this).fadeIn(300, cb);
    },
    customCloseAnimation: function(cb)
    {
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
    } else if (document.documentElement.lang === 'en') {
        configObject.language = 'en'
    } else {
        configObject.language = 'uk';
    }
}
checkLanguage();
$('.acc-date-picker .input-date-pick').dateRangePicker(configObject)
    .bind('datepicker-change',function(event,obj)
    {
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
        function dayDay(){
            if (firstDay.getDate() < 10) {
                firstDayDay = '0' + firstDay.getDate();
            } else {
                firstDayDay = firstDay.getDate();
            }
        };
        function monthMonth(){
            if ((firstDay.getMonth() + 1) < 10) {
                firstDayMonth = '0' + (firstDay.getMonth() + 1);
            } else {
                firstDayMonth = firstDay.getMonth() + 1;
            }
        };
        function dayDay2(){
            if (secondDay.getDate() < 10) {
                secondDayDay = '0' + secondDay.getDate();
            } else {
                secondDayDay = secondDay.getDate();
            }
        };
        function monthMonth2(){
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

