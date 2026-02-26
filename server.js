// =========================
// ここでジャンルを選択してください
// =========================

// 1. 作成したいジャンルの tracks を有効にしてください
const currentGenre = "dubstep";    // let tracks = dubstepTracks;
// const currentGenre = "techno";     // let tracks = technoTracks;
// const currentGenre = "house";      // let tracks = houseTracks;
// const currentGenre = "trance";     // let tracks = tranceTracks;
// const currentGenre = "dnb";        // let tracks = dnbTracks;
// const currentGenre = "bigroom";    // let tracks = bigRoomTracks;
// const currentGenre = "dancepop";   // let tracks = dancePopTracks;
// const currentGenre = "ukrock";     // let tracks = ukRockTracks;

// =========================

require("dotenv").config();
const express = require("express");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 8888;

// =========================
// ジャンル別トラック定義 (各20曲)
// =========================

const dubstepTracks = [
  { title: "Gas Pedal", artist: "John Summit Sage The Gemini Subtronics Tape B" },
  { title: "Brain Tickler", artist: "Ahee" },
  { title: "SEE YOU DROP", artist: "Ray Volpe" },
  { title: "Black Ice", artist: "Rezz Subtronics" },
  { title: "Hawt", artist: "Hydraulix Oski" },
  { title: "Sunshine of Your Wub", artist: "YOOKIE" },
  { title: "Conquer", artist: "Marshmello Space Laces" },
  { title: "Sploinky Dub", artist: "Subtronics Grech" },
  { title: "Vortexblade", artist: "Marshmello Svdden Death" },
  { title: "Amnesia", artist: "Subtronics" },
  { title: "Laserbeam", artist: "Ray Volpe" },
  { title: "Griztronics", artist: "GRiZ Subtronics" },
  { title: "Bangarang", artist: "Skrillex" },
  { title: "Rumble", artist: "Skrillex Fred again.. Flowdan" },
  { title: "Cinema (Skrillex Remix)", artist: "Benny Benassi Gary Go" },
  { title: "Feel Something", artist: "Excision ILLENIUM" },
  { title: "In Your Head (RL Grime Edit)", artist: "G Jones" },
  { title: "Superlove", artist: "Whethan" },
  { title: "Chaos", artist: "Must Die!" },
  { title: "Scary Monsters and Nice Sprites", artist: "Skrillex" },
];

const technoTracks = [
  { title: "Bell", artist: "Mha Iri" },
  { title: "Dark Clouds", artist: "Heerhorst Teenage Mutants Peter Pahn" },
  { title: "Apollo", artist: "Space 92" },
  { title: "Hydra", artist: "Alex Stein" },
  { title: "Robocop", artist: "Umek Sam Wolfe" },
  { title: "Overdrive", artist: "Charlotte de Witte" },
  { title: "The Abyss", artist: "Hardwell Space 92" },
  { title: "Trinity", artist: "Trym Amelie Lens" },
  { title: "Shanti", artist: "Umek" },
  { title: "Human Robot", artist: "Victor Ruiz Alex Stein" },
  { title: "Universal Nation", artist: "Push Charlotte de Witte" },
  { title: "Space Raiders (Charlotte de Witte Remix)", artist: "Eats Everything" },
  { title: "Your Mind", artist: "Adam Beyer Bart Skils" },
  { title: "Gravity", artist: "Maddix" },
  { title: "The Age of Love (Charlotte de Witte Remix)", artist: "Age of Love" },
  { title: "Sandstorm", artist: "Freejak Darude" },
  { title: "Acid", artist: "Hardwell Luciana" },
  { title: "Exploration Of Space", artist: "Cosmic Gate" },
  { title: "Resurrected", artist: "HI-LO" },
  { title: "Techno On My Mind", artist: "Tchami Hiroki-San" },
];

