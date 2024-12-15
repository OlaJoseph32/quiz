// Heading
let welcome = document.getElementById('welcome');
let heading = document.getElementById('heading');

// TImer container variable
let timeCon = document.getElementById('time-con');

// timer values
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

// login details
let form = document.getElementById('form');
let nam = document.getElementById('name');
let loginBtn = document.getElementById('login-btn');


// Question buttons
let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');
let q5 = document.getElementById('q5');
let q6 = document.getElementById('q6');
let q7 = document.getElementById('q7');
let q8 = document.getElementById('q8');
let q9 = document.getElementById('q9');
let q10 = document.getElementById('q10');
let q11 = document.getElementById('q11');
let q12 = document.getElementById('q12');
let q13 = document.getElementById('q13');
let q14 = document.getElementById('q14');
let q15 = document.getElementById('q15');
let q16 = document.getElementById('q16');
let q17 = document.getElementById('q17');
let q18 = document.getElementById('q18');
let q19 = document.getElementById('q19');
let q20 = document.getElementById('q20');

// Answer inputs
let q1ans = document.getElementById('q1ans');
let q2ans = document.getElementById('q2ans');
let q3ans = document.getElementById('q3ans');
let q4ans = document.getElementById('q4ans');
let q5ans = document.getElementById('q5ans');
let q6ans = document.getElementById('q6ans');
let q7ans = document.getElementById('q7ans');
let q8ans = document.getElementById('q8ans');
let q9ans = document.getElementById('q9ans');
let q10ans = document.getElementById('q10ans');
let q11ans = document.getElementById('q11ans');
let q12ans = document.getElementById('q12ans');
let q13ans = document.getElementById('q13ans');
let q14ans = document.getElementById('q14ans');
let q15ans = document.getElementById('q15ans');
let q16ans = document.getElementById('q16ans');
let q17ans = document.getElementById('q17ans');
let q18ans = document.getElementById('q18ans');
let q19ans = document.getElementById('q19ans');
let q20ans = document.getElementById('q20ans');

// Answers
let caracas = document.getElementById('caracas')
let java = document.getElementById('java')
let year = document.getElementById('year')
let num118 = document.getElementById('num118')
let accra = document.getElementById('accra')
let bola = document.getElementById('bola')
let aliko = document.getElementById('aliko')
let italy = document.getElementById('italy')
let num9 = document.getElementById('num9')
let num2 = document.getElementById('num2')
let pacific = document.getElementById('pacific')
let year1975 = document.getElementById('year1975')
let num774 = document.getElementById('num774')
let legislature = document.getElementById('legislature')
let NaCl = document.getElementById('NaCl')
let num366 = document.getElementById('num366')
let skin = document.getElementById('skin')
let pressure = document.getElementById('pressure')
let goat = document.getElementById('goat')
let asian = document.getElementById('asian')

// timer template
let min = 3;
let sec = 0;

// finalsubmit
let submitBtn = document.getElementById('submit');
console.log(submitBtn);

// Result
let results = document.getElementById('results');
let myInterval;

// Show result button
let showsBtn = document.getElementById('show');

let day = new Date();
let currenHour = day.getHours();

if(currenHour > 0 && currenHour <=11) {
    welcome.innerHTML = `Good Morning`;
}else if(currenHour > 11 && currenHour <= 16){
    welcome.innerHTML = `Good Afternoon`;
}else{
    welcome.innerHTML = `Good Evening`;
}


// Validate login form
loginBtn.addEventListener('click', function () {
    if(nam.value === ''){
        alert('Please enter your name');
        nam.style.border = 'solid 1px red';
    }else{
        nam.style.border = 'solid 1px green';
        alert('Login Successfull!!!');
    
    setTimeout(() => {
        form.style.display = 'none';
        heading.style.display = 'none'
        welcome.style.display = 'none'
        q1.style.display = 'block';
        timeCon.style.display = 'flex';
    
     myInterval =  setInterval(() => {
            minutes.innerHTML = min;
            seconds.innerHTML = sec;
            sec--;
            console.log(sec);
            if(sec < 1){
                min--;
                sec = 59;
                minutes.innerHTML = min;

                if(min < 0){
                    q1.style.display = 'none'
                    q2.style.display = 'none'
                    q3.style.display = 'none'
                    q4.style.display = 'none'
                    q5.style.display = 'none'
                    q6.style.display = 'none'
                    q7.style.display = 'none'
                    q8.style.display = 'none'
                    q9.style.display = 'none'
                    q10.style.display = 'none'
                    q11.style.display = 'none'
                    q12.style.display = 'none'
                    q13.style.display = 'none'
                    q14.style.display = 'none'
                    q15.style.display = 'none'
                    q16.style.display = 'none'
                    q17.style.display = 'none'
                    q18.style.display = 'none'
                    q19.style.display = 'none'
                    q20.style.display = 'none'
                    alert(`Times up!!!, ${nam.value} `)
                    seconds.innerHTML = '00'
                    minutes.innerHTML = '00'
                    submit()
                }
            }
        }, 1000);
    }, 1500);
}
});

