
function openTab(e , idTab){
    var tabContent = document.getElementsByClassName("tab-content");
    for(let i =0 ; i<tabContent.length ; i++){
        tabContent[i].style.display= 'none';
    }
    tabContent[idTab-1].style.display= 'block';
}
document.getElementById("defautOpen").click();


window.addEventListener('scroll', function() {
    var x = pageYOffset;
    if (x < 600) {

        let a = document.getElementById("advert");
        a.style.position = "static";
        a.style.top = "auto";
        a.style.marginLeft=20;
    } else if (x >= 600&&x<1300) {


        let a = document.getElementById("advert");
        a.style.position = "fixed";
        a.style.top = "120px";
        a.style.right = "60px";
    } else if(x>=1300){


        let a = document.getElementById("advert");
        a.style.position = "static";
        a.style.top = "auto";
    }
})