const houseTracks = [
  { title: "Make My Body Move", artist: "Franky Rizardo Cara Melin" },
  { title: "U Got Me", artist: "Shermanology" },
  { title: "Take It Off", artist: "Fisher Aatig" },
  { title: "Jealous", artist: "Mochakk" },
  { title: "Love Desire", artist: "Cassimm" },
  { title: "The Cure & The Cause", artist: "Fish Go Deep Tracey K Idris Elba" },
  { title: "All I’ve Got", artist: "LF System" },
  { title: "When You Gonna", artist: "Illyus Barrientos" },
  { title: "Don’t Abuse It", artist: "Armand Van Helden Mark Knight" },
  { title: "Make Me", artist: "Borai Denham Audio Franky Rizardo" },
  { title: "Atmosphere", artist: "Fisher" },
  { title: "Moving All Around", artist: "Schak" },
  { title: "B.O.T.A.", artist: "Eliza Rose Interplanetary Crimson" },
  { title: "Ferrari", artist: "James Hype Miggy Dela Rosa" },
  { title: "Drugs From Amsterdam", artist: "Mau P" },
  { title: "Piece Of Your Heart", artist: "Meduza" },
  { title: "Turn On The Lights again..", artist: "Fred again.. Swedish House Mafia" },
  { title: "Looking At Your Pager", artist: "KH (Four Tet)" },
  { title: "Acraze", artist: "Do It To It" },
  { title: "Where You Are", artist: "John Summit Hayla" },
];

const tranceTracks = [
  { title: "Dayglow", artist: "Armin van Buuren Stuart Crichton" },
  { title: "Es Vedrà", artist: "Armin van Buuren" },
  { title: "Fulfillment", artist: "Ferry Corsten Marsh" },
  { title: "Half Light", artist: "Ben Gold" },
  { title: "Serotonin", artist: "Allen Watts" },
  { title: "Alcazar", artist: "David Forbes" },
  { title: "Nebula", artist: "Aly Fila" },
  { title: "In The Dark", artist: "LÜRUM" },
  { title: "Wildfire", artist: "Helsløwed" },
  { title: "Vertical", artist: "BT" },
  { title: "Adagio For Strings", artist: "Tiësto" },
  { title: "Sun & Moon", artist: "Above & Beyond" },
  { title: "Concrete Angel", artist: "Gareth Emery Christina Novelli" },
  { title: "Shivers", artist: "Armin van Buuren" },
  { title: "Communication", artist: "Armin van Buuren" },
  { title: "For An Angel", artist: "Paul van Dyk" },
  { title: "Saltwater", artist: "Chicane" },
  { title: "Children", artist: "Robert Miles" },
  { title: "Exploration Of Space", artist: "Cosmic Gate" },
  { title: "On A Good Day", artist: "OceanLab" },
];

const dnbTracks = [
  { title: "Go Back", artist: "John Summit Julia Church Sub Focus" },
  { title: "Eyes On Me", artist: "Rova NZ" },
  { title: "BACKBONE", artist: "Chase Status Stormzy" },
  { title: "Solar Ascending", artist: "Audio" },
  { title: "I Want You", artist: "Magnetude Burr Oak" },
  { title: "Supersonic", artist: "Friction Basstripper" },
  { title: "Sleepwalking", artist: "Issey Cross" },
  { title: "Crowded Roomz", artist: "Nia Archives" },
  { title: "Ecstasy", artist: "Delta Heavy" },
  { title: "Machete", artist: "AMC Sota" },
  { title: "Baddadan", artist: "Chase & Status" },
  { title: "Solar System", artist: "Sub Focus" },
  { title: "Afterglow", artist: "Wilkinson" },
  { title: "Tour", artist: "Macky Gee" },
  { title: "Disconnect", artist: "Becky Hill Chase & Status" },
  { title: "Mr Happy", artist: "DJ Hazard D-Minds" },
  { title: "Voodoo People (Pendulum Remix)", artist: "The Prodigy" },
  { title: "Ready To Fly", artist: "Sub Focus Dimension" },
  { title: "Hackers", artist: "Metrik" },
  { title: "Gold Dust (Shy FX Edit)", artist: "DJ Fresh" },
];

