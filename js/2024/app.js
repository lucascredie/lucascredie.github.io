var journey = {
    2013:{
        paragraph: "I left São Paulo, Brazil, to study marketing at a university in Minnesota, US on a scholarship. I started with marketing but didn't like what I was learning at the time. I was happy, but very lost.",
        url1: "../../photos/lourdes.jpg",
        url2: "../../photos/winona.jpg",
        description1: "Where I lived during my first year. They separated students in houses, like Hogwarts in Harry Potter and students believed it was haunted.",
        description2: "Winona is such a beatiful city, specially in the fall. That said Winters were rough, specially coming from Brazil."
    },
    2015:{
        paragraph: "I got involved in all the business school activities I could, and during a trip to a company called Nerdery, I fell in love with computer science. I changed my major the next day. Since Winona was a small town I started to go to design and code events in other states and cities to meet developers and companies.",
        url1: "../../photos/DC.jpg",
        url2: "../../photos/NY.jpg",
        description1: "First event I participated outside of MN was JSNation. I was surprised by how much I liked Washington, D.C. It is a great city.",
        description2: "Also went to a few hackathons in Chicago, New York and Boston. All the money I saved from working in tech support would go to events."
    },
    2018:{
        paragraph: "During my time studying computer science, I realized I loved design, so I gravitated towards web development classes and spent my free time learning everything I could. I graduated with an applied computer science degree and a job offer to work in San Francisco for a company called Sunbasket doing front end development.",
        url1: "../../photos/dad.jpg",
        url2: "../../photos/graduation.JPG",
        description1: "Proud dad came to see me graduate, it was a great time",
        description2: "I was supposed to look at the dean but I forgot last minute. Shame on me!"
    },
    2019:{
        paragraph: "I loved working at Sunbasket. I was part of an amazing hybrid team and was involved in both UI design and front-end development. I learned a lot from designers, marketers, and developers, and deployed multiple crucial features for users. However, the company struggled to become profitable, and after two rounds of layoffs, I was let go.",
        url1: "../../photos/finearts.gif",
        url2: "../../photos/sunbasketteam.jpg",
        description1: "SF is still in my heart to this day. Palace of Fine Arts on a good day was always a good call",
        description2: "Sunbasket team lunch. Discovered I didn't like oysters!"
    },
    2020:{
        paragraph: "I got a job at an enterprise B2B SaaS company called Vail Systems in Chicago. There, I came into contact with React and acted as the bridge between the design and development teams. When COVID happened, I wanted to find a way to build a business myself so I started an agency with a lifelong friend Gustavo, building e-commerce stores with Shopify.",
        url1: "../../photos/snow.gif",
        url2: "../../photos/founders.jpg",
        description1: "Chicago was very very cold, but was a great city. This was the view from my apartment at the time, pretty cozy.",
        description2: "Me and Gustavo trying to look professional"
    },
    2024:{
        paragraph: "I'm currently running Colored Byte, where we helped over 350 brands with their e-commerce user experience, employed a few dozen people and partnered with dozens of companies like Shopify, Klaviyo and others.",
        url1: "../../photos/partners.jpg",
        url2: "../../photos/coloredteam.jpg",
        description1: "Agencies and partners meet and greet in Gran Canaria, 2023",
        description2: "One of the team retreats in Natal, Brazil, 2022. Best beach I ever been to."
    }
}

var image1 = document.querySelector(".image1");
var image2 = document.querySelector(".image2");
var image1description = document.querySelector(".image1-description");
var image2description = document.querySelector(".image2-description");
var description = document.querySelector(".journey-description");


document.querySelectorAll('.time-pill').forEach(function(element) {
    element.addEventListener('click', function(event) {
        // Your code to handle the click event
        const classToRemove = 'active';
        const classToAdd = 'active';
        var year = event.target.textContent;
        console.log(year);

        description.textContent = journey[year].paragraph;
        image1.src = journey[year].url1;
        image2.src = journey[year].url2;
        image1description.textContent = journey[year].description1;
        image2description.textContent = journey[year].description2;


        removeClass('.time-pill', classToRemove);
        removeClass('.image', "fadeIt");
        addClass('.image', "fadeIt");
        // // Remove the class from all time-pill elements
        // document.querySelectorAll('.time-pill').forEach(function(pill) {
        //     pill.classList.remove(classToRemove);
        // });
        // Add the class to the clicked element
        event.target.classList.add(classToAdd);
    });
});

function removeClass(className, classToRemove) {
    document.querySelectorAll(className).forEach(function(item) {
        item.classList.remove(classToRemove);
    });
}
function addClass(className, classToAdd) {
    document.querySelectorAll(className).forEach(function(item) {
        item.classList.add(classToAdd);
    });
}