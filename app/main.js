
const url = process.env.URL || `file://${__dirname}/index.html`;

//
// main
//
const {app, BrowserWindow} = require('electron');

let mainWindow = null;

function createWindow() {
    if (mainWindow !== null) {
        return;
    }

    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL(url);
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);
app.on('activate', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