const bigRoomTracks = [
  { title: "The Drop", artist: "Dimitri Vegas Like Mike Bassjackers" },
  { title: "Rave Culture", artist: "W W" },
  { title: "Live The Night", artist: "Hardwell W W Lil Jon" },
  { title: "Crowd Control", artist: "Dimitri Vegas Like Mike W W" },
  { title: "Zombie", artist: "Ran-D" },
  { title: "Booyah", artist: "Showtek We Are Loud Sonny Wilson" },
  { title: "Stampede", artist: "Dimitri Vegas Like Mike DVBBS Borgeous" },
  { title: "Rocket", artist: "W W Blasterjaxx" },
  { title: "Spaceman", artist: "Hardwell" },
  { title: "Tsunami", artist: "DVBBS Borgeous" },
  { title: "Tremor", artist: "Dimitri Vegas Like Mike Martin Garrix" },
  { title: "Animals", artist: "Martin Garrix" },
  { title: "Toulouse", artist: "Nicky Romero" },
  { title: "Cannonball", artist: "Showtek Justin Prime" },
  { title: "Mammoth", artist: "Dimitri Vegas Like Mike MOGUAI" },
  { title: "Turn Up The Speakers", artist: "Afrojack Martin Garrix" },
  { title: "Beautiful World", artist: "Blasterjaxx DBSTF" },
  { title: "Apollo", artist: "Hardwell Amba Shepherd" },
  { title: "Secrets", artist: "Tiësto KSHMR" },
  { title: "Dragon", artist: "Martin Garrix Matisse & Sadko" },
];

const dancePopTracks = [
  { title: "Paradise", artist: "DOD Ina Wroldsen" },
  { title: "Pieces", artist: "Zack Martino" },
  { title: "Closer", artist: "Morgin Madison" },
  { title: "Oxygen", artist: "Ruben de Ronde Crowd Ctrl 88Birds" },
  { title: "Freefall", artist: "Chicane" },
  { title: "Body", artist: "Gabry Ponte" },
  { title: "Endless", artist: "BLR" },
  { title: "Hold Me", artist: "Pete K" },
  { title: "Feels Like Home", artist: "Zank" },
  { title: "Love Buzz", artist: "Matty Ralph" },
  { title: "Cold Heart (PNAU Remix)", artist: "Elton John Dua Lipa" },
  { title: "The Motto", artist: "Tiësto Ava Max" },
  { title: "Substitution", artist: "Purple Disco Machine Kungs" },
  { title: "Baby Don't Hurt Me", artist: "David Guetta Anne-Marie Coi Leray" },
  { title: "Don't Be Shy", artist: "Tiësto Karol G" },
  { title: "Believe", artist: "Eli & Fur" },
  { title: "Remember", artist: "Becky Hill David Guetta" },
  { title: "Ferrari", artist: "James Hype" },
  { title: "Stay The Night", artist: "Zedd Hayley Williams" },
  { title: "Clarity", artist: "Zedd Foxes" },
];

const ukRockTracks = [
  { title: "The Car", artist: "Arctic Monkeys" },
  { title: "The Steps", artist: "Royal Blood" },
  { title: "If You Ever Leave, I’m Coming With You", artist: "The Wombats" },
  { title: "Liquorice", artist: "Nothing But Thieves" },
  { title: "Little Monster", artist: "Royal Blood" },
  { title: "Are You Ready for Love?", artist: "Sam Fender" },
  { title: "Tokyo Drifting", artist: "Glass Animals Denzel Curry" },
  { title: "The Adults Are Talking", artist: "The Strokes" },
  { title: "Happiness", artist: "The 1975" },
  { title: "Alligator", artist: "Of Monsters and Men" },
  { title: "Miracle", artist: "CHVRCHES" },
  { title: "Welcome to the DCC", artist: "Nothing But Thieves" },
  { title: "Body Better", artist: "Maisie Peters" },
  { title: "R U Mine?", artist: "Arctic Monkeys" },
  { title: "Hypersonic Missiles", artist: "Sam Fender" },
  { title: "Heat Waves", artist: "Glass Animals" },
  { title: "Mountains", artist: "Biffy Clyro" },
  { title: "Seventeen Going Under", artist: "Sam Fender" },
  { title: "Will We Talk?", artist: "Sam Fender" },
  { title: "English Tea", artist: "The Wombats" },
];

