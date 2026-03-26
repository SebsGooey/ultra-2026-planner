import { Artist } from "./types";

export const SCHEDULE: Artist[] = [
  // ============================================================
  // FRIDAY, MARCH 27 — Main Stage (closes 00:00)
  // ============================================================
  { id: "frank-walker-fri", name: "Frank Walker", stage: "main-stage", stageLabel: "Main Stage", day: "friday", dayLabel: "Friday", startTime: "16:00", endTime: "16:50", startTimeDisplay: "4:00 PM", endTimeDisplay: "4:50 PM" },
  { id: "voyd-fri", name: "Voyd", stage: "main-stage", stageLabel: "Main Stage", day: "friday", dayLabel: "Friday", startTime: "16:50", endTime: "17:55", startTimeDisplay: "4:50 PM", endTimeDisplay: "5:55 PM" },
  { id: "worship-fri", name: "Worship", stage: "main-stage", stageLabel: "Main Stage", day: "friday", dayLabel: "Friday", startTime: "17:55", endTime: "19:00", startTimeDisplay: "5:55 PM", endTimeDisplay: "7:00 PM" },
  { id: "illenium-fri", name: "Illenium", stage: "main-stage", stageLabel: "Main Stage", day: "friday", dayLabel: "Friday", startTime: "19:00", endTime: "20:05", startTimeDisplay: "7:00 PM", endTimeDisplay: "8:05 PM" },
  { id: "bzrp-fri", name: "Bzrp", stage: "main-stage", stageLabel: "Main Stage", day: "friday", dayLabel: "Friday", startTime: "20:05", endTime: "21:20", startTimeDisplay: "8:05 PM", endTimeDisplay: "9:20 PM" },
  { id: "alesso-b2b-martin-garrix-fri", name: "Alesso B2B Martin Garrix", stage: "main-stage", stageLabel: "Main Stage", day: "friday", dayLabel: "Friday", startTime: "21:20", endTime: "22:45", startTimeDisplay: "9:20 PM", endTimeDisplay: "10:45 PM" },
  { id: "major-lazer-fri", name: "Major Lazer", stage: "main-stage", stageLabel: "Main Stage", day: "friday", dayLabel: "Friday", startTime: "22:45", endTime: "24:00", startTimeDisplay: "10:45 PM", endTimeDisplay: "12:00 AM" },

  // FRIDAY — Worldwide Stage (closes 00:00)
  { id: "prada2000-fri", name: "Prada2000", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "friday", dayLabel: "Friday", startTime: "16:00", endTime: "17:00", startTimeDisplay: "4:00 PM", endTimeDisplay: "5:00 PM" },
  { id: "matty-ralph-fri", name: "Matty Ralph", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "friday", dayLabel: "Friday", startTime: "17:00", endTime: "18:00", startTimeDisplay: "5:00 PM", endTimeDisplay: "6:00 PM" },
  { id: "superstrings-fri", name: "Superstrings", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "friday", dayLabel: "Friday", startTime: "18:00", endTime: "19:00", startTimeDisplay: "6:00 PM", endTimeDisplay: "7:00 PM" },
  { id: "vini-vici-fri", name: "Vini Vici", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "friday", dayLabel: "Friday", startTime: "19:00", endTime: "20:00", startTimeDisplay: "7:00 PM", endTimeDisplay: "8:00 PM" },
  { id: "lily-palmer-fri", name: "Lily Palmer", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "friday", dayLabel: "Friday", startTime: "20:00", endTime: "21:00", startTimeDisplay: "8:00 PM", endTimeDisplay: "9:00 PM" },
  { id: "armin-van-buuren-b2b-marlon-hoffstadt-fri", name: "Armin van Buuren B2B Marlon Hoffstadt", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "friday", dayLabel: "Friday", startTime: "21:00", endTime: "22:30", startTimeDisplay: "9:00 PM", endTimeDisplay: "10:30 PM" },
  { id: "armin-van-buuren-fri", name: "Armin van Buuren", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "friday", dayLabel: "Friday", startTime: "22:30", endTime: "24:00", startTimeDisplay: "10:30 PM", endTimeDisplay: "12:00 AM" },

  // FRIDAY — RESISTANCE Megastructure (closes 00:00)
  { id: "mar-t-fri", name: "Mar-T", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "friday", dayLabel: "Friday", startTime: "16:00", endTime: "17:30", startTimeDisplay: "4:00 PM", endTimeDisplay: "5:30 PM" },
  { id: "massano-fri", name: "Massano", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "friday", dayLabel: "Friday", startTime: "17:30", endTime: "19:00", startTimeDisplay: "5:30 PM", endTimeDisplay: "7:00 PM" },
  { id: "miss-monique-fri", name: "Miss Monique", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "friday", dayLabel: "Friday", startTime: "19:00", endTime: "20:30", startTimeDisplay: "7:00 PM", endTimeDisplay: "8:30 PM" },
  { id: "vintage-culture-fri", name: "Vintage Culture", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "friday", dayLabel: "Friday", startTime: "20:30", endTime: "22:00", startTimeDisplay: "8:30 PM", endTimeDisplay: "10:00 PM" },
  { id: "eric-prydz-fri", name: "Eric Prydz", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "friday", dayLabel: "Friday", startTime: "22:00", endTime: "24:00", startTimeDisplay: "10:00 PM", endTimeDisplay: "12:00 AM" },

  // FRIDAY — RESISTANCE The Cove (closes 00:00)
  { id: "godtripper-fri", name: "Godtripper", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "friday", dayLabel: "Friday", startTime: "16:00", endTime: "17:30", startTimeDisplay: "4:00 PM", endTimeDisplay: "5:30 PM" },
  { id: "alt8-fri", name: "Alt8", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "friday", dayLabel: "Friday", startTime: "17:30", endTime: "19:00", startTimeDisplay: "5:30 PM", endTimeDisplay: "7:00 PM" },
  { id: "999999999-fri", name: "999999999", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "friday", dayLabel: "Friday", startTime: "19:00", endTime: "20:30", startTimeDisplay: "7:00 PM", endTimeDisplay: "8:30 PM" },
  { id: "clara-cuve-fri", name: "Clara Cuvé", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "friday", dayLabel: "Friday", startTime: "20:30", endTime: "22:00", startTimeDisplay: "8:30 PM", endTimeDisplay: "10:00 PM" },
  { id: "sara-landry-fri", name: "Sara Landry", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "friday", dayLabel: "Friday", startTime: "22:00", endTime: "24:00", startTimeDisplay: "10:00 PM", endTimeDisplay: "12:00 AM" },

  // FRIDAY — Live Stage (closes 00:00)
  { id: "afrobeta-fri", name: "Afrobeta", stage: "live-stage", stageLabel: "Live Stage", day: "friday", dayLabel: "Friday", startTime: "17:00", endTime: "18:15", startTimeDisplay: "5:00 PM", endTimeDisplay: "6:15 PM" },
  { id: "shima-fri", name: "Shima", stage: "live-stage", stageLabel: "Live Stage", day: "friday", dayLabel: "Friday", startTime: "18:15", endTime: "19:45", startTimeDisplay: "6:15 PM", endTimeDisplay: "7:45 PM" },
  { id: "black-tiger-sex-machine-fri", name: "Black Tiger Sex Machine Presents Connected Fighters", stage: "live-stage", stageLabel: "Live Stage", day: "friday", dayLabel: "Friday", startTime: "19:45", endTime: "21:15", startTimeDisplay: "7:45 PM", endTimeDisplay: "9:15 PM" },
  { id: "of-the-trees-fri", name: "Of the Trees", stage: "live-stage", stageLabel: "Live Stage", day: "friday", dayLabel: "Friday", startTime: "21:15", endTime: "22:45", startTimeDisplay: "9:15 PM", endTimeDisplay: "10:45 PM" },
  { id: "levity-presents-lasership-fri", name: "Levity Presents Lasership", stage: "live-stage", stageLabel: "Live Stage", day: "friday", dayLabel: "Friday", startTime: "22:45", endTime: "24:00", startTimeDisplay: "10:45 PM", endTimeDisplay: "12:00 AM" },

  // FRIDAY — UMF Radio (closes 00:00)
  { id: "linney-fri", name: "Linney", stage: "umf-radio", stageLabel: "UMF Radio", day: "friday", dayLabel: "Friday", startTime: "16:00", endTime: "16:30", startTimeDisplay: "4:00 PM", endTimeDisplay: "4:30 PM" },
  { id: "ookay-fri", name: "Ookay", stage: "umf-radio", stageLabel: "UMF Radio", day: "friday", dayLabel: "Friday", startTime: "16:30", endTime: "17:15", startTimeDisplay: "4:30 PM", endTimeDisplay: "5:15 PM" },
  { id: "nostalgix-fri", name: "Nostalgix", stage: "umf-radio", stageLabel: "UMF Radio", day: "friday", dayLabel: "Friday", startTime: "17:15", endTime: "18:15", startTimeDisplay: "5:15 PM", endTimeDisplay: "6:15 PM" },
  { id: "jessica-audiffred-fri", name: "Jessica Audiffred", stage: "umf-radio", stageLabel: "UMF Radio", day: "friday", dayLabel: "Friday", startTime: "18:15", endTime: "19:15", startTimeDisplay: "6:15 PM", endTimeDisplay: "7:15 PM" },
  { id: "steve-aoki-fri", name: "Steve Aoki", stage: "umf-radio", stageLabel: "UMF Radio", day: "friday", dayLabel: "Friday", startTime: "19:15", endTime: "20:15", startTimeDisplay: "7:15 PM", endTimeDisplay: "8:15 PM" },
  { id: "special-guest-b2b-special-guest-fri", name: "Special Guest B2B Special Guest", stage: "umf-radio", stageLabel: "UMF Radio", day: "friday", dayLabel: "Friday", startTime: "20:15", endTime: "21:15", startTimeDisplay: "8:15 PM", endTimeDisplay: "9:15 PM" },
  { id: "laidback-luke-fri", name: "Laidback Luke", stage: "umf-radio", stageLabel: "UMF Radio", day: "friday", dayLabel: "Friday", startTime: "21:15", endTime: "22:15", startTimeDisplay: "9:15 PM", endTimeDisplay: "10:15 PM" },
  { id: "riot-ten-fri", name: "Riot Ten", stage: "umf-radio", stageLabel: "UMF Radio", day: "friday", dayLabel: "Friday", startTime: "22:15", endTime: "23:15", startTimeDisplay: "10:15 PM", endTimeDisplay: "11:15 PM" },
  { id: "bloody-beetroots-fri", name: "Bloody Beetroots", stage: "umf-radio", stageLabel: "UMF Radio", day: "friday", dayLabel: "Friday", startTime: "23:15", endTime: "24:00", startTimeDisplay: "11:15 PM", endTimeDisplay: "12:00 AM" },

  // FRIDAY — Oasis (closes 00:00)
  { id: "nundo-fri", name: "Nundo", stage: "oasis", stageLabel: "Oasis", day: "friday", dayLabel: "Friday", startTime: "16:00", endTime: "17:00", startTimeDisplay: "4:00 PM", endTimeDisplay: "5:00 PM" },
  { id: "richard-fraioli-b3b-jimmy-page-b3b-dj-ideal-fri", name: "Richard Fraioli B3B Jimmy Page B3B DJ Ideal", stage: "oasis", stageLabel: "Oasis", day: "friday", dayLabel: "Friday", startTime: "17:00", endTime: "18:30", startTimeDisplay: "5:00 PM", endTimeDisplay: "6:30 PM" },
  { id: "los-de-la-vega-fri", name: "Los de la Vega", stage: "oasis", stageLabel: "Oasis", day: "friday", dayLabel: "Friday", startTime: "18:30", endTime: "19:30", startTimeDisplay: "6:30 PM", endTimeDisplay: "7:30 PM" },
  { id: "hymm-marley-fri", name: "Hymm Marley", stage: "oasis", stageLabel: "Oasis", day: "friday", dayLabel: "Friday", startTime: "19:30", endTime: "20:00", startTimeDisplay: "7:30 PM", endTimeDisplay: "8:00 PM" },
  { id: "tak-shak-fri", name: "Tak Shak", stage: "oasis", stageLabel: "Oasis", day: "friday", dayLabel: "Friday", startTime: "20:00", endTime: "21:00", startTimeDisplay: "8:00 PM", endTimeDisplay: "9:00 PM" },
  { id: "rodrigo-vieira-fri", name: "Rodrigo Vieira", stage: "oasis", stageLabel: "Oasis", day: "friday", dayLabel: "Friday", startTime: "21:00", endTime: "22:00", startTimeDisplay: "9:00 PM", endTimeDisplay: "10:00 PM" },
  { id: "dj-hannah-fri", name: "DJ Hannah", stage: "oasis", stageLabel: "Oasis", day: "friday", dayLabel: "Friday", startTime: "22:00", endTime: "23:00", startTimeDisplay: "10:00 PM", endTimeDisplay: "11:00 PM" },
  { id: "luca-testa-fri", name: "Luca Testa", stage: "oasis", stageLabel: "Oasis", day: "friday", dayLabel: "Friday", startTime: "23:00", endTime: "24:00", startTimeDisplay: "11:00 PM", endTimeDisplay: "12:00 AM" },

  // ============================================================
  // SATURDAY, MARCH 28 — Main Stage (closes 00:00)
  // ============================================================
  { id: "gil-glaze-sat", name: "Gil Glaze", stage: "main-stage", stageLabel: "Main Stage", day: "saturday", dayLabel: "Saturday", startTime: "12:00", endTime: "12:55", startTimeDisplay: "12:00 PM", endTimeDisplay: "12:55 PM" },
  { id: "mykris-sat", name: "Mykris", stage: "main-stage", stageLabel: "Main Stage", day: "saturday", dayLabel: "Saturday", startTime: "12:55", endTime: "14:00", startTimeDisplay: "12:55 PM", endTimeDisplay: "2:00 PM" },
  { id: "halo-sat", name: "Hal\u014d", stage: "main-stage", stageLabel: "Main Stage", day: "saturday", dayLabel: "Saturday", startTime: "14:00", endTime: "15:05", startTimeDisplay: "2:00 PM", endTimeDisplay: "3:05 PM" },
  { id: "nicky-romero-sat", name: "Nicky Romero", stage: "main-stage", stageLabel: "Main Stage", day: "saturday", dayLabel: "Saturday", startTime: "15:05", endTime: "16:10", startTimeDisplay: "3:05 PM", endTimeDisplay: "4:10 PM" },
  { id: "loud-luxury-sat", name: "Loud Luxury", stage: "main-stage", stageLabel: "Main Stage", day: "saturday", dayLabel: "Saturday", startTime: "16:10", endTime: "17:15", startTimeDisplay: "4:10 PM", endTimeDisplay: "5:15 PM" },
  { id: "alan-walker-sat", name: "Alan Walker", stage: "main-stage", stageLabel: "Main Stage", day: "saturday", dayLabel: "Saturday", startTime: "17:15", endTime: "18:20", startTimeDisplay: "5:15 PM", endTimeDisplay: "6:20 PM" },
  { id: "steve-aoki-sat", name: "Steve Aoki", stage: "main-stage", stageLabel: "Main Stage", day: "saturday", dayLabel: "Saturday", startTime: "18:20", endTime: "19:25", startTimeDisplay: "6:20 PM", endTimeDisplay: "7:25 PM" },
  { id: "excision-sat", name: "Excision", stage: "main-stage", stageLabel: "Main Stage", day: "saturday", dayLabel: "Saturday", startTime: "19:25", endTime: "20:30", startTimeDisplay: "7:25 PM", endTimeDisplay: "8:30 PM" },
  { id: "hardwell-sat", name: "Hardwell", stage: "main-stage", stageLabel: "Main Stage", day: "saturday", dayLabel: "Saturday", startTime: "20:30", endTime: "21:35", startTimeDisplay: "8:30 PM", endTimeDisplay: "9:35 PM" },
  { id: "armin-van-buuren-sat", name: "Armin van Buuren", stage: "main-stage", stageLabel: "Main Stage", day: "saturday", dayLabel: "Saturday", startTime: "21:35", endTime: "22:45", startTimeDisplay: "9:35 PM", endTimeDisplay: "10:45 PM" },
  { id: "sebastian-ingrosso-b2b-steve-angello-sat", name: "Sebastian Ingrosso B2B Steve Angello", stage: "main-stage", stageLabel: "Main Stage", day: "saturday", dayLabel: "Saturday", startTime: "22:45", endTime: "24:00", startTimeDisplay: "10:45 PM", endTimeDisplay: "12:00 AM" },

  // SATURDAY — Worldwide Stage (closes 00:00)
  { id: "julian-cross-sat", name: "Julian Cross", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "saturday", dayLabel: "Saturday", startTime: "12:10", endTime: "13:00", startTimeDisplay: "12:10 PM", endTimeDisplay: "1:00 PM" },
  { id: "distinct-motive-sat", name: "Distinct Motive", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "saturday", dayLabel: "Saturday", startTime: "13:00", endTime: "14:00", startTimeDisplay: "1:00 PM", endTimeDisplay: "2:00 PM" },
  { id: "sidequest-sat", name: "Sidequest", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "saturday", dayLabel: "Saturday", startTime: "14:00", endTime: "15:00", startTimeDisplay: "2:00 PM", endTimeDisplay: "3:00 PM" },
  { id: "daniel-allan-sat", name: "Daniel Allan", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "saturday", dayLabel: "Saturday", startTime: "15:00", endTime: "16:00", startTimeDisplay: "3:00 PM", endTimeDisplay: "4:00 PM" },
  { id: "armnhmr-sat", name: "Armnhmr", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "saturday", dayLabel: "Saturday", startTime: "16:00", endTime: "17:00", startTimeDisplay: "4:00 PM", endTimeDisplay: "5:00 PM" },
  { id: "hol-sat", name: "Hol!", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "saturday", dayLabel: "Saturday", startTime: "17:00", endTime: "18:00", startTimeDisplay: "5:00 PM", endTimeDisplay: "6:00 PM" },
  { id: "bou-sat", name: "Bou", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "saturday", dayLabel: "Saturday", startTime: "18:00", endTime: "19:00", startTimeDisplay: "6:00 PM", endTimeDisplay: "7:00 PM" },
  { id: "kai-wachi-sat", name: "Kai Wachi", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "saturday", dayLabel: "Saturday", startTime: "19:00", endTime: "20:00", startTimeDisplay: "7:00 PM", endTimeDisplay: "8:00 PM" },
  { id: "outlaw-b2b-trym-sat", name: "Outlaw B2B Trym", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "saturday", dayLabel: "Saturday", startTime: "20:00", endTime: "21:00", startTimeDisplay: "8:00 PM", endTimeDisplay: "9:00 PM" },
  { id: "hamdi-sat", name: "Hamdi", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "saturday", dayLabel: "Saturday", startTime: "21:00", endTime: "22:00", startTimeDisplay: "9:00 PM", endTimeDisplay: "10:00 PM" },
  { id: "yousuke-yukimatsu-sat", name: "Yousuke Yukimatsu", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "saturday", dayLabel: "Saturday", startTime: "22:00", endTime: "23:00", startTimeDisplay: "10:00 PM", endTimeDisplay: "11:00 PM" },
  { id: "isoxo-sat", name: "ISOxo", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "saturday", dayLabel: "Saturday", startTime: "23:00", endTime: "24:00", startTimeDisplay: "11:00 PM", endTimeDisplay: "12:00 AM" },

  // SATURDAY — RESISTANCE Megastructure (closes 00:00)
  { id: "andy-pate-b2b-rod-b-sat", name: "Andy Pate B2B Rod B.", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "saturday", dayLabel: "Saturday", startTime: "12:00", endTime: "13:15", startTimeDisplay: "12:00 PM", endTimeDisplay: "1:15 PM" },
  { id: "juliet-fox-sat", name: "Juliet Fox", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "saturday", dayLabel: "Saturday", startTime: "13:15", endTime: "14:30", startTimeDisplay: "1:15 PM", endTimeDisplay: "2:30 PM" },
  { id: "alan-fitzpatrick-b2b-marco-faraone-sat", name: "Alan Fitzpatrick B2B Marco Faraone", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "saturday", dayLabel: "Saturday", startTime: "14:30", endTime: "16:00", startTimeDisplay: "2:30 PM", endTimeDisplay: "4:00 PM" },
  { id: "sasha-john-digweed-sat", name: "Sasha & John Digweed", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "saturday", dayLabel: "Saturday", startTime: "16:00", endTime: "17:30", startTimeDisplay: "4:00 PM", endTimeDisplay: "5:30 PM" },
  { id: "eli-brown-sat", name: "Eli Brown", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "saturday", dayLabel: "Saturday", startTime: "17:30", endTime: "19:00", startTimeDisplay: "5:30 PM", endTimeDisplay: "7:00 PM" },
  { id: "adam-beyer-b2b-joseph-capriati-sat", name: "Adam Beyer B2B Joseph Capriati", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "saturday", dayLabel: "Saturday", startTime: "19:00", endTime: "21:00", startTimeDisplay: "7:00 PM", endTimeDisplay: "9:00 PM" },
  { id: "carl-cox-sat", name: "Carl Cox", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "saturday", dayLabel: "Saturday", startTime: "21:00", endTime: "24:00", startTimeDisplay: "9:00 PM", endTimeDisplay: "12:00 AM" },

  // SATURDAY — RESISTANCE The Cove (closes 00:00)
  { id: "joa-sat", name: "Joa", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "saturday", dayLabel: "Saturday", startTime: "12:00", endTime: "13:15", startTimeDisplay: "12:00 PM", endTimeDisplay: "1:15 PM" },
  { id: "olympe-sat", name: "Olympe", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "saturday", dayLabel: "Saturday", startTime: "13:15", endTime: "14:30", startTimeDisplay: "1:15 PM", endTimeDisplay: "2:30 PM" },
  { id: "rivo-sat", name: "Rivo", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "saturday", dayLabel: "Saturday", startTime: "14:30", endTime: "16:00", startTimeDisplay: "2:30 PM", endTimeDisplay: "4:00 PM" },
  { id: "kasia-sat", name: "Kasia", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "saturday", dayLabel: "Saturday", startTime: "16:00", endTime: "17:30", startTimeDisplay: "4:00 PM", endTimeDisplay: "5:30 PM" },
  { id: "deep-dish-sat", name: "Deep Dish", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "saturday", dayLabel: "Saturday", startTime: "17:30", endTime: "19:00", startTimeDisplay: "5:30 PM", endTimeDisplay: "7:00 PM" },
  { id: "colyn-b2b-innellea-sat", name: "Colyn B2B Innellea", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "saturday", dayLabel: "Saturday", startTime: "19:00", endTime: "20:30", startTimeDisplay: "7:00 PM", endTimeDisplay: "8:30 PM" },
  { id: "cassian-sat", name: "Cassian", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "saturday", dayLabel: "Saturday", startTime: "20:30", endTime: "22:00", startTimeDisplay: "8:30 PM", endTimeDisplay: "10:00 PM" },
  { id: "joris-voorn-b2b-korolova-sat", name: "Joris Voorn B2B Korolova", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "saturday", dayLabel: "Saturday", startTime: "22:00", endTime: "24:00", startTimeDisplay: "10:00 PM", endTimeDisplay: "12:00 AM" },

  // SATURDAY — Live Stage (closes 00:00)
  { id: "miss-bashful-sat", name: "Miss Bashful", stage: "live-stage", stageLabel: "Live Stage", day: "saturday", dayLabel: "Saturday", startTime: "16:00", endTime: "17:10", startTimeDisplay: "4:00 PM", endTimeDisplay: "5:10 PM" },
  { id: "confidence-man-sat", name: "Confidence Man", stage: "live-stage", stageLabel: "Live Stage", day: "saturday", dayLabel: "Saturday", startTime: "17:10", endTime: "18:30", startTimeDisplay: "5:10 PM", endTimeDisplay: "6:30 PM" },
  { id: "snow-strippers-sat", name: "Snow Strippers", stage: "live-stage", stageLabel: "Live Stage", day: "saturday", dayLabel: "Saturday", startTime: "18:30", endTime: "20:00", startTimeDisplay: "6:30 PM", endTimeDisplay: "8:00 PM" },
  { id: "madeon-sat", name: "Madeon", stage: "live-stage", stageLabel: "Live Stage", day: "saturday", dayLabel: "Saturday", startTime: "20:00", endTime: "21:30", startTimeDisplay: "8:00 PM", endTimeDisplay: "9:30 PM" },
  { id: "boys-noize-live-sat", name: "Boys Noize Live", stage: "live-stage", stageLabel: "Live Stage", day: "saturday", dayLabel: "Saturday", startTime: "21:30", endTime: "22:45", startTimeDisplay: "9:30 PM", endTimeDisplay: "10:45 PM" },
  { id: "brutalismus-3000-sat", name: "Brutalismus 3000", stage: "live-stage", stageLabel: "Live Stage", day: "saturday", dayLabel: "Saturday", startTime: "22:45", endTime: "24:00", startTimeDisplay: "10:45 PM", endTimeDisplay: "12:00 AM" },

  // SATURDAY — UMF Radio / Dirty Workz (closes 00:00)
  { id: "cgk-sat", name: "Cgk", stage: "umf-radio", stageLabel: "UMF Radio", day: "saturday", dayLabel: "Saturday", startTime: "12:00", endTime: "13:30", startTimeDisplay: "12:00 PM", endTimeDisplay: "1:30 PM" },
  { id: "darksiderz-sat", name: "Darksiderz", stage: "umf-radio", stageLabel: "UMF Radio", day: "saturday", dayLabel: "Saturday", startTime: "13:30", endTime: "15:00", startTimeDisplay: "1:30 PM", endTimeDisplay: "3:00 PM" },
  { id: "audiofreq-sat", name: "Audiofreq", stage: "umf-radio", stageLabel: "UMF Radio", day: "saturday", dayLabel: "Saturday", startTime: "15:00", endTime: "16:00", startTimeDisplay: "3:00 PM", endTimeDisplay: "4:00 PM" },
  { id: "the-purge-sat", name: "The Purge", stage: "umf-radio", stageLabel: "UMF Radio", day: "saturday", dayLabel: "Saturday", startTime: "16:00", endTime: "17:00", startTimeDisplay: "4:00 PM", endTimeDisplay: "5:00 PM" },
  { id: "the-saints-sat", name: "The Saints", stage: "umf-radio", stageLabel: "UMF Radio", day: "saturday", dayLabel: "Saturday", startTime: "17:00", endTime: "18:00", startTimeDisplay: "5:00 PM", endTimeDisplay: "6:00 PM" },
  { id: "coone-sat", name: "Coone", stage: "umf-radio", stageLabel: "UMF Radio", day: "saturday", dayLabel: "Saturday", startTime: "18:00", endTime: "19:00", startTimeDisplay: "6:00 PM", endTimeDisplay: "7:00 PM" },
  { id: "da-tweekaz-sat", name: "Da Tweekaz", stage: "umf-radio", stageLabel: "UMF Radio", day: "saturday", dayLabel: "Saturday", startTime: "19:00", endTime: "20:00", startTimeDisplay: "7:00 PM", endTimeDisplay: "8:00 PM" },
  { id: "mish-sat", name: "Mish", stage: "umf-radio", stageLabel: "UMF Radio", day: "saturday", dayLabel: "Saturday", startTime: "20:00", endTime: "21:00", startTimeDisplay: "8:00 PM", endTimeDisplay: "9:00 PM" },
  { id: "d-sturb-sat", name: "D-Sturb", stage: "umf-radio", stageLabel: "UMF Radio", day: "saturday", dayLabel: "Saturday", startTime: "21:00", endTime: "22:00", startTimeDisplay: "9:00 PM", endTimeDisplay: "10:00 PM" },
  { id: "dual-damage-sat", name: "Dual Damage", stage: "umf-radio", stageLabel: "UMF Radio", day: "saturday", dayLabel: "Saturday", startTime: "22:00", endTime: "23:00", startTimeDisplay: "10:00 PM", endTimeDisplay: "11:00 PM" },
  { id: "soren-sat", name: "Soren", stage: "umf-radio", stageLabel: "UMF Radio", day: "saturday", dayLabel: "Saturday", startTime: "23:00", endTime: "24:00", startTimeDisplay: "11:00 PM", endTimeDisplay: "12:00 AM" },

  // SATURDAY — Oasis (closes 00:00)
  { id: "cimeo-sat", name: "Cimeo", stage: "oasis", stageLabel: "Oasis", day: "saturday", dayLabel: "Saturday", startTime: "12:00", endTime: "13:00", startTimeDisplay: "12:00 PM", endTimeDisplay: "1:00 PM" },
  { id: "juno-b3b-wyzzard-b3b-bebe-breaks-sat", name: "Juno B3B Wyzzard B3B Bebe Breaks", stage: "oasis", stageLabel: "Oasis", day: "saturday", dayLabel: "Saturday", startTime: "13:00", endTime: "14:00", startTimeDisplay: "1:00 PM", endTimeDisplay: "2:00 PM" },
  { id: "kauro-sat", name: "Kauro", stage: "oasis", stageLabel: "Oasis", day: "saturday", dayLabel: "Saturday", startTime: "14:00", endTime: "15:00", startTimeDisplay: "2:00 PM", endTimeDisplay: "3:00 PM" },
  { id: "soul-goodman-b2b-dabura-sat", name: "Soul Goodman B2B Dabura", stage: "oasis", stageLabel: "Oasis", day: "saturday", dayLabel: "Saturday", startTime: "15:00", endTime: "16:00", startTimeDisplay: "3:00 PM", endTimeDisplay: "4:00 PM" },
  { id: "cvmrn-sat", name: "Cvmrn", stage: "oasis", stageLabel: "Oasis", day: "saturday", dayLabel: "Saturday", startTime: "16:00", endTime: "17:00", startTimeDisplay: "4:00 PM", endTimeDisplay: "5:00 PM" },
  { id: "bill-kelly-sat", name: "Bill Kelly", stage: "oasis", stageLabel: "Oasis", day: "saturday", dayLabel: "Saturday", startTime: "17:00", endTime: "18:00", startTimeDisplay: "5:00 PM", endTimeDisplay: "6:00 PM" },
  { id: "lucy-guo-sat", name: "Lucy Guo", stage: "oasis", stageLabel: "Oasis", day: "saturday", dayLabel: "Saturday", startTime: "18:00", endTime: "19:00", startTimeDisplay: "6:00 PM", endTimeDisplay: "7:00 PM" },
  { id: "jack-vice-sat", name: "Jack Vice", stage: "oasis", stageLabel: "Oasis", day: "saturday", dayLabel: "Saturday", startTime: "19:00", endTime: "20:00", startTimeDisplay: "7:00 PM", endTimeDisplay: "8:00 PM" },
  { id: "pinto-sat", name: "Pinto", stage: "oasis", stageLabel: "Oasis", day: "saturday", dayLabel: "Saturday", startTime: "20:00", endTime: "21:00", startTimeDisplay: "8:00 PM", endTimeDisplay: "9:00 PM" },
  { id: "marco-ninni-sat", name: "Marco Ninni", stage: "oasis", stageLabel: "Oasis", day: "saturday", dayLabel: "Saturday", startTime: "21:00", endTime: "22:00", startTimeDisplay: "9:00 PM", endTimeDisplay: "10:00 PM" },
  { id: "alexander-som-sat", name: "Alexander Som", stage: "oasis", stageLabel: "Oasis", day: "saturday", dayLabel: "Saturday", startTime: "22:00", endTime: "23:00", startTimeDisplay: "10:00 PM", endTimeDisplay: "11:00 PM" },
  { id: "wally-lopez-sat", name: "Wally Lopez", stage: "oasis", stageLabel: "Oasis", day: "saturday", dayLabel: "Saturday", startTime: "23:00", endTime: "24:00", startTimeDisplay: "11:00 PM", endTimeDisplay: "12:00 AM" },

  // ============================================================
  // SUNDAY, MARCH 29 — Main Stage (closes 22:00)
  // ============================================================
  { id: "kapuchon-sun", name: "Kapuchon", stage: "main-stage", stageLabel: "Main Stage", day: "sunday", dayLabel: "Sunday", startTime: "12:15", endTime: "13:05", startTimeDisplay: "12:15 PM", endTimeDisplay: "1:05 PM" },
  { id: "me-n-u-sun", name: "Me n \u00fc", stage: "main-stage", stageLabel: "Main Stage", day: "sunday", dayLabel: "Sunday", startTime: "13:05", endTime: "14:10", startTimeDisplay: "1:05 PM", endTimeDisplay: "2:10 PM" },
  { id: "r3hab-sun", name: "R3hab", stage: "main-stage", stageLabel: "Main Stage", day: "sunday", dayLabel: "Sunday", startTime: "14:10", endTime: "15:15", startTimeDisplay: "2:10 PM", endTimeDisplay: "3:15 PM" },
  { id: "maddix-sun", name: "Maddix", stage: "main-stage", stageLabel: "Main Stage", day: "sunday", dayLabel: "Sunday", startTime: "15:15", endTime: "16:20", startTimeDisplay: "3:15 PM", endTimeDisplay: "4:20 PM" },
  { id: "artbat-sun", name: "Artbat", stage: "main-stage", stageLabel: "Main Stage", day: "sunday", dayLabel: "Sunday", startTime: "16:20", endTime: "17:25", startTimeDisplay: "4:20 PM", endTimeDisplay: "5:25 PM" },
  { id: "marlon-hoffstadt-sun", name: "Marlon Hoffstadt", stage: "main-stage", stageLabel: "Main Stage", day: "sunday", dayLabel: "Sunday", startTime: "17:25", endTime: "18:30", startTimeDisplay: "5:25 PM", endTimeDisplay: "6:30 PM" },
  { id: "afrojack-sun", name: "Afrojack", stage: "main-stage", stageLabel: "Main Stage", day: "sunday", dayLabel: "Sunday", startTime: "18:30", endTime: "19:35", startTimeDisplay: "6:30 PM", endTimeDisplay: "7:35 PM" },
  { id: "dj-snake-sun", name: "DJ Snake", stage: "main-stage", stageLabel: "Main Stage", day: "sunday", dayLabel: "Sunday", startTime: "19:35", endTime: "20:45", startTimeDisplay: "7:35 PM", endTimeDisplay: "8:45 PM" },
  { id: "john-summit-sun", name: "John Summit", stage: "main-stage", stageLabel: "Main Stage", day: "sunday", dayLabel: "Sunday", startTime: "20:45", endTime: "22:00", startTimeDisplay: "8:45 PM", endTimeDisplay: "10:00 PM" },

  // SUNDAY — Worldwide Stage (closes 22:00)
  { id: "big-florida-sun", name: "Big Florida", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "sunday", dayLabel: "Sunday", startTime: "12:00", endTime: "13:00", startTimeDisplay: "12:00 PM", endTimeDisplay: "1:00 PM" },
  { id: "jstjr-sun", name: "Jstjr", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "sunday", dayLabel: "Sunday", startTime: "13:00", endTime: "14:00", startTimeDisplay: "1:00 PM", endTimeDisplay: "2:00 PM" },
  { id: "bolo-sun", name: "Bolo", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "sunday", dayLabel: "Sunday", startTime: "14:00", endTime: "15:00", startTimeDisplay: "2:00 PM", endTimeDisplay: "3:00 PM" },
  { id: "layz-sun", name: "Layz", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "sunday", dayLabel: "Sunday", startTime: "15:00", endTime: "16:00", startTimeDisplay: "3:00 PM", endTimeDisplay: "4:00 PM" },
  { id: "andy-c-sun", name: "Andy C", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "sunday", dayLabel: "Sunday", startTime: "16:00", endTime: "17:00", startTimeDisplay: "4:00 PM", endTimeDisplay: "5:00 PM" },
  { id: "holy-priest-sun", name: "Holy Priest", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "sunday", dayLabel: "Sunday", startTime: "17:00", endTime: "18:00", startTimeDisplay: "5:00 PM", endTimeDisplay: "6:00 PM" },
  { id: "peekaboo-sun", name: "Peekaboo", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "sunday", dayLabel: "Sunday", startTime: "18:00", endTime: "19:00", startTimeDisplay: "6:00 PM", endTimeDisplay: "7:00 PM" },
  { id: "ray-volpe-b2b-sullivan-king-sun", name: "Ray Volpe B2B Sullivan King", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "sunday", dayLabel: "Sunday", startTime: "19:00", endTime: "20:30", startTimeDisplay: "7:00 PM", endTimeDisplay: "8:30 PM" },
  { id: "wankelmut-sun", name: "Wankelmut", stage: "worldwide-stage", stageLabel: "Worldwide Stage", day: "sunday", dayLabel: "Sunday", startTime: "20:30", endTime: "22:00", startTimeDisplay: "8:30 PM", endTimeDisplay: "10:00 PM" },

  // SUNDAY — RESISTANCE Megastructure (closes 22:00)
  { id: "bassett-b2b-christopher-james-sun", name: "Bassett B2B Christopher James", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "sunday", dayLabel: "Sunday", startTime: "12:00", endTime: "14:00", startTimeDisplay: "12:00 PM", endTimeDisplay: "2:00 PM" },
  { id: "scenarios-sun", name: "Scenarios", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "sunday", dayLabel: "Sunday", startTime: "14:00", endTime: "15:30", startTimeDisplay: "2:00 PM", endTimeDisplay: "3:30 PM" },
  { id: "argy-b2b-mind-against-sun", name: "Argy B2B Mind Against", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "sunday", dayLabel: "Sunday", startTime: "15:30", endTime: "17:00", startTimeDisplay: "3:30 PM", endTimeDisplay: "5:00 PM" },
  { id: "adriatique-sun", name: "Adriatique", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "sunday", dayLabel: "Sunday", startTime: "17:00", endTime: "18:30", startTimeDisplay: "5:00 PM", endTimeDisplay: "6:30 PM" },
  { id: "boris-brejcha-sun", name: "Boris Brejcha", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "sunday", dayLabel: "Sunday", startTime: "18:30", endTime: "20:00", startTimeDisplay: "6:30 PM", endTimeDisplay: "8:00 PM" },
  { id: "amelie-lens-b2b-sara-landry-sun", name: "Amelie Lens B2B Sara Landry", stage: "resistance-megastructure", stageLabel: "RESISTANCE Megastructure", day: "sunday", dayLabel: "Sunday", startTime: "20:00", endTime: "22:00", startTimeDisplay: "8:00 PM", endTimeDisplay: "10:00 PM" },

  // SUNDAY — RESISTANCE The Cove / Cuttin' Headz (closes 22:00)
  { id: "monroe-sun", name: "M.O.N.R.O.E.", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "sunday", dayLabel: "Sunday", startTime: "12:00", endTime: "13:00", startTimeDisplay: "12:00 PM", endTimeDisplay: "1:00 PM" },
  { id: "plastik-funk-sun", name: "Plastik Funk", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "sunday", dayLabel: "Sunday", startTime: "13:00", endTime: "14:00", startTimeDisplay: "1:00 PM", endTimeDisplay: "2:00 PM" },
  { id: "black-fancy-sun", name: "Black Fancy", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "sunday", dayLabel: "Sunday", startTime: "14:00", endTime: "15:15", startTimeDisplay: "2:00 PM", endTimeDisplay: "3:15 PM" },
  { id: "malone-sun", name: "Mal\u00f3ne", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "sunday", dayLabel: "Sunday", startTime: "15:15", endTime: "16:30", startTimeDisplay: "3:15 PM", endTimeDisplay: "4:30 PM" },
  { id: "rossi-sun", name: "Rossi.", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "sunday", dayLabel: "Sunday", startTime: "16:30", endTime: "18:00", startTimeDisplay: "4:30 PM", endTimeDisplay: "6:00 PM" },
  { id: "dennis-cruz-b2b-seth-troxler-sun", name: "Dennis Cruz B2B Seth Troxler", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "sunday", dayLabel: "Sunday", startTime: "18:00", endTime: "20:00", startTimeDisplay: "6:00 PM", endTimeDisplay: "8:00 PM" },
  { id: "the-martinez-brothers-sun", name: "The Martinez Brothers", stage: "resistance-the-cove", stageLabel: "RESISTANCE The Cove", day: "sunday", dayLabel: "Sunday", startTime: "20:00", endTime: "22:00", startTimeDisplay: "8:00 PM", endTimeDisplay: "10:00 PM" },

  // SUNDAY — Live Stage (closes 22:00)
  { id: "boiish-sun", name: "Boiish", stage: "live-stage", stageLabel: "Live Stage", day: "sunday", dayLabel: "Sunday", startTime: "16:00", endTime: "17:00", startTimeDisplay: "4:00 PM", endTimeDisplay: "5:00 PM" },
  { id: "parisi-sun", name: "Parisi", stage: "live-stage", stageLabel: "Live Stage", day: "sunday", dayLabel: "Sunday", startTime: "17:00", endTime: "18:15", startTimeDisplay: "5:00 PM", endTimeDisplay: "6:15 PM" },
  { id: "louis-the-child-sun", name: "Louis the Child", stage: "live-stage", stageLabel: "Live Stage", day: "sunday", dayLabel: "Sunday", startTime: "18:15", endTime: "19:30", startTimeDisplay: "6:15 PM", endTimeDisplay: "7:30 PM" },
  { id: "tim3less-sun", name: "Tim3less", stage: "live-stage", stageLabel: "Live Stage", day: "sunday", dayLabel: "Sunday", startTime: "19:30", endTime: "21:00", startTimeDisplay: "7:30 PM", endTimeDisplay: "9:00 PM" },
  { id: "zhu-sun", name: "ZHU", stage: "live-stage", stageLabel: "Live Stage", day: "sunday", dayLabel: "Sunday", startTime: "21:00", endTime: "22:00", startTimeDisplay: "9:00 PM", endTimeDisplay: "10:00 PM" },

  // SUNDAY — UMF Radio / Live From Earth (closes 22:00)
  { id: "eera-sun", name: "Eera", stage: "umf-radio", stageLabel: "UMF Radio", day: "sunday", dayLabel: "Sunday", startTime: "12:00", endTime: "13:30", startTimeDisplay: "12:00 PM", endTimeDisplay: "1:30 PM" },
  { id: "frost-children-sun", name: "Frost Children", stage: "umf-radio", stageLabel: "UMF Radio", day: "sunday", dayLabel: "Sunday", startTime: "13:30", endTime: "15:00", startTimeDisplay: "1:30 PM", endTimeDisplay: "3:00 PM" },
  { id: "x-club-sun", name: "X Club", stage: "umf-radio", stageLabel: "UMF Radio", day: "sunday", dayLabel: "Sunday", startTime: "15:00", endTime: "16:30", startTimeDisplay: "3:00 PM", endTimeDisplay: "4:30 PM" },
  { id: "fcukers-sun", name: "Fcukers", stage: "umf-radio", stageLabel: "UMF Radio", day: "sunday", dayLabel: "Sunday", startTime: "16:30", endTime: "18:00", startTimeDisplay: "4:30 PM", endTimeDisplay: "6:00 PM" },
  { id: "mcr-t-sun", name: "MCR-T", stage: "umf-radio", stageLabel: "UMF Radio", day: "sunday", dayLabel: "Sunday", startTime: "18:00", endTime: "19:30", startTimeDisplay: "6:00 PM", endTimeDisplay: "7:30 PM" },
  { id: "dj-gigola-sun", name: "DJ Gigola", stage: "umf-radio", stageLabel: "UMF Radio", day: "sunday", dayLabel: "Sunday", startTime: "19:30", endTime: "20:30", startTimeDisplay: "7:30 PM", endTimeDisplay: "8:30 PM" },
  { id: "peterblue-sun", name: "Peterblue", stage: "umf-radio", stageLabel: "UMF Radio", day: "sunday", dayLabel: "Sunday", startTime: "20:30", endTime: "22:00", startTimeDisplay: "8:30 PM", endTimeDisplay: "10:00 PM" },

  // SUNDAY — Oasis (closes 22:00)
  { id: "dubplates-dragons-sun", name: "Dubplates & Dragons", stage: "oasis", stageLabel: "Oasis", day: "sunday", dayLabel: "Sunday", startTime: "12:00", endTime: "13:00", startTimeDisplay: "12:00 PM", endTimeDisplay: "1:00 PM" },
  { id: "andy-ares-sun", name: "Andy Ares", stage: "oasis", stageLabel: "Oasis", day: "sunday", dayLabel: "Sunday", startTime: "13:00", endTime: "14:00", startTimeDisplay: "1:00 PM", endTimeDisplay: "2:00 PM" },
  { id: "jay-p-sun", name: "Jay P", stage: "oasis", stageLabel: "Oasis", day: "sunday", dayLabel: "Sunday", startTime: "14:00", endTime: "15:00", startTimeDisplay: "2:00 PM", endTimeDisplay: "3:00 PM" },
  { id: "sebastian-morxx-sun", name: "Sebastian Morxx", stage: "oasis", stageLabel: "Oasis", day: "sunday", dayLabel: "Sunday", startTime: "15:00", endTime: "16:00", startTimeDisplay: "3:00 PM", endTimeDisplay: "4:00 PM" },
  { id: "wags-b2b-lemony-snickettes-sun", name: "Wags B2B Lemony Snickettes", stage: "oasis", stageLabel: "Oasis", day: "sunday", dayLabel: "Sunday", startTime: "16:00", endTime: "17:00", startTimeDisplay: "4:00 PM", endTimeDisplay: "5:00 PM" },
  { id: "luke-hunter-sun", name: "Luke Hunter", stage: "oasis", stageLabel: "Oasis", day: "sunday", dayLabel: "Sunday", startTime: "17:00", endTime: "18:00", startTimeDisplay: "5:00 PM", endTimeDisplay: "6:00 PM" },
  { id: "purple-sun", name: "Purple", stage: "oasis", stageLabel: "Oasis", day: "sunday", dayLabel: "Sunday", startTime: "18:00", endTime: "19:00", startTimeDisplay: "6:00 PM", endTimeDisplay: "7:00 PM" },
  { id: "audiosal-sun", name: "Audiosal", stage: "oasis", stageLabel: "Oasis", day: "sunday", dayLabel: "Sunday", startTime: "19:00", endTime: "20:00", startTimeDisplay: "7:00 PM", endTimeDisplay: "8:00 PM" },
  { id: "x-con-b3b-marvin-delgado-b3b-cj-sun", name: "X-Con B3B Marvin Delgado B3B CJ", stage: "oasis", stageLabel: "Oasis", day: "sunday", dayLabel: "Sunday", startTime: "20:00", endTime: "21:00", startTimeDisplay: "8:00 PM", endTimeDisplay: "9:00 PM" },
  { id: "metaphysical-sun", name: "Metaphysical", stage: "oasis", stageLabel: "Oasis", day: "sunday", dayLabel: "Sunday", startTime: "21:00", endTime: "22:00", startTimeDisplay: "9:00 PM", endTimeDisplay: "10:00 PM" },
];
