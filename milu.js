var i = 0;
var txt = `Fúha... elkéstem...       \n
Megint elaludtam ebéd után...        \n
Engem bíztak meg egy üzenettel, amit időben át kellett volna adnom neked, meow.         \n
Eléggé fontosnak tűnik. Ezen a kis papíron az áll:                 
"Nagyon boldog születésnapot kívánok! Örülök, hogy 30 éves lettél! Remélem ízlik majd az epertorta, \nés időben elviszi neked ez a cirmos!"\n
            \n
            \n
BOLDOG SZÜLINAPOT!`;
var speed = 50;

function typeWriter() {
    document.querySelector("#catcat").style = "display: inline-block;";
    var audio = document.getElementById("audio");
    audio.play();
    document.querySelector(".col-2").style = "animation: slideInFromLeft 1s ease-in;";
    if (i < txt.length) {
        document.getElementById("szoveg").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}