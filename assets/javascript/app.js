var strangerThings = [
    {
        question: "Where does Season 1's suspenseful opening scene take place?",
        choices: ["Laboratory", "Spaceship", "The Byer's House", "A creepy farm in the middle of nowhere"],
        correctAnswer: "0",
        img: "assets/images/Hawkins_Lab_aerial_view.png",
        trivia:"The Hawkins National Laboratory was a federal complex located in Hawkins Indiana. It was likely controlled by the CIA and NSA. The lab was headed by Dr. Martin Benner until the events of November 1983, whereafter Dr. Sam Owens took over as Director of Operations.  In the mid 20th century, the lab was host to MKUltra experiments, and at some point began abducting children to experiment on as well. During experiment, a child test subject named Eleven made to the Upside Down.<a  src= “http://strangerthings.wikia.com/wiki/Hawkins_National_Laboratory”>" 
    },
    {
        question: "Where does the story occur?",
        choices: ["Kansas", "Indiana", "New York", "Texas"],
        correctAnswer: "1",
        img: "assets/images/TS_Mens_Come_and_Visit_Hawkins_Indiana_Stranger_Things_Inspired_Ringer_T_Shirt_19_99_Print-617-662.jpg"
    },
    {
        question: "Name the game that boys are always playing",
        choices: ["Dungeon & Dragons", "Super Mario Bros", "The Legend of Zelda", "Pac-Man"],
        correctAnswer: "0",
        img: "assets/images/1_zU8flPMxg-k5Dxr7RU_LYQ.jpeg"
    },
    {
        question: "What is El's favorite food?",
        choices: ["Eggos", "Twinkies", "Pop-Tarts", "Ice cream"],
        correctAnswer: "0",
        img: "assets/images/elevennetflix.jpg"
    },
    {
        question: "The Hawkins National Laboratory who kidnapped Eleven and unleashing the monster poses is connected to to?",
        choices: ["The Department of Health and Human Services", "The Department of Homeland Security", "The Department of Energy", "The Department of Defense"],
        correctAnswer: "",
        img: "assets/images/download (1).jpeg"
    },
    {
        question: "What is Eleven's superpower?",
        choices: ["Superhuman Strength", "Telepathy", "Telekinesis", "Superhuman Speed"],
        correctAnswer: "2",
        img: "assets/images/103_009r-2-425fe509-fed0-40dc-8c1e-8f67659bcaeb.jpg"
    },
    {
        question: "What do the boys call the terrifying, faceless creature",
        choices: ["Sauron", "Godzilla", "The Thing", "Demogorgon"],
        correctAnswer: "3",
        img: "assets/images/Demogorgon_-_Chapter_Eight.jpg"
    },
    {
        question: "How does Joyce communicate with herson Will when he is taken? ",
        choices: ["By painting on the wall", "With christmas lights", "Through sensory deprivation", "Through a mirror"],
        correctAnswer: "1",
        img: "assets/images/https_%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F248885%2F640.jpg"
    },
    {
        question: "What is the name of Mikes's sister?",
        choices: ["Nancy", "Barb", "Ellie", "Millie"],
        correctAnswer: "0",
        img: "assets/images/f010c8f2-2876-4870-83c4-93d57f8155f7.jpg"
    },
    {
        question: "The parallel dimension inhabited by the Demogorgon is referred to as?",
        choices: ["The butterfly effect", "The dark world", "The upside down", "The other place"],
        correctAnswer: "2",
        img: "assets/images/Wiki-background.jpg"
    },
];

var strangerState = {

    points: 1,

    currentQuestion: 0,

    questionAnswered: false


};

var time = 11;
var counter;

$(document).ready(function () {

    $("#start").on("click", function () {
        $("#start").hide();
        console.log("start");
        
        gameStart = true;
        $("#next").show();
        setUpNextQuestion();
        var audio = new Audio('../TriviaGame/assets/images/Stranger Things (Extended).mp3');
        audio.play();
    });
});

function setUpNextQuestion() {
    question();
    choices();

    time = 11;
    counter = setInterval(timer, 1000);
    timer();


    //$("#next").attr("disabled", true);
    strangerState.questionAnswered = false;

}

function question() {
    $("#question").text(strangerThings[strangerState.currentQuestion].question);
}


function choices() {
    var choicesArr = strangerThings[strangerState.currentQuestion].choices;

    for (i = 0; i < choicesArr.length; i++) {
        var buut = $("#choice" + i);
        buut.text(choicesArr[i]);
    }
}

function timer() {
    time--;
    if (time <= 0) {
       stop();
       handleUserChoice(-1);
        return;
    }
    $("#timer").html("<h3>" + "Timer : " + time + "</h3>");


}


$("#choice0").on("click", function () {
    handleUserChoice(0);

    console.log("1");

})

$("#choice1").on("click", function () {
    handleUserChoice(1);
    console.log("2");
})

$("#choice2").on("click", function () {
    handleUserChoice(2);
    console.log("3");
})

$("#choice3").on("click", function () {
    handleUserChoice(3);
    console.log("4");
})



function handleUserChoice(userChoice) {
    console.log(userChoice);
    if (strangerState.questionAnswered) { return; }

    strangerState.questionAnswered = true;

    if (userChoice == strangerThings[strangerState.currentQuestion].correctAnswer) {
        $("#points").text("Points : " + strangerState.points);
        strangerState.points++;
        $("#question").html("<h1>" + "CORRECT !!" + "</h1>");
        // $("#trivia").show();       
        // $("#butDiv").hide();
        stop();
        console.log("right");
        console.log(strangerState.points);
    


    } else {
        $("#question").html("<h1>" + "STUPID !!" + "</h1>");
        // $("#butDiv").hide();
        // $("#trivia").show(); 
        console.log("wrong");
        stop();
        gameStart = false;

    }

    //$("#next").removeAttr("disabled");

}


function stop() {
    clearInterval(counter);
    console.log("stop");
}

$("#next").on("click", function () {
    if (!strangerState.questionAnswered) { return; }
    strangerState.currentQuestion++;
    console.log("NEXT!!!");
    setUpNextQuestion();
   //counter = setInterval(timer, 1000);
   //rest();
    // time === 16;
   
})



// function rest() {
//     var a = 15;
//     clearInterval(time);
//     timer = setInterval(function(){
//         $("#timer").text(a--);
//         if(a== -1) {
//             clearInterval(timer);
            
//         }
//     }, 1000)


    
// }






