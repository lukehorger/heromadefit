// Made by `fitcoach demo web-catalog` from sync/src/fitcoach/demo.py and club.py. Don't edit by hand.
window.HERO_CATALOG = {
 "consent_version": "2026-10-28club-d-web",
 "consent": {
  "selfie": "To draw your hero from a selfie, we need your OK first. Some state laws, like Illinois' Biometric Information Privacy Act, treat face data as special.\n• What we collect: the selfie you take or upload. The AI service that draws your hero may map the features of your face to do it. That counts as face data (a \"biometric identifier\").\n• Why: only to draw your hero picture. We don't use it to identify you or for anything else, and we never sell, rent or trade it.\n• Who receives it: Hero Made Fit, run by Luke H.; Higgsfield, the AI service that draws the art; and xAI, the company behind the Grok drawing model Higgsfield uses. On its way to us, your selfie passes through Luke's private Google account, where it's permanently deleted as soon as it arrives. We've turned off Higgsfield's setting that lets it train its AI on our uploads. Higgsfield couldn't confirm that the setting covers every model, and xAI handles your photo under its own terms, so we can't promise your photo will never be used to train AI.\n• How long we keep it: we delete your selfie from our computer within 30 days after your hero is drawn, or sooner if you ask. We also ask Higgsfield to delete it. Higgsfield reviews deletion requests under its own policy and may keep copies for a while, and xAI follows its own policy. We never keep it more than 3 years.\n• Your hero art and results aren't face data. We keep them so your link keeps working, until you ask us to delete them.\n• You can say no and describe yourself instead. If you change your mind later, email privacy@heromadefit.com and we'll delete your selfie.\n• If you describe a skill, those words are sent to Claude, an AI from Anthropic, to estimate your Skill score.\n• Our face-data policy: heromadefit.com/privacy.html\nI'm 18 or older. I've read this, and I agree to let Hero Made Fit, Higgsfield and xAI collect, use and keep my face data as described.",
  "describe": "Only these words, and anything you type in the drawing box, are sent to Higgsfield, an AI image service, and to xAI, the company behind its Grok drawing model, to draw your hero. No photo is taken. We've turned off Higgsfield's setting that lets it train on our uploads, but xAI handles them under its own terms. Your hero may look less like you than a selfie would. When you ask, I delete your answers and hero art here and ask Higgsfield to remove the art too. If you describe a skill, those words are sent to Claude, an AI from Anthropic, to estimate your Skill score. Your answers and any selfie go first to my private Google account, and I delete them there once they're in the app. Your results and hero art are then kept there so this link can show them to you, until you ask me to delete them."
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
 "skill_text_max": 300,
 "club": {
  "skills": [
   {
    "key": "calisthenics",
    "name": "Calisthenics",
    "parents": []
   },
   {
    "key": "weightlifting",
    "name": "Weight Lifting",
    "parents": []
   },
   {
    "key": "kb_mace",
    "name": "Kettlebell and Mace Training",
    "parents": []
   },
   {
    "key": "advanced_calisthenics",
    "name": "Advanced Calisthenics",
    "parents": [
     "calisthenics"
    ]
   },
   {
    "key": "weighted_calisthenics",
    "name": "Weighted Calisthenics",
    "parents": [
     "calisthenics",
     "weightlifting"
    ]
   },
   {
    "key": "heavy_kb_mace",
    "name": "Heavy Kettlebell and Mace",
    "parents": [
     "weightlifting",
     "kb_mace"
    ]
   },
   {
    "key": "advanced_swings",
    "name": "Advanced Swings",
    "parents": [
     "kb_mace"
    ]
   }
  ],
  "tests": [
   {
    "key": "dead_hang_s",
    "name": "Dead hang",
    "kind": "seconds",
    "skills": [
     "calisthenics"
    ],
    "how": "Longest hang from a bar with both hands.",
    "tier": 1,
    "unit": "seconds"
   },
   {
    "key": "scap_pullups",
    "name": "Scap pull-ups",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "Controlled, from a dead hang, arms straight.",
    "tier": 1,
    "unit": "reps"
   },
   {
    "key": "assisted_pullups",
    "name": "Assisted pull-ups",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "With a band or your feet helping. Skip it if you can do real pull-ups.",
    "tier": 1,
    "unit": "reps"
   },
   {
    "key": "knee_raises",
    "name": "Hanging knee raises",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "Knees to hip height or higher, no swinging.",
    "tier": 1,
    "unit": "reps"
   },
   {
    "key": "aus_rows",
    "name": "Australian rows",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "Under a low bar, any angle.",
    "tier": 1,
    "unit": "reps"
   },
   {
    "key": "aus_rows_flat",
    "name": "Horizontal Australian rows",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "Body flat, parallel to the floor.",
    "tier": 1,
    "unit": "reps"
   },
   {
    "key": "leg_raises",
    "name": "Hanging leg raises",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "Straight legs, not knees.",
    "tier": 1,
    "unit": "reps"
   },
   {
    "key": "one_arm_hang_s",
    "name": "One-arm hang",
    "kind": "seconds",
    "skills": [
     "calisthenics"
    ],
    "how": "Your weaker hand.",
    "tier": 1,
    "unit": "seconds"
   },
   {
    "key": "hanging_l_sit_s",
    "name": "Hanging L-sit",
    "kind": "seconds",
    "skills": [
     "calisthenics"
    ],
    "how": "Hang with your legs held straight out in front.",
    "tier": 2,
    "unit": "seconds"
   },
   {
    "key": "skin_the_cat",
    "name": "Skin-the-cats",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "Controlled, all the way round and back.",
    "tier": 2,
    "unit": "reps"
   },
   {
    "key": "l_sit_chinups",
    "name": "L-sit chin-ups",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "Legs held straight out the whole time.",
    "tier": 2,
    "unit": "reps"
   },
   {
    "key": "wide_pullups",
    "name": "Wide-grip pull-ups",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "In one set.",
    "tier": 2,
    "unit": "reps"
   },
   {
    "key": "clapping_pullups",
    "name": "Clapping pull-ups",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "With straight legs; hands leave the bar and clap.",
    "tier": 2,
    "unit": "reps"
   },
   {
    "key": "one_arm_l_sit_s",
    "name": "One-arm hanging L-sit",
    "kind": "seconds",
    "skills": [
     "calisthenics"
    ],
    "how": "One hand on the bar, legs straight out. Your weaker arm.",
    "tier": 2,
    "unit": "seconds"
   },
   {
    "key": "muscle_ups",
    "name": "Muscle-ups",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "From a hang to straight arms over the bar.",
    "tier": 2,
    "unit": "reps"
   },
   {
    "key": "blue_circuit",
    "name": "Tom's Blue Belt circuit in 10 minutes",
    "kind": "check",
    "skills": [
     "calisthenics"
    ],
    "how": "1 muscle-up, then 10 each of wide, regular, narrow and neutral-grip pull-ups, chin-ups and skin-the-cats, then a 30 s one-arm hanging L-sit on each arm, all within 10 minutes.",
    "tier": 2,
    "unit": "check"
   },
   {
    "key": "kneeling_pushups",
    "name": "Kneeling push-ups",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "Chest to the floor.",
    "tier": 1,
    "unit": "reps"
   },
   {
    "key": "single_arm_plank_s",
    "name": "Single-arm plank",
    "kind": "seconds",
    "skills": [
     "calisthenics"
    ],
    "how": "Your weaker side.",
    "tier": 1,
    "unit": "seconds"
   },
   {
    "key": "db_press",
    "name": "Incline dumbbell press",
    "kind": "set",
    "skills": [
     "calisthenics"
    ],
    "how": "The weight of one dumbbell (lb), and reps in one set.",
    "tier": 1,
    "unit": "lb each"
   },
   {
    "key": "pike_pushups",
    "name": "Pike push-ups",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "Good form: hips high, head toward the floor.",
    "tier": 2,
    "unit": "reps"
   },
   {
    "key": "diamond_pushups",
    "name": "Diamond push-ups",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "Hands together under your chest.",
    "tier": 2,
    "unit": "reps"
   },
   {
    "key": "wide_pushups",
    "name": "Wide-grip push-ups",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "Hands wider than your shoulders.",
    "tier": 2,
    "unit": "reps"
   },
   {
    "key": "lateral_raise",
    "name": "Lateral raise",
    "kind": "set",
    "skills": [
     "calisthenics"
    ],
    "how": "The weight of one dumbbell (lb), and reps with good form.",
    "tier": 2,
    "unit": "lb each"
   },
   {
    "key": "one_arm_pushups",
    "name": "One-arm push-ups",
    "kind": "reps",
    "skills": [
     "advanced_calisthenics"
    ],
    "how": "Your weaker side.",
    "tier": 2,
    "unit": "reps"
   },
   {
    "key": "squats",
    "name": "Bodyweight squats",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "In one set, hips to knee height or lower.",
    "tier": 1,
    "unit": "reps"
   },
   {
    "key": "lunges",
    "name": "Reverse lunges",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "Each leg. Count your weaker leg.",
    "tier": 1,
    "unit": "reps"
   },
   {
    "key": "calf_raises",
    "name": "Single-leg calf raises",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "Full range. Your weaker leg.",
    "tier": 1,
    "unit": "reps"
   },
   {
    "key": "pistols",
    "name": "Pistol squats",
    "kind": "reps",
    "skills": [
     "calisthenics"
    ],
    "how": "Each leg, no box or support. Your weaker leg.",
    "tier": 1,
    "unit": "reps"
   },
   {
    "key": "weighted_pullup",
    "name": "Weighted pull-up",
    "kind": "set",
    "skills": [
     "weighted_calisthenics"
    ],
    "how": "Added weight (lb) and reps in one set.",
    "tier": 1,
    "unit": "lb added"
   },
   {
    "key": "weighted_dip",
    "name": "Weighted dip",
    "kind": "set",
    "skills": [
     "weighted_calisthenics"
    ],
    "how": "Added weight (lb) and reps in one set.",
    "tier": 1,
    "unit": "lb added"
   },
   {
    "key": "kb_swing",
    "name": "Two-hand kettlebell swing",
    "kind": "set",
    "skills": [
     "kb_mace"
    ],
    "how": "Bell (kg) and reps in one set.",
    "tier": 1,
    "unit": "kg"
   },
   {
    "key": "goblet_squat",
    "name": "Goblet squat",
    "kind": "set",
    "skills": [
     "kb_mace"
    ],
    "how": "Bell (kg) and reps in one set.",
    "tier": 1,
    "unit": "kg"
   },
   {
    "key": "kb_catch",
    "name": "Kettlebell catch",
    "kind": "set",
    "skills": [
     "kb_mace"
    ],
    "how": "Toss, flip and catch. Bell (kg) and catches in a row without a drop.",
    "tier": 1,
    "unit": "kg"
   },
   {
    "key": "mace_360",
    "name": "Mace 360",
    "kind": "set",
    "skills": [
     "kb_mace"
    ],
    "how": "Mace (lb) and reps each side.",
    "tier": 1,
    "unit": "lb mace"
   },
   {
    "key": "kb_press",
    "name": "Kettlebell press",
    "kind": "set",
    "skills": [
     "heavy_kb_mace"
    ],
    "how": "One arm overhead. Bell (kg) and reps, weaker arm.",
    "tier": 1,
    "unit": "kg"
   },
   {
    "key": "one_arm_swing",
    "name": "One-arm swing",
    "kind": "set",
    "skills": [
     "advanced_swings"
    ],
    "how": "Bell (kg) and reps, weaker arm.",
    "tier": 1,
    "unit": "kg"
   },
   {
    "key": "hand_to_hand",
    "name": "Hand-to-hand swing",
    "kind": "set",
    "skills": [
     "advanced_swings"
    ],
    "how": "Bell (kg) and swings in a row, switching hands.",
    "tier": 1,
    "unit": "kg"
   }
  ],
  "tier2_from": {
   "pullups": 8,
   "pushups": 25
  },
  "skool_url": "https://www.skool.com/bodyimprovementclub",
  "waitlist_url": "https://heromadefit.com/?ref=tom-club",
  "demos": {
   "pullups": {
    "what": "Hang from a bar, palms facing away, arms straight. Pull until your chin is over the bar, then lower all the way down. No kicking or swinging.",
    "where": "Pulling Mastery · White Belt · Level 5",
    "clip": null,
    "video": "eGo4IYlbE5g",
    "by": "Calisthenicmovement"
   },
   "pushups": {
    "what": "Hands just wider than your shoulders, body straight from head to heels. Lower until your chest touches the floor, then push back up.",
    "where": "Pushing Mastery · White Belt · Level 1",
    "clip": null,
    "video": "WDIpL0pjun0",
    "by": "National Academy of Sports Medicine (NASM)"
   },
   "dead_hang_s": {
    "what": "Hang from a pull-up bar with both hands, arms straight and feet off the floor, for as long as you can hold on.",
    "where": "Pulling Mastery · White Belt · Level 1",
    "clip": null,
    "video": "0HBhuaD_S7M",
    "by": "Maximus Pump"
   },
   "scap_pullups": {
    "what": "Hang with straight arms, then pull your shoulder blades down and together so your body rises an inch or two, without bending your elbows. Lower slowly: that's one.",
    "where": "Pulling Mastery · White Belt · Level 1",
    "clip": null,
    "video": "XIkPI-_80r4",
    "by": "Perform 360"
   },
   "assisted_pullups": {
    "what": "A pull-up with help: a resistance band looped over the bar under your knee or foot, or your feet on a box taking some of your weight.",
    "where": "Pulling Mastery · White Belt · Level 1",
    "clip": null,
    "video": "5rR_bzBc1NA",
    "by": "Jenny LaBaw"
   },
   "knee_raises": {
    "what": "Hang from the bar and lift your knees to hip height or higher, then lower them under control, without swinging.",
    "where": "Pulling Mastery · White Belt · Level 1",
    "clip": null,
    "video": "RD_A-Z15ER4",
    "by": "Renaissance Periodization"
   },
   "aus_rows": {
    "what": "Lie under a low bar (or rings) and hold it with straight arms, heels on the floor, body straight. Pull your chest up to the bar, then lower. The more upright you are, the easier it is.",
    "where": "Pulling Mastery · White Belt · Level 1",
    "clip": null,
    "video": "bHO0A4ZF_Zg",
    "by": "Breaking Muscle"
   },
   "aus_rows_flat": {
    "what": "An Australian row with the bar low enough that your body is flat, parallel to the floor: the hardest angle.",
    "where": "Pulling Mastery · White Belt · Level 10",
    "clip": null,
    "video": "KOaCM1HMwU0",
    "by": "Renaissance Periodization"
   },
   "leg_raises": {
    "what": "Hang from the bar and lift your legs, kept straight, until they're level with your hips or higher. Lower slowly.",
    "where": "Pulling Mastery · White Belt · Level 15",
    "clip": null,
    "video": "z1oF36cdb4w",
    "by": "Central Athlete"
   },
   "one_arm_hang_s": {
    "what": "Hang from the bar with one hand, arm straight. Time your weaker hand.",
    "where": "Pulling Mastery · White Belt · Level 20",
    "clip": null,
    "video": "AVEe_bLMdbo",
    "by": "The Strength Institute"
   },
   "hanging_l_sit_s": {
    "what": "Hang from the bar with straight arms and hold your legs straight out in front, level with your hips, so your body makes an L.",
    "where": "Pulling Mastery · White Belt · Level 20",
    "clip": null,
    "video": "WHi1bvZLwlw",
    "by": "CrossFit"
   },
   "skin_the_cat": {
    "what": "From a hang, tuck your knees, roll backwards and pass your legs between your arms until you hang upside down behind the bar, then come back the same way. Go slowly: it stretches the shoulders hard.",
    "where": "Pulling Mastery · Yellow Belt · Level 25",
    "clip": null,
    "video": "mqZDdpFh1gA",
    "by": "PowerMonkeyFitness"
   },
   "l_sit_chinups": {
    "what": "A chin-up (palms facing you) while holding your legs straight out in front in an L the whole time.",
    "where": "Pulling Mastery · Yellow Belt · Level 35",
    "clip": null,
    "video": "2FuWfA7ur7w",
    "by": "Bodybuilding.com"
   },
   "wide_pullups": {
    "what": "A pull-up with your hands well wider than your shoulders.",
    "where": "Pulling Mastery · Yellow Belt · Level 35",
    "clip": null,
    "video": "dWB-hEfgMD4",
    "by": "Functional Bodybuilding"
   },
   "clapping_pullups": {
    "what": "Pull up explosively so your hands leave the bar, clap once, and catch the bar again.",
    "where": "Pulling Mastery · Yellow Belt · Level 35",
    "clip": null,
    "video": "uKiXB0DzsjA",
    "by": "CrossFit"
   },
   "one_arm_l_sit_s": {
    "what": "Hang from one hand and hold your legs straight out in front in an L.",
    "where": "Pulling Mastery · Yellow Belt · Level 35",
    "clip": null,
    "video": "QzS8qf2hY6A",
    "by": "Firmen Sowers"
   },
   "muscle_ups": {
    "what": "Pull up hard and high, roll your chest over the bar, and press up until your arms are straight above it: from below the bar to above it in one move.",
    "where": "Pulling Mastery · Yellow Belt · Level 40",
    "clip": null,
    "video": "o69WaY_7k2c",
    "by": "CrossFit"
   },
   "kneeling_pushups": {
    "what": "A push-up with your knees on the floor instead of your toes. Keep a straight line from knees to head and lower your chest to the floor.",
    "where": "Pushing Mastery · White Belt · Level 1",
    "clip": null,
    "video": "Ahf4t9ky3d8",
    "by": "CrossFit"
   },
   "single_arm_plank_s": {
    "what": "Hold a plank on straight arms, then lift one hand off the floor and hold without letting your hips twist or sag. Time it on your weaker arm.",
    "where": "Pushing Mastery · White Belt · Level 10",
    "clip": null,
    "video": "X-gv0Ygb3yI",
    "by": "Functional Bodybuilding"
   },
   "db_press": {
    "what": "Lie on a bench set at an incline, a dumbbell in each hand at your chest, and press them up until your arms are straight.",
    "where": "Pushing Mastery · White Belt · Level 1",
    "clip": null,
    "video": "6tW4LUaOxlE",
    "by": "Women's Strength Nation by Holly Perkins"
   },
   "pike_pushups": {
    "what": "Start in a push-up, walk your feet in and lift your hips high so your body makes an upside-down V. Bend your elbows to lower the top of your head toward the floor, then press back up. It works the shoulders.",
    "where": "Pushing Mastery · Yellow Belt · Level 25",
    "clip": null,
    "video": "XckEEwa1BPI",
    "by": "National Academy of Sports Medicine (NASM)"
   },
   "diamond_pushups": {
    "what": "A push-up with your hands together under your chest, thumbs and index fingers touching to make a diamond.",
    "where": "Pushing Mastery · Yellow Belt · Level 30",
    "clip": null,
    "video": "J0DnG1_S92I",
    "by": "ScottHermanFitness"
   },
   "wide_pushups": {
    "what": "A push-up with your hands well wider than your shoulders.",
    "where": "Pushing Mastery · Yellow Belt · Level 30",
    "clip": null,
    "video": "m3FTgWtJsFE",
    "by": "Nuffield Health"
   },
   "lateral_raise": {
    "what": "Stand with a dumbbell in each hand at your sides. Elbows slightly bent, raise your arms out to the sides up to shoulder height, then lower slowly.",
    "where": "Pushing Mastery · Yellow Belt · Level 30",
    "clip": null,
    "video": "3VcKaXpzqRo",
    "by": "ScottHermanFitness"
   },
   "one_arm_pushups": {
    "what": "A full push-up on one hand, feet spread wide for balance, the other hand behind your back.",
    "where": null,
    "clip": null,
    "video": "IlWN4SNqaEM",
    "by": "ATHLEAN-X™"
   },
   "squats": {
    "what": "Feet about shoulder-width apart, sit your hips back and down until they're at knee height or lower, then stand up.",
    "where": "Legs Mastery",
    "clip": null,
    "video": "l83R5PblSMA",
    "by": "PureGym"
   },
   "lunges": {
    "what": "Step one foot back and lower until your back knee nearly touches the floor, then return to standing.",
    "where": "Legs Mastery",
    "clip": null,
    "video": "xrPteyQLGAo",
    "by": "PureGym"
   },
   "calf_raises": {
    "what": "Stand on one foot, ideally on the edge of a step, rise as high as you can onto your toes, then lower all the way down.",
    "where": "Legs Mastery",
    "clip": null,
    "video": "qPd73snQfUs",
    "by": "Hospital for Special Surgery"
   },
   "pistols": {
    "what": "A one-leg squat: on one foot, the other leg held straight out in front, squat all the way down and stand back up.",
    "where": "Legs Mastery",
    "clip": null,
    "video": "bH3mRwnAN88",
    "by": "[P]rehab"
   },
   "weighted_pullup": {
    "what": "A pull-up with extra weight hung from a dip belt or worn in a vest.",
    "where": null,
    "clip": null,
    "video": "HuuyDNGrCI8",
    "by": "ScottHermanFitness"
   },
   "weighted_dip": {
    "what": "Between parallel bars, arms straight, lower until your shoulders are below your elbows, then press back up, with extra weight on a belt or vest.",
    "where": null,
    "clip": null,
    "video": "UArbMCwLUZs",
    "by": "Live Lean TV Daily Exercises"
   },
   "kb_swing": {
    "what": "Feet wide, hike the kettlebell back between your legs, then snap your hips forward to swing it up to chest height with straight arms. The power comes from the hips, not the arms.",
    "where": null,
    "clip": null,
    "video": "1cVT3ee9mgU",
    "by": "StrongFirst"
   },
   "goblet_squat": {
    "what": "Hold a kettlebell by its horns against your chest and squat as deep as you can with good form, then stand.",
    "where": null,
    "clip": null,
    "video": "MWHIs0zxkCU",
    "by": "National Academy of Sports Medicine (NASM)"
   },
   "kb_catch": {
    "what": "Toss the kettlebell so it flips in the air and catch it by the handle. Start light and keep your feet clear.",
    "where": null,
    "clip": null,
    "video": "cfvZBgC6mVQ",
    "by": "Rippel Effect Fitness"
   },
   "mace_360": {
    "what": "Hold the mace upright, then swing the heavy end in a circle behind your back and round to the front again, keeping it close to you.",
    "where": null,
    "clip": null,
    "video": "7591zLVLH84",
    "by": "Steve Shannon"
   },
   "kb_press": {
    "what": "Bring a kettlebell to your shoulder with one hand, then press it straight overhead until your arm is locked out.",
    "where": null,
    "clip": null,
    "video": "gjr-QAdsq4o",
    "by": "Onnit"
   },
   "one_arm_swing": {
    "what": "A kettlebell swing, holding the bell in one hand.",
    "where": null,
    "clip": null,
    "video": "mVwhivtXobw",
    "by": "CORE Strong Fitness"
   },
   "hand_to_hand": {
    "what": "A one-arm swing where you let go at the top and catch the bell with the other hand, switching every swing.",
    "where": null,
    "clip": null,
    "video": "KKumMhxKapw",
    "by": "National Academy of Sports Medicine (NASM)"
   },
   "lift_bench": {
    "what": "Lie on a flat bench, feet on the floor, and lower the bar to the middle of your chest, then press it back up until your arms are straight.",
    "where": null,
    "clip": null,
    "video": "SCVCLChPQFY",
    "by": "CrossFit"
   },
   "lift_squat": {
    "what": "With the bar across your upper back, sit your hips back and down until your thighs are at least level with your knees, then stand back up.",
    "where": null,
    "clip": null,
    "video": "rrJIyZGlK8c",
    "by": "PureGym"
   },
   "lift_deadlift": {
    "what": "With the bar over the middle of your feet, grip it just outside your legs, keep your back flat and stand up tall, then lower it back to the floor.",
    "where": null,
    "clip": null,
    "video": "GxsLrTzyGUU",
    "by": "PureGym"
   }
  }
 }
};
