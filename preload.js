const { contextBridge, ipcRenderer } = require('electron')

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

contextBridge.exposeInMainWorld('api', {
  save_file: (file_data) => {
    ipcRenderer.invoke("save_file", file_data)
  }
})
