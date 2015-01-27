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
            "location": "Dresden, Germany",
            "dates": "1994-2002",
            "description": "Maintaining IT infrastructure and minor programming tasks"
        },
        {   "employer": "Autohaus Schmolck GmbH & Co. KG",
            "title": "IT Administrator",
            "location": "Emmendingen, Germany",
            "dates": "2003-2015",
            "description": "It started with maintaining the IT infrastructure and changed later into programming interfaces between different software solutions."
        },
        {   "employer": "Z-Bit Solutions Limited",
            "title": "Programmer",
            "location": "London, U.K.",
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

var projects = {
    "projects": [
        {
            "title": "Orange Udacity Mug",
            "dates": "2015",
            "description": "In this project we learned how to implement a mocked HTML page in the most accurate way.",
            "images": [
                "images/Project1_1.png",
                "images/Project1_2.png"
            ]
        },
        {
            "title": "Interactive Resume",
            "dates": "2015",
            "description": "We learned the basics of JavaScript and how to separate content from layout.",
            "images": [
                "images/Project2_1.png"

            ]
        }
    ]
};
projects.display = function () {
    for (var i in projects.projects) {
        var pro = projects.projects[i];
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace('%data%', pro.title));
        $(".project-entry:last").append(HTMLprojectDates.replace('%data%', pro.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace('%data%', pro.description));
        for (var j in pro.images) {
            $(".project-entry:last").append(HTMLprojectImage.replace('%data%', pro.images[j]));
        }
    }
};
projects.display();

var education = {
    "schools": [
        {
            "name": "TU Dresden",
            "location": "Dresden, Germany",
            "degree": "no degree",
            "majors": [
                "Mathematics",
                "Mathematical Cybernetics and Computing"
            ],
            "dates": "1979",
            "url": "http://tu-dresden.de/en"
        },
        {
            "name": "TU Dresden",
            "location": "Dresden, Germany",
            "degree": "Master",
            "majors": [
                "Informatics"
            ],
            "dates": 1988,
            "url": "http://tu-dresden.de/en"
        }
    ],
    "onlineCourses": [
        {
            "title": "Nanodegree Web Developer",
            "school": "Udacity",
            "date": "2015",
            "url": "https://www.udacity.com/course/nd001"
        }
    ]
};
education.display = function () {
    $('#education').append(HTMLschoolStart);
    for (var i in education.schools) {
        $('.education-entry:last').append(
            HTMLschoolName
                .replace('%data%', education.schools[i].name)
                .replace('#', education.schools[i].url)
            + HTMLschoolDegree.replace('%data%', education.schools[i].degree)
        );
        $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[i].location));
        $('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[i].dates));
        for (var j in education.schools[i].majors){
            $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[i].majors[j]));
        }
    };
    $('.education-entry:last').append(HTMLonlineClasses);
    for (var i in education.onlineCourses) {
        $('.education-entry:last').append(
            HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title) +
            HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school)
        );
        $('.education-entry:last').append(HTMLonlineDates.replace('%data%', education.onlineCourses[i].date));
        $('.education-entry:last').append(
            HTMLonlineURL
                .replace('%data%', education.onlineCourses[i].url)
                .replace('#', education.onlineCourses[i].url)
        );
    }
};
education.display();

