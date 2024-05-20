// window.onload = function () {
//     console.log("Loaded");
//     const translations = {
//         en: {
//             mainlinkPurpose: "Purpose of the event",
//             mainlink__whatCanIDo: "What can I do?",
//             mainlink__writeAbout: "What to write about?",
//             mainlink__example: "Example of a letter",
//         },
//         pl: {
//             mainlinkPurpose: "Cel wydarzenia",
//             mainlink__whatCanIDo: "Co mogę zrobić?",
//             mainlink__writeAbout: "Co można napisać?",
//             mainlink__example: "Przykład listu",


//         }
//     };

//     let langEng = document.getElementById("langEng");
//     let langPl = document.getElementById("langPl");

//     function translate(lang) {
//         console.log("aboba");
//         document.getElementById('main-link__purpose').innerText = translations[lang].mainlinkPurpose;
//         document.getElementById('mainlink__whatCanIDo').innerText = translations[lang].mainlink__whatCanIDo;
//         document.getElementById('main-link__write-about').innerText = translations[lang].mainlink__writeAbout;
//         document.getElementById('main-link__example').innerText = translations[lang].mainlink__example;
//     };

//     langEng.addEventListener('click', () => translate('en'));
//     console.log("langEng")
//     langPl.addEventListener('click', () => translate('pl'));
//     console.log("langPl")
// }


