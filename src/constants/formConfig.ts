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
      "bottomLeft": [407.3, 759.3],
      "bottomRight": [415.3, 759.3],
      "topRight": [415.3, 767.3],
      "topLeft": [407.3, 767.3]
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
      "bottomLeft": [115, 724.29],
      "bottomRight": [265, 724.29],
      "topRight": [265, 737.29],
      "topLeft": [115, 737.29]
    },
    "required": false
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
      "bottomLeft": [115, 709],
      "bottomRight": [265, 709],
      "topRight": [265, 722],
      "topLeft": [115, 722]
    },
    "required": false
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
      "bottomLeft": [115, 694],
      "bottomRight": [265, 694],
      "topRight": [265, 707],
      "topLeft": [115, 707]
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
      "bottomLeft": [115, 679],
      "bottomRight": [265, 679],
      "topRight": [265, 692],
      "topLeft": [115, 692]
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
      "bottomLeft": [372, 725.29],
      "bottomRight": [522, 725.29],
      "topRight": [522, 738.29],
      "topLeft": [372, 738.29]
    }
  },
  {
    "id": "2.0-calismadurumu",
    "label": "Çalışma Durumu",
    "type": "select",
    "options": ["ÇALIŞIYOR", "ÇALIŞMIYOR"],
    "x": 372,
    "y": 710,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "KİŞİSEL BİLGİLER",
    "corners": {
      "bottomLeft": [372, 710],
      "bottomRight": [522, 710],
      "topRight": [522, 723],
      "topLeft": [372, 723]
    },
    "required": false
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
      "bottomLeft": [372, 679],
      "bottomRight": [522, 679],
      "topRight": [522, 707],
      "topLeft": [372, 707]
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
      "bottomLeft": [372, 649],
      "bottomRight": [522, 649],
      "topRight": [522, 677],
      "topLeft": [372, 677]
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
      "bottomLeft": [138, 664],
      "bottomRight": [198, 664],
      "topRight": [198, 677],
      "topLeft": [138, 677]
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
      "bottomLeft": [228, 664],
      "bottomRight": [288, 664],
      "topRight": [288, 677],
      "topLeft": [228, 677]
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
      "bottomLeft": [115, 649],
      "bottomRight": [265, 649],
      "topRight": [265, 662],
      "topLeft": [115, 662]
    },
    "options": ["EVLİ", "BEKAR", "BOŞANMIŞ", "VEFAT"]
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
      "bottomLeft": [115, 634],
      "bottomRight": [175, 634],
      "topRight": [175, 647],
      "topLeft": [115, 647]
    },
    "options": ["KADIN", "ERKEK"]
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
      "bottomLeft": [232, 634],
      "bottomRight": [292, 634],
      "topRight": [292, 647],
      "topLeft": [232, 647]
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
      "bottomLeft": [372, 634],
      "bottomRight": [426, 634],
      "topRight": [426, 647],
      "topLeft": [372, 647]
    },
    "options": ["İLKOKUL", "ORTAOKUL", "LİSE", "ÜNİVERSİTE"]
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
      "bottomLeft": [482, 635],
      "bottomRight": [512, 635],
      "topRight": [512, 648],
      "topLeft": [482, 648]
    },
    "options": ["S", "M", "L", "XL", "XXL"]
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
      "bottomLeft": [553, 635],
      "bottomRight": [583, 635],
      "topRight": [583, 648],
      "topLeft": [553, 648]
    },
    "options": ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]
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
      "bottomLeft": [115, 584],
      "bottomRight": [265, 584],
      "topRight": [265, 597],
      "topLeft": [115, 597]
    },
    "required": false
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
      "bottomLeft": [115, 599],
      "bottomRight": [265, 599],
      "topRight": [265, 612],
      "topLeft": [115, 612]
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
      "bottomLeft": [115, 570],
      "bottomRight": [265, 570],
      "topRight": [265, 583],
      "topLeft": [115, 583]
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
      "bottomLeft": [115, 555],
      "bottomRight": [265, 555],
      "topRight": [265, 568],
      "topLeft": [115, 568]
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
      "bottomLeft": [395, 599],
      "bottomRight": [545, 599],
      "topRight": [545, 612],
      "topLeft": [395, 612]
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
      "bottomLeft": [395, 562],
      "bottomRight": [545, 562],
      "topRight": [545, 597],
      "topLeft": [395, 597]
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
      "bottomLeft": [115, 520],
      "bottomRight": [265, 520],
      "topRight": [265, 533],
      "topLeft": [115, 533]
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
      "bottomLeft": [115, 505],
      "bottomRight": [265, 505],
      "topRight": [265, 518],
      "topLeft": [115, 518]
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
      "bottomLeft": [114.7, 490],
      "bottomRight": [264.7, 490],
      "topRight": [264.7, 503],
      "topLeft": [114.7, 503]
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
      "bottomLeft": [115, 460],
      "bottomRight": [265, 460],
      "topRight": [265, 473],
      "topLeft": [115, 473]
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
      "bottomLeft": [115, 475],
      "bottomRight": [265, 475],
      "topRight": [265, 488],
      "topLeft": [115, 488]
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
      "bottomLeft": [404, 520],
      "bottomRight": [554, 520],
      "topRight": [554, 533],
      "topLeft": [404, 533]
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
      "bottomLeft": [404, 505],
      "bottomRight": [554, 505],
      "topRight": [554, 518],
      "topLeft": [404, 518]
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
      "bottomLeft": [404, 490],
      "bottomRight": [554, 490],
      "topRight": [554, 503],
      "topLeft": [404, 503]
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
      "bottomLeft": [404, 475],
      "bottomRight": [554, 475],
      "topRight": [554, 488],
      "topLeft": [404, 488]
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
      "bottomLeft": [404, 460],
      "bottomRight": [554, 460],
      "topRight": [554, 473],
      "topLeft": [404, 473]
    }
  },
  {
    "id": "3.0-haneoturansayisi",
    "label": "Hanede Yaşayan Diğer Kişi Sayısı",
    "type": "select",
    "x": 11.5,
    "y": 399,
    "width": 10,
    "height": 10,
    "page": 1,
    "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
    "options": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    "corners": {
      "bottomLeft": [11.5, 399],
      "bottomRight": [21.5, 399],
      "topRight": [21.5, 409],
      "topLeft": [11.5, 409]
    }
  },
  ...Array.from({ length: 10 }, (_, i) => {
    const n = i + 1;
    const yOffset = (n - 1) * 19;
    return [
      {
        "id": `3.${n}-adisoyadı`,
        "label": "Adı Soyadı",
        "type": "text",
        "x": 27,
        "y": 368 - yOffset,
        "width": 90,
        "height": 16,
        "page": 1,
        "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
        "corners": {
          "bottomLeft": [27, 368 - yOffset],
          "bottomRight": [117, 368 - yOffset],
          "topRight": [117, 384 - yOffset],
          "topLeft": [27, 384 - yOffset]
        }
      },
      {
        "id": `3.${n}-tckimlikno`,
        "label": "T.C. Kimlik No.",
        "type": "number",
        "x": 128,
        "y": 368 - yOffset,
        "width": 70,
        "height": 16,
        "page": 1,
        "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
        "corners": {
          "bottomLeft": [128, 368 - yOffset],
          "bottomRight": [198, 368 - yOffset],
          "topRight": [198, 384 - yOffset],
          "topLeft": [128, 384 - yOffset]
        }
      },
      {
        "id": `3.${n}-basvurunayakinlik`,
        "label": "Başvuruna Yakınlık",
        "type": "text",
        "x": 203,
        "y": 368 - yOffset,
        "width": 45,
        "height": 16,
        "page": 1,
        "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
        "corners": {
          "bottomLeft": [203, 368 - yOffset],
          "bottomRight": [248, 368 - yOffset],
          "topRight": [248, 384 - yOffset],
          "topLeft": [203, 384 - yOffset]
        }
      },
      {
        "id": `3.${n}-dogumtarihi`,
        "label": "Doğum Tarihi",
        "type": "date",
        "x": 289,
        "y": 368 - yOffset,
        "width": 34,
        "height": 16,
        "page": 1,
        "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
        "corners": {
          "bottomLeft": [289, 368 - yOffset],
          "bottomRight": [323, 368 - yOffset],
          "topRight": [323, 384 - yOffset],
          "topLeft": [289, 384 - yOffset]
        }
      },
      {
        "id": `3.${n}-medenihali`,
        "label": "Medeni Hali",
        "type": "select",
        "x": 324,
        "y": 368 - yOffset,
        "width": 34.2,
        "height": 16,
        "page": 1,
        "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
        "corners": {
          "bottomLeft": [324, 368 - yOffset],
          "bottomRight": [358.2, 368 - yOffset],
          "topRight": [358.2, 384 - yOffset],
          "topLeft": [324, 384 - yOffset]
        },
        "options": ["EVLİ", "BEKAR", "BOŞANMIŞ", "VEFAT"]
      },
      {
        "id": `3.${n}-egitimdurumu`,
        "label": "Eğitim Durumu",
        "type": "select",
        "x": 360,
        "y": 368 - yOffset,
        "width": 50,
        "height": 16,
        "page": 1,
        "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
        "corners": {
          "bottomLeft": [360, 368 - yOffset],
          "bottomRight": [410, 368 - yOffset],
          "topRight": [410, 384 - yOffset],
          "topLeft": [360, 384 - yOffset]
        },
        "options": ["İLKÖĞRETİM", "LİSE", "ÖNLİSANS", "LİSANS"]
      },
      {
        "id": `3.${n}-meslegi`,
        "label": "Mesleği",
        "type": "text",
        "x": 422,
        "y": 368 - yOffset,
        "width": 30,
        "height": 16,
        "page": 1,
        "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
        "corners": {
          "bottomLeft": [422, 368 - yOffset],
          "bottomRight": [452, 368 - yOffset],
          "topRight": [452, 384 - yOffset],
          "topLeft": [422, 384 - yOffset]
        }
      },
      {
        "id": `3.${n}-aylikgeliri`,
        "label": "Aylık Geliri",
        "type": "number",
        "x": 506,
        "y": 368 - yOffset,
        "width": 30,
        "height": 16,
        "page": 1,
        "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
        "corners": {
          "bottomLeft": [506, 368 - yOffset],
          "bottomRight": [536, 368 - yOffset],
          "topRight": [536, 384 - yOffset],
          "topLeft": [506, 384 - yOffset]
        }
      },
      {
        "id": `3.${n}-cinsiyet`,
        "label": "Cinsiyet",
        "type": "checkbox",
        "maxSelections": 1,
        "x": 114,
        "y": 401 - yOffset,
        "width": 100,
        "height": 20,
        "page": 1,
        "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
        "optionMappings": {
          "KADIN": { "x": 256, "y": 377 - yOffset, "width": 10, "height": 7 },
          "ERKEK": { "x": 256, "y": 368 - yOffset, "width": 10, "height": 7 }
        },
        "corners": {
          "bottomLeft": [114, 401 - yOffset],
          "bottomRight": [214, 401 - yOffset],
          "topRight": [214, 421 - yOffset],
          "topLeft": [114, 421 - yOffset]
        },
        "options": ["KADIN", "ERKEK"]
      },
      {
        "id": `3.${n}-calismadurumu`,
        "label": "Çalışma Durumu",
        "type": "checkbox",
        "maxSelections": 1,
        "x": 298,
        "y": 400 - yOffset,
        "width": 100,
        "height": 20,
        "page": 1,
        "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
        "optionMappings": {
          "ÇALIŞIYOR": { "x": 460, "y": 377 - yOffset, "width": 10, "height": 7 },
          "ÇALIŞMIYOR": { "x": 460, "y": 368 - yOffset, "width": 10, "height": 7 }
        },
        "corners": {
          "bottomLeft": [298, 400 - yOffset],
          "bottomRight": [398, 400 - yOffset],
          "topRight": [398, 420 - yOffset],
          "topLeft": [298, 420 - yOffset]
        },
        "options": ["ÇALIŞIYOR", "ÇALIŞMIYOR"]
      },
      {
        "id": `3.${n}-bedengiyim`,
        "label": "Beden Giyim",
        "type": "select",
        "x": 565,
        "y": 378 - yOffset,
        "width": 20,
        "height": 8,
        "page": 1,
        "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
        "corners": {
          "bottomLeft": [565, 378 - yOffset],
          "bottomRight": [585, 378 - yOffset],
          "topRight": [585, 386 - yOffset],
          "topLeft": [565, 386 - yOffset]
        },
        "options": ["S", "M", "L", "XL", "XXL"]
      },
      {
        "id": `3.${n}-bedenayakkabi`,
        "label": "Ayakkabı",
        "type": "select",
        "x": 565,
        "y": 370.2 - yOffset,
        "width": 20,
        "height": 8,
        "page": 1,
        "section": "Hanede Yaşayan Diğer Kişi Bilgileri",
        "corners": {
          "bottomLeft": [565, 370.2 - yOffset],
          "bottomRight": [585, 370.2 - yOffset],
          "topRight": [585, 378.2 - yOffset],
          "topLeft": [565, 378.2 - yOffset]
        },
        "options": ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]
      }
    ];
  }).flat(),
  {
    "id": "4.0-hastalikadedi",
    "label": "Hastalık ve Engellilik Durumu Sayısı",
    "type": "select",
    "x": 11.5,
    "y": 155,
    "width": 10,
    "height": 10,
    "page": 1,
    "section": "Hastalık ve Engellilik Durumu",
    "options": ["YOK", "1", "2", "3", "4", "5"],
    "corners": {
      "bottomLeft": [11.5, 155],
      "bottomRight": [21.5, 155],
      "topRight": [21.5, 165],
      "topLeft": [11.5, 165]
    }
  },
  ...[1, 2, 3, 4, 5].map(i => {
    const yOffset = (i - 1) * 19;
    return [
      {
        "id": `4.${i}-Hastaadisoyadi`,
        "label": "Hasta Adı Soyadı",
        "type": "text",
        "x": 28,
        "y": 131 - yOffset,
        "width": 115,
        "height": 16,
        "page": 1,
        "section": "Hastalık ve Engellilik Durumu",
        "corners": {
          "bottomLeft": [28, 131 - yOffset],
          "bottomRight": [143, 131 - yOffset],
          "topRight": [143, 147 - yOffset],
          "topLeft": [28, 147 - yOffset]
        }
      },
      {
        "id": `4.${i}-hastalik`,
        "label": "Hastalık Teşhisi",
        "type": "text",
        "x": 150,
        "y": 131 - yOffset,
        "width": 55,
        "height": 16,
        "page": 1,
        "section": "Hastalık ve Engellilik Durumu",
        "corners": {
          "bottomLeft": [150, 131 - yOffset],
          "bottomRight": [205, 131 - yOffset],
          "topRight": [205, 147 - yOffset],
          "topLeft": [150, 147 - yOffset]
        }
      },
      {
        "id": `4.${i}-engellilikturu`,
        "label": "Engellilik Türü",
        "type": "checkbox",
        "x": 210,
        "y": 131 - yOffset,
        "width": 60,
        "height": 16,
        "page": 1,
        "section": "Hastalık ve Engellilik Durumu",
        "corners": {
          "bottomLeft": [210, 131 - yOffset],
          "bottomRight": [270, 131 - yOffset],
          "topRight": [270, 147 - yOffset],
          "topLeft": [210, 147 - yOffset]
        },
        "options": ["RUHSAL", "ZİHİNSEL", "FİZİKSEL"],
        "maxSelections": 1,
        "optionMappings": {
          "RUHSAL": { "x": 213, "y": 140 - yOffset, "width": 4, "height": 6 },
          "FİZİKSEL": { "x": 213, "y": 131.5 - yOffset, "width": 4, "height": 6 },
          "ZİHİNSEL": { "x": 242, "y": 140 - yOffset, "width": 4, "height": 6 }
        }
      },
      {
        "id": `4.${i}-hastaysadurumu`,
        "label": "Hastaysa Durumu",
        "type": "checkbox",
        "x": 275,
        "y": 131 - yOffset,
        "width": 60,
        "height": 16,
        "page": 1,
        "section": "Hastalık ve Engellilik Durumu",
        "corners": {
          "bottomLeft": [275, 131 - yOffset],
          "bottomRight": [335, 131 - yOffset],
          "topRight": [335, 147 - yOffset],
          "topLeft": [275, 147 - yOffset]
        },
        "maxSelections": 1,
        "options": ["GEÇİCİ", "SÜREKLİ"],
        "optionMappings": {
          "GEÇİCİ": { "x": 278, "y": 140 - yOffset, "width": 14, "height": 6 },
          "SÜREKLİ": { "x": 278, "y": 132 - yOffset, "width": 14, "height": 6 }
        }
      },
      {
        "id": `4.${i}-engelderecesi`,
        "label": "Engelliyse Derecesi (%)",
        "type": "number",
        "x": 340,
        "y": 131 - yOffset,
        "width": 20,
        "height": 16,
        "page": 1,
        "section": "Hastalık ve Engellilik Durumu",
        "corners": {
          "bottomLeft": [340, 131 - yOffset],
          "bottomRight": [360, 131 - yOffset],
          "topRight": [360, 147 - yOffset],
          "topLeft": [340, 147 - yOffset]
        }
      },
      {
        "id": `4.${i}-kullanilanilac`,
        "label": "Kullanılan İlaç",
        "type": "text",
        "x": 377,
        "y": 131 - yOffset,
        "width": 45,
        "height": 16,
        "page": 1,
        "section": "Hastalık ve Engellilik Durumu",
        "corners": {
          "bottomLeft": [377, 131 - yOffset],
          "bottomRight": [422, 131 - yOffset],
          "topRight": [422, 147 - yOffset],
          "topLeft": [377, 147 - yOffset]
        }
      },
      {
        "id": `4.${i}-kullanilancihaz`,
        "label": "Kullanılan Cihaz",
        "type": "text",
        "x": 429,
        "y": 131 - yOffset,
        "width": 45,
        "height": 16,
        "page": 1,
        "section": "Hastalık ve Engellilik Durumu",
        "corners": {
          "bottomLeft": [429, 131 - yOffset],
          "bottomRight": [474, 131 - yOffset],
          "topRight": [474, 147 - yOffset],
          "topLeft": [429, 147 - yOffset]
        }
      },
      {
        "id": `4.${i}-kullanilanmalzeme`,
        "label": "Kullanılan Malzeme",
        "type": "text",
        "x": 482,
        "y": 131 - yOffset,
        "width": 45,
        "height": 16,
        "page": 1,
        "section": "Hastalık ve Engellilik Durumu",
        "corners": {
          "bottomLeft": [482, 131 - yOffset],
          "bottomRight": [527, 131 - yOffset],
          "topRight": [527, 147 - yOffset],
          "topLeft": [482, 147 - yOffset]
        }
      },
      {
        "id": `4.${i}-aciklama`,
        "label": "Açıklama",
        "type": "text",
        "x": 534,
        "y": 131 - yOffset,
        "width": 48,
        "height": 16,
        "page": 1,
        "section": "Hastalık ve Engellilik Durumu",
        "corners": {
          "bottomLeft": [534, 131 - yOffset],
          "bottomRight": [582, 131 - yOffset],
          "topRight": [582, 147 - yOffset],
          "topLeft": [534, 147 - yOffset]
        }
      }
    ];
  }).flat(),
  {
    "id": "5.1-sosyalguvence",
    "label": "Sosyal Güvence",
    "type": "checkbox",
    "x": 31,
    "y": 21,
    "width": 400,
    "height": 20,
    "page": 1,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [31, 21],
      "bottomRight": [431, 21],
      "topRight": [431, 41],
      "topLeft": [31, 41]
    },
    "maxSelections": 1,
    "options": ["YOK", "SSK", "BAĞKUR", "EMEKLİ SANDIĞI", "YEŞİL KART", "DİĞER"],
    "optionMappings": {
      "YOK": { "x": 31, "y": 21, "width": 8, "height": 8 },
      "SSK": { "x": 101, "y": 21, "width": 8, "height": 8 },
      "BAĞKUR": { "x": 166.5, "y": 21, "width": 8, "height": 8 },
      "EMEKLİ SANDIĞI": { "x": 238, "y": 21, "width": 8, "height": 8 },
      "YEŞİL KART": { "x": 328, "y": 21, "width": 8, "height": 8 },
      "DİĞER": { "x": 393.2, "y": 21, "width": 8, "height": 8 }
    }
  },
  {
    "id": "6.1-maas",
    "label": "Maaş (Aylık)",
    "type": "number",
    "x": 62,
    "y": 793,
    "width": 70,
    "height": 12,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        62,
        793
      ],
      "bottomRight": [
        132,
        793
      ],
      "topRight": [
        132,
        805
      ],
      "topLeft": [
        62,
        805
      ]
    }
  },
  {
    "id": "6.1-kirageliri",
    "label": "Kira Geliri (Aylık)",
    "type": "number",
    "x": 62,
    "y": 780,
    "width": 70,
    "height": 12,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        62,
        780
      ],
      "bottomRight": [
        132,
        780
      ],
      "topRight": [
        132,
        792
      ],
      "topLeft": [
        62,
        792
      ]
    }
  },
  {
    "id": "6.1-duzensizgelir",
    "label": "Düzensiz Gelir (Aylık)",
    "type": "number",
    "x": 62,
    "y": 767,
    "width": 70,
    "height": 12,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        62,
        767
      ],
      "bottomRight": [
        132,
        767
      ],
      "topRight": [
        132,
        779
      ],
      "topLeft": [
        62,
        779
      ]
    }
  },
  {
    "id": "6.1-kamuyardimi",
    "label": "Kamu Yardımı (Aylık)",
    "type": "number",
    "x": 62,
    "y": 754,
    "width": 70,
    "height": 12,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        62,
        754
      ],
      "bottomRight": [
        132,
        754
      ],
      "topRight": [
        132,
        766
      ],
      "topLeft": [
        62,
        766
      ]
    }
  },
  {
    "id": "6.1-stkyardimi",
    "label": "STK Yardımı (Aylık)",
    "type": "number",
    "x": 62,
    "y": 740,
    "width": 70,
    "height": 12,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        62,
        740
      ],
      "bottomRight": [
        132,
        740
      ],
      "topRight": [
        132,
        752
      ],
      "topLeft": [
        62,
        752
      ]
    }
  },
  {
    "id": "6.1-digergelirler",
    "label": "Diğer Gelirler (Aylık)",
    "type": "number",
    "x": 62,
    "y": 720,
    "width": 70,
    "height": 12,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        62,
        720
      ],
      "bottomRight": [
        132,
        720
      ],
      "topRight": [
        132,
        732
      ],
      "topLeft": [
        62,
        732
      ]
    }
  },
  {
    "id": "6.1-ayliktoplamgelir",
    "label": "Toplam Gelir (Aylık)",
    "type": "number",
    "x": 62,
    "y": 702,
    "width": 70,
    "height": 12,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        62,
        702
      ],
      "bottomRight": [
        132,
        702
      ],
      "topRight": [
        132,
        714
      ],
      "topLeft": [
        62,
        714
      ]
    }
  },
  {
    "id": "6.2-saglikgiderleri",
    "label": "Sağlık Giderleri (Aylık)",
    "type": "number",
    "x": 190,
    "y": 793,
    "width": 70,
    "height": 12,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        190,
        793
      ],
      "bottomRight": [
        260,
        793
      ],
      "topRight": [
        260,
        805
      ],
      "topLeft": [
        190,
        805
      ]
    }
  },
  {
    "id": "6.2-kiragideri",
    "label": "Kira Gideri (Aylık)",
    "type": "number",
    "x": 190,
    "y": 780,
    "width": 70,
    "height": 12,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        190,
        780
      ],
      "bottomRight": [
        260,
        780
      ],
      "topRight": [
        260,
        792
      ],
      "topLeft": [
        190,
        792
      ]
    }
  },
  {
    "id": "6.2-mutfakgiderleri",
    "label": "Mutfak Giderleri (Aylık)",
    "type": "number",
    "x": 190,
    "y": 767,
    "width": 70,
    "height": 12,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        190,
        767
      ],
      "bottomRight": [
        260,
        767
      ],
      "topRight": [
        260,
        779
      ],
      "topLeft": [
        190,
        779
      ]
    }
  },
  {
    "id": "6.2-egitimgiderleri",
    "label": "Eğitim Giderleri (Aylık)",
    "type": "number",
    "x": 190,
    "y": 754,
    "width": 70,
    "height": 12,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        190,
        754
      ],
      "bottomRight": [
        260,
        754
      ],
      "topRight": [
        260,
        766
      ],
      "topLeft": [
        190,
        766
      ]
    }
  },
  {
    "id": "6.2-faturagiderleri",
    "label": "Fatura Giderleri (Aylık)",
    "type": "number",
    "x": 218,
    "y": 734,
    "width": 70,
    "height": 12,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        218,
        734
      ],
      "bottomRight": [
        288,
        734
      ],
      "topRight": [
        288,
        746
      ],
      "topLeft": [
        218,
        746
      ]
    }
  },
  {
    "id": "6.2-digergiderler",
    "label": "Diğer Giderler (Aylık)",
    "type": "number",
    "x": 190,
    "y": 719,
    "width": 70,
    "height": 12,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        190,
        719
      ],
      "bottomRight": [
        260,
        719
      ],
      "topRight": [
        260,
        731
      ],
      "topLeft": [
        190,
        731
      ]
    }
  },
  {
    "id": "6.2-ayliktoplamgider",
    "label": "Aylık Toplam Gider",
    "type": "number",
    "x": 190,
    "y": 701,
    "width": 70,
    "height": 12,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        190,
        701
      ],
      "bottomRight": [
        260,
        701
      ],
      "topRight": [
        260,
        713
      ],
      "topLeft": [
        190,
        713
      ]
    }
  },
  {
    "id": "6.3-borcdurumu",
    "label": "Borç Durumu (TL)",
    "type": "checkbox",
    "x": 100,
    "y": 400,
    "width": 100,
    "height": 20,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        100,
        400
      ],
      "bottomRight": [
        200,
        400
      ],
      "topRight": [
        200,
        420
      ],
      "topLeft": [
        100,
        420
      ]
    },
    "options": [
      "BORÇ VAR",
      "BORÇ YOK"
    ],
    "optionMappings": {
      "BORÇ VAR": {
        "x": 25,
        "y": 666,
        "width": 16,
        "height": 8
      },
      "BORÇ YOK": {
        "x": 145,
        "y": 666,
        "width": 16,
        "height": 8
      }
    },
    "maxSelections": 1
  },
  {
    "id": "6.3-bankaborcu",
    "label": "Banka Borcu (varsa)",
    "type": "number",
    "x": 77,
    "y": 637,
    "width": 43,
    "height": 10,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        77,
        637
      ],
      "bottomRight": [
        120,
        637
      ],
      "topRight": [
        120,
        647
      ],
      "topLeft": [
        77,
        647
      ]
    }
  },
  {
    "id": "6.3-eldenborcu",
    "label": "Elden Borcu (varsa)",
    "type": "number",
    "x": 77,
    "y": 627,
    "width": 43,
    "height": 10,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        77,
        627
      ],
      "bottomRight": [
        120,
        627
      ],
      "topRight": [
        120,
        637
      ],
      "topLeft": [
        77,
        637
      ]
    }
  },
  {
    "id": "7.1-konutturu",
    "label": "Konut Türü",
    "type": "checkbox",
    "x": 100,
    "y": 400,
    "width": 100,
    "height": 20,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        100,
        400
      ],
      "bottomRight": [
        200,
        400
      ],
      "topRight": [
        200,
        420
      ],
      "topLeft": [
        100,
        420
      ]
    },
    "maxSelections": 1,
    "options": [
      "APARTMAN",
      "MÜSTAKİL",
      "GECEKONDU",
      "DİĞER (çadır-baraka-evsiz...)"
    ],
    "optionMappings": {
      "APARTMAN": {
        "x": 305,
        "y": 794,
        "width": 16,
        "height": 6
      },
      "MÜSTAKİL": {
        "x": 305,
        "y": 783,
        "width": 16,
        "height": 6
      },
      "GECEKONDU": {
        "x": 305,
        "y": 771,
        "width": 16,
        "height": 6
      },
      "DİĞER (çadır-baraka-evsiz...)": {
        "x": 305,
        "y": 760,
        "width": 16,
        "height": 6
      }
    }
  },
  {
    "id": "7.1-konutkimeait",
    "label": "Konut Kime Ait",
    "type": "checkbox",
    "x": 100,
    "y": 400,
    "width": 100,
    "height": 20,
    "page": 2,
    "section": "YENİ",
    "corners": {
      "bottomLeft": [
        100,
        400
      ],
      "bottomRight": [
        200,
        400
      ],
      "topRight": [
        200,
        420
      ],
      "topLeft": [
        100,
        420
      ]
    },
    "options": [
      "KİRACI",
      "EV SAHİBİ",
      "KİRA ÖDEMEDEN OTURUYOR",
      "DİĞER(çadır-baraka-evsiz...)"
    ],
    "optionMappings": {
      "KİRACI": {
        "x": 434,
        "y": 794,
        "width": 16,
        "height": 6
      },
      "EV SAHİBİ": {
        "x": 434,
        "y": 783,
        "width": 16,
        "height": 6
      },
      "KİRA ÖDEMEDEN OTURUYOR": {
        "x": 434,
        "y": 771,
        "width": 16,
        "height": 6
      },
      "DİĞER(çadır-baraka-evsiz...)": {
        "x": 434,
        "y": 760,
        "width": 16,
        "height": 6
      }
    },
    "maxSelections": 1
  },
  {
    "id": "8.1-hanedebulunanesyalar",
    "label": "Hanede Bulunan Eşyalar",
    "type": "checkbox",
    "x": 100,
    "y": 400,
    "width": 100,
    "height": 20,
    "page": 2,
    "section": "Hane Eşya Durumu",
    "corners": {
      "bottomLeft": [
        100,
        400
      ],
      "bottomRight": [
        200,
        400
      ],
      "topRight": [
        200,
        420
      ],
      "topLeft": [
        100,
        420
      ]
    },
    "maxSelections": 10,
    "options": [
      "BUZDOLABI",
      "ÇAMAŞIR MAKİNESİ",
      "BULAŞIK MAKİNESİ",
      "FIRIN",
      "ELEKTRİKLİ SÜPÜRGE",
      "TELEVİZYON",
      "BİLGİSAYAR",
      "YATAK",
      "KOLTUK-KANEPE",
      "HALI-KİLİM"
    ],
    "optionMappings": {
      "BUZDOLABI": {
        "x": 304,
        "y": 717,
        "width": 16,
        "height": 6
      },
      "ÇAMAŞIR MAKİNESİ": {
        "x": 304,
        "y": 709,
        "width": 16,
        "height": 6
      },
      "BULAŞIK MAKİNESİ": {
        "x": 304,
        "y": 701,
        "width": 16,
        "height": 6
      },
      "FIRIN": {
        "x": 304,
        "y": 693,
        "width": 16,
        "height": 6
      },
      "ELEKTRİKLİ SÜPÜRGE": {
        "x": 304,
        "y": 685,
        "width": 16,
        "height": 6
      },
      "TELEVİZYON": {
        "x": 304,
        "y": 677,
        "width": 16,
        "height": 6
      },
      "BİLGİSAYAR": {
        "x": 304,
        "y": 669,
        "width": 16,
        "height": 6
      },
      "YATAK": {
        "x": 304,
        "y": 661,
        "width": 16,
        "height": 6
      },
      "KOLTUK-KANEPE": {
        "x": 304,
        "y": 653,
        "width": 16,
        "height": 6
      },
      "HALI-KİLİM": {
        "x": 304,
        "y": 645,
        "width": 16,
        "height": 6
      }
    }
  },
  {
    "id": "9.1-ihtiyacesyalar",
    "label": "İhtiyaç Olduğu Tespit Edilen Eşyalar",
    "type": "checkbox",
    "x": 100,
    "y": 400,
    "width": 100,
    "height": 20,
    "page": 2,
    "section": "Hane Eşya Durumu",
    "corners": {
      "bottomLeft": [
        100,
        400
      ],
      "bottomRight": [
        200,
        400
      ],
      "topRight": [
        200,
        420
      ],
      "topLeft": [
        100,
        420
      ]
    },
    "maxSelections": 10,
    "options": [
      "BUZDOLABI",
      "ÇAMAŞIR MAKİNESİ",
      "BULAŞIK MAKİNESİ",
      "FIRIN",
      "ELEKTRİKLİ SÜPÜRGE",
      "TELEVİZYON",
      "BİLGİSAYAR",
      "YATAK",
      "KOLTUK-KANEPE",
      "HALI-KİLİM"
    ],
    "optionMappings": {
      "BUZDOLABI": {
        "x": 420,
        "y": 717,
        "width": 16,
        "height": 6
      },
      "ÇAMAŞIR MAKİNESİ": {
        "x": 420,
        "y": 709,
        "width": 16,
        "height": 6
      },
      "BULAŞIK MAKİNESİ": {
        "x": 420,
        "y": 701,
        "width": 16,
        "height": 6
      },
      "FIRIN": {
        "x": 420,
        "y": 693,
        "width": 16,
        "height": 6
      },
      "ELEKTRİKLİ SÜPÜRGE": {
        "x": 420,
        "y": 685,
        "width": 16,
        "height": 6
      },
      "TELEVİZYON": {
        "x": 506,
        "y": 717,
        "width": 16,
        "height": 6
      },
      "BİLGİSAYAR": {
        "x": 506,
        "y": 709,
        "width": 16,
        "height": 6
      },
      "YATAK": {
        "x": 506,
        "y": 701,
        "width": 16,
        "height": 6
      },
      "KOLTUK-KANEPE": {
        "x": 506,
        "y": 693,
        "width": 16,
        "height": 6
      },
      "HALI-KİLİM": {
        "x": 506,
        "y": 685,
        "width": 16,
        "height": 6
      }
    }
  },
  {
    "id": "9.1-aciklama",
    "label": "Açıklama",
    "type": "text",
    "x": 441,
    "y": 635,
    "width": 130.1,
    "height": 30.2,
    "page": 2,
    "section": "Hane Eşya Durumu",
    "corners": {
      "bottomLeft": [
        441,
        635
      ],
      "bottomRight": [
        571.1,
        635
      ],
      "topRight": [
        571.1,
        665.2
      ],
      "topLeft": [
        441,
        665.2
      ]
    }
  }
] as any[];
