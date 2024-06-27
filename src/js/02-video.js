import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';
const currentTime = localStorage.getItem(localStorageKey);

if (currentTime) {
    player.setCurrentTime(currentTime)
} else {
    player.setCurrentTime(0);
}

player.on('timeupdate', throttle(fnSetTimeToLocalStorage, 1000));
    

function fnSetTimeToLocalStorage(data) {
    localStorage.setItem(localStorageKey, JSON.stringify(data.seconds));
}