const translations = {
    en: {
        "main-link__purpose": "Purpose of the event",
        "mainlink__whatCanIDo": "What can I do?",
        "main-link__write-about": "What to write about?",
        "main-link__example": "Example of a letter",
        "main-link__learn": "Learn more",
        "write-a-letter": "Write a letter!",
        "section1__h1": "How to write a letter to a political prisoner?",
        "section1__purpose": "What is the purpose of this event?",
        "section1__description": `Today, on May 21st, we stand in solidarity with Belarusian political prisoners. We, Belarusian students studying in Lublin, have found refuge far from our homeland. For many of us, this escape was prompted by urgent political persecution. Now, we strive to shed light on the plight of numerous political prisoners in Belarus.<br />
                                  You can learn more at the <a id="section1__description_link" target="_blank" href="https://www.gazetaprawna.pl/wiadomosci/swiat/artykuly/9373335,wiezniowe-polityczni-na-bialorusi-sa-traktowani-gorzej-niz-przestepcy.html" class="red">following link</a>.`,
        "main__header2": "What can I do?",
        "section1__main__wrapper": `Currently in Belarus, there are over <span class="red red_big">1385</span> political prisoners, completely isolated from the outside world. These are people serving their sentences for fabricated criminal cases against them, and they are in need of our support. And there's a safe and simple way to support these individuals - <a id="section1__send-a-letter" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfhsgpGwDc9sskZ82LN_eKwwZBAX9U5kLARAFo2eR1UGw8Usg/viewform?pli=1">send them a letter!</a>.`,
        "section1__you-can-write-a-letter": `You can write a letter <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfhsgpGwDc9sskZ82LN_eKwwZBAX9U5kLARAFo2eR1UGw8Usg/viewform?pli=1">online</a> or by hand.`,
        "section1__write-about": "What to write about?",
        "section2__write-about": "What to write about?",
        "section2__can": "You CAN write",
        "section2__can_descr": `You can write about any abstract topics! If nothing comes to mind immediately, you can write about the following:`,
        "can__1": "How your day went?",
        "can__2": "Places you've visited, your hometown, favorite spots",
        "can__3": "What good happened?",
        "can__4": "Nature, weather",
        "can__5": "Your favorite hobbies",
        "can__6": "Songs, movies, theater WITHOUT political context",
        "can__7": "Draw something!",
        "can__8": "Sports activities, meditation",
        "can__9": "Psychological practices for self-help",
        "can__10": "Riddles and puzzles, jokes and anecdotes",
        "can__11": "Tell about your dreams and ideas",
        "can__12": "Any words of support and hope",
        "section2__cannot": "You CANNOT write",
        "section2__cannot_descr": `Your letter cannot contain anything from the list below:`,
        "cannot__1": "Personal information (about yourself and family)",
        "cannot__2": "Political topics, slogans",
        "cannot__3": "Abbreviations and foreign words",
        "cannot__4": "Insults and profanity",
        "cannot__5": "Extremist organizations",
        "cannot__6": "Metaphors and allegories",
        "cannot__7": "Criminal cases",
        "cannot__8": "Emojis, stickers",
        "cannot__9": "Leaving blank sheets of paper",
        "section2__example": "Example of a letter",
        "section3__example": "Example of a letter",
        "section2__handwritten": "If you write a handwritten letter",
        "handwritten__text": `<span id="handwritten__text_description" class="red red_medium">If you want to write a handwritten letter, you should write in Russian or Belarusian!</span><br />Also don't hesitate to reach out to the event organizers for assistance.<br /><br /><span id="handwritten__text_postcard" class="red">Take a postcard</span> if you are not expecting a response.<br /><span id="handwritten__text_reply" class="red">Take a reply card</span> if you are expecting a response and have a return Belarusian address. If you want to receive a response but do not have a Belarusian address, leave your name, surname, and email separately on the paper so that we can identify the response and send it to you.`,
        "section3__online": "If you write a letter online",
        "online__description": `If you want to write a letter online, you can do it in any convenient language using the <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfhsgpGwDc9sskZ82LN_eKwwZBAX9U5kLARAFo2eR1UGw8Usg/viewform?pli=1">Google Form</a>. The letter will be translated by us and sent to the political prisoner.`,
        "footer__what-can-i-do": "What can I do?",
        "footer__about": "What to write about?",
        "footer__example": "Example of a letter",
        "footer__learn": "Learn more",
        "footer__partners": "Partners",
    },
    pl: {
        "main-link__purpose": 'Cel wydarzenia',
        "mainlink__whatCanIDo": 'Co mogę zrobić?',
        "main-link__write-about": 'Co można napisać?',
        "main-link__example": 'Przykład listu',
        "main-link__learn": 'Dowiedz się więcej',
        "footer__partners": 'Partnerzy',
        "section1__h1": 'Jak napisać list do więźnia politycznego?',
        "section1__purpose": 'Jaki jest cel tego wydarzenia?',
        "section1__description": 'Dziś, 21 maja, solidaryzujemy się z białoruskimi więźniami politycznymi. My, białoruscy studenci studiujący w Lublinie, znaleźliśmy schronienie daleko od ojczyzny. Dla wielu z nas przyczyną tej ucieczki były pilne prześladowania polityczne. Teraz staramy się rzucić światło na los wielu więźniów politycznych na Białorusi. <br /> Dzisiaj masz wyjątkową okazję, żeby również wesprzeć więźniów politycznych na Białorusi, kierując do nich swój list!',
        "section1__description_link": 'Więcej o więźniach politycznych na Białorusi możesz dowiedzieć się pod tym linkiem:',
        "main__header2": 'Co mogę zrobić?',
        "section1__main__wrapper": 'Obecnie na Białorusi przebywa ok. <span class="red red_big">1385</span> więźniów politycznych, całkowicie odizolowanych od świata zewnętrznego. Są to osoby odbywające wyroki za sfabrykowane sprawy karne przeciwko nim i potrzebują naszego wsparcia. Istnieje bezpieczny i prosty sposób wsparcia tych osób - <a id="section1__send-a-letter" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfhsgpGwDc9sskZ82LN_eKwwZBAX9U5kLARAFo2eR1UGw8Usg/viewform?pli=1">wyślij im list!</a>',
        "section1__you-can-write-a-letter": 'List możesz napisać <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfhsgpGwDc9sskZ82LN_eKwwZBAX9U5kLARAFo2eR1UGw8Usg/viewform?pli=1">online</a> lub ręcznie.',
        "section1__write-about": 'Co można napisać?',
        "section2__write-about": 'Co można napisać?',
        "section2__can": 'MOŻESZ pisać',
        "section2__can_descr": 'Możesz pisać na dowolne abstrakcyjne tematy! Jeśli od razu nic nie przychodzi Ci do głowy, możesz napisać o:',
        "can__1": 'Jak minął Ci dzień?',
        "can__2": 'Miejsca, które odwiedziłeś, Twoje rodzinne miasto, ulubione miejsca',
        "can__3": 'Co dobrego się wydarzyło w Twoim życiu?',
        "can__4": 'Przyroda, pogoda',
        "can__5": 'Twoje ulubione hobby',
        "can__6": 'Piosenki, filmy, wystąpienia teatralne BEZ kontekstu politycznego',
        "can__7": 'Narysuj coś!',
        "can__8": 'Zajęcia sportowe, medytacja',
        "can__9": 'Samopomocowe praktyki psychologiczne, wskazówki',
        "can__10": 'Zagadki i łamigłówki, dowcipy i anegdoty',
        "can__11": 'Opowiedz o swoich marzeniach i pomysłach',
        "can__12": 'Wszelkie słowa wsparcia i nadziei',
        "section2__cannot": 'NIE MOŻESZ pisać',
        "section2__cannot_descr": 'Twój list nie może zawierać niczego z poniższej listy:',
        "cannot__1": 'Dane osobowe (o sobie i rodzinie)',
        "cannot__2": 'Tematy polityczne, hasła',
        "cannot__3": 'Skróty i słowa obce (w tym polskie)',
        "cannot__4": 'Obelgi i wulgaryzmy',
        "cannot__5": 'Organizacje ekstremistyczne',
        "cannot__6": 'Metafory i alegorie',
        "cannot__7": 'Informacje o sprawach karnych osądzonych',
        "cannot__8": 'Emoji, naklejki',
        "cannot__9": 'Pozostawienie pustych kartek papieru',
        "section2__example": 'Przykład listu',
        "section3__example": 'Przykład listu',
        "section2__handwritten": 'Jeśli chcesz napisać odręczny list',
        "handwritten__text": '<span id="handwritten__text_description" class="red red_medium">Jeśli chcesz napisać list odręczny, powinieneś go pisać po rosyjsku lub białorusku!</span><br />Nie wahaj się zwrócić do organizatorów wydarzenia o pomoc.<br /><br /><span id="handwritten__text_postcard" class="red">Weź pocztówkę</span> jeśli nie spodziewasz się odpowiedzi.<br /><span id="handwritten__text_reply" class="red">Weź zwykłą kartkę i kopertę</span> jeśli oczekujesz odpowiedzi i masz adres na Białorusi. Jeśli chcesz otrzymać odpowiedź, ale nie masz adresu na Białorusi, zostaw osobno na INNYM papierze swoje imię, nazwisko i adres e-mail, abyśmy mogli zidentyfikować odpowiedź i wysłać ją do Ciebie.',
        "section3__online": 'Jeśli piszesz list online',
        "online__description": 'Jeśli chcesz napisać list online, możesz to zrobić w dowolnym dogodnym języku, korzystając z <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfhsgpGwDc9sskZ82LN_eKwwZBAX9U5kLARAFo2eR1UGw8Usg/viewform?pli=1">Formularza Google</a>. List zostanie przez nas przetłumaczony i wysłany do więźnia politycznego.',
        "write-a-letter": 'Napisz list!',
        "footer__what-can-i-do": "Co mogę zrobić?",
        "footer__about": "O czym pisać?",
        "footer__example": "Przykład listu",
        "footer__learn": "Dowiedz się więcej",
        "footer__partners": "Partnerzy",
    }
};

const langButtons = {
    en: document.getElementById('langEng'),
    pl: document.getElementById('langPl'),
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const translationKey = element.id;
        if (translations[lang][translationKey]) {
            element.innerHTML = translations[lang][translationKey];
        }
    });
    Object.keys(langButtons).forEach(language => {
        langButtons[language].classList.toggle('red_header', language === lang);
        langButtons[language].classList.toggle('grey', language !== lang);
    });
}

langButtons.en.addEventListener('click', () => setLanguage('en'));
langButtons.pl.addEventListener('click', () => setLanguage('pl'));

// Set default language
setLanguage('pl');

