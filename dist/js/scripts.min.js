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
    // setValue: function(s)
    // {
    //     if(!$(this).attr('readonly') && !$(this).is(':disabled') && s != $(this).val())
    //     {
    //         console.log($(this).val(s));
    //         $(this).val(s);
    //     }
    // },
};
$('.acc-date-picker input').dateRangePicker(configObject)
    .bind('datepicker-change',function(event,obj)
    {
        /* This event will be triggered when second date is selected */

        let firstDay = obj.date1;
        let secondDay = obj.date2;
        let firstDayYear = firstDay.getFullYear();
        let firstDayMonth = firstDay.getMonth() + 1;
        let firstDayDay = firstDay.getDate();
        let secondDayYear = secondDay.getFullYear();
        let secondDayMonth = secondDay.getMonth() + 1;
        let secondDayDay = secondDay.getDate();

        console.log(obj);
        console.log('First day:  ' + firstDayYear + '.'+ firstDayMonth + '.' + firstDayDay);
        console.log('Last day:  ' + secondDayYear + '.'+ secondDayMonth + '.' + secondDayDay);


    });
