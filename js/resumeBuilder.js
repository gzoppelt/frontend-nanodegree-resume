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

var work = {
    "jobs": [
        {   "employer": "Autohaus Berndt GmbH & Co. KG",
            "title": "IT Administrator",
            "location": "Dresden",
            "dates": "1994-2002",
            "description": "Maintaining IT infrastructure and minor programming tasks"
        },
        {   "employer": "Autohaus Schmolck GmbH & Co. KG",
            "title": "IT Administrator",
            "location": "Emmendingen",
            "dates": "2003-2015",
            "description": "It started with maintaining the IT infrastructure and changed later into programming interfaces between different software solutions."
        },
        {   "employer": "Z-Bit Solutions Limited",
            "title": "Programmer",
            "location": "London",
            "dates": "since 2013",
            "description": "AngularJS, node.js, Laravel (PHP)"
        }
    ]
};
work.display = function () {
    for (var i in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(
            HTMLworkEmployer.replace('%data%', work.jobs[i].employer)
            +  HTMLworkTitle.replace('%data%', work.jobs[i].title)
        );
        $(".work-entry:last").append(HTMLworkLocation.replace('%data%', work.jobs[i].location));
        $(".work-entry:last").append(HTMLworkDates.replace('%data%', work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace('%data%', work.jobs[i].description));
    }
};
work.display();

