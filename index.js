const time = document.querySelector('.time');
const data = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const names = document.querySelector('.names')
const body = document.querySelector('body')
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const changeQuote = document.querySelector('.change-quote')
const playprev = document.querySelector('.play-prev')
const playnext = document.querySelector('.play-next')

console.log(time);




function showDate(lang) {
  const date = new Date();
  const options = {month: 'long', day: 'numeric', weekday: 'long'};
  const currentDate = date.toLocaleDateString(`${lang}`, options);
  console.log(currentDate);
  data.textContent = currentDate;
}

function showDateRu() {
  const date = new Date();
  const options = {month: 'long', day: 'numeric', weekday: 'long'};
  const currentDate = date.toLocaleDateString('ru', options);
  console.log(currentDate);
  data.textContent = currentDate;
}

//const names = document.querySelector('.names')

function setLocalStorageName() {
localStorage.setItem(names, names.value);
}

window.addEventListener('beforeunload', setLocalStorageName)

function getLocalStorageName() { 
if(localStorage.getItem(names)) {
names.value = localStorage.getItem(names);
}
}


window.addEventListener('load', getLocalStorageName)


function getTimeOfDay(lang){
  const date = new Date();
  let hours = date.getHours();
  console.log(hours);
  hours = +hours
  let currentGreeting = 0
  if (lang === 'en'){
  if ( hours >= 18){
    currentGreeting = 'evening';
  }
  else if ( hours >= 12){
    currentGreeting = 'afternoon';
  }
  else if (hours >= 6) {
    currentGreeting = 'morning'
  }
  else{
    currentGreeting = 'night';
  }
  console.log(currentGreeting);
}
if (lang ==='ru') {
  if ( hours >= 18){
    currentGreeting = 'вечер';
  }
  else if ( hours >= 12){
    currentGreeting = 'день';
  }
  else if (hours >= 6) {
    currentGreeting = 'утро'
  }
  else{
    currentGreeting = 'ночь';
  }
  console.log(currentGreeting);
}

  
 // greeting.textContent = `Good ${currentGreeting},`;

  greeting.textContent = greetingTranslation[lang][currentGreeting];
  
}



const greetingTranslation = {'en': {'morning': 'Good morning', 'afternoon': 'Good afternoon', 'evening': 'Good evening', 'night': 'Good night', 'wind': 'Wind speed', 'humidity': 'Humidity'}, 'ru': {'утро': 'Доброе утро', 'день': 'Добрый день', 'вечер': 'Добрый вечер', 'ночь': 'Доброй ночи', 'wind': 'Скорость ветра', 'humidity': 'Влажность'}}
const language = document.querySelector('.language')

let lang = 'en'
getTimeOfDay(lang)


async function getQuotes() {  
  const quotes = 'data.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  console.log(data[0]);
  let numberOfquote = Math.floor(Math.random() * (data.length - 0)+ 0)
  quote.textContent = data[numberOfquote].text
  author.textContent = data[numberOfquote].author
}
getQuotes();

async function getQuotesRu() {  
  const quotes = 'data.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  console.log(data[0]);
  let numberOfquote = Math.floor(Math.random() * (data.length - 0)+ 0)
  quote.textContent = data[numberOfquote].rutext
  author.textContent = data[numberOfquote].ruauthor
}


//changeQuote.addEventListener('click', getQuotes)

changeQuote.addEventListener('click', async function() {
 if (lang === 'en'){
  getQuotes()
 }
 if (lang === 'ru'){
  getQuotesRu()
 }
});



language.addEventListener('click', async function() {
  if (lang === 'en'){
    lang = 'ru'
    language.classList.add('lang-ru')
    setLocalStorage()
    getLocalStorageRU(lang)
    showDate(lang)
    let a = 0
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    for (let x = 0; x < data.length; x++){
      if (data[x].author === author.textContent){
        a = x
      }
    }
    quote.textContent = data[a].rutext
    author.textContent = data[a].ruauthor  
    }
    
    
    
  
  else if (lang === 'ru') {
    lang = 'en'
    language.classList.remove('lang-ru')
    setLocalStorage()
    getLocalStorage(lang)
    showDate(lang)
    let b = 0
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    for (let y = 0; y < data.length; y++){
      if (data[y].ruauthor === author.textContent){
        b = y
      }
    }
    quote.textContent = data[b].text
    author.textContent = data[b].author  
    }
  
  

  getTimeOfDay(lang)
  
  
  
  });
  



function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  console.log(currentTime);
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDate(lang)
  //getTimeOfDay('en')
}
showTime();

