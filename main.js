const { app, BrowserWindow, ipcMain } = require('electron')
const { join } = require('path')

app.on('ready', () => {
  const window = new BrowserWindow({ 
    width: 800, 
    height: 600,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      nodeIntegration: true
    } 
  })
  window.loadFile('index.html')
})

ipcMain.on('handle-click', (event, args) => {
  console.log('Clicked! ')
})
