window.onload = function() {

    var projects = [

        {
            name: "Jam-Clash",
            image: "assets/images/jamClash.png",
            link: "https://jam-clash.herokuapp.com/",
            summary: "An app that helps local musicians connect."
        },
        {
            name: "Fridge-2-Plate",
            image: "assets/images/fridgeImage.png",
            link: "https://fridge2plate.herokuapp.com/",
            summary: "An app designed to generate recipe ideas for a user based upon ingredients provided by the user."
        },

        {
            name: "Clicky-Game",
            image: "assets/images/clickyGame.png",
            link: "https://j-clicky-game.herokuapp.com/",
            summary: "A South Park themed memory game built with React.js."
        },


        {
            name: "Mongo-Scraper",
            image: "assets/images/mongoImage.png",
            link: "https://j-mongo-scraper.herokuapp.com/",
            summary: "Scrapes 'The Onion' for the most recent headlines and provides a link to the article as well as an option to leave a note on the article."
        },
        {
            name: "Trivia-Game",
            image: "assets/images/triviaImage.png",
            link: "https://joshjancula.github.io/triviaGame/#",
            summary: "A fun trivia game that picks a random 10 South Park themed questions."
        },

        {
            name: "Friend-Finder",
            image: "assets/images/surveyImage.png",
            link: "https://j-friend-finder.herokuapp.com/",
            summary: "A quick fun survey to see who is a compatible friend for you!"
        },
        {
            name: "Eat-da-Burger",
            image: "assets/images/burgerGame.png",
            link: "https://immense-scrubland-46998.herokuapp.com/",
            summary: "My first handlebars.js app, designed to keep track of burgers I've eaten and burgers I would like to eat."
        },


        {
            name: "Giphy",
            image: "assets/images/giphyImage.png",
            link: "https://joshjancula.github.io/GIPHY/",
            summary: "An app designed to help a user find an interesting travel destination. The app provides information on traveling to a new country and includes reviews from users that have also traveled to that destination."
        },



        {
            name: "Crystal-Collector",
            image: "assets/images/newCrystal.png",
            link: "https://joshjancula.github.io/CrystalCollector/",
            summary: "A fun game where the Gem values are randomized and hidden. The user then tries to match the randomized score with those gem values."
        },

    ];




    var results = projects;

    for (var i = 0; i < results.length; i++) {
        var image = results[i].image;
        var link = results[i].link;
        var name = results[i].name;
        var summary = results[i].summary;
        var dropdown = "<div class='btn-group'><button type='button' class='btn btn-info dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>" + name + "<span class='caret'></span></button><ul class='dropdown-menu'><li><a href='#'>" + summary + "</a></li> </ul></div>"
        var portfolioImage = $("<div class='item'>");
        // make one of these for each thing in there
        image = "<div class= 'dynamicImage'><a href='" + link + "'><img src=" + image + " class='portfolioImage'></div>";


        // prepend the portfolioImage to the "#portfolio" div in the HTML
        portfolioImage.append(image);
        portfolioImage.append(dropdown);

        //   $("#portfolio").append(image);

        $("#portfolio").append(portfolioImage);
        // $("#portfolio").append(dropdown);




    }

};