//names.addEventListener ('keyup', event => {
//  if( event.code === 'Enter') names.classList.toggle('names-none');
//});

//greeting.addEventListener ('click', event => {
 // names.classList.remove('names-none');
//});

function getRandomNum(){
  let n = Math.floor(Math.random() * (20 - 1)+ 1)
  n = n.toString()
  let v = n.padStart(2, "0")
  return v
  
}

//function getLinkToImage() {
  //const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=B6L_H018EfZpLrmkf0EO3gMvZDBpWHuZhyTNsdfQfPE';
  //fetch(url)
    //.then(res => res.json())
    //.then(data => {
     // console.log(data.urls.regular)
    //});
  //}

  let api = 'github'

 const apiButtonUnsplash = document.querySelector('.api-button') 


async function getLinkToImage() {
  const img1 = new Image();
  let timeOfDay = 0
  const date1 = new Date();
  let hour = date1.getHours();
  console.log(hour);
  hour = +hour
  if ( hour >= 18){
    timeOfDay = 'evening';
  }
  else if ( hour >= 12){
    timeOfDay = 'afternoon';
  }
  else if (hour >= 6) {
    timeOfDay = 'morning'
  }
  else{
    timeOfDay = 'night';
  }
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=nature&query=${timeOfDay}&client_id=B6L_H018EfZpLrmkf0EO3gMvZDBpWHuZhyTNsdfQfPE`;
  const res = await fetch(url);
  const data2 = await res.json();
  console.log(data2.urls.regular)
  img1.src = data2.urls.regular
  img1.onload = () => {      
  body.style.backgroundImage = `url('${data2.urls.regular}')`;
  }; 
}


let bgNum = getRandomNum();

const buttonFlick = document.querySelector('.api-button-flickr')


async function getLinkToImageFlick() {
  const img3 = new Image();
  let timeOfDay = 0
  const date = new Date();
  let hour = date.getHours();
  console.log(hour);
  hour = +hour
  if ( hour >= 18){
    timeOfDay = 'evening';
  }
  else if ( hour >= 12){
    timeOfDay = 'afternoon';
  }
  else if (hour >= 6) {
    timeOfDay = 'morning'
  }
  else{
    timeOfDay = 'night';
  }
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d8c6de5dd746dc9b7ebf1968408c9899&tags=nature&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
  const res = await fetch(url);
  const data = await res.json();
  const numberFl = Math.floor(Math.random() * (data.photos.photo.length - 0)+ 0)  
  console.log(data.photos.photo[numberFl].url_l)
  img3.src = data.photos.photo[numberFl].url_l
  img3.onload = () => {      
  body.style.backgroundImage = `url('${data.photos.photo[numberFl].url_l}')`;
  }; 
 }

buttonFlick.addEventListener('click', function(){
  console.log(api)
  if (api === 'github' || api === 'Unsplash'){
  api = 'Flick'
  setBg(api)
  }
  else if(api === 'Flick'){
    api = 'github'
    setBg(api)
  }
});

apiButtonUnsplash.addEventListener('click', function(){
  console.log(api)
  if (api === 'github' || api === 'Flick'){
  api = 'Unsplash'
  setBg(api)
  }
  else if(api === 'Unsplash'){
    api = 'github'
    setBg(api)
  }
  
  
});


function setBg(api){
  console.log(api)

  if (api === 'github') {
  const img = new Image();
  let timeOfDay = 0
  const date = new Date();
  let hour = date.getHours();
  console.log(hour);
  hour = +hour
    if ( hour >= 18){
      timeOfDay = 'evening';
    }
    else if ( hour >= 12){
      timeOfDay = 'afternoon';
    }
    else if (hour >= 6) {
      timeOfDay = 'morning'
    }
    else{
      timeOfDay = 'night';
    }
  img.src = `https://raw.githubusercontent.com/Dasha-Vr/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => { 
  body.style.backgroundImage = `url('https://raw.githubusercontent.com/Dasha-Vr/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
  }
}
else if (api === 'Unsplash'){
  getLinkToImage()
}
else if (api === 'Flick'){
  getLinkToImageFlick()
}

}






setBg(api)



//slideNext.style.backgroundImage = "url('https://w7.pngwing.com/pngs/460/221/png-transparent-arrow-white-arrow-miscellaneous-angle-triangle-thumbnail.png')";




function getSlidePrev(){
  bgNum = +bgNum - 1
  if (bgNum === 0){
    bgNum = 20
  }
  bgNum = bgNum.toString()
  bgNum = bgNum.padStart(2, "0")
  setBg(api)
}


function getSlideNext(){
  bgNum = +bgNum + 1
  if (bgNum === 21){
    bgNum = 1
  }
  bgNum = bgNum.toString()
  bgNum = bgNum.padStart(2, "0")
  setBg(api)
}

slideNext.addEventListener('click', getSlideNext)

slidePrev.addEventListener('click', getSlidePrev)


async function getWeather(lang) {  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=${lang}&appid=c9194f5ab0b0557fdb70b6d751c879eb&units=metric`;
  let res = await fetch(url);
  let data = await res.json(); 
  console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C ${data.weather[0].description}`;
  //weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
  humidity.textContent = `Humidity: ${Math.round(data.main.humidity)} %`;
}
getWeather(lang)


city.addEventListener('change', async function(lang) {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=c9194f5ab0b0557fdb70b6d751c879eb&units=metric`;
    let res = await fetch(url);
    let data = await res.json();
    weatherIcon.className = 'weather-icon owf'
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C ${data.weather[0].description}`;
    //weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${Math.round(data.main.humidity)} %`;
  }
 catch (error) {
  temperature.textContent =`error`
  wind.textContent = ``
  humidity.textContent = `city not found`
 }
});
  

