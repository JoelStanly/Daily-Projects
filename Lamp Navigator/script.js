home = document.getElementsByClassName('home');
bookmark = document.getElementsByClassName('bookmark');
settings = document.getElementsByClassName('settings');
lamp = document.getElementsByClassName('lamp');
light = document.getElementsByClassName('light');
homeSvg = document.getElementsByClassName('homeSvg');
bookmarkSvg = document.getElementsByClassName('bookmarkSvg');
settingsSvg = document.getElementsByClassName('settingsSvg');

bookmarkSvg[0].style.fill = "white";


home[0].addEventListener("click",function(){
    light[0].style.transform = "translate(-115%,0%)";
    lamp[0].style.transform = "translate(-140%,0%)";
    homeSvg[0].style.fill = "white";
    bookmarkSvg[0].style.fill = "rgb(61, 61, 61)";
    settingsSvg[0].style.fill = "rgb(61, 61, 61)";
});
bookmark[0].addEventListener("click",function(){
    light[0].style.transform = "translate(0%,0%)";
    lamp[0].style.transform = "translate(0%,0%)";
    homeSvg[0].style.fill = "rgb(61, 61, 61)";
    bookmarkSvg[0].style.fill = "white";
    settingsSvg[0].style.fill = "rgb(61, 61, 61)";
});
settings[0].addEventListener("click",function(){
    light[0].style.transform = "translate(115%,0%)";
    lamp[0].style.transform = "translate(140%,0%)";
    homeSvg[0].style.fill = "rgb(61, 61, 61)";
    bookmarkSvg[0].style.fill = "rgb(61, 61, 61)";
    settingsSvg[0].style.fill = "white";
});