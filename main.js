status_123 = "";

function setup()
{
    canvas = createCanvas(480 ,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    //video.size(480 ,380);
}

function start()
{
    object = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting object";
    input = document.getElementById("box").value;
}

function modelLoaded()
{
    console.log("ModelLoaded!")
    status_123 = true;
}

function draw()
{
    image(video ,0 ,0 ,480 ,380);
}