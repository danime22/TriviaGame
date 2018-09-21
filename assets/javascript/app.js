var strangerThings = [
    {
        question: "Where does Season 1's suspenseful opening scene take place?",
        choices: ["Laboratory", "Spaceship", "The Byer's House", "A creepy farm in the middle of nowhere"],
        correctAnswer: 0,
        img: "assets/images/Hawkins_Lab_aerial_view.png",
        trivia: "The Hawkins National Laboratory was a federal complex located in Hawkins Indiana. It was likely controlled by the CIA and NSA. The lab was headed by Dr. Martin Benner until the events of November 1983, whereafter Dr. Sam Owens took over as Director of Operations.  In the mid 20th century, the lab was host to MKUltra experiments, and at some point began abducting children to experiment on as well. During experiment, a child test subject named Eleven made to the Upside Down.<a  src= “http://strangerthings.wikia.com/wiki/Hawkins_National_Laboratory”>"
    },
    {
        question: "Where does the story occur?",
        choices: ["Kansas", "Indiana", "New York", "Texas"],
        correctAnswer: 1,
        img: "assets/images/TS_Mens_Come_and_Visit_Hawkins_Indiana_Stranger_Things_Inspired_Ringer_T_Shirt_19_99_Print-617-662.jpg",
        trivia: "Stranger Things is set in the fictional rural town of Hawkins, Indiana, during the early 1980s. The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy, but secretly does experiments into the paranormal and supernatural, including those that involve human test subjects. Inadvertently, they have created a portal to an alternate dimension called 'the Upside Down'. The influence of the Upside Down starts to affect the unknowing residents of Hawkins in calamitous ways."
    },
    {
        question: "Name the game that boys are always playing",
        choices: ["Dungeon & Dragons", "Super Mario Bros", "The Legend of Zelda", "Pac-Man"],
        correctAnswer: 0,
        img: "assets/images/1_zU8flPMxg-k5Dxr7RU_LYQ.jpeg",
        trivia: "Dungeons & Dragons is a fantasy tabletop role-playing game first published in 1974. It is a popular activity with Mike, Lucas, Will, and Dustin, who play the 1983 Expert edition of the game in Mike's basement. They use the game's elements and monsters to describe and explain the otherwise unknown forces that plague Hawkins."
    },
    {
        question: "What is El's favorite food?",
        choices: ["Eggos", "Twinkies", "Pop-Tarts", "Ice cream"],
        correctAnswer: 0,
        img: "assets/images/elevennetflix.jpg",
        trivia: "Desperate and all by herself, Eleven strolls into a supermarket and casually steals all of the Eggo waffles it has to offer. She causes a huge scene when, after the manager yells at her, she shatters the store's windows and walks out."
    },
    {
        question: "The Hawkins National Laboratory who kidnapped Eleven and unleashing the monster poses is connected to to?",
        choices: ["The Department of Health and Human Services", "The Department of Homeland Security", "The Department of Energy", "The Department of Defense"],
        correctAnswer: 2,
        img: "assets/images/download (1).jpeg",
        trivia: "The Hawkins National Laboratory, connected to the U.S. Department of Energy, was a federal complex located in Hawkins, Indiana. It was most likely controlled by the CIA or NSA, and was one of several national laboratories which grew out of the scientific endeavors of World War II. It controlled several subsidiaries, including Hawkins Power and Light.[1] The lab was headed by Dr. Martin Brenner until the events of November 1983, whereafter Dr. Sam Owens took over as Director of Operations."
    },
    {
        question: "What is Eleven's superpower?",
        choices: ["Superhuman Strength", "Telepathy", "Telekinesis", "Superhuman Speed"],
        correctAnswer: 2,
        img: "assets/images/103_009r-2-425fe509-fed0-40dc-8c1e-8f67659bcaeb.jpg",
        trivia: "Eleven was kidnapped and raised in Hawkins National Laboratory, where she was experimented on for her inherited psychokinetic abilities. After escaping the lab, she was found by Mike, Lucas, and Dustin. Upon discovering her abilities, Mike believed that she could help find Will, their missing friend. "
    },
    {
        question: "What do the boys call the terrifying, faceless creature",
        choices: ["Sauron", "Godzilla", "The Thing", "Demogorgon"],
        correctAnswer: 3,
        img: "assets/images/Demogorgon_-_Chapter_Eight.jpg",
        trivia: "The Demogorgon, also known as the Monster, was a predatory humanoid creature that entered Hawkins, Indiana in November 1983. The creature originated from the parallel dimension known as the Upside Down. When Eleven, a psychic test subject from Hawkins National Laboratory, made interdimensional contact with it, a gate between dimensions opened at the lab."
    },
    {
        question: "How does Joyce communicate with herson Will when he is taken? ",
        choices: ["By painting on the wall", "With christmas lights", "Through sensory deprivation", "Through a mirror"],
        correctAnswer: 1,
        img: "assets/images/Joyce_communicates.jpg",
        trivia: "Chester(Chester was the pet dog of Joyce, Jonathan and Will Byers, which lived with them at their house ) later watched as Joyce hung Christmas lights around the house in order to communicate with Will. It later visited Castle Byers on the day of Will's 'funeral'."
    },
    {
        question: "What is the name of Mikes's sister?",
        choices: ["Nancy", "Barb", "Ellie", "Millie"],
        correctAnswer: 0,
        img: "assets/images/f010c8f2-2876-4870-83c4-93d57f8155f7.jpg",
        trivia: "Nancy was the first child of Karen and Ted Wheeler, and she would later be joined by younger siblings Mike and Holly. Together, the family of five lived at their home in Hawkins, Indiana."
    },
    {
        question: "The parallel dimension inhabited by the Demogorgon is referred to as?",
        choices: ["The Butterfly Effect", "The Dark World", "The Upside Down", "The other place"],
        correctAnswer: 2,
        img: "assets/images/Wiki-background.jpg",
        trivia: "The Upside Down is an alternate dimension existing in parallel to the human world. Most, if not all, flora and fauna present in the dimension are linked together in a hive mind controlled by the Mind Flayer, essentially forming an enormous superorganism. A key component of this hive mind was a species of humanoid predators, dubbed Demogorgons, which originated from the dimension."
    },
];

