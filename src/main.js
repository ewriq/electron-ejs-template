const { app,  BrowserWindow } = require('electron')
const path = require('path')
const express = require("express")
const apps = express();
const config = require("../config.json")

apps.set('view engine', 'ejs');

apps.use('/public', express.static(path.join(__dirname, '..', 'web', 'public')));
apps.use('/style', express.static(path.join(__dirname, '..', 'web', 'style')));
apps.use('/script', express.static(path.join(__dirname, '..', 'web', 'script')));


apps.get('/', (req, res) => {
  res.render('../web/index.ejs', { title: 'Electron + EJS' });
});


function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: true,
    autoHideMenuBar: true
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })
  mainWindow.webContents.openDevTools();
  mainWindow.loadFile(path.join(__dirname, 'index.html'))
}


// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {

  apps.listen(config.port)

  createWindow()
})
