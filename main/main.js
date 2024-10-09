import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { fileURLToPath } from "url";

// Crear __filename y __dirname manualmente para ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let appServe = null;

const loadAppServe = async () => {
  if (app.isPackaged) {
    const { default: serve } = await import("electron-serve");
    appServe = serve({
      directory: path.join(__dirname, "resources/app/dist"),
    });
  }
};

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // Usar __dirname para la ruta del preload
      contextIsolation: true,
      nodeIntegration: false,
      webviewTag: true,
    },
  });

  win.maximize();
  win.removeMenu();

  if (app.isPackaged) {
    await appServe(win);
    win.loadURL("app://-");
  } else {
    win.loadURL("http://localhost:5173");
    win.webContents.openDevTools();
    win.webContents.on("did-fail-load", () => {
      win.webContents.reloadIgnoringCache();
    });
  }
};

app.whenReady().then(async () => {
  await loadAppServe();
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
