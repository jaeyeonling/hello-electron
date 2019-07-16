const { ipcRenderer } = require('electron')

window.handleClick = () => {
  ipcRenderer.send('handle-click')
}
