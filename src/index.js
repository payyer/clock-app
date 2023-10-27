const dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

const selectContry = document.getElementById('setTime');
let getUTC = selectContry.value;
let contryName = 'Vietnam /HCM';
selectContry.addEventListener('change', () => {
    const selectOption = selectContry.options[selectContry.selectedIndex];
    contryName = selectOption.textContent;
    getUTC = selectContry.value;
})

const displayTime = document.querySelector('.time');
const displayLocaltion = document.querySelector('.location');
const displayDate = document.querySelector('.date');

const updateCurrentTime = () => {
    setInterval(() => {
        const currentLocation = dayjs().utcOffset(getUTC * 60);
        const currentTime = currentLocation.format('HH:mm:ss A');
        const currentDate = currentLocation.format('dddd, D MMMM, YYYY')
        displayTime.textContent = currentTime;
        displayDate.textContent = `${currentDate}`
        displayLocaltion.innerHTML = `${contryName}
        <button type="button" data-bs-toggle="modal" data-bs-target="#chooseLocation">
            <i class="fa-solid fa-earth-asia"></i>
        </button>`;
    }, 1000)
}

updateCurrentTime();