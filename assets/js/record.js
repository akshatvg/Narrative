var counter = 0;
var SpeechRecognition = window.webkitSpeechRecognition || window.speechRecognition;

var recognition = new SpeechRecognition();

var Content = "";

recognition.continuous = true;

recognition.onerror = function (event) {
    if (event.error == 'no-speech') {
        console.log('Could you please repeat? I didn\'t get what you\'re saying.');
        recognition.stop();
    }
}

function recordAudio() {
    if (Content.length) {
        Content += ' ';
    }
    recognition.start();
}

function stopRecordAudio() {
    recognition.onresult = function (event) {

        var current = event.resultIndex;

        var transcript = event.results[current][0].transcript;

        Content = Content + transcript;
        Content = Content;

        console.log(Content);
        
        Content = "";

    };
    recognition.stop();
}