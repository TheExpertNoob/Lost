    const app = document.getElementById("app")
    const webamp = new Webamp({

		initialSkin: {url: "skins/Ultimate_Nintendo64_Amp.wsz"},

		initialTracks: [
			{url: "n64/Ancient Ruins (From _Turok Dinosaur Hunter_).mp3"},
			{url: "n64/Aqua Star (Kirby 64_ The Crystal Shards).mp3"},
			{url: "n64/Area 6 Guitar Medley (From _Star Fox 64_).mp3"},
			{url: "n64/Bats (From _Conker's Bad Fur Day_) [feat. Charles Ritz].mp3"},
			{url: "n64/Bob Omb Battlefield.mp3"},
			{url: "n64/Bob-omb Battlefield (From _Super Mario 64_) [feat. Joshua Taipale].mp3"},
			{url: "n64/Bomberman 64 - Green Garden.mp3"},
			{url: "n64/Conker's Bad Fur Day Jazz Medley.mp3"},
			{url: "n64/Dire, Dire Docks (From _Super Mario 64_).mp3"},
			{url: "n64/Dire, Dire Docks (Super Mario 64).mp3"},
			{url: "n64/DK Rap (From _Donkey Kong 64_) [feat. The GET N! Crew_SyntheticSloth].mp3"},
			{url: "n64/Forest Temple.mp3"},
			{url: "n64/Fortuna (Sidekick).mp3"},
			{url: "n64/Goldeneye 007 - Frigate.mp3"},
			{url: "n64/Heroes of the Rebellion - A Star Wars_ Rogue Squadron Tribute.mp3"},
			{url: "n64/K.K. Cruisin'.mp3"},
			{url: "n64/Kakariko Village (From _The Legend of Zelda_ Ocarina of Time_).mp3"},
			{url: "n64/Koopa Troopa Beach 64.mp3"},
			{url: "n64/Mario Raceway (From _Mario Kart 64_) [feat. TylerNJazz].mp3"},
			{url: "n64/Ocarina Of Time - Opening Theme.mp3"},
			{url: "n64/Piranha Plant's Lullaby (From _Super Mario 64_).mp3"},
			{url: "n64/Rainbow Road (From _Mario Kart 64_) [feat. Joshua Taipale].mp3"},
			{url: "n64/Rainbow Road.mp3"},
			{url: "n64/Resident Evil 2 Save Room Theme.mp3"},
			{url: "n64/S.S. Anubis (Jet Force Gemini).mp3"},
			{url: "n64/Sheik's Theme (From _Ocarina of Time_).mp3"},
			{url: "n64/Shiver Star (From _Kirby 64_ The Crystal Shards_).mp3"},
			{url: "n64/Song Of Healing.mp3"},
			{url: "n64/Termina Field (Accompaniment).mp3"},
			{url: "n64/Toad Town (from _Paper Mario_) [feat. Michelle Heafy_8BitBrigadier].mp3"},
			{url: "n64/Walrus Cove_Frosty Village - Diddy Kong Racing.mp3"},
			{url: "n64/Whomp's Fortress (From _Super Mario 64_) [feat. Lauren the Flute, Eric L._TylerNJazz].mp3"},
			{url: "n64/Windy (From _Conker's Bad Fur Day_).mp3"},
			{url: "n64/Work Your Body (From _1080 Snowboarding_).mp3"},
			{url: "n64/Yo-Yo-Yoshi! (Yoshi's Story).mp3"},
			{url: "n64/Zurg's Planet.mp3"}
		],
		
		availableSkins: [
			{ url: "skins/Pikachu.wsz", name: "Pikachu" },
			{ url: "skins/haloAmpv15.wsz", name: "Halo Amp" },
			{ url: "skins/Ultimate_Nintendo64_Amp.wsz", name: "Ultimate N64 Amp" },
			{ url: "skins/Xbox_Skin_Black.wsz", name: "Xbox Skin Black" }
		],
		
		enableHotkeys: true,
});
    webamp.renderWhenReady(app);