var strangerState = {

    points: 0,

    currentQuestion: 0,

    questionAnswered: false


};

var time = 11;
var counter;

$(document).ready(function () {
    $("#points").hide();
    $("#question").hide();
    $("#butDiv").hide();
    $(".reset").hide();
    $("#timer").hide();


    $("#start").on("click", function () {
        $("#question").show();
        $("#butDiv").show();
        $(".reset").show();
        $("#timer").show();
        $("#opening").hide();
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
    $("#butDiv").show();
    $("#trivia").hide();
    time = 11;
    counter = setInterval(timer, 1000);
    timer();

    strangerState.questionAnswered = false;

}

function question() {
    var questionDisplay = (strangerState.currentQuestion + 1) + "/" + strangerThings.length;
    $("#question").html(strangerThings[strangerState.currentQuestion].question);
    $("#file").text(questionDisplay);
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
    console.log("0");

})

$("#choice1").on("click", function () {
    handleUserChoice(1);
    console.log("1");
})

$("#choice2").on("click", function () {
    handleUserChoice(2);
    console.log("2");
})

$("#choice3").on("click", function () {
    handleUserChoice(3);
    console.log("3");
})



function handleUserChoice(userChoice) {

    if (strangerState.questionAnswered) { return; }

    stop();
    strangerState.questionAnswered = true;
    console.log("Q " + strangerState.currentQuestion);

    if (userChoice == strangerThings[strangerState.currentQuestion].correctAnswer) {
        $("#points").text("Points : " + strangerState.points);
        strangerState.points++;
        $("#question").html("<h1>" + "CORRECT !!" + "</h1>");

        console.log("right");
        console.log("score: " + strangerState.points);


    } else {
        $("#question").html("<h1>" + "WRONG!  The answer is : " + "</h1>");
        $("#butDiv").hide();
        $("#trivia").show();
        console.log("wrong");
        gameStart = false;


    }
    var answer = strangerThings[strangerState.currentQuestion].choices[strangerThings[strangerState.currentQuestion].correctAnswer];
    $("#trivia").show();
    $("#trivia").html("<h1>" + answer + "</h1><br>" + strangerThings[strangerState.currentQuestion].trivia);
    $('#imahe').html("<img src='" + strangerThings[strangerState.currentQuestion].img + "'>");
    $("#imahe").show();
    $("#butDiv").hide();

    if (strangerState.currentQuestion >= strangerThings.length -1) {
        console.log("show finish");
        $("#next").hide();
        // $("#finish").show();
    }

    $("#finish").show();
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
    $("#imahe").hide();

});

$("#finish").on("click", function () {
    gameOver();
});



function gameOver() {
    console.log("doing game over");
    gameStart = false;
    $("#finish").hide();
    // $("#opening").show();
    $("#opening").html("<h1>CONGRATULATIONS!! Your score is: </h1>" + points);
    $("#question").hide();
    $("#butDiv").hide();
    $(".reset").hide();
    $("#timer").hide();
    $("#trivia").hide();
    $("#imahe").hide();
}

