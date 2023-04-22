var SpeechRecognisation = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognisation();

function start()
{
    recognition.start();
}


camera = document.getElementById("camera");
WebKitCSSMatrix.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
})



function speak(){


    var synth = window.speechSynthesis;
    WebKitCSSMatrix.attach(camera);

    speak_data = "asking your selfie in 5 seconds";
    var utterThis = new SpeechS
}