const synth = window.speechSynthesis
const msg = new SpeechSynthesisUtterance()

class Speech{

  static appSpeak(text){
    console.log('here')
    synth.cancel()
    msg.text = text
    synth.speak(msg)
  }
  static cancelSpeak(){
    synth.cancel()
  }

}

export default Speech
