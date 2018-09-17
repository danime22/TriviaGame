var strangerThings = [
    {
        question: "Where does Season 1's suspenseful opening scene take place?",
        choices: ["Laboratory", "Spaceship", "The Byer's House", "A creepy farm in the middle of nowhere"],
        correctAnswer: "0",
        img: ""
    },
    {
        question: "Where does the story occur?",
        choices: ["Kansas", "Indiana", "New York", "Texas"],
        correctAnswer: "1",
        img: ""
    },
    {
        question: "Name the game that boys are always playing",
        choices: ["Dungeon & Dragons", "Super Mario Bros", "The Legend of Zelda", "Pac-Man"],
        correctAnswer: "0",
        img: ""
    },
    {
        question: "What is El's favorite food?",
        choices: ["Eggos", "Twinkies", "Pop-Tarts", "Ice cream"],
        correctAnswer: "0",
        img: ""
    },
    {
        question: "The Hawkins National Laboratory who kidnapped Eleven and unleashing the monster poses is connected to to?",
        choices: ["The Department of Health and Human Services", "The Department of Homeland Security", "The Department of Energy", "The Department of Defense"],
        correctAnswer: "",
        img: ""
    },
    {
        question: "What is Eleven's superpower?",
        choices: ["Superhuman Strength", "Telepathy", "Telekinesis", "Superhuman Speed"],
        correctAnswer: "2",
        img: ""
    },
    {
        question: "What do the boys call the terrifying, faceless creature",
        choices: ["Sauron", "Godzilla", "The Thing", "Demogorgon"],
        correctAnswer: "3",
        img: ""
    },
    {
        question: "How does Joyce communicate with herson Will when he is taken? ",
        choices: ["By painting on the wall", "With christmas lights", "Through sensory deprivation", "Through a mirror"],
        correctAnswer: "1",
        img: ""
    },
    {
        question: "What is the name of Mikes's sister?",
        choices: ["Nancy", "Barb", "Ellie", "Millie"],
        correctAnswer: "0",
        img: ""
    },
    {
        question: "The parallel dimension inhabited by the Demogorgon is referred to as?",
        choices: ["The butterfly effect", "The dark world", "The upside down", "The other place"],
        correctAnswer: "2",
        img: ""
    },
];

var strangerState = {
    userChoice: "",
    correctAnswer: "",
    wrongAnswer: "",
    images: "",
    points: "",
    timer: "",


};

var time = 15;

$(document).ready(function () {

    $("#start").on("click", function () {
        $("#start").hide();
        console.log("start");
        counter = setInterval(timer, 1000);

        question();
        timer();
        choices();
    })

    function question() {

        $("#question").text(strangerThings[0].question);

    };


});


function choices() {
    var choicesArr = strangerThings[0].choices;
    // $("#aChoice").text(strangerThings[0].choices);
    
    for(i=0; i<choicesArr.length; i++) {
        var buut = $("#choice"+ i);
        buut.text(choicesArr[i]);
    }
};

function timer() {
    time--;
    if (time <= 0) {
        clearInterval(counter);
        return;
    }
    $("#timer").html("<h3>" + "Timer : " + time + "</h3>");


}

