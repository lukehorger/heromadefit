// Made by `fitcoach demo web-catalog` from sync/src/fitcoach/club.py. Don't edit by hand.
// Teen version only. Holds Tom's belt numbers: don't publish until Tom says OK.
window.CLUB_BELTS = {
 "disciplines": {
  "pulling": {
   "name": "Pulling",
   "animal": "Monkey",
   "emoji": "🐒",
   "skill": "calisthenics"
  },
  "pushing": {
   "name": "Pushing",
   "animal": "Tiger",
   "emoji": "🐅",
   "skill": "calisthenics"
  },
  "legs": {
   "name": "Legs",
   "animal": "Panda",
   "emoji": "🐼",
   "skill": "calisthenics"
  }
 },
 "belts": [
  [
   1,
   "White",
   "⬜️",
   [
    5,
    10,
    15,
    20
   ]
  ],
  [
   25,
   "Yellow",
   "🟨",
   [
    30,
    35,
    40
   ]
  ],
  [
   45,
   "Blue",
   "🟦",
   [
    50,
    55,
    60
   ]
  ]
 ],
 "top": 60,
 "notes": {
  "tom": "Tom's test",
  "video": "Tom's test (from his video)",
  "draft": "draft, for Tom to confirm"
 },
 "levels": {
  "pulling": [
   {
    "level": 5,
    "source": "tom",
    "belt_test": null,
    "unclear": null,
    "belt": "White",
    "emoji": "⬜️",
    "stripes": 1,
    "tests": [
     {
      "text": "Dead hang: 30 s",
      "opts": [
       [
        "dead_hang_s",
        30
       ]
      ]
     },
     {
      "text": "8 scap pull-ups",
      "opts": [
       [
        "scap_pullups",
        8
       ]
      ]
     },
     {
      "text": "8 assisted pull-ups or 1 pull-up",
      "opts": [
       [
        "assisted_pullups",
        8
       ],
       [
        "pullups",
        1
       ]
      ]
     },
     {
      "text": "10 hanging knee raises",
      "opts": [
       [
        "knee_raises",
        10
       ]
      ]
     },
     {
      "text": "12 Australian rows",
      "opts": [
       [
        "aus_rows",
        12
       ]
      ]
     }
    ]
   },
   {
    "level": 10,
    "source": "tom",
    "belt_test": null,
    "unclear": null,
    "belt": "White",
    "emoji": "⬜️",
    "stripes": 2,
    "tests": [
     {
      "text": "Dead hang: 45 s",
      "opts": [
       [
        "dead_hang_s",
        45
       ]
      ]
     },
     {
      "text": "15 scap pull-ups",
      "opts": [
       [
        "scap_pullups",
        15
       ]
      ]
     },
     {
      "text": "1 pull-up",
      "opts": [
       [
        "pullups",
        1
       ]
      ]
     },
     {
      "text": "15 hanging knee raises",
      "opts": [
       [
        "knee_raises",
        15
       ]
      ]
     },
     {
      "text": "25 Australian rows",
      "opts": [
       [
        "aus_rows",
        25
       ]
      ]
     }
    ]
   },
   {
    "level": 15,
    "source": "tom",
    "belt_test": null,
    "unclear": null,
    "belt": "White",
    "emoji": "⬜️",
    "stripes": 3,
    "tests": [
     {
      "text": "Dead hang: 60 s",
      "opts": [
       [
        "dead_hang_s",
        60
       ]
      ]
     },
     {
      "text": "20 scap pull-ups",
      "opts": [
       [
        "scap_pullups",
        20
       ]
      ]
     },
     {
      "text": "3 pull-ups",
      "opts": [
       [
        "pullups",
        3
       ]
      ]
     },
     {
      "text": "20 hanging knee raises",
      "opts": [
       [
        "knee_raises",
        20
       ]
      ]
     },
     {
      "text": "10 horizontal Australian rows",
      "opts": [
       [
        "aus_rows_flat",
        10
       ]
      ]
     }
    ]
   },
   {
    "level": 20,
    "source": "video",
    "belt_test": null,
    "unclear": null,
    "belt": "White",
    "emoji": "⬜️",
    "stripes": 4,
    "tests": [
     {
      "text": "Dead hang: 90 s",
      "opts": [
       [
        "dead_hang_s",
        90
       ]
      ]
     },
     {
      "text": "25 scap pull-ups",
      "opts": [
       [
        "scap_pullups",
        25
       ]
      ]
     },
     {
      "text": "5 pull-ups",
      "opts": [
       [
        "pullups",
        5
       ]
      ]
     },
     {
      "text": "5 hanging leg raises",
      "opts": [
       [
        "leg_raises",
        5
       ]
      ]
     }
    ]
   },
   {
    "level": 25,
    "source": "video",
    "belt_test": "White Belt test",
    "unclear": "the 30 s hanging L-sit is unclear in Tom's captions",
    "belt": "Yellow",
    "emoji": "🟨",
    "stripes": 0,
    "tests": [
     {
      "text": "Dead hang: 90 s",
      "opts": [
       [
        "dead_hang_s",
        90
       ]
      ]
     },
     {
      "text": "One-arm hang: 15 s",
      "opts": [
       [
        "one_arm_hang_s",
        15
       ]
      ]
     },
     {
      "text": "25 scap pull-ups",
      "opts": [
       [
        "scap_pullups",
        25
       ]
      ]
     },
     {
      "text": "8 pull-ups",
      "opts": [
       [
        "pullups",
        8
       ]
      ]
     },
     {
      "text": "Hanging L-sit: 30 s",
      "opts": [
       [
        "hanging_l_sit_s",
        30
       ]
      ]
     }
    ]
   },
   {
    "level": 30,
    "source": "video",
    "belt_test": null,
    "unclear": "the 100 s dead hang is unclear in Tom's captions",
    "belt": "Yellow",
    "emoji": "🟨",
    "stripes": 1,
    "tests": [
     {
      "text": "10 pull-ups",
      "opts": [
       [
        "pullups",
        10
       ]
      ]
     },
     {
      "text": "1 skin-the-cat",
      "opts": [
       [
        "skin_the_cat",
        1
       ]
      ]
     },
     {
      "text": "Dead hang: 100 s",
      "opts": [
       [
        "dead_hang_s",
        100
       ]
      ]
     },
     {
      "text": "One-arm hang: 20 s",
      "opts": [
       [
        "one_arm_hang_s",
        20
       ]
      ]
     },
     {
      "text": "Hanging L-sit: 45 s",
      "opts": [
       [
        "hanging_l_sit_s",
        45
       ]
      ]
     }
    ]
   },
   {
    "level": 35,
    "source": "video",
    "belt_test": null,
    "unclear": null,
    "belt": "Yellow",
    "emoji": "🟨",
    "stripes": 2,
    "tests": [
     {
      "text": "12 pull-ups",
      "opts": [
       [
        "pullups",
        12
       ]
      ]
     },
     {
      "text": "15 hanging leg raises",
      "opts": [
       [
        "leg_raises",
        15
       ]
      ]
     },
     {
      "text": "3 skin-the-cats",
      "opts": [
       [
        "skin_the_cat",
        3
       ]
      ]
     },
     {
      "text": "Hanging L-sit: 60 s",
      "opts": [
       [
        "hanging_l_sit_s",
        60
       ]
      ]
     }
    ]
   },
   {
    "level": 40,
    "source": "video",
    "belt_test": null,
    "unclear": null,
    "belt": "Yellow",
    "emoji": "🟨",
    "stripes": 3,
    "tests": [
     {
      "text": "15 pull-ups",
      "opts": [
       [
        "pullups",
        15
       ]
      ]
     },
     {
      "text": "10 L-sit chin-ups",
      "opts": [
       [
        "l_sit_chinups",
        10
       ]
      ]
     },
     {
      "text": "10 wide-grip pull-ups",
      "opts": [
       [
        "wide_pullups",
        10
       ]
      ]
     },
     {
      "text": "5 clapping pull-ups",
      "opts": [
       [
        "clapping_pullups",
        5
       ]
      ]
     },
     {
      "text": "5 skin-the-cats",
      "opts": [
       [
        "skin_the_cat",
        5
       ]
      ]
     },
     {
      "text": "One-arm hanging L-sit: 15 s",
      "opts": [
       [
        "one_arm_l_sit_s",
        15
       ]
      ]
     }
    ]
   },
   {
    "level": 45,
    "source": "video",
    "belt_test": "Yellow Belt test",
    "unclear": null,
    "belt": "Blue",
    "emoji": "🟦",
    "stripes": 0,
    "tests": [
     {
      "text": "1 muscle-up",
      "opts": [
       [
        "muscle_ups",
        1
       ]
      ]
     },
     {
      "text": "10 skin-the-cats",
      "opts": [
       [
        "skin_the_cat",
        10
       ]
      ]
     },
     {
      "text": "One-arm hanging L-sit: 30 s",
      "opts": [
       [
        "one_arm_l_sit_s",
        30
       ]
      ]
     },
     {
      "text": "Tom's Blue Belt circuit in 10 minutes",
      "opts": [
       [
        "blue_circuit",
        true
       ]
      ]
     }
    ]
   },
   {
    "level": 50,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "Blue",
    "emoji": "🟦",
    "stripes": 1,
    "tests": [
     {
      "text": "3 muscle-ups",
      "opts": [
       [
        "muscle_ups",
        3
       ]
      ]
     },
     {
      "text": "20 pull-ups",
      "opts": [
       [
        "pullups",
        20
       ]
      ]
     }
    ]
   },
   {
    "level": 55,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "Blue",
    "emoji": "🟦",
    "stripes": 2,
    "tests": [
     {
      "text": "5 muscle-ups",
      "opts": [
       [
        "muscle_ups",
        5
       ]
      ]
     },
     {
      "text": "Weighted pull-up: 5 reps with +25 lb",
      "opts": [
       [
        "weighted_pullup",
        [
         25,
         5
        ]
       ]
      ]
     }
    ]
   },
   {
    "level": 60,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "Blue",
    "emoji": "🟦",
    "stripes": 3,
    "tests": [
     {
      "text": "10 muscle-ups",
      "opts": [
       [
        "muscle_ups",
        10
       ]
      ]
     },
     {
      "text": "25 pull-ups",
      "opts": [
       [
        "pullups",
        25
       ]
      ]
     },
     {
      "text": "Weighted pull-up: 5 reps with +45 lb",
      "opts": [
       [
        "weighted_pullup",
        [
         45,
         5
        ]
       ]
      ]
     }
    ]
   }
  ],
  "pushing": [
   {
    "level": 5,
    "source": "video",
    "belt_test": null,
    "unclear": null,
    "belt": "White",
    "emoji": "⬜️",
    "stripes": 1,
    "tests": [
     {
      "text": "20 kneeling push-ups or 12 push-ups",
      "opts": [
       [
        "kneeling_pushups",
        20
       ],
       [
        "pushups",
        12
       ]
      ]
     },
     {
      "text": "5 push-ups",
      "opts": [
       [
        "pushups",
        5
       ]
      ]
     },
     {
      "text": "Incline dumbbell press: 10 reps with 25 lb each",
      "opts": [
       [
        "db_press",
        [
         25,
         10
        ]
       ]
      ]
     }
    ]
   },
   {
    "level": 10,
    "source": "video",
    "belt_test": null,
    "unclear": null,
    "belt": "White",
    "emoji": "⬜️",
    "stripes": 2,
    "tests": [
     {
      "text": "12 push-ups",
      "opts": [
       [
        "pushups",
        12
       ]
      ]
     },
     {
      "text": "Incline dumbbell press: 12 reps with 30 lb each",
      "opts": [
       [
        "db_press",
        [
         30,
         12
        ]
       ]
      ]
     }
    ]
   },
   {
    "level": 15,
    "source": "video",
    "belt_test": null,
    "unclear": null,
    "belt": "White",
    "emoji": "⬜️",
    "stripes": 3,
    "tests": [
     {
      "text": "16 push-ups",
      "opts": [
       [
        "pushups",
        16
       ]
      ]
     },
     {
      "text": "Single-arm plank: 30 s",
      "opts": [
       [
        "single_arm_plank_s",
        30
       ]
      ]
     },
     {
      "text": "Incline dumbbell press: 12 reps with 35 lb each",
      "opts": [
       [
        "db_press",
        [
         35,
         12
        ]
       ]
      ]
     }
    ]
   },
   {
    "level": 20,
    "source": "video",
    "belt_test": null,
    "unclear": null,
    "belt": "White",
    "emoji": "⬜️",
    "stripes": 4,
    "tests": [
     {
      "text": "18 push-ups",
      "opts": [
       [
        "pushups",
        18
       ]
      ]
     },
     {
      "text": "Single-arm plank: 45 s",
      "opts": [
       [
        "single_arm_plank_s",
        45
       ]
      ]
     },
     {
      "text": "Incline dumbbell press: 15 reps with 40 lb each",
      "opts": [
       [
        "db_press",
        [
         40,
         15
        ]
       ]
      ]
     }
    ]
   },
   {
    "level": 25,
    "source": "video",
    "belt_test": "White Belt test",
    "unclear": null,
    "belt": "Yellow",
    "emoji": "🟨",
    "stripes": 0,
    "tests": [
     {
      "text": "25 push-ups",
      "opts": [
       [
        "pushups",
        25
       ]
      ]
     },
     {
      "text": "Incline dumbbell press: 15 reps with 45 lb each",
      "opts": [
       [
        "db_press",
        [
         45,
         15
        ]
       ]
      ]
     },
     {
      "text": "Single-arm plank: 60 s",
      "opts": [
       [
        "single_arm_plank_s",
        60
       ]
      ]
     }
    ]
   },
   {
    "level": 30,
    "source": "video",
    "belt_test": null,
    "unclear": null,
    "belt": "Yellow",
    "emoji": "🟨",
    "stripes": 1,
    "tests": [
     {
      "text": "30 push-ups",
      "opts": [
       [
        "pushups",
        30
       ]
      ]
     },
     {
      "text": "Incline dumbbell press: 12 reps with 50 lb each",
      "opts": [
       [
        "db_press",
        [
         50,
         12
        ]
       ]
      ]
     },
     {
      "text": "10 pike push-ups",
      "opts": [
       [
        "pike_pushups",
        10
       ]
      ]
     }
    ]
   },
   {
    "level": 35,
    "source": "video",
    "belt_test": null,
    "unclear": "whether each push-up count is one set is unclear in Tom's captions",
    "belt": "Yellow",
    "emoji": "🟨",
    "stripes": 2,
    "tests": [
     {
      "text": "35 push-ups",
      "opts": [
       [
        "pushups",
        35
       ]
      ]
     },
     {
      "text": "35 diamond push-ups",
      "opts": [
       [
        "diamond_pushups",
        35
       ]
      ]
     },
     {
      "text": "35 wide-grip push-ups",
      "opts": [
       [
        "wide_pushups",
        35
       ]
      ]
     },
     {
      "text": "20 pike push-ups",
      "opts": [
       [
        "pike_pushups",
        20
       ]
      ]
     },
     {
      "text": "Lateral raise: 20 reps with 15 lb each",
      "opts": [
       [
        "lateral_raise",
        [
         15,
         20
        ]
       ]
      ]
     }
    ]
   },
   {
    "level": 40,
    "source": "video",
    "belt_test": null,
    "unclear": null,
    "belt": "Yellow",
    "emoji": "🟨",
    "stripes": 3,
    "tests": [
     {
      "text": "40 push-ups",
      "opts": [
       [
        "pushups",
        40
       ]
      ]
     },
     {
      "text": "40 diamond push-ups",
      "opts": [
       [
        "diamond_pushups",
        40
       ]
      ]
     },
     {
      "text": "40 wide-grip push-ups",
      "opts": [
       [
        "wide_pushups",
        40
       ]
      ]
     },
     {
      "text": "25 pike push-ups",
      "opts": [
       [
        "pike_pushups",
        25
       ]
      ]
     },
     {
      "text": "Incline dumbbell press: 12 reps with 55 lb each",
      "opts": [
       [
        "db_press",
        [
         55,
         12
        ]
       ]
      ]
     }
    ]
   },
   {
    "level": 45,
    "source": "video",
    "belt_test": "Yellow Belt test",
    "unclear": null,
    "belt": "Blue",
    "emoji": "🟦",
    "stripes": 0,
    "tests": [
     {
      "text": "50 push-ups",
      "opts": [
       [
        "pushups",
        50
       ]
      ]
     },
     {
      "text": "50 diamond push-ups",
      "opts": [
       [
        "diamond_pushups",
        50
       ]
      ]
     },
     {
      "text": "50 wide-grip push-ups",
      "opts": [
       [
        "wide_pushups",
        50
       ]
      ]
     },
     {
      "text": "30 pike push-ups",
      "opts": [
       [
        "pike_pushups",
        30
       ]
      ]
     },
     {
      "text": "Incline dumbbell press: 12 reps with 60 lb each",
      "opts": [
       [
        "db_press",
        [
         60,
         12
        ]
       ]
      ]
     }
    ]
   },
   {
    "level": 50,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "Blue",
    "emoji": "🟦",
    "stripes": 1,
    "tests": [
     {
      "text": "60 push-ups",
      "opts": [
       [
        "pushups",
        60
       ]
      ]
     },
     {
      "text": "1 one-arm push-up",
      "opts": [
       [
        "one_arm_pushups",
        1
       ]
      ]
     }
    ]
   },
   {
    "level": 55,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "Blue",
    "emoji": "🟦",
    "stripes": 2,
    "tests": [
     {
      "text": "3 one-arm push-ups",
      "opts": [
       [
        "one_arm_pushups",
        3
       ]
      ]
     },
     {
      "text": "Weighted dip: 5 reps with +25 lb",
      "opts": [
       [
        "weighted_dip",
        [
         25,
         5
        ]
       ]
      ]
     }
    ]
   },
   {
    "level": 60,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "Blue",
    "emoji": "🟦",
    "stripes": 3,
    "tests": [
     {
      "text": "75 push-ups",
      "opts": [
       [
        "pushups",
        75
       ]
      ]
     },
     {
      "text": "8 one-arm push-ups",
      "opts": [
       [
        "one_arm_pushups",
        8
       ]
      ]
     },
     {
      "text": "Weighted dip: 5 reps with +45 lb",
      "opts": [
       [
        "weighted_dip",
        [
         45,
         5
        ]
       ]
      ]
     }
    ]
   }
  ],
  "legs": [
   {
    "level": 5,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "White",
    "emoji": "⬜️",
    "stripes": 1,
    "tests": [
     {
      "text": "25 bodyweight squats",
      "opts": [
       [
        "squats",
        25
       ]
      ]
     },
     {
      "text": "10 reverse lunges",
      "opts": [
       [
        "lunges",
        10
       ]
      ]
     }
    ]
   },
   {
    "level": 10,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "White",
    "emoji": "⬜️",
    "stripes": 2,
    "tests": [
     {
      "text": "40 bodyweight squats",
      "opts": [
       [
        "squats",
        40
       ]
      ]
     },
     {
      "text": "20 reverse lunges",
      "opts": [
       [
        "lunges",
        20
       ]
      ]
     },
     {
      "text": "10 single-leg calf raises",
      "opts": [
       [
        "calf_raises",
        10
       ]
      ]
     }
    ]
   },
   {
    "level": 15,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "White",
    "emoji": "⬜️",
    "stripes": 3,
    "tests": [
     {
      "text": "60 bodyweight squats",
      "opts": [
       [
        "squats",
        60
       ]
      ]
     },
     {
      "text": "25 reverse lunges",
      "opts": [
       [
        "lunges",
        25
       ]
      ]
     },
     {
      "text": "15 single-leg calf raises",
      "opts": [
       [
        "calf_raises",
        15
       ]
      ]
     }
    ]
   },
   {
    "level": 20,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "White",
    "emoji": "⬜️",
    "stripes": 4,
    "tests": [
     {
      "text": "80 bodyweight squats",
      "opts": [
       [
        "squats",
        80
       ]
      ]
     },
     {
      "text": "20 single-leg calf raises",
      "opts": [
       [
        "calf_raises",
        20
       ]
      ]
     },
     {
      "text": "1 pistol squat",
      "opts": [
       [
        "pistols",
        1
       ]
      ]
     }
    ]
   },
   {
    "level": 25,
    "source": "draft",
    "belt_test": "White Belt test",
    "unclear": null,
    "belt": "Yellow",
    "emoji": "🟨",
    "stripes": 0,
    "tests": [
     {
      "text": "100 bodyweight squats",
      "opts": [
       [
        "squats",
        100
       ]
      ]
     },
     {
      "text": "25 single-leg calf raises",
      "opts": [
       [
        "calf_raises",
        25
       ]
      ]
     },
     {
      "text": "3 pistol squats",
      "opts": [
       [
        "pistols",
        3
       ]
      ]
     }
    ]
   },
   {
    "level": 30,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "Yellow",
    "emoji": "🟨",
    "stripes": 1,
    "tests": [
     {
      "text": "5 pistol squats",
      "opts": [
       [
        "pistols",
        5
       ]
      ]
     }
    ]
   },
   {
    "level": 35,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "Yellow",
    "emoji": "🟨",
    "stripes": 2,
    "tests": [
     {
      "text": "8 pistol squats",
      "opts": [
       [
        "pistols",
        8
       ]
      ]
     }
    ]
   },
   {
    "level": 40,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "Yellow",
    "emoji": "🟨",
    "stripes": 3,
    "tests": [
     {
      "text": "11 pistol squats",
      "opts": [
       [
        "pistols",
        11
       ]
      ]
     }
    ]
   },
   {
    "level": 45,
    "source": "draft",
    "belt_test": "Yellow Belt test",
    "unclear": null,
    "belt": "Blue",
    "emoji": "🟦",
    "stripes": 0,
    "tests": [
     {
      "text": "150 bodyweight squats",
      "opts": [
       [
        "squats",
        150
       ]
      ]
     },
     {
      "text": "15 pistol squats",
      "opts": [
       [
        "pistols",
        15
       ]
      ]
     }
    ]
   },
   {
    "level": 50,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "Blue",
    "emoji": "🟦",
    "stripes": 1,
    "tests": [
     {
      "text": "20 pistol squats",
      "opts": [
       [
        "pistols",
        20
       ]
      ]
     }
    ]
   },
   {
    "level": 55,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "Blue",
    "emoji": "🟦",
    "stripes": 2,
    "tests": [
     {
      "text": "25 pistol squats",
      "opts": [
       [
        "pistols",
        25
       ]
      ]
     }
    ]
   },
   {
    "level": 60,
    "source": "draft",
    "belt_test": null,
    "unclear": null,
    "belt": "Blue",
    "emoji": "🟦",
    "stripes": 3,
    "tests": [
     {
      "text": "200 bodyweight squats",
      "opts": [
       [
        "squats",
        200
       ]
      ]
     },
     {
      "text": "30 pistol squats",
      "opts": [
       [
        "pistols",
        30
       ]
      ]
     }
    ]
   }
  ]
 }
};
