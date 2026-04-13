export interface FieldConfig {
  id: string;
  label: string;
  type: 'text' | 'checkbox' | 'number' | 'date' | 'select';
  maxSelections?: number;
  x: number;
  y: number;
  width: number;
  height: number;
  page: number;
  section: string;
  hidden?: boolean;
  required?: boolean;
  defaultValue?: any;
  options?: string[];
  optionMappings?: {
    [option: string]: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  };
  corners: {
    bottomLeft: [number, number];
    bottomRight: [number, number];
    topRight: [number, number];
    topLeft: [number, number];
  };
}

export const FORM_CONFIG: FieldConfig[] = [
  {
    "id": "1.0-basvurukanali",
    "label": "Başvuru Kanalı",
    "type": "checkbox",
    "x": 407.3,
    "y": 759.3,
    "width": 8,
    "height": 8,
    "page": 1,
    "section": "BAŞVURU BİLGİLERİ",
    "hidden": true,
    "defaultValue": true,
    "corners": {
      "bottomLeft": [
        407.3,
        759.3
      ],
      "bottomRight": [
        415.3,
        759.3
      ],
      "topRight": [
        415.3,
        767.3
      ],
      "topLeft": [
        407.3,
        767.3
      ]
    }
  },
  {
    "id": "2.0-adisoyadi",
    "label": "Adı Soyadı",
    "type": "text",
    "x": 115,
    "y": 724.29,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "KİŞİSEL BİLGİLER",
    "corners": {
      "bottomLeft": [
        115,
        724.29
      ],
      "bottomRight": [
        265,
        724.29
      ],
      "topRight": [
        265,
        737.29
      ],
      "topLeft": [
        115,
        737.29
      ]
    },
    "required": true
  },
  {
    "id": "2.0-tckimlikno",
    "label": "T.C. Kimlik No.",
    "type": "number",
    "x": 115,
    "y": 709,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        115,
        709
      ],
      "bottomRight": [
        265,
        709
      ],
      "topRight": [
        265,
        722
      ],
      "topLeft": [
        115,
        722
      ]
    },
    "required": true
  },
  {
    "id": "2.0-babaadi",
    "label": "Baba Adı",
    "type": "text",
    "x": 115,
    "y": 694,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        115,
        694
      ],
      "bottomRight": [
        265,
        694
      ],
      "topRight": [
        265,
        707
      ],
      "topLeft": [
        115,
        707
      ]
    }
  },
  {
    "id": "2.0-anaadi",
    "label": "Ana Adı",
    "type": "text",
    "x": 115,
    "y": 679,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        115,
        679
      ],
      "bottomRight": [
        265,
        679
      ],
      "topRight": [
        265,
        692
      ],
      "topLeft": [
        115,
        692
      ]
    }
  },
  {
    "id": "2.0-meslek",
    "label": "Meslek / İş",
    "type": "text",
    "x": 372,
    "y": 725.29,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "KİŞİSEL BİLGİLER",
    "corners": {
      "bottomLeft": [
        372,
        725.29
      ],
      "bottomRight": [
        522,
        725.29
      ],
      "topRight": [
        522,
        738.29
      ],
      "topLeft": [
        372,
        738.29
      ]
    }
  },
  {
    "id": "2.0-calismadurumu",
    "label": "Çalışma Durumu",
    "type": "select",
    "options": [
      "ÇALIŞIYOR",
      "ÇALIŞMIYOR"
    ],
    "x": 372,
    "y": 710,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "KİŞİSEL BİLGİLER",
    "corners": {
      "bottomLeft": [
        372,
        710
      ],
      "bottomRight": [
        522,
        710
      ],
      "topRight": [
        522,
        723
      ],
      "topLeft": [
        372,
        723
      ]
    },
    "required": true
  },
  {
    "id": "2.0-calismiyorsanedeni",
    "label": "Çalışmıyorsa Nedeni",
    "type": "text",
    "x": 372,
    "y": 679,
    "width": 150,
    "height": 28,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        372,
        679
      ],
      "bottomRight": [
        522,
        679
      ],
      "topRight": [
        522,
        707
      ],
      "topLeft": [
        372,
        707
      ]
    }
  },
  {
    "id": "2.0-calisiyorsageliri",
    "label": "Çalışıyorsa Aylık Geliri",
    "type": "number",
    "x": 372,
    "y": 649,
    "width": 150,
    "height": 28,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        372,
        649
      ],
      "bottomRight": [
        522,
        649
      ],
      "topRight": [
        522,
        677
      ],
      "topLeft": [
        372,
        677
      ]
    }
  },
  {
    "id": "2.0-dogumyeri",
    "label": "Doğum Yeri",
    "type": "text",
    "x": 138,
    "y": 664,
    "width": 60,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        138,
        664
      ],
      "bottomRight": [
        198,
        664
      ],
      "topRight": [
        198,
        677
      ],
      "topLeft": [
        138,
        677
      ]
    }
  },
  {
    "id": "2.0-dogumtarihi",
    "label": "Doğum Tarihi",
    "type": "date",
    "x": 228,
    "y": 664,
    "width": 60,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        228,
        664
      ],
      "bottomRight": [
        288,
        664
      ],
      "topRight": [
        288,
        677
      ],
      "topLeft": [
        228,
        677
      ]
    }
  },
  {
    "id": "2.0-medenidurum",
    "label": "Medeni Durum",
    "type": "select",
    "x": 115,
    "y": 649,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        115,
        649
      ],
      "bottomRight": [
        265,
        649
      ],
      "topRight": [
        265,
        662
      ],
      "topLeft": [
        115,
        662
      ]
    },
    "options": [
      "EVLİ",
      "BEKAR",
      "BOŞANMIŞ",
      "VEFAT"
    ]
  },
  {
    "id": "2.0-cinsiyet",
    "label": "Cinsiyet",
    "type": "select",
    "x": 115,
    "y": 634,
    "width": 60,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        115,
        634
      ],
      "bottomRight": [
        175,
        634
      ],
      "topRight": [
        175,
        647
      ],
      "topLeft": [
        115,
        647
      ]
    },
    "options": [
      "KADIN",
      "ERKEK"
    ]
  },
  {
    "id": "2.0-uyruk",
    "label": "Uyruk",
    "type": "text",
    "x": 232,
    "y": 634,
    "width": 60,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        232,
        634
      ],
      "bottomRight": [
        292,
        634
      ],
      "topRight": [
        292,
        647
      ],
      "topLeft": [
        232,
        647
      ]
    }
  },
  {
    "id": "2.0-egitimdurumu",
    "label": "Eğitim Durumu",
    "type": "select",
    "x": 372,
    "y": 634,
    "width": 54,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        372,
        634
      ],
      "bottomRight": [
        426,
        634
      ],
      "topRight": [
        426,
        647
      ],
      "topLeft": [
        372,
        647
      ]
    },
    "options": [
      "İLKOKUL",
      "ORTAOKUL",
      "LİSE",
      "ÜNİVERSİTE"
    ]
  },
  {
    "id": "2.0-bedengiyim",
    "label": "Beden Giyim",
    "type": "select",
    "x": 482,
    "y": 635,
    "width": 30,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        482,
        635
      ],
      "bottomRight": [
        512,
        635
      ],
      "topRight": [
        512,
        648
      ],
      "topLeft": [
        482,
        648
      ]
    },
    "options": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "2.0-bedenayakkabi",
    "label": "Beden Ayakkabı",
    "type": "select",
    "x": 553,
    "y": 635,
    "width": 30,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        553,
        635
      ],
      "bottomRight": [
        583,
        635
      ],
      "topRight": [
        583,
        648
      ],
      "topLeft": [
        553,
        648
      ]
    },
    "options": [
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ]
  },
  {
    "id": "2.1-ceptelefonu",
    "label": "Cep Telefonu",
    "type": "number",
    "x": 115,
    "y": 584,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        115,
        584
      ],
      "bottomRight": [
        265,
        584
      ],
      "topRight": [
        265,
        597
      ],
      "topLeft": [
        115,
        597
      ]
    },
    "required": true
  },
  {
    "id": "2.1-evtelefonu",
    "label": "Ev Telefonu",
    "type": "number",
    "x": 115,
    "y": 599,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        115,
        599
      ],
      "bottomRight": [
        265,
        599
      ],
      "topRight": [
        265,
        612
      ],
      "topLeft": [
        115,
        612
      ]
    }
  },
  {
    "id": "2.1-eposta",
    "label": "eposta",
    "type": "text",
    "x": 115,
    "y": 570,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        115,
        570
      ],
      "bottomRight": [
        265,
        570
      ],
      "topRight": [
        265,
        583
      ],
      "topLeft": [
        115,
        583
      ]
    }
  },
  {
    "id": "2.1-ililce",
    "label": "İl / İlçe",
    "type": "text",
    "x": 115,
    "y": 555,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        115,
        555
      ],
      "bottomRight": [
        265,
        555
      ],
      "topRight": [
        265,
        568
      ],
      "topLeft": [
        115,
        568
      ]
    }
  },
  {
    "id": "2.1-mahalle",
    "label": "Mahalle",
    "type": "text",
    "x": 395,
    "y": 599,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        395,
        599
      ],
      "bottomRight": [
        545,
        599
      ],
      "topRight": [
        545,
        612
      ],
      "topLeft": [
        395,
        612
      ]
    }
  },
  {
    "id": "2.1-acikadres",
    "label": "Açık Adres",
    "type": "text",
    "x": 395,
    "y": 562,
    "width": 150,
    "height": 35,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        395,
        562
      ],
      "bottomRight": [
        545,
        562
      ],
      "topRight": [
        545,
        597
      ],
      "topLeft": [
        395,
        597
      ]
    }
  },
  {
    "id": "2.2-adisoyadi",
    "label": "Adı Soyadı",
    "type": "text",
    "x": 115,
    "y": 520,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        115,
        520
      ],
      "bottomRight": [
        265,
        520
      ],
      "topRight": [
        265,
        533
      ],
      "topLeft": [
        115,
        533
      ]
    }
  },
  {
    "id": "2.2-tckimlikno",
    "label": "T.C. Kimlik No.",
    "type": "number",
    "x": 115,
    "y": 505,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        115,
        505
      ],
      "bottomRight": [
        265,
        505
      ],
      "topRight": [
        265,
        518
      ],
      "topLeft": [
        115,
        518
      ]
    }
  },
  {
    "id": "2.2-telefon",
    "label": "Telefon",
    "type": "number",
    "x": 114.7,
    "y": 490,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        114.7,
        490
      ],
      "bottomRight": [
        264.7,
        490
      ],
      "topRight": [
        264.7,
        503
      ],
      "topLeft": [
        114.7,
        503
      ]
    }
  },
  {
    "id": "2.2-ililce",
    "label": "İl / İlçe",
    "type": "text",
    "x": 115,
    "y": 460,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        115,
        460
      ],
      "bottomRight": [
        265,
        460
      ],
      "topRight": [
        265,
        473
      ],
      "topLeft": [
        115,
        473
      ]
    }
  },
  {
    "id": "2.2-acikadres",
    "label": "Açık Adres",
    "type": "text",
    "x": 115,
    "y": 475,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        115,
        475
      ],
      "bottomRight": [
        265,
        475
      ],
      "topRight": [
        265,
        488
      ],
      "topLeft": [
        115,
        488
      ]
    }
  },
  {
    "id": "2.3-adisoyadi",
    "label": "Adı Soyadı",
    "type": "text",
    "x": 404,
    "y": 520,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        404,
        520
      ],
      "bottomRight": [
        554,
        520
      ],
      "topRight": [
        554,
        533
      ],
      "topLeft": [
        404,
        533
      ]
    }
  },
  {
    "id": "2.3-tckimlikno",
    "label": "T.C. Kimlik No.",
    "type": "number",
    "x": 404,
    "y": 505,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        404,
        505
      ],
      "bottomRight": [
        554,
        505
      ],
      "topRight": [
        554,
        518
      ],
      "topLeft": [
        404,
        518
      ]
    }
  },
  {
    "id": "2.3-telefon",
    "label": "Telefon",
    "type": "number",
    "x": 404,
    "y": 490,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        404,
        490
      ],
      "bottomRight": [
        554,
        490
      ],
      "topRight": [
        554,
        503
      ],
      "topLeft": [
        404,
        503
      ]
    }
  },
  {
    "id": "2.3-acikadres",
    "label": "Açık Adres",
    "type": "text",
    "x": 404,
    "y": 475,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        404,
        475
      ],
      "bottomRight": [
        554,
        475
      ],
      "topRight": [
        554,
        488
      ],
      "topLeft": [
        404,
        488
      ]
    }
  },
  {
    "id": "2.3-ililce",
    "label": "İl / İlçe",
    "type": "text",
    "x": 404,
    "y": 460,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        404,
        460
      ],
      "bottomRight": [
        554,
        460
      ],
      "topRight": [
        554,
        473
      ],
      "topLeft": [
        404,
        473
      ]
    }
  },
  {
    "id": "3.0-haneoturansayisi",
    "label": "Hanede Yaşayan Diğer Kişi Sayısı",
    "type": "select",
    "x": 27,
    "y": 400,
    "width": 150,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "options": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    "corners": { "bottomLeft": [27, 400], "bottomRight": [177, 400], "topRight": [177, 416], "topLeft": [27, 416] }
  },
  {
    "id": "3.1-adisoyadı",
    "label": "Adı Soyadı",
    "type": "text",
    "x": 27,
    "y": 368,
    "width": 90,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [
        27,
        368
      ],
      "bottomRight": [
        117,
        368
      ],
      "topRight": [
        117,
        384
      ],
      "topLeft": [
        27,
        384
      ]
    }
  },
  {
    "id": "3.1-tckimlikno",
    "label": "T.C. Kimlik No.",
    "type": "number",
    "x": 128,
    "y": 368,
    "width": 70,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [
        128,
        368
      ],
      "bottomRight": [
        198,
        368
      ],
      "topRight": [
        198,
        384
      ],
      "topLeft": [
        128,
        384
      ]
    }
  },
  {
    "id": "3.1-basvurunayakinlik",
    "label": "Başvuruna Yakınlık",
    "type": "text",
    "x": 203,
    "y": 368,
    "width": 45,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [
        203,
        368
      ],
      "bottomRight": [
        248,
        368
      ],
      "topRight": [
        248,
        384
      ],
      "topLeft": [
        203,
        384
      ]
    }
  },
  {
    "id": "3.1-dogumtarihi",
    "label": "Doğum Tarihi",
    "type": "date",
    "x": 289,
    "y": 368,
    "width": 34,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [
        289,
        368
      ],
      "bottomRight": [
        323,
        368
      ],
      "topRight": [
        323,
        384
      ],
      "topLeft": [
        289,
        384
      ]
    }
  },
  {
    "id": "3.1-medenihali",
    "label": "Medeni Hali",
    "type": "select",
    "x": 324,
    "y": 368,
    "width": 34.2,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [
        324,
        368
      ],
      "bottomRight": [
        358.2,
        368
      ],
      "topRight": [
        358.2,
        384
      ],
      "topLeft": [
        324,
        384
      ]
    },
    "options": [
      "EVLİ",
      "BEKAR",
      "BOŞANMIŞ",
      "VEFAT"
    ]
  },
  {
    "id": "3.1-egitimdurumu",
    "label": "Eğitim Durumu",
    "type": "select",
    "x": 360,
    "y": 368,
    "width": 50,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [
        360,
        368
      ],
      "bottomRight": [
        410,
        368
      ],
      "topRight": [
        410,
        384
      ],
      "topLeft": [
        360,
        384
      ]
    },
    "options": [
      "İLKÖĞRETİM",
      "LİSE",
      "ÖNLİSANS",
      "LİSANS"
    ]
  },
  {
    "id": "3.1-meslegi",
    "label": "Mesleği",
    "type": "text",
    "x": 422,
    "y": 368,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [
        422,
        368
      ],
      "bottomRight": [
        452,
        368
      ],
      "topRight": [
        452,
        384
      ],
      "topLeft": [
        422,
        384
      ]
    }
  },
  {
    "id": "3.1-aylikgeliri",
    "label": "Aylık Geliri",
    "type": "number",
    "x": 506,
    "y": 368,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [
        506,
        368
      ],
      "bottomRight": [
        536,
        368
      ],
      "topRight": [
        536,
        384
      ],
      "topLeft": [
        506,
        384
      ]
    }
  },
  {
    "id": "3.1-cinsiyet",
    "label": "Cinsiyet",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 114,
    "y": 401,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "KADIN": {
        "x": 256,
        "y": 377,
        "width": 10,
        "height": 7
      },
      "ERKEK": {
        "x": 256,
        "y": 368,
        "width": 10,
        "height": 7
      }
    },
    "corners": {
      "bottomLeft": [
        114,
        401
      ],
      "bottomRight": [
        214,
        401
      ],
      "topRight": [
        214,
        421
      ],
      "topLeft": [
        114,
        421
      ]
    },
    "options": [
      "KADIN",
      "ERKEK"
    ]
  },
  {
    "id": "3.1-calismadurumu",
    "label": "Çalışma Durumu",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 298,
    "y": 400,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "ÇALIŞIYOR": {
        "x": 460,
        "y": 377,
        "width": 10,
        "height": 7
      },
      "ÇALIŞMIYOR": {
        "x": 460,
        "y": 368,
        "width": 10,
        "height": 7
      }
    },
    "corners": {
      "bottomLeft": [
        298,
        400
      ],
      "bottomRight": [
        398,
        400
      ],
      "topRight": [
        398,
        420
      ],
      "topLeft": [
        298,
        420
      ]
    },
    "options": [
      "ÇALIŞIYOR",
      "ÇALIŞMIYOR"
    ]
  },
  {
    "id": "3.1-bedengiyim",
    "label": "Beden Giyim",
    "type": "select",
    "x": 565,
    "y": 378,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [
        565,
        378
      ],
      "bottomRight": [
        585,
        378
      ],
      "topRight": [
        585,
        386
      ],
      "topLeft": [
        565,
        386
      ]
    },
    "options": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "3.1-bedenayakkabi",
    "label": "Ayakkabı",
    "type": "select",
    "x": 565,
    "y": 370.2,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [
        565,
        370.2
      ],
      "bottomRight": [
        585,
        370.2
      ],
      "topRight": [
        585,
        378.2
      ],
      "topLeft": [
        565,
        378.2
      ]
    },
    "options": [
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ]
  },
  {
    "id": "3.2-adisoyadı",
    "label": "Adı Soyadı",
    "type": "text",
    "x": 27,
    "y": 349,
    "width": 90,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [27, 349],
      "bottomRight": [117, 349],
      "topRight": [117, 365],
      "topLeft": [27, 365]
    }
  },
  {
    "id": "3.2-tckimlikno",
    "label": "T.C. Kimlik No.",
    "type": "number",
    "x": 128,
    "y": 349,
    "width": 70,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [128, 349],
      "bottomRight": [198, 349],
      "topRight": [198, 365],
      "topLeft": [128, 365]
    }
  },
  {
    "id": "3.2-basvurunayakinlik",
    "label": "Başvuruna Yakınlık",
    "type": "text",
    "x": 203,
    "y": 349,
    "width": 45,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [203, 349],
      "bottomRight": [248, 349],
      "topRight": [248, 365],
      "topLeft": [203, 365]
    }
  },
  {
    "id": "3.2-dogumtarihi",
    "label": "Doğum Tarihi",
    "type": "date",
    "x": 289,
    "y": 349,
    "width": 34,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [289, 349],
      "bottomRight": [323, 349],
      "topRight": [323, 365],
      "topLeft": [289, 365]
    }
  },
  {
    "id": "3.2-medenihali",
    "label": "Medeni Hali",
    "type": "select",
    "x": 324,
    "y": 349,
    "width": 34.2,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [324, 349],
      "bottomRight": [358.2, 349],
      "topRight": [358.2, 365],
      "topLeft": [324, 365]
    },
    "options": ["EVLİ", "BEKAR", "BOŞANMIŞ", "VEFAT"]
  },
  {
    "id": "3.2-egitimdurumu",
    "label": "Eğitim Durumu",
    "type": "select",
    "x": 360,
    "y": 349,
    "width": 50,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [360, 349],
      "bottomRight": [410, 349],
      "topRight": [410, 365],
      "topLeft": [360, 365]
    },
    "options": ["İLKÖĞRETİM", "LİSE", "ÖNLİSANS", "LİSANS"]
  },
  {
    "id": "3.2-meslegi",
    "label": "Mesleği",
    "type": "text",
    "x": 422,
    "y": 349,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [422, 349],
      "bottomRight": [452, 349],
      "topRight": [452, 365],
      "topLeft": [422, 365]
    }
  },
  {
    "id": "3.2-aylikgeliri",
    "label": "Aylık Geliri",
    "type": "number",
    "x": 506,
    "y": 349,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [506, 349],
      "bottomRight": [536, 349],
      "topRight": [536, 365],
      "topLeft": [506, 365]
    }
  },
  {
    "id": "3.2-cinsiyet",
    "label": "Cinsiyet",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 114,
    "y": 382,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "KADIN": { "x": 256, "y": 358, "width": 10, "height": 7 },
      "ERKEK": { "x": 256, "y": 349, "width": 10, "height": 7 }
    },
    "corners": {
      "bottomLeft": [114, 382],
      "bottomRight": [214, 382],
      "topRight": [214, 402],
      "topLeft": [114, 402]
    },
    "options": ["KADIN", "ERKEK"]
  },
  {
    "id": "3.2-calismadurumu",
    "label": "Çalışma Durumu",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 298,
    "y": 381,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "ÇALIŞIYOR": { "x": 460, "y": 358, "width": 10, "height": 7 },
      "ÇALIŞMIYOR": { "x": 460, "y": 349, "width": 10, "height": 7 }
    },
    "corners": {
      "bottomLeft": [298, 381],
      "bottomRight": [398, 381],
      "topRight": [398, 401],
      "topLeft": [298, 401]
    },
    "options": ["ÇALIŞIYOR", "ÇALIŞMIYOR"]
  },
  {
    "id": "3.2-bedengiyim",
    "label": "Beden Giyim",
    "type": "select",
    "x": 565,
    "y": 359,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [565, 359],
      "bottomRight": [585, 359],
      "topRight": [585, 367],
      "topLeft": [565, 367]
    },
    "options": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "3.2-bedenayakkabi",
    "label": "Ayakkabı",
    "type": "select",
    "x": 565,
    "y": 351.2,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": {
      "bottomLeft": [565, 351.2],
      "bottomRight": [585, 351.2],
      "topRight": [585, 359.2],
      "topLeft": [565, 359.2]
    },
    "options": ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]
  },
  {
    "id": "3.3-adisoyadı",
    "label": "Adı Soyadı",
    "type": "text",
    "x": 27,
    "y": 330,
    "width": 90,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [27, 330], "bottomRight": [117, 330], "topRight": [117, 346], "topLeft": [27, 346] }
  },
  {
    "id": "3.3-tckimlikno",
    "label": "T.C. Kimlik No.",
    "type": "number",
    "x": 128,
    "y": 330,
    "width": 70,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [128, 330], "bottomRight": [198, 330], "topRight": [198, 346], "topLeft": [128, 346] }
  },
  {
    "id": "3.3-basvurunayakinlik",
    "label": "Başvuruna Yakınlık",
    "type": "text",
    "x": 203,
    "y": 330,
    "width": 45,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [203, 330], "bottomRight": [248, 330], "topRight": [248, 346], "topLeft": [203, 346] }
  },
  {
    "id": "3.3-dogumtarihi",
    "label": "Doğum Tarihi",
    "type": "date",
    "x": 289,
    "y": 330,
    "width": 34,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [289, 330], "bottomRight": [323, 330], "topRight": [323, 346], "topLeft": [289, 346] }
  },
  {
    "id": "3.3-medenihali",
    "label": "Medeni Hali",
    "type": "select",
    "x": 324,
    "y": 330,
    "width": 34.2,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [324, 330], "bottomRight": [358.2, 330], "topRight": [358.2, 346], "topLeft": [324, 346] },
    "options": ["EVLİ", "BEKAR", "BOŞANMIŞ", "VEFAT"]
  },
  {
    "id": "3.3-egitimdurumu",
    "label": "Eğitim Durumu",
    "type": "select",
    "x": 360,
    "y": 330,
    "width": 50,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [360, 330], "bottomRight": [410, 330], "topRight": [410, 346], "topLeft": [360, 346] },
    "options": ["İLKÖĞRETİM", "LİSE", "ÖNLİSANS", "LİSANS"]
  },
  {
    "id": "3.3-meslegi",
    "label": "Mesleği",
    "type": "text",
    "x": 422,
    "y": 330,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [422, 330], "bottomRight": [452, 330], "topRight": [452, 346], "topLeft": [422, 346] }
  },
  {
    "id": "3.3-aylikgeliri",
    "label": "Aylık Geliri",
    "type": "number",
    "x": 506,
    "y": 330,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [506, 330], "bottomRight": [536, 330], "topRight": [536, 346], "topLeft": [506, 346] }
  },
  {
    "id": "3.3-cinsiyet",
    "label": "Cinsiyet",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 114,
    "y": 363,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "KADIN": { "x": 256, "y": 339, "width": 10, "height": 7 },
      "ERKEK": { "x": 256, "y": 330, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [114, 363], "bottomRight": [214, 363], "topRight": [214, 383], "topLeft": [114, 383] },
    "options": ["KADIN", "ERKEK"]
  },
  {
    "id": "3.3-calismadurumu",
    "label": "Çalışma Durumu",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 298,
    "y": 362,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "ÇALIŞIYOR": { "x": 460, "y": 339, "width": 10, "height": 7 },
      "ÇALIŞMIYOR": { "x": 460, "y": 330, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [298, 362], "bottomRight": [398, 362], "topRight": [398, 382], "topLeft": [298, 382] },
    "options": ["ÇALIŞIYOR", "ÇALIŞMIYOR"]
  },
  {
    "id": "3.3-bedengiyim",
    "label": "Beden Giyim",
    "type": "select",
    "x": 565,
    "y": 340,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 340], "bottomRight": [585, 340], "topRight": [585, 348], "topLeft": [565, 348] },
    "options": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "3.3-bedenayakkabi",
    "label": "Ayakkabı",
    "type": "select",
    "x": 565,
    "y": 332.2,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 332.2], "bottomRight": [585, 332.2], "topRight": [585, 340.2], "topLeft": [565, 340.2] },
    "options": ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]
  },
  {
    "id": "3.4-adisoyadı",
    "label": "Adı Soyadı",
    "type": "text",
    "x": 27,
    "y": 311,
    "width": 90,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [27, 311], "bottomRight": [117, 311], "topRight": [117, 327], "topLeft": [27, 327] }
  },
  {
    "id": "3.4-tckimlikno",
    "label": "T.C. Kimlik No.",
    "type": "number",
    "x": 128,
    "y": 311,
    "width": 70,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [128, 311], "bottomRight": [198, 311], "topRight": [198, 327], "topLeft": [128, 327] }
  },
  {
    "id": "3.4-basvurunayakinlik",
    "label": "Başvuruna Yakınlık",
    "type": "text",
    "x": 203,
    "y": 311,
    "width": 45,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [203, 311], "bottomRight": [248, 311], "topRight": [248, 327], "topLeft": [203, 327] }
  },
  {
    "id": "3.4-dogumtarihi",
    "label": "Doğum Tarihi",
    "type": "date",
    "x": 289,
    "y": 311,
    "width": 34,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [289, 311], "bottomRight": [323, 311], "topRight": [323, 327], "topLeft": [289, 327] }
  },
  {
    "id": "3.4-medenihali",
    "label": "Medeni Hali",
    "type": "select",
    "x": 324,
    "y": 311,
    "width": 34.2,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [324, 311], "bottomRight": [358.2, 311], "topRight": [358.2, 327], "topLeft": [324, 327] },
    "options": ["EVLİ", "BEKAR", "BOŞANMIŞ", "VEFAT"]
  },
  {
    "id": "3.4-egitimdurumu",
    "label": "Eğitim Durumu",
    "type": "select",
    "x": 360,
    "y": 311,
    "width": 50,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [360, 311], "bottomRight": [410, 311], "topRight": [410, 327], "topLeft": [360, 327] },
    "options": ["İLKÖĞRETİM", "LİSE", "ÖNLİSANS", "LİSANS"]
  },
  {
    "id": "3.4-meslegi",
    "label": "Mesleği",
    "type": "text",
    "x": 422,
    "y": 311,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [422, 311], "bottomRight": [452, 311], "topRight": [452, 327], "topLeft": [422, 327] }
  },
  {
    "id": "3.4-aylikgeliri",
    "label": "Aylık Geliri",
    "type": "number",
    "x": 506,
    "y": 311,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [506, 311], "bottomRight": [536, 311], "topRight": [536, 327], "topLeft": [506, 327] }
  },
  {
    "id": "3.4-cinsiyet",
    "label": "Cinsiyet",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 114,
    "y": 344,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "KADIN": { "x": 256, "y": 320, "width": 10, "height": 7 },
      "ERKEK": { "x": 256, "y": 311, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [114, 344], "bottomRight": [214, 344], "topRight": [214, 364], "topLeft": [114, 364] },
    "options": ["KADIN", "ERKEK"]
  },
  {
    "id": "3.4-calismadurumu",
    "label": "Çalışma Durumu",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 298,
    "y": 343,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "ÇALIŞIYOR": { "x": 460, "y": 320, "width": 10, "height": 7 },
      "ÇALIŞMIYOR": { "x": 460, "y": 311, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [298, 343], "bottomRight": [398, 343], "topRight": [398, 363], "topLeft": [298, 363] },
    "options": ["ÇALIŞIYOR", "ÇALIŞMIYOR"]
  },
  {
    "id": "3.4-bedengiyim",
    "label": "Beden Giyim",
    "type": "select",
    "x": 565,
    "y": 321,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 321], "bottomRight": [585, 321], "topRight": [585, 329], "topLeft": [565, 329] },
    "options": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "3.4-bedenayakkabi",
    "label": "Ayakkabı",
    "type": "select",
    "x": 565,
    "y": 313.2,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 313.2], "bottomRight": [585, 313.2], "topRight": [585, 321.2], "topLeft": [565, 321.2] },
    "options": ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]
  },
  {
    "id": "3.5-adisoyadı",
    "label": "Adı Soyadı",
    "type": "text",
    "x": 27,
    "y": 292,
    "width": 90,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [27, 292], "bottomRight": [117, 292], "topRight": [117, 308], "topLeft": [27, 308] }
  },
  {
    "id": "3.5-tckimlikno",
    "label": "T.C. Kimlik No.",
    "type": "number",
    "x": 128,
    "y": 292,
    "width": 70,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [128, 292], "bottomRight": [198, 292], "topRight": [198, 308], "topLeft": [128, 308] }
  },
  {
    "id": "3.5-basvurunayakinlik",
    "label": "Başvuruna Yakınlık",
    "type": "text",
    "x": 203,
    "y": 292,
    "width": 45,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [203, 292], "bottomRight": [248, 292], "topRight": [248, 308], "topLeft": [203, 308] }
  },
  {
    "id": "3.5-dogumtarihi",
    "label": "Doğum Tarihi",
    "type": "date",
    "x": 289,
    "y": 292,
    "width": 34,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [289, 292], "bottomRight": [323, 292], "topRight": [323, 308], "topLeft": [289, 308] }
  },
  {
    "id": "3.5-medenihali",
    "label": "Medeni Hali",
    "type": "select",
    "x": 324,
    "y": 292,
    "width": 34.2,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [324, 292], "bottomRight": [358.2, 292], "topRight": [358.2, 308], "topLeft": [324, 308] },
    "options": ["EVLİ", "BEKAR", "BOŞANMIŞ", "VEFAT"]
  },
  {
    "id": "3.5-egitimdurumu",
    "label": "Eğitim Durumu",
    "type": "select",
    "x": 360,
    "y": 292,
    "width": 50,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [360, 292], "bottomRight": [410, 292], "topRight": [410, 308], "topLeft": [360, 308] },
    "options": ["İLKÖĞRETİM", "LİSE", "ÖNLİSANS", "LİSANS"]
  },
  {
    "id": "3.5-meslegi",
    "label": "Mesleği",
    "type": "text",
    "x": 422,
    "y": 292,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [422, 292], "bottomRight": [452, 292], "topRight": [452, 308], "topLeft": [422, 308] }
  },
  {
    "id": "3.5-aylikgeliri",
    "label": "Aylık Geliri",
    "type": "number",
    "x": 506,
    "y": 292,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [506, 292], "bottomRight": [536, 292], "topRight": [536, 308], "topLeft": [506, 308] }
  },
  {
    "id": "3.5-cinsiyet",
    "label": "Cinsiyet",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 114,
    "y": 325,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "KADIN": { "x": 256, "y": 301, "width": 10, "height": 7 },
      "ERKEK": { "x": 256, "y": 292, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [114, 325], "bottomRight": [214, 325], "topRight": [214, 345], "topLeft": [114, 345] },
    "options": ["KADIN", "ERKEK"]
  },
  {
    "id": "3.5-calismadurumu",
    "label": "Çalışma Durumu",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 298,
    "y": 324,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "ÇALIŞIYOR": { "x": 460, "y": 301, "width": 10, "height": 7 },
      "ÇALIŞMIYOR": { "x": 460, "y": 292, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [298, 324], "bottomRight": [398, 324], "topRight": [398, 344], "topLeft": [298, 344] },
    "options": ["ÇALIŞIYOR", "ÇALIŞMIYOR"]
  },
  {
    "id": "3.5-bedengiyim",
    "label": "Beden Giyim",
    "type": "select",
    "x": 565,
    "y": 302,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 302], "bottomRight": [585, 302], "topRight": [585, 310], "topLeft": [565, 310] },
    "options": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "3.5-bedenayakkabi",
    "label": "Ayakkabı",
    "type": "select",
    "x": 565,
    "y": 294.2,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 294.2], "bottomRight": [585, 294.2], "topRight": [585, 302.2], "topLeft": [565, 302.2] },
    "options": ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]
  },
  {
    "id": "3.6-adisoyadı",
    "label": "Adı Soyadı",
    "type": "text",
    "x": 27,
    "y": 273,
    "width": 90,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [27, 273], "bottomRight": [117, 273], "topRight": [117, 289], "topLeft": [27, 289] }
  },
  {
    "id": "3.6-tckimlikno",
    "label": "T.C. Kimlik No.",
    "type": "number",
    "x": 128,
    "y": 273,
    "width": 70,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [128, 273], "bottomRight": [198, 273], "topRight": [198, 289], "topLeft": [128, 289] }
  },
  {
    "id": "3.6-basvurunayakinlik",
    "label": "Başvuruna Yakınlık",
    "type": "text",
    "x": 203,
    "y": 273,
    "width": 45,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [203, 273], "bottomRight": [248, 273], "topRight": [248, 289], "topLeft": [203, 289] }
  },
  {
    "id": "3.6-dogumtarihi",
    "label": "Doğum Tarihi",
    "type": "date",
    "x": 289,
    "y": 273,
    "width": 34,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [289, 273], "bottomRight": [323, 273], "topRight": [323, 289], "topLeft": [289, 289] }
  },
  {
    "id": "3.6-medenihali",
    "label": "Medeni Hali",
    "type": "select",
    "x": 324,
    "y": 273,
    "width": 34.2,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [324, 273], "bottomRight": [358.2, 273], "topRight": [358.2, 289], "topLeft": [324, 289] },
    "options": ["EVLİ", "BEKAR", "BOŞANMIŞ", "VEFAT"]
  },
  {
    "id": "3.6-egitimdurumu",
    "label": "Eğitim Durumu",
    "type": "select",
    "x": 360,
    "y": 273,
    "width": 50,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [360, 273], "bottomRight": [410, 273], "topRight": [410, 289], "topLeft": [360, 289] },
    "options": ["İLKÖĞRETİM", "LİSE", "ÖNLİSANS", "LİSANS"]
  },
  {
    "id": "3.6-meslegi",
    "label": "Mesleği",
    "type": "text",
    "x": 422,
    "y": 273,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [422, 273], "bottomRight": [452, 273], "topRight": [452, 289], "topLeft": [422, 289] }
  },
  {
    "id": "3.6-aylikgeliri",
    "label": "Aylık Geliri",
    "type": "number",
    "x": 506,
    "y": 273,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [506, 273], "bottomRight": [536, 273], "topRight": [536, 289], "topLeft": [506, 289] }
  },
  {
    "id": "3.6-cinsiyet",
    "label": "Cinsiyet",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 114,
    "y": 306,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "KADIN": { "x": 256, "y": 282, "width": 10, "height": 7 },
      "ERKEK": { "x": 256, "y": 273, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [114, 306], "bottomRight": [214, 306], "topRight": [214, 326], "topLeft": [114, 326] },
    "options": ["KADIN", "ERKEK"]
  },
  {
    "id": "3.6-calismadurumu",
    "label": "Çalışma Durumu",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 298,
    "y": 305,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "ÇALIŞIYOR": { "x": 460, "y": 282, "width": 10, "height": 7 },
      "ÇALIŞMIYOR": { "x": 460, "y": 273, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [298, 305], "bottomRight": [398, 305], "topRight": [398, 325], "topLeft": [298, 325] },
    "options": ["ÇALIŞIYOR", "ÇALIŞMIYOR"]
  },
  {
    "id": "3.6-bedengiyim",
    "label": "Beden Giyim",
    "type": "select",
    "x": 565,
    "y": 283,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 283], "bottomRight": [585, 283], "topRight": [585, 291], "topLeft": [565, 291] },
    "options": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "3.6-bedenayakkabi",
    "label": "Ayakkabı",
    "type": "select",
    "x": 565,
    "y": 275.2,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 275.2], "bottomRight": [585, 275.2], "topRight": [585, 283.2], "topLeft": [565, 283.2] },
    "options": ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]
  },
  {
    "id": "3.7-adisoyadı",
    "label": "Adı Soyadı",
    "type": "text",
    "x": 27,
    "y": 254,
    "width": 90,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [27, 254], "bottomRight": [117, 254], "topRight": [117, 270], "topLeft": [27, 270] }
  },
  {
    "id": "3.7-tckimlikno",
    "label": "T.C. Kimlik No.",
    "type": "number",
    "x": 128,
    "y": 254,
    "width": 70,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [128, 254], "bottomRight": [198, 254], "topRight": [198, 270], "topLeft": [128, 270] }
  },
  {
    "id": "3.7-basvurunayakinlik",
    "label": "Başvuruna Yakınlık",
    "type": "text",
    "x": 203,
    "y": 254,
    "width": 45,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [203, 254], "bottomRight": [248, 254], "topRight": [248, 270], "topLeft": [203, 270] }
  },
  {
    "id": "3.7-dogumtarihi",
    "label": "Doğum Tarihi",
    "type": "date",
    "x": 289,
    "y": 254,
    "width": 34,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [289, 254], "bottomRight": [323, 254], "topRight": [323, 270], "topLeft": [289, 270] }
  },
  {
    "id": "3.7-medenihali",
    "label": "Medeni Hali",
    "type": "select",
    "x": 324,
    "y": 254,
    "width": 34.2,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [324, 254], "bottomRight": [358.2, 254], "topRight": [358.2, 270], "topLeft": [324, 270] },
    "options": ["EVLİ", "BEKAR", "BOŞANMIŞ", "VEFAT"]
  },
  {
    "id": "3.7-egitimdurumu",
    "label": "Eğitim Durumu",
    "type": "select",
    "x": 360,
    "y": 254,
    "width": 50,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [360, 254], "bottomRight": [410, 254], "topRight": [410, 270], "topLeft": [360, 270] },
    "options": ["İLKÖĞRETİM", "LİSE", "ÖNLİSANS", "LİSANS"]
  },
  {
    "id": "3.7-meslegi",
    "label": "Mesleği",
    "type": "text",
    "x": 422,
    "y": 254,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [422, 254], "bottomRight": [452, 254], "topRight": [452, 270], "topLeft": [422, 270] }
  },
  {
    "id": "3.7-aylikgeliri",
    "label": "Aylık Geliri",
    "type": "number",
    "x": 506,
    "y": 254,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [506, 254], "bottomRight": [536, 254], "topRight": [536, 270], "topLeft": [506, 270] }
  },
  {
    "id": "3.7-cinsiyet",
    "label": "Cinsiyet",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 114,
    "y": 287,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "KADIN": { "x": 256, "y": 263, "width": 10, "height": 7 },
      "ERKEK": { "x": 256, "y": 254, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [114, 287], "bottomRight": [214, 287], "topRight": [214, 307], "topLeft": [114, 307] },
    "options": ["KADIN", "ERKEK"]
  },
  {
    "id": "3.7-calismadurumu",
    "label": "Çalışma Durumu",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 298,
    "y": 286,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "ÇALIŞIYOR": { "x": 460, "y": 263, "width": 10, "height": 7 },
      "ÇALIŞMIYOR": { "x": 460, "y": 254, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [298, 286], "bottomRight": [398, 286], "topRight": [398, 306], "topLeft": [298, 306] },
    "options": ["ÇALIŞIYOR", "ÇALIŞMIYOR"]
  },
  {
    "id": "3.7-bedengiyim",
    "label": "Beden Giyim",
    "type": "select",
    "x": 565,
    "y": 264,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 264], "bottomRight": [585, 264], "topRight": [585, 272], "topLeft": [565, 272] },
    "options": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "3.7-bedenayakkabi",
    "label": "Ayakkabı",
    "type": "select",
    "x": 565,
    "y": 256.2,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 256.2], "bottomRight": [585, 256.2], "topRight": [585, 264.2], "topLeft": [565, 264.2] },
    "options": ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]
  },
  {
    "id": "3.8-adisoyadı",
    "label": "Adı Soyadı",
    "type": "text",
    "x": 27,
    "y": 235,
    "width": 90,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [27, 235], "bottomRight": [117, 235], "topRight": [117, 251], "topLeft": [27, 251] }
  },
  {
    "id": "3.8-tckimlikno",
    "label": "T.C. Kimlik No.",
    "type": "number",
    "x": 128,
    "y": 235,
    "width": 70,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [128, 235], "bottomRight": [198, 235], "topRight": [198, 251], "topLeft": [128, 251] }
  },
  {
    "id": "3.8-basvurunayakinlik",
    "label": "Başvuruna Yakınlık",
    "type": "text",
    "x": 203,
    "y": 235,
    "width": 45,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [203, 235], "bottomRight": [248, 235], "topRight": [248, 251], "topLeft": [203, 251] }
  },
  {
    "id": "3.8-dogumtarihi",
    "label": "Doğum Tarihi",
    "type": "date",
    "x": 289,
    "y": 235,
    "width": 34,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [289, 235], "bottomRight": [323, 235], "topRight": [323, 251], "topLeft": [289, 251] }
  },
  {
    "id": "3.8-medenihali",
    "label": "Medeni Hali",
    "type": "select",
    "x": 324,
    "y": 235,
    "width": 34.2,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [324, 235], "bottomRight": [358.2, 235], "topRight": [358.2, 251], "topLeft": [324, 251] },
    "options": ["EVLİ", "BEKAR", "BOŞANMIŞ", "VEFAT"]
  },
  {
    "id": "3.8-egitimdurumu",
    "label": "Eğitim Durumu",
    "type": "select",
    "x": 360,
    "y": 235,
    "width": 50,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [360, 235], "bottomRight": [410, 235], "topRight": [410, 251], "topLeft": [360, 251] },
    "options": ["İLKÖĞRETİM", "LİSE", "ÖNLİSANS", "LİSANS"]
  },
  {
    "id": "3.8-meslegi",
    "label": "Mesleği",
    "type": "text",
    "x": 422,
    "y": 235,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [422, 235], "bottomRight": [452, 235], "topRight": [452, 251], "topLeft": [422, 251] }
  },
  {
    "id": "3.8-aylikgeliri",
    "label": "Aylık Geliri",
    "type": "number",
    "x": 506,
    "y": 235,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [506, 235], "bottomRight": [536, 235], "topRight": [536, 251], "topLeft": [506, 251] }
  },
  {
    "id": "3.8-cinsiyet",
    "label": "Cinsiyet",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 114,
    "y": 268,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "KADIN": { "x": 256, "y": 244, "width": 10, "height": 7 },
      "ERKEK": { "x": 256, "y": 235, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [114, 268], "bottomRight": [214, 268], "topRight": [214, 288], "topLeft": [114, 288] },
    "options": ["KADIN", "ERKEK"]
  },
  {
    "id": "3.8-calismadurumu",
    "label": "Çalışma Durumu",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 298,
    "y": 267,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "ÇALIŞIYOR": { "x": 460, "y": 244, "width": 10, "height": 7 },
      "ÇALIŞMIYOR": { "x": 460, "y": 235, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [298, 267], "bottomRight": [398, 267], "topRight": [398, 287], "topLeft": [298, 287] },
    "options": ["ÇALIŞIYOR", "ÇALIŞMIYOR"]
  },
  {
    "id": "3.8-bedengiyim",
    "label": "Beden Giyim",
    "type": "select",
    "x": 565,
    "y": 245,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 245], "bottomRight": [585, 245], "topRight": [585, 253], "topLeft": [565, 253] },
    "options": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "3.8-bedenayakkabi",
    "label": "Ayakkabı",
    "type": "select",
    "x": 565,
    "y": 237.2,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 237.2], "bottomRight": [585, 237.2], "topRight": [585, 245.2], "topLeft": [565, 245.2] },
    "options": ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]
  },
  {
    "id": "3.9-adisoyadı",
    "label": "Adı Soyadı",
    "type": "text",
    "x": 27,
    "y": 216,
    "width": 90,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [27, 216], "bottomRight": [117, 216], "topRight": [117, 232], "topLeft": [27, 232] }
  },
  {
    "id": "3.9-tckimlikno",
    "label": "T.C. Kimlik No.",
    "type": "number",
    "x": 128,
    "y": 216,
    "width": 70,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [128, 216], "bottomRight": [198, 216], "topRight": [198, 232], "topLeft": [128, 232] }
  },
  {
    "id": "3.9-basvurunayakinlik",
    "label": "Başvuruna Yakınlık",
    "type": "text",
    "x": 203,
    "y": 216,
    "width": 45,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [203, 216], "bottomRight": [248, 216], "topRight": [248, 232], "topLeft": [203, 232] }
  },
  {
    "id": "3.9-dogumtarihi",
    "label": "Doğum Tarihi",
    "type": "date",
    "x": 289,
    "y": 216,
    "width": 34,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [289, 216], "bottomRight": [323, 216], "topRight": [323, 232], "topLeft": [289, 232] }
  },
  {
    "id": "3.9-medenihali",
    "label": "Medeni Hali",
    "type": "select",
    "x": 324,
    "y": 216,
    "width": 34.2,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [324, 216], "bottomRight": [358.2, 216], "topRight": [358.2, 232], "topLeft": [324, 232] },
    "options": ["EVLİ", "BEKAR", "BOŞANMIŞ", "VEFAT"]
  },
  {
    "id": "3.9-egitimdurumu",
    "label": "Eğitim Durumu",
    "type": "select",
    "x": 360,
    "y": 216,
    "width": 50,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [360, 216], "bottomRight": [410, 216], "topRight": [410, 232], "topLeft": [360, 232] },
    "options": ["İLKÖĞRETİM", "LİSE", "ÖNLİSANS", "LİSANS"]
  },
  {
    "id": "3.9-meslegi",
    "label": "Mesleği",
    "type": "text",
    "x": 422,
    "y": 216,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [422, 216], "bottomRight": [452, 216], "topRight": [452, 232], "topLeft": [422, 232] }
  },
  {
    "id": "3.9-aylikgeliri",
    "label": "Aylık Geliri",
    "type": "number",
    "x": 506,
    "y": 216,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [506, 216], "bottomRight": [536, 216], "topRight": [536, 232], "topLeft": [506, 232] }
  },
  {
    "id": "3.9-cinsiyet",
    "label": "Cinsiyet",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 114,
    "y": 249,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "KADIN": { "x": 256, "y": 225, "width": 10, "height": 7 },
      "ERKEK": { "x": 256, "y": 216, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [114, 249], "bottomRight": [214, 249], "topRight": [214, 269], "topLeft": [114, 269] },
    "options": ["KADIN", "ERKEK"]
  },
  {
    "id": "3.9-calismadurumu",
    "label": "Çalışma Durumu",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 298,
    "y": 248,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "ÇALIŞIYOR": { "x": 460, "y": 225, "width": 10, "height": 7 },
      "ÇALIŞMIYOR": { "x": 460, "y": 216, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [298, 248], "bottomRight": [398, 248], "topRight": [398, 268], "topLeft": [298, 268] },
    "options": ["ÇALIŞIYOR", "ÇALIŞMIYOR"]
  },
  {
    "id": "3.9-bedengiyim",
    "label": "Beden Giyim",
    "type": "select",
    "x": 565,
    "y": 226,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 226], "bottomRight": [585, 226], "topRight": [585, 234], "topLeft": [565, 234] },
    "options": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "3.9-bedenayakkabi",
    "label": "Ayakkabı",
    "type": "select",
    "x": 565,
    "y": 218.2,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 218.2], "bottomRight": [585, 218.2], "topRight": [585, 226.2], "topLeft": [565, 226.2] },
    "options": ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]
  },
  {
    "id": "3.10-adisoyadı",
    "label": "Adı Soyadı",
    "type": "text",
    "x": 27,
    "y": 197,
    "width": 90,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [27, 197], "bottomRight": [117, 197], "topRight": [117, 213], "topLeft": [27, 213] }
  },
  {
    "id": "3.10-tckimlikno",
    "label": "T.C. Kimlik No.",
    "type": "number",
    "x": 128,
    "y": 197,
    "width": 70,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [128, 197], "bottomRight": [198, 197], "topRight": [198, 213], "topLeft": [128, 213] }
  },
  {
    "id": "3.10-basvurunayakinlik",
    "label": "Başvuruna Yakınlık",
    "type": "text",
    "x": 203,
    "y": 197,
    "width": 45,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [203, 197], "bottomRight": [248, 197], "topRight": [248, 213], "topLeft": [203, 213] }
  },
  {
    "id": "3.10-dogumtarihi",
    "label": "Doğum Tarihi",
    "type": "date",
    "x": 289,
    "y": 197,
    "width": 34,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [289, 197], "bottomRight": [323, 197], "topRight": [323, 213], "topLeft": [289, 213] }
  },
  {
    "id": "3.10-medenihali",
    "label": "Medeni Hali",
    "type": "select",
    "x": 324,
    "y": 197,
    "width": 34.2,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [324, 197], "bottomRight": [358.2, 197], "topRight": [358.2, 213], "topLeft": [324, 213] },
    "options": ["EVLİ", "BEKAR", "BOŞANMIŞ", "VEFAT"]
  },
  {
    "id": "3.10-egitimdurumu",
    "label": "Eğitim Durumu",
    "type": "select",
    "x": 360,
    "y": 197,
    "width": 50,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [360, 197], "bottomRight": [410, 197], "topRight": [410, 213], "topLeft": [360, 213] },
    "options": ["İLKÖĞRETİM", "LİSE", "ÖNLİSANS", "LİSANS"]
  },
  {
    "id": "3.10-meslegi",
    "label": "Mesleği",
    "type": "text",
    "x": 422,
    "y": 197,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [422, 197], "bottomRight": [452, 197], "topRight": [452, 213], "topLeft": [422, 213] }
  },
  {
    "id": "3.10-aylikgeliri",
    "label": "Aylık Geliri",
    "type": "number",
    "x": 506,
    "y": 197,
    "width": 30,
    "height": 16,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [506, 197], "bottomRight": [536, 197], "topRight": [536, 213], "topLeft": [506, 213] }
  },
  {
    "id": "3.10-cinsiyet",
    "label": "Cinsiyet",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 114,
    "y": 230,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "KADIN": { "x": 256, "y": 206, "width": 10, "height": 7 },
      "ERKEK": { "x": 256, "y": 197, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [114, 230], "bottomRight": [214, 230], "topRight": [214, 250], "topLeft": [114, 250] },
    "options": ["KADIN", "ERKEK"]
  },
  {
    "id": "3.10-calismadurumu",
    "label": "Çalışma Durumu",
    "type": "checkbox",
    "maxSelections": 1,
    "x": 298,
    "y": 229,
    "width": 100,
    "height": 20,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "optionMappings": {
      "ÇALIŞIYOR": { "x": 460, "y": 206, "width": 10, "height": 7 },
      "ÇALIŞMIYOR": { "x": 460, "y": 197, "width": 10, "height": 7 }
    },
    "corners": { "bottomLeft": [298, 229], "bottomRight": [398, 229], "topRight": [398, 249], "topLeft": [298, 249] },
    "options": ["ÇALIŞIYOR", "ÇALIŞMIYOR"]
  },
  {
    "id": "3.10-bedengiyim",
    "label": "Beden Giyim",
    "type": "select",
    "x": 565,
    "y": 207,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 207], "bottomRight": [585, 207], "topRight": [585, 215], "topLeft": [565, 215] },
    "options": ["S", "M", "L", "XL", "XXL"]
  },
  {
    "id": "3.10-bedenayakkabi",
    "label": "Ayakkabı",
    "type": "select",
    "x": 565,
    "y": 199.2,
    "width": 20,
    "height": 8,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "corners": { "bottomLeft": [565, 199.2], "bottomRight": [585, 199.2], "topRight": [585, 207.2], "topLeft": [565, 207.2] },
    "options": ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]
  }
];
