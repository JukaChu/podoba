/**
 * jquery-date-range-picker
 * @version v0.21.1
 * @link https://github.com/longbill/jquery-date-range-picker
 * @license MIT
 */
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("moment")) : e(jQuery, moment)
}(function (U, Q) {
    "use strict";
    U.dateRangePickerLanguages = {
        default: {
            selected: "Selected:",
            day: "Day",
            days: "Days",
            apply: "Close",
            "week-1": "mo",
            "week-2": "tu",
            "week-3": "we",
            "week-4": "th",
            "week-5": "fr",
            "week-6": "sa",
            "week-7": "su",
            "week-number": "W",
            "month-name": ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
            shortcuts: "Shortcuts",
            "custom-values": "Custom Values",
            past: "Past",
            following: "Following",
            previous: "Previous",
            "prev-week": "Week",
            "prev-month": "Month",
            "prev-year": "Year",
            next: "Next",
            "next-week": "Week",
            "next-month": "Month",
            "next-year": "Year",
            "less-than": "Date range should not be more than %d days",
            "more-than": "Date range should not be less than %d days",
            "default-more": "Please select a date range longer than %d days",
            "default-single": "Please select a date",
            "default-less": "Please select a date range less than %d days",
            "default-range": "Please select a date range between %d and %d days",
            "default-default": "Please select a date range",
            time: "Time",
            hour: "Hour",
            minute: "Minute"
        },
        id: {
            selected: "Terpilih:",
            day: "Hari",
            days: "Hari",
            apply: "Tutup",
            "week-1": "sen",
            "week-2": "sel",
            "week-3": "rab",
            "week-4": "kam",
            "week-5": "jum",
            "week-6": "sab",
            "week-7": "min",
            "week-number": "W",
            "month-name": ["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"],
            shortcuts: "Pintas",
            "custom-values": "Nilai yang ditentukan",
            past: "Yang Lalu",
            following: "Mengikuti",
            previous: "Sebelumnya",
            "prev-week": "Minggu",
            "prev-month": "Bulan",
            "prev-year": "Tahun",
            next: "Selanjutnya",
            "next-week": "Minggu",
            "next-month": "Bulan",
            "next-year": "Tahun",
            "less-than": "Tanggal harus lebih dari %d hari",
            "more-than": "Tanggal harus kurang dari %d hari",
            "default-more": "Jarak tanggal harus lebih lama dari %d hari",
            "default-single": "Silakan pilih tanggal",
            "default-less": "Jarak rentang tanggal tidak boleh lebih lama dari %d hari",
            "default-range": "Rentang tanggal harus antara %d dan %d hari",
            "default-default": "Silakan pilih rentang tanggal",
            time: "Waktu",
            hour: "Jam",
            minute: "Menit"
        },
        az: {
            selected: "Seçildi:",
            day: " gün",
            days: " gün",
            apply: "tətbiq",
            "week-1": "1",
            "week-2": "2",
            "week-3": "3",
            "week-4": "4",
            "week-5": "5",
            "week-6": "6",
            "week-7": "7",
            "month-name": ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"],
            shortcuts: "Qısayollar",
            past: "Keçmiş",
            following: "Növbəti",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "Öncəki həftə",
            "prev-month": "Öncəki ay",
            "prev-year": "Öncəki il",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "Növbəti həftə",
            "next-month": "Növbəti ay",
            "next-year": "Növbəti il",
            "less-than": "Tarix aralığı %d gündən çox olmamalıdır",
            "more-than": "Tarix aralığı %d gündən az olmamalıdır",
            "default-more": "%d gündən çox bir tarix seçin",
            "default-single": "Tarix seçin",
            "default-less": "%d gündən az bir tarix seçin",
            "default-range": "%d və %d gün aralığında tarixlər seçin",
            "default-default": "Tarix aralığı seçin"
        },
        bg: {
            selected: "Избрано:",
            day: "Ден",
            days: "Дни",
            apply: "Затвори",
            "week-1": "пн",
            "week-2": "вт",
            "week-3": "ср",
            "week-4": "чт",
            "week-5": "пт",
            "week-6": "сб",
            "week-7": "нд",
            "week-number": "С",
            "month-name": ["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"],
            shortcuts: "Преки пътища",
            "custom-values": "Персонализирани стойности",
            past: "Минал",
            following: "Следващ",
            previous: "Предишен",
            "prev-week": "Седмица",
            "prev-month": "Месец",
            "prev-year": "Година",
            next: "Следващ",
            "next-week": "Седмица",
            "next-month": "Месец",
            "next-year": "Година",
            "less-than": "Периодът от време не трябва да е повече от %d дни",
            "more-than": "Периодът от време не трябва да е по-малко от %d дни",
            "default-more": "Моля изберете период по-дълъг от %d дни",
            "default-single": "Моля изберете дата",
            "default-less": "Моля изберете период по-къс от %d дни",
            "default-range": "Моля изберете период между %d и %d дни",
            "default-default": "Моля изберете период",
            time: "Време",
            hour: "Час",
            minute: "Минута"
        },
        cn: {
            selected: "已选择:",
            day: "天",
            days: "天",
            apply: "确定",
            "week-1": "一",
            "week-2": "二",
            "week-3": "三",
            "week-4": "四",
            "week-5": "五",
            "week-6": "六",
            "week-7": "日",
            "week-number": "周",
            "month-name": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            shortcuts: "快捷选择",
            past: "过去",
            following: "将来",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "上周",
            "prev-month": "上个月",
            "prev-year": "去年",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "下周",
            "next-month": "下个月",
            "next-year": "明年",
            "less-than": "所选日期范围不能大于%d天",
            "more-than": "所选日期范围不能小于%d天",
            "default-more": "请选择大于%d天的日期范围",
            "default-less": "请选择小于%d天的日期范围",
            "default-range": "请选择%d天到%d天的日期范围",
            "default-single": "请选择一个日期",
            "default-default": "请选择一个日期范围",
            time: "时间",
            hour: "小时",
            minute: "分钟"
        },
        cz: {
            selected: "Vybráno:",
            day: "Den",
            days: "Dny",
            apply: "Zavřít",
            "week-1": "po",
            "week-2": "út",
            "week-3": "st",
            "week-4": "čt",
            "week-5": "pá",
            "week-6": "so",
            "week-7": "ne",
            "month-name": ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"],
            shortcuts: "Zkratky",
            past: "po",
            following: "následující",
            previous: "předchozí",
            "prev-week": "týden",
            "prev-month": "měsíc",
            "prev-year": "rok",
            next: "další",
            "next-week": "týden",
            "next-month": "měsíc",
            "next-year": "rok",
            "less-than": "Rozsah data by neměl být větší než %d dnů",
            "more-than": "Rozsah data by neměl být menší než %d dnů",
            "default-more": "Prosím zvolte rozsah data větší než %d dnů",
            "default-single": "Prosím zvolte datum",
            "default-less": "Prosím zvolte rozsah data menší než %d dnů",
            "default-range": "Prosím zvolte rozsah data mezi %d a %d dny",
            "default-default": "Prosím zvolte rozsah data"
        },
        de: {
            selected: "Auswahl:",
            day: "Tag",
            days: "Tage",
            apply: "Schließen",
            "week-1": "mo",
            "week-2": "di",
            "week-3": "mi",
            "week-4": "do",
            "week-5": "fr",
            "week-6": "sa",
            "week-7": "so",
            "month-name": ["januar", "februar", "märz", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "dezember"],
            shortcuts: "Schnellwahl",
            past: "Vorherige",
            following: "Folgende",
            previous: "Vorherige",
            "prev-week": "Woche",
            "prev-month": "Monat",
            "prev-year": "Jahr",
            next: "Nächste",
            "next-week": "Woche",
            "next-month": "Monat",
            "next-year": "Jahr",
            "less-than": "Datumsbereich darf nicht größer sein als %d Tage",
            "more-than": "Datumsbereich darf nicht kleiner sein als %d Tage",
            "default-more": "Bitte mindestens %d Tage auswählen",
            "default-single": "Bitte ein Datum auswählen",
            "default-less": "Bitte weniger als %d Tage auswählen",
            "default-range": "Bitte einen Datumsbereich zwischen %d und %d Tagen auswählen",
            "default-default": "Bitte ein Start- und Enddatum auswählen",
            Time: "Zeit",
            hour: "Stunde",
            minute: "Minute"
        },
        es: {
            selected: "Seleccionado:",
            day: "Día",
            days: "Días",
            apply: "Cerrar",
            "week-1": "lu",
            "week-2": "ma",
            "week-3": "mi",
            "week-4": "ju",
            "week-5": "vi",
            "week-6": "sa",
            "week-7": "do",
            "month-name": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            shortcuts: "Accesos directos",
            past: "Pasado",
            following: "Siguiente",
            previous: "Anterior",
            "prev-week": "Semana",
            "prev-month": "Mes",
            "prev-year": "Año",
            next: "Siguiente",
            "next-week": "Semana",
            "next-month": "Mes",
            "next-year": "Año",
            "less-than": "El rango no debería ser mayor de %d días",
            "more-than": "El rango no debería ser menor de %d días",
            "default-more": "Por favor selecciona un rango mayor a %d días",
            "default-single": "Por favor selecciona un día",
            "default-less": "Por favor selecciona un rango menor a %d días",
            "default-range": "Por favor selecciona un rango entre %d y %d días",
            "default-default": "Por favor selecciona un rango de fechas."
        },
        fr: {
            selected: "Sélection:",
            day: "Jour",
            days: "Jours",
            apply: "Fermer",
            "week-1": "lu",
            "week-2": "ma",
            "week-3": "me",
            "week-4": "je",
            "week-5": "ve",
            "week-6": "sa",
            "week-7": "di",
            "month-name": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            shortcuts: "Raccourcis",
            past: "Passé",
            following: "Suivant",
            previous: "Précédent",
            "prev-week": "Semaine",
            "prev-month": "Mois",
            "prev-year": "Année",
            next: "Suivant",
            "next-week": "Semaine",
            "next-month": "Mois",
            "next-year": "Année",
            "less-than": "L'intervalle ne doit pas être supérieure à %d jours",
            "more-than": "L'intervalle ne doit pas être inférieure à %d jours",
            "default-more": "Merci de choisir une intervalle supérieure à %d jours",
            "default-single": "Merci de choisir une date",
            "default-less": "Merci de choisir une intervalle inférieure %d jours",
            "default-range": "Merci de choisir une intervalle comprise entre %d et %d jours",
            "default-default": "Merci de choisir une date"
        },
        hu: {
            selected: "Kiválasztva:",
            day: "Nap",
            days: "Nap",
            apply: "Ok",
            "week-1": "h",
            "week-2": "k",
            "week-3": "sz",
            "week-4": "cs",
            "week-5": "p",
            "week-6": "sz",
            "week-7": "v",
            "month-name": ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
            shortcuts: "Gyorsválasztó",
            past: "Múlt",
            following: "Következő",
            previous: "Előző",
            "prev-week": "Hét",
            "prev-month": "Hónap",
            "prev-year": "Év",
            next: "Következő",
            "next-week": "Hét",
            "next-month": "Hónap",
            "next-year": "Év",
            "less-than": "A kiválasztás nem lehet több %d napnál",
            "more-than": "A kiválasztás nem lehet több %d napnál",
            "default-more": "Válassz ki egy időszakot ami hosszabb mint %d nap",
            "default-single": "Válassz egy napot",
            "default-less": "Válassz ki egy időszakot ami rövidebb mint %d nap",
            "default-range": "Válassz ki egy %d - %d nap hosszú időszakot",
            "default-default": "Válassz ki egy időszakot"
        },
        it: {
            selected: "Selezionati:",
            day: "Giorno",
            days: "Giorni",
            apply: "Chiudi",
            "week-1": "lu",
            "week-2": "ma",
            "week-3": "me",
            "week-4": "gi",
            "week-5": "ve",
            "week-6": "sa",
            "week-7": "do",
            "month-name": ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
            shortcuts: "Scorciatoie",
            past: "Scorso",
            following: "Successivo",
            previous: "Precedente",
            "prev-week": "Settimana",
            "prev-month": "Mese",
            "prev-year": "Anno",
            next: "Prossimo",
            "next-week": "Settimana",
            "next-month": "Mese",
            "next-year": "Anno",
            "less-than": "L'intervallo non dev'essere maggiore di %d giorni",
            "more-than": "L'intervallo non dev'essere minore di %d giorni",
            "default-more": "Seleziona un intervallo maggiore di %d giorni",
            "default-single": "Seleziona una data",
            "default-less": "Seleziona un intervallo minore di %d giorni",
            "default-range": "Seleziona un intervallo compreso tra i %d e i %d giorni",
            "default-default": "Seleziona un intervallo di date"
        },
        ko: {
            selected: "기간:",
            day: "일",
            days: "일간",
            apply: "닫기",
            "week-1": "월",
            "week-2": "화",
            "week-3": "수",
            "week-4": "목",
            "week-5": "금",
            "week-6": "토",
            "week-7": "일",
            "week-number": "주",
            "month-name": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            shortcuts: "단축키들",
            past: "지난(오늘기준)",
            following: "이후(오늘기준)",
            previous: "이전",
            "prev-week": "1주",
            "prev-month": "1달",
            "prev-year": "1년",
            next: "다음",
            "next-week": "1주",
            "next-month": "1달",
            "next-year": "1년",
            "less-than": "날짜 범위는 %d 일보다 많을 수 없습니다",
            "more-than": "날짜 범위는 %d 일보다 작을 수 없습니다",
            "default-more": "날짜 범위를 %d 일보다 길게 선택해 주세요",
            "default-single": "날짜를 선택해 주세요",
            "default-less": "%d 일보다 작은 날짜를 선택해 주세요",
            "default-range": "%d와 %d 일 사이의 날짜 범위를 선택해 주세요",
            "default-default": "날짜 범위를 선택해 주세요",
            time: "시각",
            hour: "시",
            minute: "분"
        },
        no: {
            selected: "Valgt:",
            day: "Dag",
            days: "Dager",
            apply: "Lukk",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "on",
            "week-4": "to",
            "week-5": "fr",
            "week-6": "lø",
            "week-7": "sø",
            "month-name": ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            shortcuts: "Snarveier",
            "custom-values": "Egendefinerte Verdier",
            past: "Over",
            following: "Følger",
            previous: "Forrige",
            "prev-week": "Uke",
            "prev-month": "Måned",
            "prev-year": "År",
            next: "Neste",
            "next-week": "Uke",
            "next-month": "Måned",
            "next-year": "År",
            "less-than": "Datoperioden skal ikkje være lengre enn %d dager",
            "more-than": "Datoperioden skal ikkje være kortere enn %d dager",
            "default-more": "Vennligst velg ein datoperiode lengre enn %d dager",
            "default-single": "Vennligst velg ein dato",
            "default-less": "Vennligst velg ein datoperiode mindre enn %d dager",
            "default-range": "Vennligst velg ein datoperiode mellom %d og %d dager",
            "default-default": "Vennligst velg ein datoperiode",
            time: "Tid",
            hour: "Time",
            minute: "Minutter"
        },
        nl: {
            selected: "Geselecteerd:",
            day: "Dag",
            days: "Dagen",
            apply: "Ok",
            "week-1": "ma",
            "week-2": "di",
            "week-3": "wo",
            "week-4": "do",
            "week-5": "vr",
            "week-6": "za",
            "week-7": "zo",
            "month-name": ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            shortcuts: "Snelkoppelingen",
            "custom-values": "Aangepaste waarden",
            past: "Verleden",
            following: "Komend",
            previous: "Vorige",
            "prev-week": "Week",
            "prev-month": "Maand",
            "prev-year": "Jaar",
            next: "Volgende",
            "next-week": "Week",
            "next-month": "Maand",
            "next-year": "Jaar",
            "less-than": "Interval moet langer dan %d dagen zijn",
            "more-than": "Interval mag niet minder dan %d dagen zijn",
            "default-more": "Selecteer een interval langer dan %dagen",
            "default-single": "Selecteer een datum",
            "default-less": "Selecteer een interval minder dan %d dagen",
            "default-range": "Selecteer een interval tussen %d en %d dagen",
            "default-default": "Selecteer een interval",
            time: "Tijd",
            hour: "Uur",
            minute: "Minuut"
        },
        ru: {
            selected: "Выбрано:",
            day: "День",
            days: "Дней",
            apply: "Применить",
            "week-1": "пн",
            "week-2": "вт",
            "week-3": "ср",
            "week-4": "чт",
            "week-5": "пт",
            "week-6": "сб",
            "week-7": "вс",
            "month-name": ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
            shortcuts: "Быстрый выбор",
            "custom-values": "Пользовательские значения",
            past: "Прошедшие",
            following: "Следующие",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "Неделя",
            "prev-month": "Месяц",
            "prev-year": "Год",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "Неделя",
            "next-month": "Месяц",
            "next-year": "Год",
            "less-than": "Диапазон не может быть больше %d дней",
            "more-than": "Диапазон не может быть меньше %d дней",
            "default-more": "Пожалуйста выберите диапазон больше %d дней",
            "default-single": "Пожалуйста выберите дату",
            "default-less": "Пожалуйста выберите диапазон меньше %d дней",
            "default-range": "Пожалуйста выберите диапазон между %d и %d днями",
            "default-default": "Пожалуйста выберите диапазон",
            time: "Время",
            hour: "Часы",
            minute: "Минуты"
        },
        uk: {
            selected: "Вибрано:",
            day: "День",
            days: "Днів",
            apply: "Застосувати",
            "week-1": "пн",
            "week-2": "вт",
            "week-3": "ср",
            "week-4": "чт",
            "week-5": "пт",
            "week-6": "сб",
            "week-7": "нд",
            "month-name": ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"],
            shortcuts: "Швидкий вибір",
            "custom-values": "Значення користувача",
            past: "Минулі",
            following: "Наступні",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "Тиждень",
            "prev-month": "Місяць",
            "prev-year": "Рік",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "Тиждень",
            "next-month": "Місяць",
            "next-year": "Рік",
            "less-than": "Діапазон не може бути більш ніж %d днів",
            "more-than": "Діапазон не може бути меньш ніж %d днів",
            "default-more": "Будь ласка виберіть діапазон більше %d днів",
            "default-single": "Будь ласка виберіть дату",
            "default-less": "Будь ласка виберіть діапазон менше %d днів",
            "default-range": "Будь ласка виберіть діапазон між %d та %d днями",
            "default-default": "Будь ласка виберіть діапазон",
            time: "Час",
            hour: "Години",
            minute: "Хвилини"
        },
        pl: {
            selected: "Wybrany:",
            day: "Dzień",
            days: "Dni",
            apply: "Zamknij",
            "week-1": "pon",
            "week-2": "wt",
            "week-3": "śr",
            "week-4": "czw",
            "week-5": "pt",
            "week-6": "so",
            "week-7": "nd",
            "month-name": ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
            shortcuts: "Skróty",
            "custom-values": "Niestandardowe wartości",
            past: "Przeszłe",
            following: "Następne",
            previous: "Poprzednie",
            "prev-week": "tydzień",
            "prev-month": "miesiąc",
            "prev-year": "rok",
            next: "Następny",
            "next-week": "tydzień",
            "next-month": "miesiąc",
            "next-year": "rok",
            "less-than": "Okres nie powinien być dłuższy niż %d dni",
            "more-than": "Okres nie powinien być krótszy niż  %d ni",
            "default-more": "Wybierz okres dłuższy niż %d dni",
            "default-single": "Wybierz datę",
            "default-less": "Wybierz okres krótszy niż %d dni",
            "default-range": "Wybierz okres trwający od %d do %d dni",
            "default-default": "Wybierz okres",
            time: "Czas",
            hour: "Godzina",
            minute: "Minuta"
        },
        se: {
            selected: "Vald:",
            day: "dag",
            days: "dagar",
            apply: "godkänn",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "on",
            "week-4": "to",
            "week-5": "fr",
            "week-6": "lö",
            "week-7": "sö",
            "month-name": ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"],
            shortcuts: "genvägar",
            "custom-values": "Anpassade värden",
            past: "över",
            following: "följande",
            previous: "förra",
            "prev-week": "vecka",
            "prev-month": "månad",
            "prev-year": "år",
            next: "nästa",
            "next-week": "vecka",
            "next-month": "måned",
            "next-year": "år",
            "less-than": "Datumintervall bör inte vara mindre än %d dagar",
            "more-than": "Datumintervall bör inte vara mer än %d dagar",
            "default-more": "Välj ett datumintervall längre än %d dagar",
            "default-single": "Välj ett datum",
            "default-less": "Välj ett datumintervall mindre än %d dagar",
            "default-range": "Välj ett datumintervall mellan %d och %d dagar",
            "default-default": "Välj ett datumintervall",
            time: "tid",
            hour: "timme",
            minute: "minut"
        },
        pt: {
            selected: "Selecionado:",
            day: "Dia",
            days: "Dias",
            apply: "Fechar",
            "week-1": "seg",
            "week-2": "ter",
            "week-3": "qua",
            "week-4": "qui",
            "week-5": "sex",
            "week-6": "sab",
            "week-7": "dom",
            "week-number": "N",
            "month-name": ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
            shortcuts: "Atalhos",
            "custom-values": "Valores Personalizados",
            past: "Passado",
            following: "Seguinte",
            previous: "Anterior",
            "prev-week": "Semana",
            "prev-month": "Mês",
            "prev-year": "Ano",
            next: "Próximo",
            "next-week": "Próxima Semana",
            "next-month": "Próximo Mês",
            "next-year": "Próximo Ano",
            "less-than": "O período selecionado não deve ser maior que %d dias",
            "more-than": "O período selecionado não deve ser menor que %d dias",
            "default-more": "Selecione um período superior a %d dias",
            "default-single": "Selecione uma data",
            "default-less": "Selecione um período inferior a %d dias",
            "default-range": "Selecione um período de %d a %d dias",
            "default-default": "Selecione um período",
            time: "Tempo",
            hour: "Hora",
            minute: "Minuto"
        },
        tc: {
            selected: "已選擇:",
            day: "天",
            days: "天",
            apply: "確定",
            "week-1": "一",
            "week-2": "二",
            "week-3": "三",
            "week-4": "四",
            "week-5": "五",
            "week-6": "六",
            "week-7": "日",
            "week-number": "週",
            "month-name": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            shortcuts: "快速選擇",
            past: "過去",
            following: "將來",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "上週",
            "prev-month": "上個月",
            "prev-year": "去年",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "下週",
            "next-month": "下個月",
            "next-year": "明年",
            "less-than": "所選日期範圍不能大於%d天",
            "more-than": "所選日期範圍不能小於%d天",
            "default-more": "請選擇大於%d天的日期範圍",
            "default-less": "請選擇少於%d天的日期範圍",
            "default-range": "請選擇%d天到%d天的日期範圍",
            "default-single": "請選擇一個日期",
            "default-default": "請選擇一個日期範圍",
            time: "日期",
            hour: "小時",
            minute: "分鐘"
        },
        ja: {
            selected: "選択しました:",
            day: "日",
            days: "日",
            apply: "確定",
            "week-1": "月",
            "week-2": "火",
            "week-3": "水",
            "week-4": "木",
            "week-5": "金",
            "week-6": "土",
            "week-7": "日",
            "month-name": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            shortcuts: "クイック選択",
            past: "過去",
            following: "将来",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "先週",
            "prev-month": "先月",
            "prev-year": "昨年",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "来週",
            "next-month": "来月",
            "next-year": "来年",
            "less-than": "日付の範囲は％d日以上にすべきではありません",
            "more-than": "日付の範囲は％d日を下回ってはいけません",
            "default-more": "％d日よりも長い期間を選択してください",
            "default-less": "％d日未満の期間を選択してください",
            "default-range": "％d日と％d日の間の日付範囲を選択してください",
            "default-single": "日付を選択してください",
            "default-default": "日付範囲を選択してください",
            time: "時間",
            hour: "時間",
            minute: "分"
        },
        da: {
            selected: "Valgt:",
            day: "Dag",
            days: "Dage",
            apply: "Luk",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "on",
            "week-4": "to",
            "week-5": "fr",
            "week-6": "lø",
            "week-7": "sø",
            "month-name": ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"],
            shortcuts: "genveje",
            "custom-values": "Brugerdefinerede værdier",
            past: "Forbi",
            following: "Følgende",
            previous: "Forrige",
            "prev-week": "uge",
            "prev-month": "måned",
            "prev-year": "år",
            next: "Næste",
            "next-week": "uge",
            "next-month": "måned",
            "next-year": "år",
            "less-than": "Dato interval bør ikke være med end %d dage",
            "more-than": "Dato interval bør ikke være mindre end %d dage",
            "default-more": "Vælg datointerval længere end %d dage",
            "default-single": "Vælg dato",
            "default-less": "Vælg datointerval mindre end %d dage",
            "default-range": "Vælg datointerval mellem %d og %d dage",
            "default-default": "Vælg datointerval",
            time: "tid",
            hour: "time",
            minute: "minut"
        },
        fi: {
            selected: "Valittu:",
            day: "Päivä",
            days: "Päivää",
            apply: "Sulje",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "ke",
            "week-4": "to",
            "week-5": "pe",
            "week-6": "la",
            "week-7": "su",
            "week-number": "V",
            "month-name": ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
            shortcuts: "Pikavalinnat",
            "custom-values": "Mukautetut Arvot",
            past: "Menneet",
            following: "Tulevat",
            previous: "Edellinen",
            "prev-week": "Viikko",
            "prev-month": "Kuukausi",
            "prev-year": "Vuosi",
            next: "Seuraava",
            "next-week": "Viikko",
            "next-month": "Kuukausi",
            "next-year": "Vuosi",
            "less-than": "Aikajakson tulisi olla vähemmän kuin %d päivää",
            "more-than": "Aikajakson ei tulisi olla vähempää kuin %d päivää",
            "default-more": "Valitse pidempi aikajakso kuin %d päivää",
            "default-single": "Valitse päivä",
            "default-less": "Valitse lyhyempi aikajakso kuin %d päivää",
            "default-range": "Valitse aikajakso %d ja %d päivän väliltä",
            "default-default": "Valitse aikajakso",
            time: "Aika",
            hour: "Tunti",
            minute: "Minuutti"
        },
        cat: {
            selected: "Seleccionats:",
            day: "Dia",
            days: "Dies",
            apply: "Tanca",
            "week-1": "Dl",
            "week-2": "Dm",
            "week-3": "Dc",
            "week-4": "Dj",
            "week-5": "Dv",
            "week-6": "Ds",
            "week-7": "Dg",
            "week-number": "S",
            "month-name": ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
            shortcuts: "Dreçeres",
            "custom-values": "Valors personalitzats",
            past: "Passat",
            following: "Futur",
            previous: "Anterior",
            "prev-week": "Setmana",
            "prev-month": "Mes",
            "prev-year": "Any",
            next: "Següent",
            "next-week": "Setmana",
            "next-month": "Mes",
            "next-year": "Any",
            "less-than": "El període no hauria de ser de més de %d dies",
            "more-than": "El període no hauria de ser de menys de %d dies",
            "default-more": "Perfavor selecciona un període més gran de %d dies",
            "default-single": "Perfavor selecciona una data",
            "default-less": "Perfavor selecciona un període de menys de %d dies",
            "default-range": "Perfavor selecciona un període d'entre %d i %d dies",
            "default-default": "Perfavor selecciona un període",
            time: "Temps",
            hour: "Hora",
            minute: "Minut"
        },
        sk: {
            selected: "Vybrané:",
            day: "Deň",
            days: "Dni",
            apply: "Zavrieť",
            "week-1": "po",
            "week-2": "út",
            "week-3": "st",
            "week-4": "št",
            "week-5": "pi",
            "week-6": "so",
            "week-7": "ne",
            "week-number": "T",
            "month-name": ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"],
            shortcuts: "Skratky",
            "custom-values": "Vlastné hodnoty",
            past: "po",
            following: "nasledujúci",
            previous: "predchádzajúci",
            "prev-week": "týždeň",
            "prev-month": "mesiac",
            "prev-year": "rok",
            next: "ďalší",
            "next-week": "týždeň",
            "next-month": "mesiac",
            "next-year": "rok",
            "less-than": "Rozsah dátumu by nemal byť väčší ako %d dní",
            "more-than": "Rozsah dátumu by nemal byť menší ako %d dní",
            "default-more": "Prosím zvoľte rozsah dlhší ako %d dní",
            "default-single": "Prosím zvoľte dátum",
            "default-less": "Prosím zvoľte rozsah menší ako %d dní",
            "default-range": "Prosím zvoľte rozsah medzi %d a %d dňami",
            "default-default": "Prosím zvoľte rozsah",
            time: "Čas",
            hour: "Hodina",
            minute: "Minúta"
        }
    }, U.fn.dateRangePicker = function (f) {
        f || (f = {}), (f = U.extend(!0, {
            autoClose: !1,
            format: "YYYY-MM-DD",
            separator: " to ",
            language: "auto",
            startOfWeek: "sunday",
            getValue: function () {
                return U(this).val()
            },
            setValue: function (e) {
                U(this).attr("readonly") || U(this).is(":disabled") || e == U(this).val() || U(this).val(e)
            },
            startDate: !1,
            endDate: !1,
            time: {enabled: !1},
            minDays: 0,
            maxDays: 0,
            showShortcuts: !1,
            shortcuts: {},
            customShortcuts: [],
            inline: !1,
            container: "body",
            alwaysOpen: !1,
            singleDate: !1,
            lookBehind: !1,
            batchMode: !1,
            duration: 200,
            stickyMonths: !1,
            dayDivAttrs: [],
            dayTdAttrs: [],
            selectForward: !1,
            selectBackward: !1,
            applyBtnClass: "",
            singleMonth: "auto",
            hoveringTooltip: function (e, t, a) {
                return 1 < e ? e + " " + K("days") : ""
            },
            showTopbar: !0,
            swapTime: !1,
            showWeekNumbers: !1,
            getWeekNumber: function (e) {
                return Q(e).format("w")
            },
            customOpenAnimation: null,
            customCloseAnimation: null,
            customArrowPrevSymbol: null,
            customArrowNextSymbol: null,
            monthSelect: !1,
            yearSelect: !1
        }, f)).start = !1, f.end = !1, f.startWeek = !1, f.isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints, f.isTouchDevice && (f.hoveringTooltip = !1), "auto" == f.singleMonth && (f.singleMonth = U(window).width() < 480), f.singleMonth && (f.stickyMonths = !1), f.showTopbar || (f.autoClose = !0), f.startDate && "string" == typeof f.startDate && (f.startDate = Q(f.startDate, f.format).toDate()), f.endDate && "string" == typeof f.endDate && (f.endDate = Q(f.endDate, f.format).toDate()), f.yearSelect && "boolean" == typeof f.yearSelect && (f.yearSelect = function (e) {
            return [e - 5, e + 5]
        });
        var m, e, r = function () {
            {
                if ("auto" == f.language) {
                    var e = navigator.language ? navigator.language : navigator.browserLanguage;
                    return e && (e = e.toLowerCase()) in U.dateRangePickerLanguages ? U.dateRangePickerLanguages[e] : U.dateRangePickerLanguages.default
                }
                return f.language && f.language in U.dateRangePickerLanguages ? U.dateRangePickerLanguages[f.language] : U.dateRangePickerLanguages.default
            }
        }(), s = !1, n = this, o = U(n).get(0);
        return U(this).off(".datepicker").on("click.datepicker", function (e) {
            m.is(":visible") || t(f.duration)
        }).on("change.datepicker", function (e) {
            a()
        }).on("keyup.datepicker", function () {
            try {
                clearTimeout(e)
            } catch (e) {
            }
            e = setTimeout(function () {
                a()
            }, 2e3)
        }), function () {
            var t = this;
            if (U(this).data("date-picker-opened")) return void B();
            U(this).data("date-picker-opened", !0), (m = function () {
                var e, t = '<div class="date-picker-wrapper';
                f.extraClass && (t += " " + f.extraClass + " "), f.singleDate && (t += " single-date "), f.showShortcuts || (t += " no-shortcuts "), f.showTopbar || (t += " no-topbar "), f.customTopBar && (t += " custom-topbar "), t += '">', f.showTopbar && (t += '<div class="drp_top-bar">', f.customTopBar ? ("function" == typeof f.customTopBar && (f.customTopBar = f.customTopBar()), t += '<div class="custom-top">' + f.customTopBar + "</div>") : (t += '<div class="normal-top"><span class="selection-top">' + K("selected") + ' </span> <b class="start-day">...</b>', f.singleDate || (t += ' <span class="separator-day">' + f.separator + '</span> <b class="end-day">...</b> <i class="selected-days">(<span class="selected-days-num">3</span> ' + K("days") + ")</i>"), t += "</div>", t += '<div class="error-top">error</div><div class="default-top">default</div>'), t += '<input type="button" class="apply-btn disabled' + (!(e = "") === f.autoClose && (e += " hide"), "" !== f.applyBtnClass && (e += " " + f.applyBtnClass), e) + '" value="' + K("apply") + '" />', t += "</div>");
                var a = f.showWeekNumbers ? 6 : 5, n = "&lt;";
                f.customArrowPrevSymbol && (n = f.customArrowPrevSymbol);
                var r = "&gt;";
                if (f.customArrowNextSymbol && (r = f.customArrowNextSymbol), t += '<div class="month-wrapper">   <table class="month1" cellspacing="0" border="0" cellpadding="0">       <thead>           <tr class="caption">               <th>                   <span class="prev">' + n + '                   </span>               </th>               <th colspan="' + a + '" class="month-name">               </th>               <th>' + (f.singleDate || !f.stickyMonths ? '<span class="next">' + r + "</span>" : "") + '               </th>           </tr>           <tr class="week-name">' + E() + "       </thead>       <tbody></tbody>   </table>", f.singleMonth || (t += '<div class="gap">' + function () {
                    for (var e = ['<div class="gap-top-mask"></div><div class="gap-bottom-mask"></div><div class="gap-lines">'], t = 0; t < 20; t++) e.push('<div class="gap-line"><div class="gap-1"></div><div class="gap-2"></div><div class="gap-3"></div></div>');
                    return e.push("</div>"), e.join("")
                }() + '</div><table class="month2" cellspacing="0" border="0" cellpadding="0">   <thead>   <tr class="caption">       <th>' + (f.stickyMonths ? "" : '<span class="prev">' + n + "</span>") + '       </th>       <th colspan="' + a + '" class="month-name">       </th>       <th>           <span class="next">' + r + '</span>       </th>   </tr>   <tr class="week-name">' + E() + "   </thead>   <tbody></tbody></table>"), t += '<div class="dp-clearfix"></div><div class="time"><div class="time1"></div>', f.singleDate || (t += '<div class="time2"></div>'), t += '</div><div class="dp-clearfix"></div></div>', t += '<div class="footer">', f.showShortcuts) {
                    t += '<div class="shortcuts"><b>' + K("shortcuts") + "</b>";
                    var s = f.shortcuts;
                    if (s) {
                        var o;
                        if (s["prev-days"] && 0 < s["prev-days"].length) {
                            t += '&nbsp;<span class="prev-days">' + K("past");
                            for (var i = 0; i < s["prev-days"].length; i++) o = s["prev-days"][i], o += 1 < s["prev-days"][i] ? K("days") : K("day"), t += ' <a href="javascript:;" shortcut="day,-' + s["prev-days"][i] + '">' + o + "</a>";
                            t += "</span>"
                        }
                        if (s["next-days"] && 0 < s["next-days"].length) {
                            t += '&nbsp;<span class="next-days">' + K("following");
                            for (var i = 0; i < s["next-days"].length; i++) o = s["next-days"][i], o += 1 < s["next-days"][i] ? K("days") : K("day"), t += ' <a href="javascript:;" shortcut="day,' + s["next-days"][i] + '">' + o + "</a>";
                            t += "</span>"
                        }
                        if (s.prev && 0 < s.prev.length) {
                            t += '&nbsp;<span class="prev-buttons">' + K("previous");
                            for (var i = 0; i < s.prev.length; i++) o = K("prev-" + s.prev[i]), t += ' <a href="javascript:;" shortcut="prev,' + s.prev[i] + '">' + o + "</a>";
                            t += "</span>"
                        }
                        if (s.next && 0 < s.next.length) {
                            t += '&nbsp;<span class="next-buttons">' + K("next");
                            for (var i = 0; i < s.next.length; i++) o = K("next-" + s.next[i]), t += ' <a href="javascript:;" shortcut="next,' + s.next[i] + '">' + o + "</a>";
                            t += "</span>"
                        }
                    }
                    if (f.customShortcuts) for (var i = 0; i < f.customShortcuts.length; i++) {
                        var d = f.customShortcuts[i];
                        t += '&nbsp;<span class="custom-shortcut"><a href="javascript:;" shortcut="custom">' + d.name + "</a></span>"
                    }
                    t += "</div>"
                }
                if (f.showCustomValues && (t += '<div class="customValues"><b>' + (f.customValueLabel || K("custom-values")) + "</b>", f.customValues)) for (var i = 0; i < f.customValues.length; i++) {
                    var l = f.customValues[i];
                    t += '&nbsp;<span class="custom-value"><a href="javascript:;" custom="' + l.value + '">' + l.name + "</a></span>"
                }
                return U(t += "</div></div>")
            }().hide()).append('<div class="date-range-length-tip"></div>'), U(f.container).append(m), f.inline ? m.addClass("inline-wrapper") : i();
            f.alwaysOpen && m.find(".apply-btn").hide();
            var e = _();
            if (G(e), f.time.enabled) if (f.startDate && f.endDate || f.start && f.end) Y(Q(f.start || f.startDate).toDate(), "time1"), Y(Q(f.end || f.endDate).toDate(), "time2"); else {
                var a = f.defaultEndTime ? f.defaultEndTime : e;
                Y(e, "time1"), Y(a, "time2")
            }
            var n = "";
            n = f.singleDate ? K("default-single") : f.minDays && f.maxDays ? K("default-range") : f.minDays ? K("default-more") : f.maxDays ? K("default-less") : K("default-default");
            m.find(".default-top").html(n.replace(/\%d/, f.minDays).replace(/\%d/, f.maxDays)), f.singleMonth ? m.addClass("single-month") : m.addClass("two-months");
            setTimeout(function () {
                l(), s = !0
            }, 0), m.on("click", function (e) {
                e.stopPropagation()
            }), U(document).on("click.datepicker", Z), m.find(".next").on("click", function () {
                f.stickyMonths ? function (e) {
                    var t = F(f.month1), a = F(f.month2);
                    if (q(a)) return;
                    if (!f.singleDate && 0 <= L(t, a)) return;
                    O(t, "month1"), O(a, "month2"), C()
                }() : function (e) {
                    var t = U(e).parents("table").hasClass("month2"), a = t ? f.month2 : f.month1;
                    if (a = F(a), !f.singleMonth && !f.singleDate && !t && 0 <= L(a, f.month2) || q(a)) return;
                    O(a, t ? "month2" : "month1"), I()
                }(this)
            }), m.find(".prev").on("click", function () {
                f.stickyMonths ? function (e) {
                    var t = R(f.month1), a = R(f.month2);
                    if (q(t)) return;
                    if (!f.singleDate && L(a, t) <= 0) return;
                    O(a, "month2"), O(t, "month1"), C()
                }() : function (e) {
                    var t = U(e).parents("table").hasClass("month2"), a = t ? f.month2 : f.month1;
                    if (a = R(a), t && L(a, f.month1) <= 0 || q(a)) return;
                    O(a, t ? "month2" : "month1"), I()
                }(this)
            }), m.attr("unselectable", "on").css("user-select", "none").on("selectstart", function (e) {
                return e.preventDefault(), !1
            }), m.find(".apply-btn").on("click", function () {
                B();
                var e = W(new Date(f.start)) + f.separator + W(new Date(f.end));
                U(t).trigger("datepicker-apply", {value: e, date1: new Date(f.start), date2: new Date(f.end)})
            }), m.find("[custom]").on("click", function () {
                var e = U(this).attr("custom");
                f.start = !1, f.end = !1, m.find(".day.checked").removeClass("checked"), f.setValue.call(o, e), M(), S(!0), C(), f.autoClose && B()
            }), m.find("[shortcut]").on("click", function () {
                var e, t = U(this).attr("shortcut"), a = new Date, n = !1;
                if (-1 != t.indexOf("day")) {
                    var r = parseInt(t.split(",", 2)[1], 10);
                    n = new Date((new Date).getTime() + 864e5 * r), a = new Date(a.getTime() + 864e5 * (0 < r ? 1 : -1))
                } else if (-1 != t.indexOf("week")) {
                    var s;
                    for (e = -1 != t.indexOf("prev,") ? -1 : 1, s = 1 == e ? "monday" == f.startOfWeek ? 1 : 0 : "monday" == f.startOfWeek ? 0 : 6, a = new Date(a.getTime() - 864e5); a.getDay() != s;) a = new Date(a.getTime() + 864e5 * e);
                    n = new Date(a.getTime() + 864e5 * e * 6)
                } else if (-1 != t.indexOf("month")) e = -1 != t.indexOf("prev,") ? -1 : 1, (n = 1 == e ? F(a) : R(a)).setDate(1), (a = F(n)).setDate(1), a = new Date(a.getTime() - 864e5); else if (-1 != t.indexOf("year")) e = -1 != t.indexOf("prev,") ? -1 : 1, (n = new Date).setFullYear(a.getFullYear() + e), n.setMonth(0), n.setDate(1), a.setFullYear(a.getFullYear() + e), a.setMonth(11), a.setDate(31); else if ("custom" == t) {
                    var o = U(this).html();
                    if (f.customShortcuts && 0 < f.customShortcuts.length) for (var i = 0; i < f.customShortcuts.length; i++) {
                        var d = f.customShortcuts[i];
                        if (d.name == o) {
                            var l = [];
                            if ((l = d.dates.call()) && 2 == l.length && (n = l[0], a = l[1]), l && 1 == l.length) {
                                var u = l[0];
                                O(u, "month1"), O(F(u), "month2"), I()
                            }
                            break
                        }
                    }
                }
                n && a && (j(n, a), M())
            }), m.find(".time1 input[type=range]").on("change touchmove", function (e) {
                var t = e.target, a = "hour" == t.name ? U(t).val().replace(/^(\d{1})$/, "0$1") : void 0,
                    n = "minute" == t.name ? U(t).val().replace(/^(\d{1})$/, "0$1") : void 0;
                c("time1", a, n)
            }), m.find(".time2 input[type=range]").on("change touchmove", function (e) {
                var t = e.target, a = "hour" == t.name ? U(t).val().replace(/^(\d{1})$/, "0$1") : void 0,
                    n = "minute" == t.name ? U(t).val().replace(/^(\d{1})$/, "0$1") : void 0;
                c("time2", a, n)
            })
        }.call(this), f.alwaysOpen && t(0), U(this).data("dateRangePicker", {
            setStart: function (e) {
                return "string" == typeof e && (e = Q(e, f.format).toDate()), f.end = !1, T(e), this
            }, setEnd: function (e, t) {
                var a = new Date;
                return a.setTime(f.start), "string" == typeof e && (e = Q(e, f.format).toDate()), j(a, e, t), this
            }, setDateRange: function (e, t, a) {
                "string" == typeof e && "string" == typeof t && (e = Q(e, f.format).toDate(), t = Q(t, f.format).toDate()), j(e, t, a)
            }, clear: function () {
                f.start = !1, f.end = !1, m.find(".day.checked").removeClass("checked"), m.find(".day.last-date-selected").removeClass("last-date-selected"), m.find(".day.first-date-selected").removeClass("first-date-selected"), f.setValue.call(o, ""), M(), S(), C()
            }, close: B, open: t, redraw: N, getDatePicker: function () {
                return m
            }, resetMonthsView: G, destroy: function () {
                U(n).off(".datepicker"), U(n).data("dateRangePicker", ""), U(n).data("date-picker-opened", null), m.remove(), U(window).off("resize.datepicker", i), U(document).off("click.datepicker", Z)
            }
        }), U(window).on("resize.datepicker", i), this;

        function i() {
            if (!f.inline) {
                var e = U(n).offset();
                if ("relative" == U(f.container).css("position")) {
                    var t = U(f.container).offset(), a = Math.max(0, e.left + m.outerWidth() - U("body").width() + 16);
                    m.css({top: e.top - t.top + U(n).outerHeight() + 4, left: e.left - t.left - a})
                } else e.left < 460 ? m.css({
                    top: e.top + U(n).outerHeight() + parseInt(U("body").css("border-top") || 0, 10),
                    left: e.left
                }) : m.css({
                    top: e.top + U(n).outerHeight() + parseInt(U("body").css("border-top") || 0, 10),
                    left: e.left + U(n).width() - m.width() - 16
                })
            }
        }

        function t(e) {
            N(), a(), f.customOpenAnimation ? f.customOpenAnimation.call(m.get(0), function () {
                U(n).trigger("datepicker-opened", {relatedTarget: m})
            }) : m.slideDown(e, function () {
                U(n).trigger("datepicker-opened", {relatedTarget: m})
            }), U(n).trigger("datepicker-open", {relatedTarget: m}), I(), l(), i()
        }

        function a() {
            var e = f.getValue.call(o), t = e ? e.split(f.separator) : "";
            if (t && (1 == t.length && f.singleDate || 2 <= t.length)) {
                var a = f.format;
                a.match(/Do/) && (a = a.replace(/Do/, "D"), t[0] = t[0].replace(/(\d+)(th|nd|st)/, "$1"), 2 <= t.length && (t[1] = t[1].replace(/(\d+)(th|nd|st)/, "$1"))), s = !1, 2 <= t.length ? j(d(t[0], a, Q.locale(f.language)), d(t[1], a, Q.locale(f.language))) : 1 == t.length && f.singleDate && T(d(t[0], a, Q.locale(f.language))), s = !0
            }
        }

        function d(e, t, a) {
            return Q(e, t, a).isValid() ? Q(e, t, a).toDate() : Q().toDate()
        }

        function l() {
            var e = m.find(".gap").css("margin-left");
            e && (e = parseInt(e));
            var t = m.find(".month1").width(), a = m.find(".gap").width() + (e ? 2 * e : 0),
                n = m.find(".month2").width();
            m.find(".month-wrapper").width(t + a + n)
        }

        function u(e, t) {
            m.find("." + e + " input[type=range].hour-range").val(Q(t).hours()), m.find("." + e + " input[type=range].minute-range").val(Q(t).minutes()), c(e, Q(t).format("HH"), Q(t).format("mm"))
        }

        function h(e, t) {
            f[e] = parseInt(Q(parseInt(t)).hour(Q(f[e + "Time"]).format("HH"), "h").minute(Q(f[e + "Time"]).format("mm"), "m").valueOf())
        }

        function c(e, r, s) {
            switch (r && m.find("." + e + " .hour-val").text(r), s && m.find("." + e + " .minute-val").text(s), e) {
                case"time1":
                    f.start && t("start", Q(f.start)), t("startTime", Q(f.startTime || Q().valueOf()));
                    break;
                case"time2":
                    f.end && t("end", Q(f.end)), t("endTime", Q(f.endTime || Q().valueOf()))
            }

            function t(e, t) {
                var a = t.format("HH"), n = t.format("mm");
                f[e] = t.hour(r || a, "h").minute(s || n, "m").valueOf()
            }

            M(), S(), C()
        }

        function p(e) {
            var t = e;
            return "week-range" === f.batchMode ? t = "monday" === f.startOfWeek ? Q(parseInt(e)).startOf("isoweek").valueOf() : Q(parseInt(e)).startOf("week").valueOf() : "month-range" === f.batchMode && (t = Q(parseInt(e)).startOf("month").valueOf()), t
        }

        function v(e) {
            var t = e;
            return "week-range" === f.batchMode ? t = "monday" === f.startOfWeek ? Q(parseInt(e)).endOf("isoweek").valueOf() : Q(parseInt(e)).endOf("week").valueOf() : "month-range" === f.batchMode && (t = Q(parseInt(e)).endOf("month").valueOf()), t
        }

        function k(e) {
            if (!e.hasClass("invalid")) {
                var t = e.attr("time");
                if (e.addClass("checked"), f.singleDate ? (f.start = t, f.end = !1) : "week" === f.batchMode ? "monday" === f.startOfWeek ? (f.start = Q(parseInt(t)).startOf("isoweek").valueOf(), f.end = Q(parseInt(t)).endOf("isoweek").valueOf()) : (f.end = Q(parseInt(t)).endOf("week").valueOf(), f.start = Q(parseInt(t)).startOf("week").valueOf()) : "workweek" === f.batchMode ? (f.start = Q(parseInt(t)).day(1).valueOf(), f.end = Q(parseInt(t)).day(5).valueOf()) : "weekend" === f.batchMode ? (f.start = Q(parseInt(t)).day(6).valueOf(), f.end = Q(parseInt(t)).day(7).valueOf()) : "month" === f.batchMode ? (f.start = Q(parseInt(t)).startOf("month").valueOf(), f.end = Q(parseInt(t)).endOf("month").valueOf()) : f.start && f.end || !f.start && !f.end ? (f.start = p(t), f.end = !1) : f.start && (f.end = v(t), f.time.enabled && h("end", f.end)), f.time.enabled && (f.start && h("start", f.start), f.end && h("end", f.end)), !f.singleDate && f.start && f.end && f.start > f.end) {
                    var a = f.end;
                    f.end = v(f.start), f.start = p(a), f.time.enabled && f.swapTime && (u("time1", f.start), u("time2", f.end))
                }
                f.start = parseInt(f.start), f.end = parseInt(f.end), b(), f.start && !f.end && (U(n).trigger("datepicker-first-date-selected", {date1: new Date(f.start)}), y(e)), w(), M(), S(), C(), x()
            }
        }

        function g(e) {
            if (e = parseInt(e, 10), f.startDate && H(e, f.startDate) < 0) return !1;
            if (f.endDate && 0 < H(e, f.endDate)) return !1;
            if (f.start && !f.end && !f.singleDate) {
                if (0 < f.maxDays && z(e, f.start) > f.maxDays) return !1;
                if (0 < f.minDays && z(e, f.start) < f.minDays) return !1;
                if (f.selectForward && e < f.start) return !1;
                if (f.selectBackward && e > f.start) return !1;
                if (f.beforeShowDay && "function" == typeof f.beforeShowDay) {
                    for (var t = !0, a = e; 1 < z(a, f.start);) {
                        if (!f.beforeShowDay(new Date(a))[0]) {
                            t = !1;
                            break
                        }
                        if (Math.abs(a - f.start) < 864e5) break;
                        a > f.start && (a -= 864e5), a < f.start && (a += 864e5)
                    }
                    if (!t) return !1
                }
            }
            return !0
        }

        function w() {
            return m.find(".day.invalid.tmp").removeClass("tmp invalid").addClass("valid"), f.start && !f.end && m.find(".day.toMonth.valid").each(function () {
                g(parseInt(U(this).attr("time"), 10)) ? U(this).addClass("valid tmp").removeClass("invalid") : U(this).addClass("invalid tmp").removeClass("valid")
            }), !0
        }

        function y(e) {
            var t = parseInt(e.attr("time")), a = "";
            if (e.hasClass("has-tooltip") && e.attr("data-tooltip")) a = '<span class="tooltip-content">' + e.attr("data-tooltip") + "</span>"; else if (!e.hasClass("invalid")) if (f.singleDate) m.find(".day.hovering").removeClass("hovering"), e.addClass("hovering"); else if (m.find(".day").each(function () {
                var e = parseInt(U(this).attr("time"));
                f.start, f.end;
                e == t ? U(this).addClass("hovering") : U(this).removeClass("hovering"), f.start && !f.end && (f.start < e && e <= t || f.start > e && t <= e) ? U(this).addClass("hovering") : U(this).removeClass("hovering")
            }), f.start && !f.end) {
                var n = z(t, f.start);
                f.hoveringTooltip && ("function" == typeof f.hoveringTooltip ? a = f.hoveringTooltip(n, f.start, t) : !0 === f.hoveringTooltip && 1 < n && (a = n + " " + K("days")))
            }
            if (a) {
                var r = e.offset(), s = m.offset(), o = r.left - s.left, i = r.top - s.top;
                o += e.width() / 2;
                var d = m.find(".date-range-length-tip"),
                    l = d.css({visibility: "hidden", display: "none"}).html(a).width(), u = d.height();
                o -= l / 2, i -= u, setTimeout(function () {
                    d.css({left: o, top: i, display: "block", visibility: "visible"})
                }, 10)
            } else m.find(".date-range-length-tip").hide()
        }

        function b() {
            m.find(".day.hovering").removeClass("hovering"), m.find(".date-range-length-tip").hide()
        }

        function D(e) {
            var t = e.val(), a = e.attr("name"), n = e.parents("table").hasClass("month1") ? "month1" : "month2",
                r = "month1" === n ? "month2" : "month1", s = !!f.startDate && Q(f.startDate),
                o = !!f.endDate && Q(f.endDate), i = Q(f[n])[a](t);
            s && i.isSameOrBefore(s) && (i = s.add("month2" === n ? 1 : 0, "month")), o && i.isSameOrAfter(o) && (i = o.add(f.singleMonth || "month1" !== n ? 0 : -1, "month")), O(i, n), "month1" === n ? (f.stickyMonths || Q(i).isSameOrAfter(f[r], "month")) && O(Q(i).add(1, "month"), r) : (f.stickyMonths || Q(i).isSameOrBefore(f[r], "month")) && O(Q(i).add(-1, "month"), r), I()
        }

        function x() {
            !0 === f.singleDate ? s && f.start && f.autoClose && B() : s && f.start && f.end && f.autoClose && B()
        }

        function M() {
            var e = Math.ceil((f.end - f.start) / 864e5) + 1;
            f.singleDate ? f.start && !f.end ? m.find(".drp_top-bar").removeClass("error").addClass("normal") : m.find(".drp_top-bar").removeClass("error").removeClass("normal") : f.maxDays && e > f.maxDays ? (f.start = !1, f.end = !1, m.find(".day").removeClass("checked"), m.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(K("less-than").replace("%d", f.maxDays))) : f.minDays && e < f.minDays ? (f.start = !1, f.end = !1, m.find(".day").removeClass("checked"), m.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(K("more-than").replace("%d", f.minDays))) : f.start || f.end ? m.find(".drp_top-bar").removeClass("error").addClass("normal") : m.find(".drp_top-bar").removeClass("error").removeClass("normal"), f.singleDate && f.start && !f.end || !f.singleDate && f.start && f.end ? m.find(".apply-btn").removeClass("disabled") : m.find(".apply-btn").addClass("disabled"), f.batchMode && (f.start && f.startDate && H(f.start, f.startDate) < 0 || f.end && f.endDate && 0 < H(f.end, f.endDate)) && (f.start = !1, f.end = !1, m.find(".day").removeClass("checked"))
        }

        function S(e, t) {
            var a;
            m.find(".start-day").html("..."), m.find(".end-day").html("..."), m.find(".selected-days").hide(), f.start && m.find(".start-day").html(W(new Date(parseInt(f.start)))), f.end && m.find(".end-day").html(W(new Date(parseInt(f.end)))), f.start && f.singleDate ? (m.find(".apply-btn").removeClass("disabled"), a = W(new Date(f.start)), f.setValue.call(o, a, W(new Date(f.start)), W(new Date(f.end))), s && !t && U(n).trigger("datepicker-change", {
                value: a,
                date1: new Date(f.start)
            })) : f.start && f.end ? (m.find(".selected-days").show().find(".selected-days-num").html(z(f.end, f.start)), m.find(".apply-btn").removeClass("disabled"), a = W(new Date(f.start)) + f.separator + W(new Date(f.end)), f.setValue.call(o, a, W(new Date(f.start)), W(new Date(f.end))), s && !t && U(n).trigger("datepicker-change", {
                value: a,
                date1: new Date(f.start),
                date2: new Date(f.end)
            })) : e ? m.find(".apply-btn").removeClass("disabled") : m.find(".apply-btn").addClass("disabled")
        }

        function z(e, t) {
            return Math.abs(Q(e).diff(Q(t), "d")) + 1
        }

        function j(e, t, a) {
            if (e.getTime() > t.getTime()) {
                var n = t;
                t = e, e = n, n = null
            }
            var r = !0;
            if (f.startDate && H(e, f.startDate) < 0 && (r = !1), f.endDate && 0 < H(t, f.endDate) && (r = !1), !r) return O(f.startDate, "month1"), O(F(f.startDate), "month2"), void I();
            f.start = e.getTime(), f.end = t.getTime(), f.time.enabled && (u("time1", e), u("time2", t)), (f.stickyMonths || 0 < H(e, t) && 0 === L(e, t)) && (f.lookBehind ? e = R(t) : t = F(e)), f.stickyMonths && !1 !== f.endDate && 0 < L(t, f.endDate) && (e = R(e), t = R(t)), f.stickyMonths || 0 === L(e, t) && (f.lookBehind ? e = R(t) : t = F(e)), O(e, "month1"), O(t, "month2"), I(), M(), S(!1, a), x()
        }

        function T(e) {
            var t = !0;
            if (f.startDate && H(e, f.startDate) < 0 && (t = !1), f.endDate && 0 < H(e, f.endDate) && (t = !1), t) {
                if (f.start = e.getTime(), f.time.enabled && u("time1", e), O(e, "month1"), !0 !== f.singleMonth) O(F(e), "month2");
                I(), S(), x()
            } else O(f.startDate, "month1")
        }

        function C() {
            (f.start || f.end) && (m.find(".day").each(function () {
                var e = parseInt(U(this).attr("time")), t = f.start, a = f.end;
                f.time.enabled && (e = Q(e).startOf("day").valueOf(), t = Q(t || Q().valueOf()).startOf("day").valueOf(), a = Q(a || Q().valueOf()).startOf("day").valueOf()), f.start && f.end && e <= a && t <= e || f.start && !f.end && Q(t).format("YYYY-MM-DD") == Q(e).format("YYYY-MM-DD") ? U(this).addClass("checked") : U(this).removeClass("checked"), f.start && Q(t).format("YYYY-MM-DD") == Q(e).format("YYYY-MM-DD") ? U(this).addClass("first-date-selected") : U(this).removeClass("first-date-selected"), f.end && Q(a).format("YYYY-MM-DD") == Q(e).format("YYYY-MM-DD") ? U(this).addClass("last-date-selected") : U(this).removeClass("last-date-selected")
            }), m.find(".week-number").each(function () {
                U(this).attr("data-start-time") == f.startWeek && U(this).addClass("week-number-selected")
            }))
        }

        function O(e, t) {
            var a = function (e, t) {
                var a = (e = Q(e)).get("month"), n = '<div class="month-element">' + A(a) + "</div>";
                if (!f.monthSelect) return n;
                var r = !!f.startDate && Q(f.startDate).add(f.singleMonth || "month2" !== t ? 0 : 1, "month"),
                    s = !!f.endDate && Q(f.endDate).add(f.singleMonth || "month1" !== t ? 0 : -1, "month"),
                    o = r && e.isSame(r, "year") ? r.get("month") : 0,
                    i = s && e.isSame(s, "year") ? s.get("month") : 11, d = Math.min(o, a), l = Math.max(i, a);
                if (d === l) return n;
                return P("month", V({
                    minSelectable: o,
                    maxSelectable: i,
                    minVisible: d,
                    maxVisible: l
                }, a, function (e) {
                    return A(e)
                }))
            }(e = Q(e).toDate(), t), n = function (e, t) {
                var a = (e = Q(e)).get("year"), n = '<div class="month-element">' + a + "</div>";
                if (!f.yearSelect) return n;
                var r = f.yearSelect && "function" == typeof f.yearSelect,
                    s = !!f.startDate && Q(f.startDate).add(f.singleMonth || "month2" !== t ? 0 : 1, "month"),
                    o = !!f.endDate && Q(f.endDate).add(f.singleMonth || "month1" !== t ? 0 : -1, "month"),
                    i = r ? f.yearSelect(a) : f.yearSelect.slice(),
                    d = s ? Math.max(i[0], s.get("year")) : Math.min(i[0], a),
                    l = o ? Math.min(i[1], o.get("year")) : Math.max(i[1], a), u = Math.min(d, a), m = Math.max(l, a);
                if (u === m) return n;
                return P("year", V({minSelectable: d, maxSelectable: l, minVisible: u, maxVisible: m}, a))
            }(e, t);
            m.find("." + t + " .month-name").html(a + " " + n), m.find("." + t + " tbody").html(function (e) {
                var t = [];
                e.setDate(1);
                new Date(e.getTime() - 864e5);
                var a, n, r = new Date, s = e.getDay();
                0 === s && "monday" === f.startOfWeek && (s = 7);
                if (0 < s) for (var o = s; 0 < o; o--) {
                    var i = new Date(e.getTime() - 864e5 * o);
                    n = g(i.getTime()), f.startDate && H(i, f.startDate) < 0 && (n = !1), f.endDate && 0 < H(i, f.endDate) && (n = !1), t.push({
                        date: i,
                        type: "lastMonth",
                        day: i.getDate(),
                        time: i.getTime(),
                        valid: n
                    })
                }
                for (var d = e.getMonth(), o = 0; o < 40; o++) a = Q(e).add(o, "days").toDate(), n = g(a.getTime()), f.startDate && H(a, f.startDate) < 0 && (n = !1), f.endDate && 0 < H(a, f.endDate) && (n = !1), t.push({
                    date: a,
                    type: a.getMonth() == d ? "toMonth" : "nextMonth",
                    day: a.getDate(),
                    time: a.getTime(),
                    valid: n
                });
                for (var l = [], u = 0; u < 6 && "nextMonth" != t[7 * u].type; u++) {
                    l.push("<tr>");
                    for (var i = 0; i < 7; i++) {
                        var m = "monday" == f.startOfWeek ? i + 1 : i;
                        a = t[7 * u + m];
                        var h = Q(a.time).format("L") == Q(r).format("L");
                        if (a.extraClass = "", a.tooltip = "", a.valid && f.beforeShowDay && "function" == typeof f.beforeShowDay) {
                            var c = f.beforeShowDay(Q(a.time).toDate());
                            a.valid = c[0], a.extraClass = c[1] || "", a.tooltip = c[2] || "", "" !== a.tooltip && (a.extraClass += " has-tooltip ")
                        }
                        var p = {
                            time: a.time,
                            "data-tooltip": a.tooltip,
                            class: "day " + a.type + " " + a.extraClass + " " + (a.valid ? "valid" : "invalid") + " " + (h ? "real-today" : "")
                        };
                        0 === i && f.showWeekNumbers && l.push('<td><div class="week-number" data-start-time="' + a.time + '">' + f.getWeekNumber(a.date) + "</div></td>"), l.push("<td " + $({}, f.dayTdAttrs, a) + "><div " + $(p, f.dayDivAttrs, a) + ">" + J(a.time, a.day) + "</div></td>")
                    }
                    l.push("</tr>")
                }
                return l.join("")
            }(e)), f[t] = e, w(), m.find(".day").off("click").on("click", function (e) {
                k(U(this))
            }), m.find(".day").off("mouseenter").on("mouseenter", function (e) {
                y(U(this))
            }), m.find(".day").off("mouseleave").on("mouseleave", function (e) {
                m.find(".date-range-length-tip").hide(), f.singleDate && b()
            }), m.find(".week-number").off("click").on("click", function (e) {
                var t, a, n, r;
                t = U(this), r = parseInt(t.attr("data-start-time"), 10), f.startWeek ? (m.find(".week-number-selected").removeClass("week-number-selected"), a = new Date(r < f.startWeek ? r : f.startWeek), n = new Date(r < f.startWeek ? f.startWeek : r), f.startWeek = !1, f.start = Q(a).day("monday" == f.startOfWeek ? 1 : 0).valueOf(), f.end = Q(n).day("monday" == f.startOfWeek ? 7 : 6).valueOf()) : (f.startWeek = r, t.addClass("week-number-selected"), a = new Date(r), f.start = Q(a).day("monday" == f.startOfWeek ? 1 : 0).valueOf(), f.end = Q(a).day("monday" == f.startOfWeek ? 7 : 6).valueOf()), w(), M(), S(), C(), x()
            }), m.find(".month").off("change").on("change", function (e) {
                D(U(this))
            }), m.find(".year").off("change").on("change", function (e) {
                D(U(this))
            })
        }

        function V(e, t, a) {
            var n = [];
            a = a || function (e) {
                return e
            };
            for (var r = e.minVisible; r <= e.maxVisible; r++) n.push({
                value: r,
                text: a(r),
                selected: r === t,
                disabled: r < e.minSelectable || r > e.maxSelectable
            });
            return n
        }

        function P(e, t) {
            for (var a, n = '<div class="select-wrapper"><select class="' + e + '" name="' + e + '">', r = 0, s = t.length; r < s; r++) {
                var o = t[r];
                n += '<option value="' + o.value + '"' + (o.selected ? " selected" : "") + (o.disabled ? " disabled" : "") + ">" + o.text + "</option>", o.selected && (a = o.text)
            }
            return n += "</select>" + a + "</div>"
        }

        function Y(e, t) {
            m.find("." + t).append("<div><span>" + K("Time") + ': <span class="hour-val">00</span>:<span class="minute-val">00</span></span></div><div class="hour"><label>' + K("Hour") + ': <input type="range" class="hour-range" name="hour" min="0" max="23"></label></div><div class="minute"><label>' + K("Minute") + ': <input type="range" class="minute-range" name="minute" min="0" max="59"></label></div>'), u(t, e)
        }

        function A(e) {
            return K("month-name")[e]
        }

        function W(e) {
            return Q(e).format(f.format)
        }

        function I() {
            C();
            var e = parseInt(Q(f.month1).format("YYYYMM")), t = parseInt(Q(f.month2).format("YYYYMM")),
                a = Math.abs(e - t);
            1 < a && 89 != a ? m.addClass("has-gap").removeClass("no-gap").find(".gap").css("visibility", "visible") : m.removeClass("has-gap").addClass("no-gap").find(".gap").css("visibility", "hidden");
            var n = m.find("table.month1").height(), r = m.find("table.month2").height();
            m.find(".gap").height(Math.max(n, r) + 10)
        }

        function B() {
            if (!f.alwaysOpen) {
                var e = function () {
                    U(n).data("date-picker-opened", !1), U(n).trigger("datepicker-closed", {relatedTarget: m})
                };
                f.customCloseAnimation ? f.customCloseAnimation.call(m.get(0), e) : U(m).slideUp(f.duration, e), U(n).trigger("datepicker-close", {relatedTarget: m})
            }
        }

        function N() {
            O(f.month1, "month1"), O(f.month2, "month2")
        }

        function L(e, t) {
            var a = parseInt(Q(e).format("YYYYMM")) - parseInt(Q(t).format("YYYYMM"));
            return 0 < a ? 1 : 0 === a ? 0 : -1
        }

        function H(e, t) {
            var a = parseInt(Q(e).format("YYYYMMDD")) - parseInt(Q(t).format("YYYYMMDD"));
            return 0 < a ? 1 : 0 === a ? 0 : -1
        }

        function F(e) {
            return Q(e).add(1, "months").toDate()
        }

        function R(e) {
            return Q(e).add(-1, "months").toDate()
        }

        function E() {
            var e = f.showWeekNumbers ? "<th>" + K("week-number") + "</th>" : "";
            return "monday" == f.startOfWeek ? e + "<th>" + K("week-1") + "</th><th>" + K("week-2") + "</th><th>" + K("week-3") + "</th><th>" + K("week-4") + "</th><th>" + K("week-5") + "</th><th>" + K("week-6") + "</th><th>" + K("week-7") + "</th>" : e + "<th>" + K("week-7") + "</th><th>" + K("week-1") + "</th><th>" + K("week-2") + "</th><th>" + K("week-3") + "</th><th>" + K("week-4") + "</th><th>" + K("week-5") + "</th><th>" + K("week-6") + "</th>"
        }

        function q(e) {
            return e = Q(e), !(!f.startDate || !e.endOf("month").isBefore(f.startDate)) || !(!f.endDate || !e.startOf("month").isAfter(f.endDate))
        }

        function $(e, t, r) {
            var s = U.extend(!0, {}, e);
            U.each(t, function (e, t) {
                var a = t(r);
                for (var n in a) s.hasOwnProperty(n) ? s[n] += a[n] : s[n] = a[n]
            });
            var a = "";
            for (var n in s) s.hasOwnProperty(n) && (a += n + '="' + s[n] + '" ');
            return a
        }

        function J(e, t) {
            return f.showDateFilter && "function" == typeof f.showDateFilter ? f.showDateFilter(e, t) : t
        }

        function K(e) {
            var t = e.toLowerCase(), a = e in r ? r[e] : t in r ? r[t] : null, n = U.dateRangePickerLanguages.default;
            return null == a && (a = e in n ? n[e] : t in n ? n[t] : ""), a
        }

        function _() {
            var e = f.defaultTime ? f.defaultTime : new Date;
            return f.lookBehind ? (f.startDate && L(e, f.startDate) < 0 && (e = F(Q(f.startDate).toDate())), f.endDate && 0 < L(e, f.endDate) && (e = Q(f.endDate).toDate())) : (f.startDate && L(e, f.startDate) < 0 && (e = Q(f.startDate).toDate()), f.endDate && 0 < L(F(e), f.endDate) && (e = R(Q(f.endDate).toDate()))), f.singleDate && (f.startDate && L(e, f.startDate) < 0 && (e = Q(f.startDate).toDate()), f.endDate && 0 < L(e, f.endDate) && (e = Q(f.endDate).toDate())), e
        }

        function G(e) {
            e || (e = _()), f.lookBehind ? (O(R(e), "month1"), O(e, "month2")) : (O(e, "month1"), O(F(e), "month2")), f.singleDate && O(e, "month1"), C(), I()
        }

        function Z(e) {
            var t, a;
            t = e, (a = n[0]).contains(t.target) || t.target == a || null != a.childNodes && 0 <= U.inArray(t.target, a.childNodes) || m.is(":visible") && B()
        }
    }
});