// mock data

const barData = [
  {
    country: 'AD',
    'hot dog': 0,
    'hot dogColor': 'hsl(312, 70%, 50%)',
    burger: 128,
    burgerColor: 'hsl(208, 70%, 50%)',
    sandwich: 67,
    sandwichColor: 'hsl(100, 70%, 50%)',
    kebab: 185,
    kebabColor: 'hsl(114, 70%, 50%)',
    fries: 179,
    friesColor: 'hsl(56, 70%, 50%)',
    donut: 190,
    donutColor: 'hsl(354, 70%, 50%)'
  },
  {
    country: 'AE',
    'hot dog': 16,
    'hot dogColor': 'hsl(113, 70%, 50%)',
    burger: 78,
    burgerColor: 'hsl(121, 70%, 50%)',
    sandwich: 145,
    sandwichColor: 'hsl(355, 70%, 50%)',
    kebab: 101,
    kebabColor: 'hsl(113, 70%, 50%)',
    fries: 178,
    friesColor: 'hsl(243, 70%, 50%)',
    donut: 134,
    donutColor: 'hsl(86, 70%, 50%)'
  },
  {
    country: 'AF',
    'hot dog': 21,
    'hot dogColor': 'hsl(68, 70%, 50%)',
    burger: 170,
    burgerColor: 'hsl(296, 70%, 50%)',
    sandwich: 154,
    sandwichColor: 'hsl(19, 70%, 50%)',
    kebab: 8,
    kebabColor: 'hsl(301, 70%, 50%)',
    fries: 77,
    friesColor: 'hsl(91, 70%, 50%)',
    donut: 105,
    donutColor: 'hsl(68, 70%, 50%)'
  },
  {
    country: 'AG',
    'hot dog': 104,
    'hot dogColor': 'hsl(141, 70%, 50%)',
    burger: 192,
    burgerColor: 'hsl(121, 70%, 50%)',
    sandwich: 151,
    sandwichColor: 'hsl(67, 70%, 50%)',
    kebab: 200,
    kebabColor: 'hsl(149, 70%, 50%)',
    fries: 174,
    friesColor: 'hsl(132, 70%, 50%)',
    donut: 24,
    donutColor: 'hsl(96, 70%, 50%)'
  },
  {
    country: 'AI',
    'hot dog': 103,
    'hot dogColor': 'hsl(66, 70%, 50%)',
    burger: 169,
    burgerColor: 'hsl(212, 70%, 50%)',
    sandwich: 149,
    sandwichColor: 'hsl(190, 70%, 50%)',
    kebab: 162,
    kebabColor: 'hsl(142, 70%, 50%)',
    fries: 51,
    friesColor: 'hsl(210, 70%, 50%)',
    donut: 69,
    donutColor: 'hsl(222, 70%, 50%)'
  },
  {
    country: 'AL',
    'hot dog': 136,
    'hot dogColor': 'hsl(47, 70%, 50%)',
    burger: 139,
    burgerColor: 'hsl(200, 70%, 50%)',
    sandwich: 138,
    sandwichColor: 'hsl(167, 70%, 50%)',
    kebab: 147,
    kebabColor: 'hsl(329, 70%, 50%)',
    fries: 29,
    friesColor: 'hsl(201, 70%, 50%)',
    donut: 156,
    donutColor: 'hsl(41, 70%, 50%)'
  },
  {
    country: 'AM',
    'hot dog': 37,
    'hot dogColor': 'hsl(49, 70%, 50%)',
    burger: 9,
    burgerColor: 'hsl(235, 70%, 50%)',
    sandwich: 108,
    sandwichColor: 'hsl(225, 70%, 50%)',
    kebab: 160,
    kebabColor: 'hsl(324, 70%, 50%)',
    fries: 170,
    friesColor: 'hsl(0, 70%, 50%)',
    donut: 126,
    donutColor: 'hsl(199, 70%, 50%)'
  }
];

const pieData = [
  {
    id: 'Unidentified source',
    label: 'Unidentified source',
    value: 20,
    color: 'hsl(271, 70%, 50%)'
  },
  {
    id: 'Invalid name',
    label: 'Invalid name',
    value: 100,
    color: 'hsl(292, 70%, 50%)'
  },
  {
    id: 'Illegible handwriting',
    label: 'Illegible handwriting',
    value: 225,
    color: 'hsl(47, 70%, 50%)'
  }
];