// ジャンル選択用マッピング
const genreMap = {
  dubstep: dubstepTracks,
  techno: technoTracks,
  house: houseTracks,
  trance: tranceTracks,
  dnb: dnbTracks,
  bigroom: bigRoomTracks,
  dancepop: dancePopTracks,
  ukrock: ukRockTracks
};

// 選択されたデータをセット
const tracks = genreMap[currentGenre];
const currentGenreName = currentGenre;

// =========================
// Spotify API 制御ロジック
// =========================

let accessToken = process.env.SPOTIFY_ACCESS_TOKEN || null;
let refreshToken = process.env.SPOTIFY_REFRESH_TOKEN || null;
let storedState = null;

function generateRandomString(length) {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

// 1) /login
app.get("/login", (req, res) => {
  storedState = generateRandomString(16);
  const scopes = ["playlist-modify-private", "playlist-modify-public", "user-read-email", "user-read-private"];
  const params = new URLSearchParams({
    client_id: process.env.SPOTIFY_CLIENT_ID,
    response_type: "code",
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    scope: scopes.join(" "),
    state: storedState,
  });
  res.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
});

// 2) /callback
app.get("/callback", async (req, res) => {
  const { code, state } = req.query;
  if (!state || state !== storedState) return res.status(400).send("State mismatch");

  try {
    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    });

    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    const tokenJson = await tokenRes.json();
    if (!tokenRes.ok) throw new Error("Token extraction failed");

    accessToken = tokenJson.access_token;
    refreshToken = tokenJson.refresh_token;

    fs.appendFileSync(".env", `\nSPOTIFY_ACCESS_TOKEN=${accessToken}\nSPOTIFY_REFRESH_TOKEN=${refreshToken}\n`);

    console.log(`Authenticated. Generating ${currentGenreName} playlist...`);
    res.redirect("/generate-playlist");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// プレイリスト作成
async function createPlaylistWithTracks(name, description, tracksList) {
  const headers = { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" };
  const meRes = await fetch("https://api.spotify.com/v1/me", { headers });
  const me = await meRes.json();

  const plRes = await fetch(`https://api.spotify.com/v1/users/${me.id}/playlists`, {
    method: "POST",
    headers,
    body: JSON.stringify({ name, description, public: false }),
  });
  const playlist = await plRes.json();

  const uris = [];
  for (const t of tracksList) {
    const sParams = new URLSearchParams({ q: `track:${t.title} artist:${t.artist}`, type: "track", limit: "1" });
    const sRes = await fetch(`https://api.spotify.com/v1/search?${sParams.toString()}`, { headers });
    const sJson = await sRes.json();
    if (sJson.tracks?.items[0]) uris.push(sJson.tracks.items[0].uri);
  }

  if (uris.length > 0) {
    await fetch(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
      method: "POST",
      headers,
      body: JSON.stringify({ uris }),
    });
  }
  return playlist.id;
}

// 3) /generate-playlist
app.get("/generate-playlist", async (req, res) => {
  try {
    if (!accessToken) return res.redirect("/login");

    const playlistId = await createPlaylistWithTracks(
      `Auto Generated ${currentGenreName} 20 Tracks`,
      `Analysis for ${currentGenreName}`,
      tracks
    );
    res.send(`<h2>Success!</h2><p>${currentGenreName} playlist created.</p><a href="https://open.spotify.com/playlist/${playlistId}" target="_blank">View on Spotify</a>`);
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

app.listen(port, () => {
  console.log(`Running: http://localhost:${port}/login`);
});