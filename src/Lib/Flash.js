class Flash {
  static setMessage(type, message){
    this._messageObj = this._messageObj || {}
    this._messageObj[type] = message
  }

  static getMessages(){
    return this._messageObj
  }

  static clearMessages(){
    this._messageObj = null
  }
}


export default Flash
