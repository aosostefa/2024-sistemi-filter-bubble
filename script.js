// Dati del quiz
const quizData = [
    {
        question: "Qual è l'effetto principale della Filter Bubble?",
        options: {
            a: "Ampliare le prospettive",
            b: "Isolare in bolle di contenuti",
            c: "Aumentare il dialogo"
        },
        correct: "b"
    },
    {
        question: "Chi ha introdotto il concetto di Filter Bubble?",
        options: {
            a: "Eli Pariser",
            b: "Tim Berners-Lee",
            c: "Mark Zuckerberg"
        },
        correct: "a"
    },
    {
        question: "Quale di queste è una conseguenza della Filter Bubble?",
        options: {
            a: "Miglioramento della diversità informativa",
            b: "Diffusione di disinformazione",
            c: "Eliminazione dei pregiudizi"
        },
        correct: "b"
    }
];

// Indice della domanda corrente
let currentQuestionIndex = 0;

// Funzione per caricare il quiz
function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const quizFeedback = document.getElementById('quiz-feedback');
    quizFeedback.textContent = '';

    const currentQuestion = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        <div class="quiz-options">
            <button onclick="checkAnswer('a')">a) ${currentQuestion.options.a}</button>
            <button onclick="checkAnswer('b')">b) ${currentQuestion.options.b}</button>
            <button onclick="checkAnswer('c')">c) ${currentQuestion.options.c}</button>
        </div>
    `;
}

// Funzione per verificare la risposta
function checkAnswer(answer) {
    const quizFeedback = document.getElementById('quiz-feedback');
    const currentQuestion = quizData[currentQuestionIndex];

    if (answer === currentQuestion.correct) {
        quizFeedback.textContent = 'Corretto!';
        quizFeedback.style.color = 'green';
    } else {
        quizFeedback.textContent = 'Sbagliato! Riprova.';
        quizFeedback.style.color = 'red';
        return;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        setTimeout(loadQuiz, 1000); // Passa alla domanda successiva dopo 1 secondo
    } else {
        quizFeedback.textContent = 'Quiz completato! Ottimo lavoro!';
    }
}

// Inizializza il quiz
loadQuiz();

const map = L.map('map').setView([41.9028, 12.4964], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([41.9028, 12.4964]).addTo(map)
    .bindPopup('Sede Centrale: Roma, Italia')
    .openPopup();