// Next and Previous Buttons
function next1() {
    q1.style.display = 'none';
    q2.style.display = 'block';
}
function prev2() {
    q2.style.display = 'none';
    q1.style.display = 'block';
}
function next2() {
    q2.style.display = 'none';
    q3.style.display = 'block';
}
function prev3() {
    q3.style.display = 'none';
    q2.style.display = 'block';
}
function next3() {
    q3.style.display = 'none';
    q4.style.display = 'block';
}
function prev4() {
    q4.style.display = 'none';
    q3.style.display = 'block';
}
function next4() {
    q4.style.display = 'none';
    q5.style.display = 'block';
}
function prev5() {
    q5.style.display = 'none';
    q4.style.display = 'block';
}
function next5() {
    q5.style.display = 'none';
    q6.style.display = 'block';
}
function prev6() {
    q6.style.display = 'none';
    q5.style.display = 'block';
}
function next6() {
    q6.style.display = 'none';
    q7.style.display = 'block';
}
function prev7() {
    q7.style.display = 'none';
    q6.style.display = 'block';
}
function next7() {
    q7.style.display = 'none';
    q8.style.display = 'block';
}
function prev8() {
    q8.style.display = 'none';
    q7.style.display = 'block';
}
function next8() {
    q8.style.display = 'none';
    q9.style.display = 'block';
}
function prev9() {
    q9.style.display = 'none';
    q8.style.display = 'block';
}
function next9() {
    q9.style.display = 'none';
    q10.style.display = 'block';
}
function prev10() {
    q10.style.display = 'none';
    q9.style.display = 'block';
}
function next10() {
    q10.style.display = 'none';
    q11.style.display = 'block';
}
function prev11() {
    q11.style.display = 'none';
    q10.style.display = 'block';
}
function next11() {
    q11.style.display = 'none';
    q12.style.display = 'block';
}
function prev12() {
    q12.style.display = 'none';
    q11.style.display = 'block';
}
function next12() {
    q12.style.display = 'none';
    q13.style.display = 'block';
}
function prev13() {
    q13.style.display = 'none';
    q12.style.display = 'block';
}
function next13() {
    q13.style.display = 'none';
    q14.style.display = 'block';
}
function prev14() {
    q14.style.display = 'none';
    q13.style.display = 'block';
}
function next14() {
    q14.style.display = 'none';
    q15.style.display = 'block';
}
function prev15() {
    q15.style.display = 'none';
    q14.style.display = 'block';
}
function next15() {
    q15.style.display = 'none';
    q16.style.display = 'block';
}
function prev16() {
    q16.style.display = 'none';
    q15.style.display = 'block';
}
function next16() {
    q16.style.display = 'none';
    q17.style.display = 'block';
}
function prev17() {
    q17.style.display = 'none';
    q16.style.display = 'block';
}
function next17() {
    q17.style.display = 'none';
    q18.style.display = 'block';
}
function prev18() {
    q18.style.display = 'none';
    q17.style.display = 'block';
}
function next18() {
    q18.style.display = 'none';
    q19.style.display = 'block';
}
function prev19() {
    q19.style.display = 'none';
    q18.style.display = 'block';
}
function next19() {
    q19.style.display = 'none';
    q20.style.display = 'block';
}
function prev20() {
    q20.style.display = 'none';
    q19.style.display = 'block';
}

