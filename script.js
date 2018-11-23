var count = 0
var intervalID

function startSlide(){
    count += 1
    document.getElementById("imageshow").src = "images/" + count + ".jpg"
    if(count == 8){
        count = 0
    }
}

function show(){
    intervalID = setInterval(function (){ startSlide() } , 1500)
}

function stop(){
    clearInterval(intervalID)
}