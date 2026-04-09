export interface FieldConfig {
  id: string;
  label: string;
  type: 'text' | 'checkbox' | 'number' | 'date' | 'select';
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
    "width": 160,
    "height": 28,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        372,
        679
      ],
      "bottomRight": [
        532,
        679
      ],
      "topRight": [
        532,
        707
      ],
      "topLeft": [
        372,
        707
      ]
    }
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
    "id": "2.0-calisiyorsageliri",
    "label": "Çalışıyorsa Aylık Geliri",
    "type": "number",
    "x": 372,
    "y": 649,
    "width": 160,
    "height": 28,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        372,
        649
      ],
      "bottomRight": [
        532,
        649
      ],
      "topRight": [
        532,
        677
      ],
      "topLeft": [
        372,
        677
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
  }
];
