document.addEventListener('DOMContentLoaded', function () {
    changeQuestion();
});

function changeQuestion() {
    let questions = document.getElementsByClassName('question-card');
    let submit = document.getElementById('submit-input');
    let buttonNext = document.getElementsByClassName('btn-next');
    submit.style.display = 'none';

    for (let i = 0; i < questions.length; i++) {
        questions[i].className += ' question' + (1 + i);
        if (i === 0) {
            questions[0].style.display = 'block';
        } else {
            questions[i].style.display = 'none';
        }
    }

    let timeoutHandle;

    function timer() {
        window.clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(
            function () {
                let currentQuestion = document.getElementById('current-question');
                currentQuestion.click();
            }, 20000);
    }

    timer();

    for (let i = 0; i < buttonNext.length; i++) {
        buttonNext[i].addEventListener('click', function () {
            window.clearTimeout(timeoutHandle);
            if (i + 1 === buttonNext.length - 1) {
                submit.style.display = 'block';
                this.parentNode.style.display = 'none';
                buttonNext[i + 1].parentNode.style.display = 'block';
                buttonNext[i + 1].style.display = 'none';
                return;
            }
            this.parentNode.style.display = 'none';
            this.removeAttribute('id');
            buttonNext[i + 1].parentNode.style.display = 'block';
            buttonNext[i + 1].setAttribute('id', 'current-question');
            timer();
        });
    }
}