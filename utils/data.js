const usernames = [
    "Auser",
    "AfarBizarre",
    "ApplesVives",
    "ExpeSoccer",
    "GeoffNessDa",
    "JerkyQuirky",
    "PerfunctBill",
    "PerfunctSoccer",
    "RegistrarBizarre",
    "SoccerQuirky",
    "StrawberriesExcentric",
    "AsaGeoff",
    "Goeffer",
    "GlimmerQuirky",
    "MaGeoff",
    "PerfunctChee",
    "SoccerSolano",
    "ApplesRazu",
    "BadmintonBarbe",
    "HaresPears",
    "PeachesPease",
    "PerfunctQuirky",
    "Soccerpo",
    "Strawberries"
];

const emails = [
    "Auser@comcast.net",
    "afar@hotmail.com",
    "vives@aol.com",
    "ExpeSoccer@gmail.com",
    "NessDa@yahoo.com",
    "JerkyQuirky@comcast.net",
    "perbil@hotmail.com",
    "persoc@aol.com",
    "reg@gmail.com",
    "socqui@yahoo.com",
    "straex@comcast.net",
    "asa@hotmail.com",
    "goe@aol.com",
    "gli@gmail.com",
    "mag@yahoo.com",
    "perchee@comcast.net",
    "socsol@hotmail.com",
    "app@aol.com",
    "bad@gmail.com",
    "har@yahoo.com",
    "pea@comcast.net",
    "per@hotmail.com",
    "soc@aol.com",
    "str@gmail.com"
];

const text = [
    "Networking Site",
    "Networks of Social Media",
    "A social networking site",
    "Networks of social networks",
    "Websites for socializing",
    "Using Social Media",
    "Websites and social networks",
    "Social networking sites",
    "Connect with social networks",
    "Social Media",
    "Engineer Software",
    "Software Engineer",
    "The software engineering profession",
    "Engineers working on software",
    "The field of software engineering",
    "Developing Software",
    "Design and development of software",
    "The software engineering field",
    "Engineered software",
    "Software designer",
    "An Assignment",
    "A thing to do",
    "A home assingment",
    "Taking the grades"
];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () =>
    `${getRandom(usernames)}`

const getRandomEmail = () =>
    `${getRandom(emails)}`

const getRandomText = () =>
    `${getRandom(text)}`

module.exports = { getRandomName, getRandomEmail, getRandomText }