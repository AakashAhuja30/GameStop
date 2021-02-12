// Base URL
const base_url = 'https://api.rawg.io/api/';

// Get the date
const dayjs = require("dayjs");

let now = dayjs();

const currentMonth = now.format("MM");
const currentDay = now.format("DD");
const currentYear = now.format("YYYY");
const currentDate = now.add("1", "day").format("YYYY-MM-DD");
const nextYear = now.add("1", "year").format("YYYY-MM-DD");
const lastYear = now.subtract("1", "year").format("YYYY-MM-DD");

// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;

export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}`;
export const gameScreenshotUrl = (game_id) => `${base_url}games/${game_id}/screenshots`;
export const searchGameUrl = (game_name) => `${base_url}games?search=${game_name}&page_size=9`;