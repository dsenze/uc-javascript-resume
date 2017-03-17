//var work is used to describe my job history.
var work = {
    jobs: [{
            "employer": "DSenze",
            "title": "Enterprise Consultant",
            "location": "Emilsgata 17",
            "description": "Specialist in Monitoring and Automation solutions.",
            "job_logo_img_url": "",
            dates: {
                "start-date": "2016-06-30",
                "end-date": "Current"
            }
        },
        {
            "employer": "Axians",
            "title": "Devops",
            "location": "Regeringsgatan 140",
            "description": "Automation and integration of internal systems",
            "job_logo_img_url": "",
            dates: {
                "start-date": "2015-05-01",
                "end-date": "2016-05-19"
            },
        },
        {
            "employer": "Relevo",
            "title": "Consultant",
            "location": "Kungsgatan 44",
            "description": "Implement Windows Server / System Center / Azure infrastructure.",
            "job_logo_img_url": "",
            dates: {
                "start-date": "2014-04-01",
                "end-date": "2015-04-29"
            },
        },
        {
            "employer": "Swedish National Debt Office",
            "title": "System Center Specialist",
            "location": "Norrlandsgatan 15",
            "description": "Automation of Windows Server / System Center",
            "job_logo_img_url": "",
            dates: {
                "start-date": "2011-01-02",
                "end-date": "2013-11-29"
            },
        },
        {
            "employer": "Riksgälden",
            "title": "Onsite Support Engineer",
            "location": "södertälje",
            "description": "Internal helpdesk",
            "job_logo_img_url": "",
            dates: {
                "start-date": "2009-01-01",
                "end-date": "2011-01-01"
            },
        }

    ]
};
//var bio is used to describe my self.
var bio = {
    "name": "Tommy Vadman",
    "role": "Enterprise Consultant / Developer",
    "welcomemessage": '" if($broken -eq $true){dial("Tommy Vadman")}} "',
    "biopic": "images/me.jpg",
    skills: ["System Center", "Azure", "Windows Server", "Powershell", "Python", "Javascript"],
    contacts: {
        "mobile": "070-306 19 23",
        "email": "tommy.vadman@dsenze.se",
        "github": "dsenze",
        "twitter": "2",
        "location": "stockholm"
    },
    images: []

};
//var projects is used to describe my projects
var projects = {
    projects: [{
            "title": "Savision Livemaps",
            "description": "Consolidate monitoring tools and verify that SCOM can still be a solid player in Hybrid-IT. My assignment was to integrate all critical events into Operations Manager. Take alerts from different monitoring tools like PRTG, Apica, Azure, OMS, Application Insights and present them in SCOM through a third-party dashboard - Savision Livemaps. ",
            dates: {
                "start-date": "2016-09-01",
                "end-date": "2017-01-31"
            },
            images: ["images/livemaps.jpeg", "images/livemaps.png"]
        },
        {
            "title": "frontend-nanodegree-resume-master",
            "description": "Project from Udacity course",
            dates: {
                "start-date": "2017-03-01",
                "end-date": "2017-03-07"
            },
            images: []
        }
    ]
};
//var future is used to describe my futureplans with udacity.
var future = {
    plans: [{
            "name": "Front End Developer course",
            "description": "Start course",
            dates: {
                "start-date": "2017-03-15",
                "end-date": "2017-05-15"
            },
            "img_url": ""
        },
        {
            "name": "Fullstack Web Developer course",
            "description": "Start course",
            dates: {
                "start-date": "2017-06-15",
                "end-date": "2017-08-15"
            },
            "img_url": ""
        },
        {
            "name": "Awesome cloud developer!",
            "description": ":)",
            dates: {
                "start-date": "2020-06-15",
                "end-date": ""
            },
            "img_url": ""
        }
    ]
};

//var school is used to describe my education.
var education = {
    schools: [{
        "name": "IT-Gymnasiet",
        "location": "Rissneleden 144, 174 57 Sundbyberg",
        "degree": "AAA",
        "majors": ["Data/IT"],
        dates: {
            "start-date": "2020-06-15",
            "end-date": "2020-06-15"
        },
        "url": "www.itgymnasiet.se"
    }],
    onlinecourses: [{
        "title": "string",
        "school": "string",
        dates: {
            "start-date": "2020-06-15",
            "end-date": "2020-06-15"
        },
        "url": "string"
    }],
    Certificates: [{
        "title": "string",
        dates: {
            "start-date": "2020-06-15",
            "end-date": "2020-06-15"
        },
        "url": "string"
    }]
};

/**
 * @description work.display
 * Adds all workinfo (employer,title,dates,description) to #workExperience in index.html
 */
work.display = function(d) {
    work.jobs.forEach(function(job) {
        var formatedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formatedworktitle = HTMLworkTitle.replace("%data%", job.title);
        var formatedEmployerTitle = formatedEmployer + formatedworktitle;
        var formatedJobDescription = HTMLworkDescription.replace("%data%", job.description);
        var jobDate = job.dates["start-date"] + " - " + job.dates["end-date"];
        var formatedDates = HTMLworkDates.replace("%data%", jobDate);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formatedEmployerTitle);
        $(".work-entry:last").append(formatedDates);
        $(".work-entry:last").append(formatedJobDescription);
    });
}

