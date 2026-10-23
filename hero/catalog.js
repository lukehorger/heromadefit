// Made by `fitcoach demo web-catalog` from sync/src/fitcoach/demo.py. Don't edit by hand.
window.HERO_CATALOG = {
 "consent_version": "2026-10-22e-web",
 "consent": {
  "selfie": "Your selfie, and anything you type in the drawing box, is sent to Higgsfield, an AI image service, to draw your hero. Higgsfield may use uploaded images to improve its AI. I keep your selfie on my computer until you ask me to delete it. When you ask, I delete your selfie and hero art here and ask Higgsfield to remove them too. Higgsfield may keep deleted files for up to 30 days, and it can't take back anything it has already used to train its AI. If you describe a skill, those words are sent to Claude, an AI from Anthropic, to estimate your Skill score. Your answers and any selfie go first to my private Google account, and I delete them there once they're in the app. Your results and hero art are then kept there so this link can show them to you, until you ask me to delete them.",
  "describe": "Only these words, and anything you type in the drawing box, are sent to Higgsfield, an AI image service, to draw your hero. No photo is taken. Higgsfield may use them to improve its AI. Your hero may look less like you than a selfie would. When you ask, I delete your answers and hero art here and ask Higgsfield to remove the art too. If you describe a skill, those words are sent to Claude, an AI from Anthropic, to estimate your Skill score. Your answers and any selfie go first to my private Google account, and I delete them there once they're in the app. Your results and hero art are then kept there so this link can show them to you, until you ask me to delete them."
 },
 "builds": [
  "Slim",
  "Average",
  "Athletic",
  "Muscular"
 ],
 "shirt_sizes": [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "3XL"
 ],
 "muscle": [
  "Light",
  "Toned",
  "Athletic",
  "Very muscular"
 ],
 "describe": {
  "hair_style": [
   "Short",
   "Buzzed",
   "Medium length",
   "Long",
   "Curly",
   "Braids or locs",
   "Ponytail or bun",
   "Bald"
  ],
  "hair_colour": [
   "Black",
   "Dark brown",
   "Light brown",
   "Blonde",
   "Red",
   "Grey or white"
  ],
  "skin_tone": [
   "Very light",
   "Light",
   "Medium",
   "Olive",
   "Tan",
   "Brown",
   "Dark brown"
  ],
  "eye_colour": [
   "Brown",
   "Hazel",
   "Green",
   "Blue",
   "Grey"
  ],
  "facial_hair": [
   "None",
   "Stubble",
   "Moustache",
   "Goatee",
   "Short beard",
   "Full beard"
  ],
  "glasses": [
   "No glasses",
   "Glasses"
  ]
 },
 "extra_max": 120,
 "lifts": [
  {
   "key": "bench",
   "name": "Bench press"
  },
  {
   "key": "squat",
   "name": "Back squat"
  },
  {
   "key": "deadlift",
   "name": "Deadlift"
  }
 ],
 "runs": [
  {
   "key": "1_mile",
   "name": "Mile"
  },
  {
   "key": "5k",
   "name": "5K"
  }
 ],
 "skills": [
  {
   "key": "judo",
   "name": "Judo",
   "levels": [
    "White belt",
    "Yellow belt",
    "Orange belt",
    "Green belt",
    "Blue belt",
    "Brown belt",
    "Black belt, 1st dan",
    "Black belt, 2nd dan",
    "Black belt, 3rd dan or higher"
   ],
   "ask_discipline": false,
   "discipline_hint": null,
   "level_label": "Grade"
  },
  {
   "key": "bjj",
   "name": "Brazilian jiu-jitsu",
   "levels": [
    "White belt",
    "Blue belt",
    "Purple belt",
    "Brown belt",
    "Black belt"
   ],
   "ask_discipline": false,
   "discipline_hint": null,
   "level_label": "Grade"
  },
  {
   "key": "martial_art",
   "name": "Other martial art",
   "levels": [
    "Beginner (white or first belts)",
    "Intermediate coloured belt",
    "Advanced coloured belt (brown or red)",
    "Black belt, 1st dan",
    "Black belt, 2nd dan",
    "Black belt, 3rd dan or higher"
   ],
   "ask_discipline": true,
   "discipline_hint": "e.g. Karate, Kung fu, Taekwondo",
   "level_label": "Grade"
  },
  {
   "key": "bouldering",
   "name": "Bouldering",
   "levels": [
    "V0",
    "V1",
    "V2",
    "V3",
    "V4",
    "V5",
    "V6",
    "V7",
    "V8",
    "V9",
    "V10",
    "V11",
    "V12",
    "V13",
    "V14",
    "V15 or harder"
   ],
   "ask_discipline": false,
   "discipline_hint": null,
   "level_label": "Hardest problem sent"
  },
  {
   "key": "sport_climbing",
   "name": "Sport climbing",
   "levels": [
    "5.9",
    "5.10",
    "5.11",
    "5.12",
    "5.13",
    "5.14",
    "5.15"
   ],
   "ask_discipline": false,
   "discipline_hint": null,
   "level_label": "Hardest route sent"
  },
  {
   "key": "competition",
   "name": "Competition",
   "levels": [
    "Club or local events",
    "Regional level",
    "State level",
    "National level",
    "International level",
    "World or Olympic medalist"
   ],
   "ask_discipline": true,
   "discipline_hint": "Which sport, e.g. Wrestling, Powerlifting",
   "level_label": "Grade"
  }
 ],
 "skill_text_max": 300
};
