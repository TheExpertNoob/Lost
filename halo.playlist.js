    const app = document.getElementById("app")
    const webamp = new Webamp({

		initialSkin: {url: "skins/haloAmpv15.wsz"},

		initialTracks: [
			{url: "halo/01. Curtis Schweitzer - Zeta Halo.mp3"},
			{url: "halo/02. Curtis Schweitzer - Sacrifice.mp3"},
			{url: "halo/03. Joel Corelitz - The Banished.mp3"},
			{url: "halo/04. Curtis Schweitzer - Gbraakon Escape.mp3"},
			{url: "halo/05. Gareth Coker - Escharum.mp3"},
			{url: "halo/06. Curtis Schweitzer - Follow the Signal.mp3"},
			{url: "halo/07. Curtis Schweitzer - Foundations.mp3"},
			{url: "halo/08. Curtis Schweitzer - The Weapon.mp3"},
			{url: "halo/09. Gareth Coker - Know My Legend.mp3"},
			{url: "halo/10. Curtis Schweitzer - Reverie.mp3"},
			{url: "halo/11. Gareth Coker - The Road.mp3"},
			{url: "halo/12. Gareth Coker - Echo-216.mp3"},
			{url: "halo/13. Curtis Schweitzer - Ransom Keep.mp3"},
			{url: "halo/14. Gareth Coker - Tower.mp3"},
			{url: "halo/15. Joel Corelitz - Through the Trees.mp3"},
			{url: "halo/16. Gareth Coker - Horn of Abolition.mp3"},
			{url: "halo/17. Gareth Coker - Excavation Site.mp3"},
			{url: "halo/18. Curtis Schweitzer - Conservatory.mp3"},
			{url: "halo/19. Gareth Coker - Endless.mp3"},
			{url: "halo/20. Joel Corelitz - Spire.mp3"},
			{url: "halo/21. Joel Corelitz - Adjutant Resolution.mp3"},
			{url: "halo/22. Curtis Schweitzer - Pelican Down.mp3"},
			{url: "halo/23. Gareth Coker - Heavy Artillery.mp3"},
			{url: "halo/24. Gareth Coker - Scattered, Hunted, Defeated..mp3"},
			{url: "halo/25. Curtis Schweitzer - Seeing Phantoms.mp3"},
			{url: "halo/26. Curtis Schweitzer - What Makes Us Human.mp3"},
			{url: "halo/27. Joel Corelitz - Under Cover.mp3"},
			{url: "halo/28. Gareth Coker - Riven Gate.mp3"},
			{url: "halo/29. Joel Corelitz - Sequence.mp3"},
			{url: "halo/30. Curtis Schweitzer - Nexus.mp3"},
			{url: "halo/31. Joel Corelitz - Command Spire.mp3"},
			{url: "halo/32. Curtis Schweitzer - Control Room.mp3"},
			{url: "halo/33. Curtis Schweitzer - Three, Two, One..mp3"},
			{url: "halo/34. Curtis Schweitzer - Repository.mp3"},
			{url: "halo/35. Joel Corelitz - Chapel.mp3"},
			{url: "halo/36. Gareth Coker - Imprisoned.mp3"},
			{url: "halo/37. Curtis Schweitzer - Bridge Too Far.mp3"},
			{url: "halo/38. Gareth Coker - We Do It Together.mp3"},
			{url: "halo/39. Curtis Schweitzer - Never Tell Me the Odds.mp3"},
			{url: "halo/40. Gareth Coker - House of Reckoning.mp3"},
			{url: "halo/41. Gareth Coker - Test of Mettle.mp3"},
			{url: "halo/42. Gareth Coker - There Will Be Consequences.mp3"},
			{url: "halo/43. Curtis Schweitzer - Palace Arrival.mp3"},
			{url: "halo/44. Gareth Coker - Silent Auditorium.mp3"},
			{url: "halo/45. Gareth Coker - Judgment.mp3"},
			{url: "halo/46. Gareth Coker - A Message.mp3"},
			{url: "halo/47. Curtis Schweitzer - Finale.mp3"},
			{url: "halo/48. Joel Corelitz - Hunter's Dance.mp3"}
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