// Question Options
// Question 1 Options
function q1a() {
    q1ans.value = 'Rosario';
}
function q1b() {
    q1ans.value = 'Caracas';
}
function q1c() {
    q1ans.value = 'San Jose';
}
function q1d() {
    q1ans.value = 'Santiago';
}

// Question 2 Options
function q2a() {
    q2ans.value = 'Vue';
}
function q2b() {
    q2ans.value = 'Java';
}
function q2c() {
    q2ans.value = 'Angular';
}
function q2d() {
    q2ans.value = 'React';
}

// Question 3 Options
function q3a() {
    q3ans.value = '1936';
}
function q3b() {
    q3ans.value = '1985';
}
function q3c() {
    q3ans.value = '1945';
}
function q3d() {
    q3ans.value = '1996';
}

// Question 4 Options
function q4a() {
    q4ans.value = '118';
}
function q4b() {
    q4ans.value = '200';
}
function q4c() {
    q4ans.value = '106';
}
function q4d() {
    q4ans.value = '80';
}

// Question 5 Options
function q5a() {
    q5ans.value = 'Sydney';
}
function q5b() {
    q5ans.value = 'Accra';
}
function q5c() {
    q5ans.value = 'Cairo';
}
function q5d() {
    q5ans.value = 'Cape Town';
}

// Question 6 Options
function q6a() {
    q6ans.value = 'Gen. Muhammed Buhari';
}
function q6b() {
    q6ans.value = 'Peter Obi';
}
function q6c() {
    q6ans.value = 'Bola Ahmed Tinubu';
}
function q6d() {
    q6ans.value = 'Dino Melaye';
}

// Question 7 Options
function q7a() {
    q7ans.value = 'Femi Otedola';
}
function q7b() {
    q7ans.value = 'Mike Adenuga';
}
function q7c() {
    q7ans.value = 'Folorunso Alakija';
}
function q7d() {
    q7ans.value = 'Aliko Dangote';
}

// Question 8 Options
function q8a() {
    q8ans.value = 'Argentina';
}
function q8b() {
    q8ans.value = 'England';
}
function q8c() {
    q8ans.value = 'Italy';
}
function q8d() {
    q8ans.value = 'France';
}

// Question 9 Options
function q9a() {
    q9ans.value = '8';
}
function q9b() {
    q9ans.value = '9';
}
function q9c() {
    q9ans.value = '7';
}
function q9d() {
    q9ans.value = '12';
}

// Question 10 Options
function q10a() {
    q10ans.value = '5';
}
function q10b() {
    q10ans.value = '2';
}
function q10c() {
    q10ans.value = '12';
}
function q10d() {
    q10ans.value = '3';
}
// Question 11 Options
function q11a() {
    q11ans.value = 'South Atlantic ocean';
}
function q11b() {
    q11ans.value = 'Indian Ocean';
}
function q11c() {
    q11ans.value = 'Atlantic Ocean';
}
function q11d() {
    q11ans.value = 'Pacific ocean';
}

// Question 12 Options
function q12a() {
    q12ans.value = '1975';
}
function q12b() {
    q12ans.value = '1990';
}
function q12c() {
    q12ans.value = '1967';
}
function q12d() {
    q12ans.value = '1945';
}

// Question 13 Options
function q13a() {
    q13ans.value = '774';
}
function q13b() {
    q13ans.value = '435';
}
function q13c() {
    q13ans.value = '753';
}
function q13d() {
    q13ans.value = '245';
}

// Question 14 Options
function q14a() {
    q14ans.value = 'Senate';
}
function q14b() {
    q14ans.value = 'President';
}
function q14c() {
    q14ans.value = 'Legislature';
}
function q14d() {
    q14ans.value = 'Governor';
}

// Question 15 Options
function q15a() {
    q15ans.value = 'H2O';
}
function q15b() {
    q15ans.value = 'NO2';
}
function q15c() {
    q15ans.value = 'H2SO4';
}
function q15d() {
    q15ans.value = 'NaCl';
}

// Question 16 Options
function q16a() {
    q16ans.value = '366';
}
function q16b() {
    q16ans.value = '365';
}
function q16c() {
    q16ans.value = '367';
}
function q16d() {
    q16ans.value = '350';
}

// Question 17 Options
function q17a() {
    q17ans.value = 'Lung';
}
function q17b() {
    q17ans.value = 'Skull';
}
function q17c() {
    q17ans.value = 'Skin';
}
function q17d() {
    q17ans.value = 'Heart';
}