const heatmapData = [
  {
    day: '2015-07-22',
    value: 295
  },
  {
    day: '2016-02-14',
    value: 337
  },
  {
    day: '2016-05-23',
    value: 243
  },
  {
    day: '2015-07-04',
    value: 331
  },
  {
    day: '2016-04-26',
    value: 55
  },
  {
    day: '2016-03-27',
    value: 120
  },
  {
    day: '2015-11-06',
    value: 175
  },
  {
    day: '2015-07-14',
    value: 23
  },
  {
    day: '2015-04-20',
    value: 341
  },
  {
    day: '2015-11-28',
    value: 4
  },
  {
    day: '2015-09-26',
    value: 214
  },
  {
    day: '2016-04-25',
    value: 1
  },
  {
    day: '2015-10-11',
    value: 310
  },
  {
    day: '2015-05-26',
    value: 307
  },
  {
    day: '2016-05-31',
    value: 308
  },
  {
    day: '2015-07-30',
    value: 5
  },
  {
    day: '2016-05-12',
    value: 77
  },
  {
    day: '2015-08-04',
    value: 167
  },
  {
    day: '2016-03-18',
    value: 373
  },
  {
    day: '2015-08-12',
    value: 118
  },
  {
    day: '2015-05-12',
    value: 42
  },
  {
    day: '2016-03-14',
    value: 371
  },
  {
    day: '2016-02-26',
    value: 301
  },
  {
    day: '2015-10-30',
    value: 290
  },
  {
    day: '2016-07-06',
    value: 373
  },
  {
    day: '2016-08-01',
    value: 366
  },
  {
    day: '2015-10-18',
    value: 55
  },
  {
    day: '2015-04-17',
    value: 163
  },
  {
    day: '2015-05-08',
    value: 231
  },
  {
    day: '2016-06-14',
    value: 380
  },
  {
    day: '2015-08-05',
    value: 221
  },
  {
    day: '2015-11-14',
    value: 86
  },
  {
    day: '2016-02-10',
    value: 232
  },
  {
    day: '2015-07-17',
    value: 306
  },
  {
    day: '2015-07-28',
    value: 287
  },
  {
    day: '2016-06-23',
    value: 148
  },
  {
    day: '2016-04-10',
    value: 313
  },
  {
    day: '2015-06-02',
    value: 244
  },
  {
    day: '2015-10-21',
    value: 27
  },
  {
    day: '2015-11-07',
    value: 316
  },
  {
    day: '2016-01-01',
    value: 161
  },
  {
    day: '2015-05-06',
    value: 65
  },
  {
    day: '2015-11-22',
    value: 314
  },
  {
    day: '2016-01-19',
    value: 299
  },
  {
    day: '2015-09-19',
    value: 218
  },
  {
    day: '2016-02-06',
    value: 187
  },
  {
    day: '2016-01-27',
    value: 200
  },
  {
    day: '2016-08-05',
    value: 244
  },
  {
    day: '2015-04-29',
    value: 190
  },
  {
    day: '2015-06-29',
    value: 119
  },
  {
    day: '2015-05-07',
    value: 111
  },
  {
    day: '2015-06-23',
    value: 305
  },
  {
    day: '2016-04-12',
    value: 297
  },
  {
    day: '2016-03-20',
    value: 2
  },
  {
    day: '2015-10-12',
    value: 68
  },
  {
    day: '2016-03-05',
    value: 375
  },
  {
    day: '2016-08-09',
    value: 154
  },
  {
    day: '2015-12-12',
    value: 55
  },
  {
    day: '2015-07-09',
    value: 372
  },
  {
    day: '2016-02-12',
    value: 269
  },
  {
    day: '2016-02-11',
    value: 340
  },
  {
    day: '2016-07-08',
    value: 351
  },
  {
    day: '2015-11-18',
    value: 51
  },
  {
    day: '2016-01-10',
    value: 393
  },
  {
    day: '2015-06-04',
    value: 118
  },
  {
    day: '2016-08-06',
    value: 107
  },
  {
    day: '2016-01-26',
    value: 21
  },
  {
    day: '2015-07-31',
    value: 260
  },
  {
    day: '2016-01-17',
    value: 272
  },
  {
    day: '2015-10-27',
    value: 320
  },
  {
    day: '2015-04-06',
    value: 322
  },
  {
    day: '2016-03-02',
    value: 282
  },
  {
    day: '2016-02-19',
    value: 335
  },
  {
    day: '2016-08-07',
    value: 99
  },
  {
    day: '2015-12-14',
    value: 267
  },
  {
    day: '2016-01-15',
    value: 152
  },
  {
    day: '2016-04-13',
    value: 19
  },
  {
    day: '2016-03-04',
    value: 335
  },
  {
    day: '2016-02-23',
    value: 153
  },
  {
    day: '2015-10-25',
    value: 155
  },
  {
    day: '2015-04-22',
    value: 126
  },
  {
    day: '2016-07-31',
    value: 88
  },
  {
    day: '2016-05-20',
    value: 171
  },
  {
    day: '2016-07-07',
    value: 346
  },
  {
    day: '2016-01-24',
    value: 77
  },
  {
    day: '2016-05-18',
    value: 45
  },
  {
    day: '2015-05-30',
    value: 31
  },
  {
    day: '2015-04-03',
    value: 334
  },
  {
    day: '2015-11-04',
    value: 149
  },
  {
    day: '2015-09-21',
    value: 279
  },
  {
    day: '2016-05-26',
    value: 307
  },
  {
    day: '2016-04-29',
    value: 168
  },
  {
    day: '2016-05-22',
    value: 90
  },
  {
    day: '2015-11-29',
    value: 41
  },
  {
    day: '2015-05-28',
    value: 375
  },
  {
    day: '2015-10-28',
    value: 113
  },
  {
    day: '2015-12-25',
    value: 131
  },
  {
    day: '2016-04-16',
    value: 135
  },
  {
    day: '2015-08-29',
    value: 163
  },
  {
    day: '2015-05-25',
    value: 376
  },
  {
    day: '2016-06-28',
    value: 292
  },
  {
    day: '2015-04-15',
    value: 53
  },
  {
    day: '2015-09-15',
    value: 117
  },
  {
    day: '2015-07-01',
    value: 257
  },
  {
    day: '2015-09-28',
    value: 329
  },
  {
    day: '2016-03-29',
    value: 221
  },
  {
    day: '2016-07-01',
    value: 234
  },
  {
    day: '2015-06-27',
    value: 166
  },
  {
    day: '2015-09-17',
    value: 95
  },
  {
    day: '2015-07-24',
    value: 179
  },
  {
    day: '2015-05-17',
    value: 207
  },
  {
    day: '2016-05-24',
    value: 45
  },
  {
    day: '2016-07-30',
    value: 302
  },
  {
    day: '2016-01-30',
    value: 107
  },
  {
    day: '2015-05-13',
    value: 52
  },
  {
    day: '2016-06-22',
    value: 29
  },
  {
    day: '2016-03-25',
    value: 363
  },
  {
    day: '2016-07-16',
    value: 1
  },
  {
    day: '2015-12-22',
    value: 259
  },
  {
    day: '2016-02-25',
    value: 242
  },
  {
    day: '2015-12-16',
    value: 288
  },
  {
    day: '2015-04-30',
    value: 47
  },
  {
    day: '2015-12-05',
    value: 133
  },
  {
    day: '2016-02-13',
    value: 134
  },
  {
    day: '2016-01-03',
    value: 125
  },
  {
    day: '2016-07-24',
    value: 291
  },
  {
    day: '2016-01-13',
    value: 245
  },
  {
    day: '2015-12-20',
    value: 193
  },
  {
    day: '2015-07-12',
    value: 335
  },
  {
    day: '2016-01-11',
    value: 312
  },
  {
    day: '2016-02-04',
    value: 125
  },
  {
    day: '2015-11-26',
    value: 369
  },
  {
    day: '2015-09-10',
    value: 307
  },
  {
    day: '2015-06-26',
    value: 56
  },
  {
    day: '2015-06-12',
    value: 69
  },
  {
    day: '2015-06-05',
    value: 396
  },
  {
    day: '2016-04-02',
    value: 195
  },
  {
    day: '2015-04-14',
    value: 347
  },
  {
    day: '2016-04-23',
    value: 365
  },
  {
    day: '2016-06-05',
    value: 115
  },
  {
    day: '2016-03-24',
    value: 279
  },
  {
    day: '2015-04-23',
    value: 225
  },
  {
    day: '2015-09-13',
    value: 87
  },
  {
    day: '2015-11-15',
    value: 327
  },
  {
    day: '2016-07-23',
    value: 124
  },
  {
    day: '2016-07-19',
    value: 122
  },
  {
    day: '2016-06-07',
    value: 260
  },
  {
    day: '2016-06-27',
    value: 163
  },
  {
    day: '2015-11-09',
    value: 42
  },
  {
    day: '2016-07-09',
    value: 74
  },
  {
    day: '2015-10-14',
    value: 83
  },
  {
    day: '2015-04-16',
    value: 189
  },
  {
    day: '2015-08-07',
    value: 282
  },
  {
    day: '2016-03-17',
    value: 128
  },
  {
    day: '2016-05-07',
    value: 116
  },
  {
    day: '2016-07-20',
    value: 149
  },
  {
    day: '2016-02-18',
    value: 254
  },
  {
    day: '2015-12-03',
    value: 44
  },
  {
    day: '2015-05-24',
    value: 371
  },
  {
    day: '2015-10-07',
    value: 380
  },
  {
    day: '2016-06-04',
    value: 1
  },
  {
    day: '2016-06-16',
    value: 235
  },
  {
    day: '2015-12-27',
    value: 354
  },
  {
    day: '2016-05-10',
    value: 311
  },
  {
    day: '2015-08-11',
    value: 179
  },
  {
    day: '2016-05-03',
    value: 107
  },
  {
    day: '2015-12-10',
    value: 374
  },
  {
    day: '2015-12-11',
    value: 286
  },
  {
    day: '2016-03-23',
    value: 74
  },
  {
    day: '2015-06-18',
    value: 172
  },
  {
    day: '2015-08-14',
    value: 373
  },
  {
    day: '2015-06-01',
    value: 196
  },
  {
    day: '2015-06-20',
    value: 82
  },
  {
    day: '2016-03-09',
    value: 137
  },
  {
    day: '2015-06-10',
    value: 158
  },
  {
    day: '2016-06-10',
    value: 287
  },
  {
    day: '2015-04-09',
    value: 30
  },
  {
    day: '2015-10-26',
    value: 123
  },
  {
    day: '2016-05-30',
    value: 23
  },
  {
    day: '2015-09-29',
    value: 219
  },
  {
    day: '2016-07-17',
    value: 248
  },
  {
    day: '2015-05-22',
    value: 162
  },
  {
    day: '2015-09-27',
    value: 97
  },
  {
    day: '2016-01-22',
    value: 112
  },
  {
    day: '2016-05-14',
    value: 187
  },
  {
    day: '2016-01-29',
    value: 218
  },
  {
    day: '2016-05-09',
    value: 157
  },
  {
    day: '2016-06-11',
    value: 70
  },
  {
    day: '2015-04-05',
    value: 270
  },
  {
    day: '2015-09-05',
    value: 218
  },
  {
    day: '2015-08-06',
    value: 112
  },
  {
    day: '2015-05-14',
    value: 73
  },
  {
    day: '2015-11-17',
    value: 254
  },
  {
    day: '2016-02-02',
    value: 317
  },
  {
    day: '2015-11-20',
    value: 111
  },
  {
    day: '2015-08-26',
    value: 265
  },
  {
    day: '2016-06-30',
    value: 327
  },
  {
    day: '2016-08-03',
    value: 321
  },
  {
    day: '2015-08-08',
    value: 255
  },
  {
    day: '2016-05-16',
    value: 115
  },
  {
    day: '2015-08-30',
    value: 211
  },
  {
    day: '2016-08-08',
    value: 186
  },
  {
    day: '2016-05-17',
    value: 66
  },
  {
    day: '2016-06-21',
    value: 308
  },
  {
    day: '2015-06-15',
    value: 24
  },
  {
    day: '2015-07-05',
    value: 325
  },
  {
    day: '2016-03-11',
    value: 343
  },
  {
    day: '2016-03-15',
    value: 98
  },
  {
    day: '2015-12-24',
    value: 40
  },
  {
    day: '2015-10-06',
    value: 81
  },
  {
    day: '2016-04-17',
    value: 300
  },
  {
    day: '2015-11-13',
    value: 270
  },
  {
    day: '2016-07-05',
    value: 14
  },
  {
    day: '2016-07-06',
    value: 500
  },
  {
    day: '2016-03-07',
    value: 71
  },
  {
    day: '2016-07-28',
    value: 184
  },
  {
    day: '2015-05-04',
    value: 109
  },
  {
    day: '2015-10-15',
    value: 267
  },
  {
    day: '2016-04-24',
    value: 359
  },
  {
    day: '2016-04-20',
    value: 301
  },
  {
    day: '2015-06-14',
    value: 365
  },
  {
    day: '2015-10-24',
    value: 96
  },
  {
    day: '2016-05-27',
    value: 224
  },
  {
    day: '2015-12-08',
    value: 206
  },
  {
    day: '2015-04-08',
    value: 116
  },
  {
    day: '2016-02-29',
    value: 334
  },
  {
    day: '2015-09-02',
    value: 392
  },
  {
    day: '2016-04-01',
    value: 307
  },
  {
    day: '2016-01-21',
    value: 387
  },
  {
    day: '2015-11-02',
    value: 173
  },
  {
    day: '2016-04-19',
    value: 24
  },
  {
    day: '2015-08-15',
    value: 261
  }
];

