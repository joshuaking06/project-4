class Settings{
  static setNightMode(status){
    localStorage.setItem('night', status )
  }

  static isNightMode(){
    const status = localStorage.getItem('night')
    if(status === 'false') return false
    return true
  }

}

export default Settings
