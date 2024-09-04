let count = 0;
const goal = 100;  // Установите цель кликов

// Загрузка прогресса из локального хранилища
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('clickCount')) {
        count = parseInt(localStorage.getItem('clickCount'));
        document.getElementById('count').innerText = count;
        updateProgressBar();
    }
});

document.getElementById('clicker').addEventListener('click', function() {
    count++;
    document.getElementById('count').innerText = count;
    updateProgressBar();
    saveProgress();
    playClickSound();  // Воспроизведение звука клика
});

document.getElementById('reset').addEventListener('click', function() {
    resetProgressBar();  // Сбрасываем только прогресс-бар при нажатии кнопки Reset
    playResetSound();    // Воспроизведение звука сброса
});

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const percentage = (count % goal) * 100 / goal;  // Обновляем процент на основе остатка от деления
    progressBar.style.width = percentage + '%';
}

function resetProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = '0%';
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        this.textContent = 'Light';
    } else {
        this.textContent = 'Dark';
    }
});


// Сохранение прогресса в локальное хранилище
function saveProgress() {
    localStorage.setItem('clickCount', count);
}

// Воспроизведение звукового эффекта клика
function playClickSound() {
    // Здесь можно вставить свой звуковой эффект для клика
    // Например:
    let clickSound = new Audio();
    // clickSound.play();
    console.log('Click sound played');  // Удалите это после добавления звука
}

// Воспроизведение звукового эффекта сброса
function playResetSound() {
    // Здесь можно вставить свой звуковой эффект для сброса
    // Например:
    // let resetSound = new Audio('path/to/reset-sound.mp3');
    // resetSound.play();
    console.log('Reset sound played');  // Удалите это после добавления звука
}