// Question 18 Options
function q18a() {
    q18ans.value = 'Weight';
}
function q18b() {
    q18ans.value = 'Volume';
}
function q18c() {
    q18ans.value = 'Pressure';
}
function q18d() {
    q18ans.value = 'Mass';
}

// Question 19 Options
function q19a() {
    q19ans.value = 'Snake';
}
function q19b() {
    q19ans.value = 'Cat';
}
function q19c() {
    q19ans.value = 'Dog';
}
function q19d() {
    q19ans.value = 'Goat';
}

// Question 20 Options
function q20a() {
    q20ans.value = 'Asian';
}
function q20b() {
    q20ans.value = 'Africa';
}
function q20c() {
    q20ans.value = 'Europe';
}
function q20d() {
    q20ans.value = 'America';
}

// Submit answers button
function submit() {
    submitBtn.setAttribute('disabled', 'true');
    clearInterval(myInterval)
    caracas.style.backgroundColor = 'green';
    caracas.style.color = 'white';

    java.style.backgroundColor = 'green';
    java.style.color = 'white';

    year.style.backgroundColor = 'green';
    year.style.color = 'white';

    num118.style.backgroundColor = 'green';
    num118.style.color = 'white';

    accra.style.backgroundColor = 'green';
    accra.style.color = 'white';

    bola.style.backgroundColor = 'green';
    bola.style.color = 'white';

    aliko.style.backgroundColor = 'green';
    aliko.style.color = 'white';

    italy.style.backgroundColor = 'green';
    italy.style.color = 'white';

    num9.style.backgroundColor = 'green';
    num9.style.color = 'white';

    num2.style.backgroundColor = 'green';
    num2.style.color = 'white';

    pacific.style.backgroundColor = 'green';
    pacific.style.color = 'white';

    year1975.style.backgroundColor = 'green';
    year1975.style.color = 'white';
    
    num774.style.backgroundColor = 'green';
    num774.style.color = 'white';

    legislature.style.backgroundColor = 'green';
    legislature.style.color = 'white';

    NaCl.style.backgroundColor = 'green';
    NaCl.style.color = 'white';

    num366.style.backgroundColor = 'green';
    num366.style.color = 'white';

    skin.style.backgroundColor = 'green';
    skin.style.color = 'white';

    pressure.style.backgroundColor = 'green';
    pressure.style.color = 'white';

    goat.style.backgroundColor = 'green';
    goat.style.color = 'white';

    asian.style.backgroundColor = 'green';
    asian.style.color = 'white';

    q20.style.display = 'none';
    showsBtn.style.display = 'block';
    let counter = 0;
    if(q1ans.value === 'Caracas'){
        counter++
    }
    if(q2ans.value === 'Java'){
        counter++
    }
    if(q3ans.value === '1945'){
        counter++
    }
    if(q4ans.value === '118'){
        counter++
    }
    if(q5ans.value === 'Accra'){
        counter++
    }
    if(q6ans.value === 'Bola Ahmed Tinubu'){
        counter++
    }
    if(q7ans.value === 'Aliko Dangote'){
        counter++
    }
    if(q8ans.value === 'Italy'){
        counter++
    }
    if(q9ans.value === '9'){
        counter++
    }
    if(q10ans.value === '2'){
        counter++
    }
    if(q11ans.value === 'Pacific ocean'){
        counter++
    }
    if(q12ans.value === '1975'){
        counter++
    }
    if(q13ans.value === '774'){
        counter++
    }
    if(q14ans.value === 'Legislature'){
        counter++
    }
    if(q15ans.value === 'NaCl'){
        counter++
    }
    if(q16ans.value === '366'){
        counter++
    }
    if(q17ans.value === 'Skin'){
        counter++
    }
    if(q18ans.value === 'Pressure'){
        counter++
    }
    if(q19ans.value === 'Goat'){
        counter++
    }
    if(q20ans.value === 'Asian'){
        counter++
    }
    results.style.display = 'flex';
    results.innerHTML = `Dear ${nam.value}, you scored ${counter} over 20`;
}

function show() {
    results.style.display = 'none';
    q20.style.display = 'block';
    showsBtn.style.display = 'none';
}