const msg = new SpeechSynthesisUtterance()

class Speech{

  static getSpeech(){
    console.log(window.speechSynthesis.getVoices())
    // console.log(this.getVoices())
    return msg
  }



}

export default Speech
