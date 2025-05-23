let userName = 'Max';
console.log(typeof userName);
const userName2 = 'Max';
console.log(typeof userName2);

type UserName = typeof userName;
type UserName2 = typeof userName2;

const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['John', 'Jane'],
};

type Settings = typeof settings;

function loadData(s: Settings) {}

loadData(settings);