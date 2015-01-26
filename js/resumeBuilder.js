var bio = {
    "name": "Günther Zoppelt",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+44 790 8144 8xx",
        "email": "gzoppelt1@gmail.com",
        "github": "https://github.com/gzoppelt",
        "twitter": "You do not catch me there!",
        "location": "Nash Mills, Hertfordshire, U.K."
    },
    "welcomeMessage": "Welcome to all my friends!",
    "skills": [
        "AS/400, IBM iSeries, IBM BD/2",
        "Delphi",
        "PHP",
        "Zend-Framework",
        "Laravel",
        "JavaScript",
        "AngularJS",
        "Front-End-Web-Development (soon to come)"
    ],
    "biopic": "images/Guenther.jpg"
};
bio.display = function () {
    for(var key in bio.contacts) {
        $('#topContacts').append(
            HTMLcontactGeneric
                .replace('%contact%', key)
                .replace('%data%', bio.contacts[key])
        );
    }

    $('#header').prepend(HTMLbioPic.replace('%data%', bio.biopic));
    $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
    $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

    $("#header").append(HTMLskillsStart);
    $("#header").append(HTMLskills.replace('%data%', bio.skills[0]));
    for(var i = 1; i < bio.skills.length; i++){
        $(".flex-item:last").append(HTMLskills.replace('%data%', bio.skills[i]));
    }
    

};
bio.display();