const lineData = [
  {
    id: 'Member1',
    color: 'hsl(214, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 11
      },
      {
        x: 'helicopter',
        y: 211
      },
      {
        x: 'boat',
        y: 26
      },
      {
        x: 'train',
        y: 22
      },
      {
        x: 'subway',
        y: 94
      },
      {
        x: 'bus',
        y: 82
      },
      {
        x: 'car',
        y: 49
      },
      {
        x: 'moto',
        y: 144
      },
      {
        x: 'bicycle',
        y: 61
      },
      {
        x: 'others',
        y: 130
      }
    ]
  },
  {
    id: 'Member2',
    color: 'hsl(285, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 121
      },
      {
        x: 'helicopter',
        y: 121
      },
      {
        x: 'boat',
        y: 28
      },
      {
        x: 'train',
        y: 134
      },
      {
        x: 'subway',
        y: 190
      },
      {
        x: 'bus',
        y: 185
      },
      {
        x: 'car',
        y: 191
      },
      {
        x: 'moto',
        y: 137
      },
      {
        x: 'bicycle',
        y: 140
      },
      {
        x: 'others',
        y: 87
      }
    ]
  },
  {
    id: 'Member3',
    color: 'hsl(114, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 121
      },
      {
        x: 'helicopter',
        y: 190
      },
      {
        x: 'boat',
        y: 113
      },
      {
        x: 'train',
        y: 257
      },
      {
        x: 'subway',
        y: 231
      },
      {
        x: 'bus',
        y: 116
      },
      {
        x: 'car',
        y: 52
      },
      {
        x: 'moto',
        y: 277
      },
      {
        x: 'bicycle',
        y: 169
      },
      {
        x: 'others',
        y: 13
      }
    ]
  },
  {
    id: 'Member4',
    color: 'hsl(292, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 108
      },
      {
        x: 'helicopter',
        y: 176
      },
      {
        x: 'boat',
        y: 181
      },
      {
        x: 'train',
        y: 189
      },
      {
        x: 'subway',
        y: 66
      },
      {
        x: 'bus',
        y: 119
      },
      {
        x: 'car',
        y: 161
      },
      {
        x: 'moto',
        y: 282
      },
      {
        x: 'bicycle',
        y: 202
      },
      {
        x: 'others',
        y: 136
      }
    ]
  },
  {
    id: 'Member5',
    color: 'hsl(204, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 22
      },
      {
        x: 'helicopter',
        y: 8
      },
      {
        x: 'boat',
        y: 222
      },
      {
        x: 'train',
        y: 166
      },
      {
        x: 'subway',
        y: 25
      },
      {
        x: 'bus',
        y: 110
      },
      {
        x: 'car',
        y: 2
      },
      {
        x: 'moto',
        y: 16
      },
      {
        x: 'bicycle',
        y: 77
      },
      {
        x: 'others',
        y: 236
      }
    ]
  }
];

const waffleData = [
  {
    id: 'men',
    label: 'men',
    value: 10.983278547845407,
    color: '#468df3'
  },
  {
    id: 'women',
    label: 'women',
    value: 3.050217866723042,
    color: '#ba72ff'
  },
  {
    id: 'children',
    label: 'children',
    value: 27.99509764547958,
    color: '#a1cfff'
  }
];

export { pieData, barData, heatmapData, lineData, waffleData };
