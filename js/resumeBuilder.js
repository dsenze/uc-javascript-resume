///var work is used to describe my job history.
var work = {
    jobs: [{
            "employer": "DSenze",
            "title": "Enterprise Consultant",
            "location": "Emilsgata 17",
            "description": "Specialist in Monitoring and Automation solutions.",
            "job_logo_img_url": "",
            dates: "2016-09-01 to Current"
        },
        {
            "employer": "Axians",
            "title": "Devops",
            "location": "Regeringsgatan 140",
            "description": "Automation and integration of internal systems",
            "job_logo_img_url": "",
            dates: "2015-05-01 to 2016-05-19"
        },
        {
            "employer": "Relevo",
            "title": "Consultant",
            "location": "Kungsgatan 44",
            "description": "Implement Windows Server / System Center / Azure",
            "job_logo_img_url": "",
            dates: "2014-04-01 to 2015-04-29"
        },
        {
            "employer": "Swedish National Debt Office",
            "title": "System Center Specialist",
            "location": "Norrlandsgatan 15",
            "description": "Automation of Windows Server / System Center",
            "job_logo_img_url": "",
            dates: "2011-01-02 to 2013-11-29"
        },
        {
            "employer": "Riksgälden",
            "title": "Onsite Support Engineer",
            "location": "södertälje",
            "description": "Internal helpdesk",
            "job_logo_img_url": "",
            dates: "2009-01-01 to 2011-01-01"
        }

    ]
};
//var bio is used to describe my self.
var bio = {
    "name": "Tommy Vadman",
    "role": "Enterprise Consultant / Developer",
    "welcomeMessage": '" if($broken -eq $true){dial("Tommy Vadman")}} "',
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
            dates: "2016-09-01 to 2017-01-31",
            images: ["images/livemaps.jpeg", "images/livemaps.png"]
        },
        {
            "title": "frontend-nanodegree-resume-master",
            "description": "Project from Udacity course",
            dates: "2017-03-01 to 2017-03-07",
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
        dates: "2007-05-01 to 2007-05-19",
        "url": "www.itgymnasiet.se"
    }],
    onlineCourses: [{
        "title": "Github for Windows Users",
        "school": "Microsoft Virtual Academy",
        dates: "2007-05-01 to 2007-05-19",
        "url": "https://mva.microsoft.com/en-US/training-courses/github-for-windows-users-16749?l=8MGXzodxC_5206218965"
    }, {
        "title": "Github for Windows Users",
        "school": "Microsoft Virtual Academy",
        dates: "2007-05-01 to 2007-05-19",
        "url": "https://mva.microsoft.com/en-US/training-courses/github-for-windows-users-16749?l=8MGXzodxC_5206218965"
    }],
    Certificates: [{
        "title": "string",
        dates: "2007-05-01 to 2007-05-19",
        "url": "string"
    }]
};


// 
/**
 * @description work.display
 * Adds all workinfo (employer,title,dates,description) to #workExperience in index.html
 */
work.display = function() {
    work.jobs.forEach(function(job) {
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedworktitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkEmployerTitle = formattedWorkEmployer + formattedworktitle;
        var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedWorkEmployerTitle);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formattedworkDescription);
    });
};

/**
 * @description projects.display
 * Adds all projectinfo (title,dates,description,image) to #projects in index.html
 */
projects.display = function() {
    projects.projects.forEach(function(project) {
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
        var images = project.images;

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedprojectTitle);
        $(".project-entry:last").append(formattedprojectDates);
        $(".project-entry:last").append(formattedprojectDescription);
        // add image if exist.
        if (images.length > 0) {
            for (i = 0; i < images.length; i++) {   
                var formatedImage = HTMLprojectImage.replace("%data%", images[i]);
                $(".project-entry:last").append(formatedImage);
            }

        }
    });
};

/**
 * @description bio.display 
 * Adds bio.name,role,biopic,skills to #header in index.html
 * Adds bio.contacts.email,mobile,github,location to to #footerContacts in index.html
 */
bio.display = function() {

    var formattedSkills = HTMLskills.replace("%data%", bio.skills);
    var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedLocation = HTMLlocation.replace("%data%", "Sweden");
    var formattedHTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%", "mail");
    formattedHTMLcontactGeneric = formattedHTMLcontactGeneric.replace("%data%", (bio.contacts.email + " " + formattedMobile + " " + formattedGitHub + " " + formattedLocation));

    // add header bio information
    $("#header").prepend(formattedSkills);
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").prepend(HTMLheaderRole.replace("%data%", formattedbiopic));
    $("#topContacts").append(formattedHTMLcontactGeneric);


    // add footer bio information
    $("#footerContacts").append(formattedHTMLcontactGeneric);

};


/**
 * @description education.display 
 * Adds education.name,degree,majors,dates to #education in index.html
 */
education.display = function() {
    education.schools.forEach(function(school) {
        var formattedHTMLschoolName = HTMLschoolName.replace("%data%", school.name);
        //var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedMHTMLschoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedHTMLschoolName);
        $(".education-entry:last").append(formattedMHTMLschoolDates);
        $(".education-entry:last").append(formattedHTMLschoolMajor);

    });

    // add online courses
    $(".education-entry:last").append(HTMLonlineStart);
    $(".onlineclass-entry").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {
        var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        formattedHTMLonlineTitle = formattedHTMLonlineTitle.replace("#", onlineCourse.url);
        var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        $(".onlineclass-entry:last").append(formattedHTMLonlineTitle);
        $(".onlineclass-entry:last").append(formattedHTMLonlineDates);
        $(".onlineclass-entry:last").append(formattedHTMLonlineSchool);
    });

};

/**
 * getWorkTimelineData
 * @description  function get work.jobs.title,dates,description,job_logo_img_url
 * @return {Array} list of all jobs
 */
function getWorkTimelineData() {
    var listArray = [];
    work.jobs.forEach(function(job) {
        var jobName = job.employer + " - " + job.title;
        var jobDate = job.dates.split(" ")[0];
        var jobDescription = job.description;
        var jobImg = job.job_logo_img_url;

        //Job logo. If null add Tommy as company logo.
        if (jobImg) {
            jobImg = jobImg;
        } else {
            jobImg = "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/005/04f/110/03f078d.jpg";
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
}

/**
 * getFutureTimelineData
 * @description  function future plans
 * @return {Array} list of all future plans
 */
function getFutureTimelineData() {
    var listArray = [];
    future.plans.forEach(function(plan) {
        var planName = plan.name;
        var planDate = plan.dates["start-date"];
        var planDescription = plan.description;
        var planImg = plan.img_url;

        // company/future logo. If null add Tommy as company logo.
        if (planImg) {
            planImg = planImg;
        } else {
            planImg = "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/005/04f/110/03f078d.jpg";
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
 * addFuturetimeline() 
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