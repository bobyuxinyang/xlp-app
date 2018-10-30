const dockerode = require('dockerode')
const { app, BrowserWindow } = require('electron')

function createWindow () {
	// Create the browser window.
	win = new BrowserWindow({ width: 800, height: 600 })

    // Open the DevTools.
    win.webContents.openDevTools()

	// and load the index.html of the app.
	win.loadFile('index.html')
}

app.on('ready', createWindow)

const isWindows = () => {
  return process.platform === 'win32';
}

let client = null

const setupDocker = () => {
	try {
  	if (isWindows()) {
  	  client = new dockerode({socketPath: '//./pipe/docker_engine'});
  	} else {
  	  client = new dockerode({socketPath: '/var/run/docker.sock'});
  	}
	} catch (error) {
		throw new Error('Cannot connect to the Docker daemon. Is the daemon running?');
	}	
}

setupDocker()
console.log('hello: ', client)