function setLocalStorage() {
  localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage)


async function getLocalStorage(lang) {
  lang = 'en'
  const greetingTranslation = {'en': {'morning': 'Good morning', 'afternoon': 'Good afternoon', 'evening': 'Good evening', 'night': 'Good night', 'wind': 'Wind speed', 'humidity': 'Humidity'}, 'ru': {'утро': 'Доброе утро', 'день': 'Добрый день', 'вечер': 'Добрый вечер', 'ночь': 'Доброй ночи', 'wind': 'Скорость ветра', 'humidity': 'Влажность'}}
  if(localStorage.getItem('city')) {
    try{
    city.value = localStorage.getItem('city');
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=c9194f5ab0b0557fdb70b6d751c879eb&units=metric`;
    let res = await fetch(url);
    let data = await res.json();
    weatherIcon.className = 'weather-icon owf'
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C ${data.weather[0].description}`;
    //weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${greetingTranslation[lang]['wind']}: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `${greetingTranslation[lang]['humidity']}: ${Math.round(data.main.humidity)} %`;
    }
    catch (error) {
      temperature.textContent =`error`
      wind.textContent = ``
      humidity.textContent = `city not found`
     }

  }
}
window.addEventListener('load', getLocalStorage)

async function getLocalStorageRU(lang)
{
  lang = 'ru'
  const greetingTranslation = {'en': {'morning': 'Good morning', 'afternoon': 'Good afternoon', 'evening': 'Good evening', 'night': 'Good night', 'wind': 'Wind speed', 'humidity': 'Humidity'}, 'ru': {'утро': 'Доброе утро', 'день': 'Добрый день', 'вечер': 'Добрый вечер', 'ночь': 'Доброй ночи', 'wind': 'Скорость ветра', 'humidity': 'Влажность'}}
  if(localStorage.getItem('city')) {
    try{
    city.value = localStorage.getItem('city');
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=c9194f5ab0b0557fdb70b6d751c879eb&units=metric`;
    let res = await fetch(url);
    let data = await res.json();
    weatherIcon.className = 'weather-icon owf'
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C ${data.weather[0].description}`;
    //weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${greetingTranslation[lang]['wind']}: ${Math.round(data.wind.speed)} м/с`;
    humidity.textContent = `${greetingTranslation[lang]['humidity']}: ${Math.round(data.main.humidity)} %`;
    }
    catch (error) {
      temperature.textContent =`error`
      wind.textContent = ``
      humidity.textContent = `city not found`
     }

  }
}





const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause-btn');

let isPlay = false;

let playNum = 0

const progressBar = document.querySelector('#progress-bar')



function formatTime(seconds) {
  let min = Math.floor((seconds / 60));
  let sec = Math.floor(seconds - (min * 60));
  if (sec < 10){ 
      sec  = `0${sec}`;
  };
  return `${min}:${sec}`;
};

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM


// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio


function updateProgressValue() {
  progressBar.max = audio.duration;
  progressBar.value = audio.currentTime;
  document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(audio.currentTime)));
  if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
      document.querySelector('.durationTime').innerHTML = "0:00";
  } else {
      document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(audio.duration)));
  }
};

function changeProgressBar() {
  audio.currentTime = progressBar.value;
};




setInterval(updateProgressValue, 500);

