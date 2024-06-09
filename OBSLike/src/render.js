// Buttongs
const videoElement = document.querySelector("video");
const startButton = document.querySelector("startButton");
const stopButton = document.querySelector("stopButton");
const videoSelectionButton = document.querySelector("videoSelectionBtn");
videoSelectionButton.onclick = () => getVideoSources;

// use Electron's desktop module called desktopCapturer
const { desktopCapturer } = require("electron");

// how to get the all the available screens on the device
async function getVideoSources() {
  const inputSources = await desktopCapturer.getSources({
    types: ["window", "screen"],
  });
}
