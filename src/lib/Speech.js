const synth = window.speechSynthesis
// const voice = synth.getVoices()[0]
class Speech{

  // static getVoice(){
  //   return voice
  // }

  static appSpeak(text){
    synth.cancel()
    const msg = new SpeechSynthesisUtterance(text)
    synth.speak(msg)
  }

}

export default Speech
