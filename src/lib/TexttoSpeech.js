class TexttoSpeech{
  static constructor(){
    this.msg = new SpeechSynthesisUtterance()
  }


  static getSpeech(){
    // const msg = new SpeechSynthesisUtterance()
    return this.msg
  }



}

export default TexttoSpeech
