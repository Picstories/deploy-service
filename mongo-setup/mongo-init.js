db_picstories = db.getSiblingDB('picstories');

user = {
    user: "picstories",
    pwd: "picstories",
    roles: [
        {
            role: "readWrite",
            db: "picstories"
        }
    ]
};
db_picstories.createUser(user);

COMICS = 'comics';
PAGES = 'pages';

db.createCollection(COMICS);
db.createCollection(PAGES);

db_picstories[COMICS].insertMany([
    {
        "_id": "xkcd",
        "title": "XKCD",
        "description": "A webcomic of romance, sarcasm, math, and language.",
        "author": "Max Goodhart, Amber, Benjamin Staffin, Kevin, @fading_interest, Kat, @zigdon, and Christopher Night.",
        "mainPage": "https://xkcd.com",
        "initUrl": "https://xkcd.com/1",
        "logoUrl": "https://xkcd.com/s/0b7742.png",
        "lang": "en",
        "parserCode": "xkcd-parser",
        "pageCount": 15,
        "lastUpdate": "2020-03-18T16:00:00.000",
        "lastCheck": "2020-03-18T16:00:00.000"
    }
]);

db_picstories[PAGES].insertMany(
    [
        {
            "_id": "xkcd_1",
            "comicId": "test",
            "number": 1,
            "title": "Barrel - Part 1",
            "description": "Don't we all.",
            "pageUrl": "https://xkcd.com/1",
            "nextUrl": "https://xkcd.com/2",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        },
        {
            "_id": "xkcd_2",
            "comicId": "test",
            "number": 2,
            "title": "Petit Trees (sketch)",
            "description": "'Petit' being a reference to Le Petit Prince, which I only thought about halfway through the sketch",
            "pageUrl": "https://xkcd.com/2",
            "nextUrl": "https://xkcd.com/3",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/tree_cropped_(1).jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        },
        {
            "_id": "xkcd_3",
            "comicId": "test",
            "number": 3,
            "title": "Island (sketch)",
            "description": "Hello, island",
            "pageUrl": "https://xkcd.com/3",
            "nextUrl": "https://xkcd.com/4",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/island_color.jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        },
        {
            "_id": "xkcd_4",
            "comicId": "test",
            "number": 4,
            "title": "Landscape (sketch)",
            "description": "There's a river flowing through the ocean",
            "pageUrl": "https://xkcd.com/4",
            "nextUrl": "https://xkcd.com/5",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/landscape_cropped_(1).jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        },
        {
            "_id": "xkcd_5",
            "comicId": "test",
            "number": 5,
            "title": "Blown apart",
            "description": "Blown into prime factors",
            "pageUrl": "https://xkcd.com/5",
            "nextUrl": "https://xkcd.com/6",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/blownapart_color.jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        },
        {
            "_id": "xkcd_6",
            "comicId": "test",
            "number": 6,
            "title": "Irony",
            "description": "It's commonly known that too much perspective can be a downer.",
            "pageUrl": "https://xkcd.com/6",
            "nextUrl": "https://xkcd.com/7",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/irony_color.jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        },
        {
            "_id": "xkcd_7",
            "comicId": "test",
            "number": 7,
            "title": "Girl sleeping (Sketch -- 11th grade Spanish class)",
            "description": "I don't remember her name at all, but she fell asleep on the floor in front of me.",
            "pageUrl": "https://xkcd.com/7",
            "nextUrl": "https://xkcd.com/8",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/girl_sleeping_noline_(1).jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        },
        {
            "_id": "xkcd_8",
            "comicId": "test",
            "number": 8,
            "title": "Red spiders",
            "description": "They are six-legged spiders",
            "pageUrl": "https://xkcd.com/8",
            "nextUrl": "https://xkcd.com/9",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/red_spiders_small.jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        },
        {
            "_id": "xkcd_9",
            "comicId": "test",
            "number": 9,
            "title": "Serenity is coming out tomorrow",
            "description": "Mal, Simon, Wash, Zoe, River, Kaylee, Jayne, Inara, Book.",
            "pageUrl": "https://xkcd.com/9",
            "nextUrl": "https://xkcd.com/10",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/firefly.jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        },
        {
            "_id": "xkcd_10",
            "comicId": "test",
            "number": 10,
            "title": "Pi Equals",
            "description": "My most famous drawing, and one of the first I did for the site",
            "pageUrl": "https://xkcd.com/10",
            "nextUrl": "https://xkcd.com/11",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/pi.jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        },
        {
            "_id": "xkcd_11",
            "comicId": "test",
            "number": 11,
            "title": "Barrel - Part 2",
            "description": "Awww.",
            "pageUrl": "https://xkcd.com/11",
            "nextUrl": "https://xkcd.com/12",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/barrel_mommies.jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        },
        {
            "_id": "xkcd_12",
            "comicId": "test",
            "number": 12,
            "title": "Poisson",
            "description": "Poisson distributions have no value over negative numbers",
            "pageUrl": "https://xkcd.com/12",
            "nextUrl": "https://xkcd.com/13",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/poisson.jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        },
        {
            "_id": "xkcd_13",
            "comicId": "test",
            "number": 13,
            "title": "Canyon",
            "description": "They're standing at the lip of the canyon, which isn't clear at all.",
            "pageUrl": "https://xkcd.com/13",
            "nextUrl": "https://xkcd.com/14",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/canyon_small.jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        },
        {
            "_id": "xkcd_14",
            "comicId": "test",
            "number": 14,
            "title": "Copyright",
            "description": "After reading Slashdot and BoingBoing, sometimes I have to go outside.",
            "pageUrl": "https://xkcd.com/14",
            "nextUrl": "https://xkcd.com/15",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/copyright.jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        },
        {
            "_id": "xkcd_15",
            "comicId": "test",
            "number": 15,
            "title": "Just Alerting You",
            "description": "Just thought you should know",
            "pageUrl": "https://xkcd.com/15",
            "nextUrl": "https://xkcd.com/16",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/just_alerting_you.jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        },
        {
            "_id": "xkcd_16",
            "comicId": "test",
            "number": 16,
            "title": "Monty Python -- Enough",
            "description": "I went to a dinner where there was a full 10 minutes of Holy Grail quotes exchanged, with no context, in lieu of conversation.  It depressed me badly.",
            "pageUrl": "https://xkcd.com/16",
            "nextUrl": "https://xkcd.com/17",
            "images": [
                {
                    "url": "https://imgs.xkcd.com/comics/monty_python.jpg",
                    "previewUrl": null,
                    "largeUrl": ""
                }
            ]
        }
    ]
);