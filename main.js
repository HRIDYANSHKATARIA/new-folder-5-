song = "";
song1= "";
song2 = "";
leftWristX = 0; 
leftWristY = 0; 
rightWristX = 0; 
rightWristY = 0; 
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

function draw()
{
    image(video,0,0,600,500);
}

function preload()
{
    song = loadSound("music.mp3");
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function play_one()
{
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}
function play_two()
{
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
} 

function modelloaded()
{
    console.log('POSENET IS INITIALIZED');
}

function gotposes(results)
{
    if (results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        
        console.log("leftwrist X  = "+leftWristX);
        console.log("leftwrist Y  = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        
        console.log("rightwrist X = "+rightWristX);
        console.log("rightwrist Y = "+rightWristY);
    }
}