function playNext(){
  const songTitle = document.querySelector('.song-title');
  const playItems = document.querySelectorAll('.play-item');
  playNum = playNum + 1
  if (playNum > 2){
    playItems[2].classList.remove('item-active');
  playNum = 0
  }
  audio.src = playList[playNum].src
  audio.currentTime = 0;
  audio.play();
  songTitle.textContent = playList[playNum].title
  playItems[playNum].classList.add('item-active');
  playItems[playNum - 1].classList.remove('item-active');
  
  
  playBtn.classList.add('pause')
  isPlay = true;
}

function playPrev(){
  const songTitle = document.querySelector('.song-title');
  const playItems = document.querySelectorAll('.play-item');
 playNum = playNum - 1
if (playNum < 0){
  playItems[0].classList.remove('item-active');
  playNum = 2
}
  audio.src = playList[playNum].src
  audio.currentTime = 0;
  audio.play();
  songTitle.textContent = playList[playNum].title
  playItems[playNum].classList.add('item-active');
  playItems[playNum + 1].classList.remove('item-active');
  playBtn.classList.add('pause')
  isPlay = true;
}





function playAudio() {
  const songTitle = document.querySelector('.song-title');
  const playItems = document.querySelectorAll('.play-item');
  if (!isPlay){
    audio.src = playList[playNum].src
    audio.currentTime = progressBar.value;
    audio.play();
    playItems[playNum].classList.add('item-active');
    songTitle.textContent = playList[playNum].title 
    isPlay = true;
    //ul.children[playNum].classList.add('item-active')
    
    
  }
  else if(isPlay){
    audio.pause();
    isPlay = false
  }
  
  
}


playBtn.addEventListener('click', playAudio);

playprev.addEventListener('click', playPrev);

playnext.addEventListener('click', playNext);

//function toggleBtn() {
 // playBtn.classList.toggle('pause');
//}


function toggleBtn() {
  if (isPlay){
  playBtn.classList.add('pause')
  isPlay = true;
}
else if (!isPlay){
  playBtn.classList.remove('pause')
  isPlay = false;
}

}



playBtn.addEventListener('click', toggleBtn);

import playList from './playList.js';
console.log(playList);



const playListContainer = document.querySelector('.play-list')

for(let i = 0; i < playList.length; i++){
  const li = document.createElement('li');
  li.classList.add('play-item')
  li.textContent = playList[i].title 
  playListContainer.append(li)
}




audio.addEventListener('ended', (event) => {
  const songTitle = document.querySelector('.song-title');
  const playItems = document.querySelectorAll('.play-item');
  playNum = playNum + 1
  if (playNum > 2){
    playItems[2].classList.remove('item-active');
  playNum = 0
  }
  audio.src = playList[playNum].src
  audio.currentTime = 0;
  audio.play();
  songTitle.textContent = playList[playNum].title 
  playItems[playNum].classList.add('item-active');
  playItems[playNum - 1].classList.remove('item-active');
  
  
  playBtn.classList.add('pause')
  isPlay = true;
});



const soundVolume = document.querySelector('#soundVolume')


soundVolume.addEventListener("input", () => {
  audio.volume = soundVolume.value;
  
});

const muteButton = document.querySelector(".muteButton");

function muter() {
  if (audio.volume > 0){
  audio.volume = 0
  soundVolume.value = 0
  muteButton.classList.add('mute-ico')
 }
  else{
    soundVolume.value = 1
    audio.volume = soundVolume.value
    muteButton.classList.remove('mute-ico')
    
  }
}


muteButton.addEventListener("click", muter); 


function changetime() {
  audio.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changetime)

const playlist = document.querySelector('.play-list');


function newmus(e){

  const songTitle = document.querySelector('.song-title');
  const playItems = document.querySelectorAll('.play-item');
  let a = 0
  let list = []
  
 for (let i = 0; i < playList.length; i++){
    
   if (playList[i].title ===e.target.textContent){
    a = i
   }
   else{
    list.push(i)
   } 
 }
 playNum = a
 if (!isPlay){
 for (let x = 0; x < playList.length; x++){
 playItems[x].classList.remove('item-active')
 }
audio.src = playList[playNum].src
audio.currentTime = progressBar.value;
audio.play();
songTitle.textContent = playList[playNum].title 
playItems[playNum].classList.add('item-active');
isPlay = true;
    //ul.children[playNum].classList.add('item-active')
    
    
  }
  else if(isPlay){
    audio.pause();
    isPlay = false
    audio.currentTime = progressBar.value
  }
  toggleBtn()
} 





// Назначим обработчик к списку
// Он будет вызван когда кликнут на любой <li>
playlist.addEventListener('click', newmus);


const settings = document.querySelector('.settings')
const settingsBlock = document.querySelector('.settings-block')

settings.addEventListener ('click', function(){
  settingsBlock.classList.toggle('settings-block-wis')
});


