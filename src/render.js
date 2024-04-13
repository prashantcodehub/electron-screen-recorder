const {desktopCapturer,remote} = require('electron');
const {Menu} = remote;

const videoElement = document.querySelector('video');
const VideoSelectButton = document.getElementById('button-video-select');
const buttonStop = document.getElementById('button-stop');
const buttonStart = document.getElementById('button-start');

VideoSelectButton.onclick = getVideoSources();


async function getVideoSources() {
    const inputSources = await desktopCapturer.getSources({
        types : ['window','screen']
    })
    const videoOptionsMenu = Menu.buildFromTemplate(
        inputSources.map(source =>{
            return{
                lable : source.name,
                click : ()=>selectSource(source)
            }
        })
    )

    videoOptionsMenu.popup();
}