/**
 * @description projects.display
 * Adds all projectinfo (title,dates,description,image) to #projects in index.html
 */
projects.display = function(d) {
    projects.projects.forEach(function(project) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", (project.dates["start-date"] + " - " + project.dates["end-date"]));
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        // add image if exist.
        if (project.images.length > 0) {
            for (image in project.images) {
                var formatedImage = HTMLprojectImage.replace("%data%", project.images[image]);
                $(".project-entry:last").append(formatedImage);
            }
        }


    });
}

/**
 * @description bio.display 
 * Adds bio.name,role,biopic,skills to #header in index.html
 * Adds bio.contacts.email,mobile,github,location to to #footerContacts in index.html
 */
bio.display = function() {

    var formatedSkills = HTMLskills.replace("%data%", bio.skills);
    var formatedbiopic = HTMLbioPic.replace("%data%", bio.biopic)
    var formatedGitHub = HTMLgithub.replace("%data%", bio.contacts.github)
    var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
    var formatedLocation = HTMLlocation.replace("%data%", "Sweden")
    var formatedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage)
    var formatedHTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%", "mail");
    formatedHTMLcontactGeneric = formatedHTMLcontactGeneric.replace("%data%", (bio.contacts.email + " " + formatedMobile + " " + formatedGitHub + " " + formatedLocation));

    // add header bio information
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderRole.replace("%data%", formatedbiopic));
    $("#header").append(formatedSkills);

    // add footer bio information
    $("#footerContacts").append(formatedHTMLcontactGeneric);

};


/**
 * @description education.display 
 * Adds education.name,degree,majors,dates to #education in index.html
 */
education.display = function() {
    education.schools.forEach(function(school) {
        var formattedHTMLschoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedMHTMLschoolDates = HTMLschoolDates.replace("%data%", (school.dates["start-date"] + " - " + school.dates["end-date"]));
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedHTMLschoolName);
        $(".education-entry:last").append(formattedMHTMLschoolDates);
        $(".education-entry:last").append(formattedHTMLschoolMajor);

    });

};

/**
 * getWorkTimelineData
 * @description  function get work.jobs.title,dates,description,job_logo_img_url
 * @return {Array} list of all jobs
 */
function getWorkTimelineData() {
    var listArray = []
    work.jobs.forEach(function(job) {
        var jobName = job.employer + " - " + job.title;
        var jobDate = job.dates["start-date"];
        var jobDescription = job.description;
        var jobImg = job.job_logo_img_url;

        //Job logo. If null add Tommy as company logo.
        if (jobImg) {
            jobImg = jobImg
        } else {
            jobImg = "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/005/04f/110/03f078d.jpg"
        }

        var obj = {
            name: jobName,
            date: jobDate,
            img: jobImg,
            description: jobDescription
        };

        listArray.push(obj);
    });
    return listArray;
};

/**
 * getFutureTimelineData
 * @description  function future plans
 * @return {Array} list of all future plans
 */
function getFutureTimelineData() {
    var listArray = []
    future.plans.forEach(function(plan) {
        var planName = plan.name
        var planDate = plan.dates["start-date"];
        var planDescription = plan.description
        var planImg = plan.img_url

        // company/future logo. If null add Tommy as company logo.
        if (planImg) {
            planImg = planImg
        } else {
            planImg = "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/005/04f/110/03f078d.jpg"
        }

        var obj = {
            name: planName,
            date: planDate,
            img: planImg,
            description: planDescription
        };

        listArray.push(obj);
    });
    return listArray;
}


/**
 * addWorktimeline() 
 * @description  Add worktimeline to #workExperience in index.html
 * Using function from TimeKnots to draw work timeline. timeknots.js
 * https://github.com/alangrafu/timeknots
 */
function addWorktimeline() {
    $("#workExperience").append(HTMLworkStart);
    TimeKnots.draw("#timeline", getWorkTimelineData(), {
        dateFormat: "%B %Y",
        color: "#696",
        width: 600,
        showLabels: true,
        labelFormat: "%Y",
        heading: "Job History"
    });
}

/**
 * ddFuturetimeline() 
 * @description  Add futuretimeline to #workExperience in index.html
 * Using function from TimeKnots to draw work timeline. timeknots.js
 * https://github.com/alangrafu/timeknots
 */
function addFuturetimeline() {
    $("#workExperience").append(HTMLworkStart);
    TimeKnots.draw("#timeline", getFutureTimelineData(), {
        dateFormat: "%B %Y",
        color: "#00F",
        width: 600,
        showLabels: true,
        labelFormat: "%Y",
        heading: "Future plans"
    });
}


/**
    .Script Starts
 */
addWorktimeline();
addFuturetimeline();
work.display();
projects.display();
bio.display();
education.display();
$("#mapDiv").append(googleMap);