const unsplash = document.querySelector('.Unsplash')

unsplash.addEventListener('click', function(){
  console.log(api)
  if (api === 'github' || api === 'Flick'){
  api = 'Unsplash'
  setBg(api)
  }
  else if(api === 'Unsplash'){
    api = 'github'
    setBg(api)
  }
  
  
});

const flickr = document.querySelector('.Flickr')

flickr.addEventListener('click', function(){
  console.log(api)
  if (api === 'github' || api === 'Unsplash'){
  api = 'Flick'
  setBg(api)
  }
  else if(api === 'Flick'){
    api = 'github'
    setBg(api)
  }
});

const langButton = document.querySelector('.language-button')
const API = document.querySelector('.API')
const languageDescr = document.querySelector('.language-descr')
const SettN = document.querySelector('.Sett-name')

langButton.addEventListener('click',  async function(){
  
  if (lang === 'en'){
    lang = 'ru'
    API.textContent = 'Коллекция изображений'
    languageDescr.textContent = 'Язык'
    langButton.textContent = 'Русский'
    SettN.textContent = 'Настройки'
    hideBlocks.textContent = 'Отделы'
    hideWeather.textContent = 'Погода'
    hidePlayer.textContent = 'Аудио'
    hideTime.textContent = 'Время'
    hideDate.textContent = 'Дата'
    hideGreet.textContent = 'Приветствие'
    hideQuote.textContent = 'Цитата'
    language.classList.add('lang-ru')
    setLocalStorage()
    getLocalStorageRU(lang)
    showDate(lang)
    let a = 0
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    for (let x = 0; x < data.length; x++){
      if (data[x].author === author.textContent){
        a = x
      }
    }
    quote.textContent = data[a].rutext
    author.textContent = data[a].ruauthor  
    }
    
    
    
  
  else if (lang === 'ru') {
    lang = 'en'
    API.textContent = 'Image collection'
    languageDescr.textContent = 'Language'
    langButton.textContent = 'English'
    SettN.textContent = 'Settings'
    hideBlocks.textContent = 'Blocks'
    hideWeather.textContent = 'Weather'
    hidePlayer.textContent = 'Player'
    hideTime.textContent = 'Time'
    hideDate.textContent = 'Date'
    hideGreet.textContent = 'Greetings'
    hideQuote.textContent = 'Quote'
    language.classList.remove('lang-ru')
    setLocalStorage()
    getLocalStorage(lang)
    showDate(lang)
    let b = 0
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    for (let y = 0; y < data.length; y++){
      if (data[y].ruauthor === author.textContent){
        b = y
      }
    }
    quote.textContent = data[b].text
    author.textContent = data[b].author  
    }
  
  

  getTimeOfDay(lang)
});


const GitH = document.querySelector(".Github")

GitH.addEventListener('click', function(){
    api = 'github'
    setBg(api)
  
});


const hideWeather = document.querySelector('.hideWeather')
const weatherhide = document.querySelector('.weather')


hideWeather.addEventListener('click', function(){
  weatherhide.classList.toggle('hidetheweather')

});


const hidePlayer = document.querySelector('.hidePlayer')
const playerhide = document.querySelector('.player')

hidePlayer.addEventListener('click', function(){
  playerhide.classList.toggle('hideplayer')

});


const hideTime = document.querySelector('.hidetime')
const timehide = document.querySelector('.time')

hideTime.addEventListener('click', function(){
  timehide.classList.toggle('hideTime')

});


const hideDate = document.querySelector('.hideDate')

hideDate.addEventListener('click', function(){
data.classList.toggle('hidedate')
});



const hideGreet = document.querySelector('.higeGreet')
const GreetHide = document.querySelector('.greet')

hideGreet.addEventListener('click', function(){
  GreetHide.classList.toggle('hideGreetings')

});

const hideQuote = document.querySelector('.hideQuote')


hideQuote.addEventListener('click', function(){
  quote.classList.toggle('hideQUOTE')
  author.classList.toggle('hideQUOTE')
  changeQuote.classList.toggle('hideQUOTE')

});

const hideBlocks = document.querySelector('.hideBlocks')


console.log('1.Часы и календарь +15\n 2.Приветствие +10\n 3.Смена фонового изображения +20\n 4.Виджет погоды +15\n 5.Виджет цитата дня +10\n 6.Аудиоплеер +15\n 7.Продвинутый аудиоплеер (реализуется без использования библиотек) +20\n 8.Перевод приложения на два языка (en/ru или en/be) +15\n 9.Получение фонового изображения от API +10\n 10.Настройки приложения +20\n Итог: 150 баллов');