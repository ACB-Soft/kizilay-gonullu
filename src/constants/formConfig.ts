export interface FieldConfig {
  id: string;
  label: string;
  type: 'text' | 'checkbox' | 'number' | 'date';
  x: number;
  y: number;
  width: number;
  height: number;
  page: number;
  section: string;
  hidden?: boolean;
  required?: boolean;
  defaultValue?: any;
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
    "x": 408.36,
    "y": 760.25,
    "width": 6,
    "height": 6,
    "page": 1,
    "section": "BAŞVURU BİLGİLERİ",
    "hidden": true,
    "defaultValue": true,
    "corners": {
      "bottomLeft": [
        408.36,
        760.25
      ],
      "bottomRight": [
        414.36,
        760.25
      ],
      "topRight": [
        414.36,
        766.25
      ],
      "topLeft": [
        408.36,
        766.25
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
    "id": "2.0-meslek",
    "label": "Meslek / İş",
    "type": "text",
    "x": 372,
    "y": 724.29,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "KİŞİSEL BİLGİLER",
    "corners": {
      "bottomLeft": [
        372,
        724.29
      ],
      "bottomRight": [
        522,
        724.29
      ],
      "topRight": [
        522,
        737.29
      ],
      "topLeft": [
        372,
        737.29
      ]
    }
  },
  {
    "id": "2.0-calismadurumu",
    "label": "Çalışma Durumu",
    "type": "text",
    "x": 372,
    "y": 709,
    "width": 150,
    "height": 13,
    "page": 1,
    "section": "KİŞİSEL BİLGİLER",
    "corners": {
      "bottomLeft": [
        372,
        709
      ],
      "bottomRight": [
        522,
        709
      ],
      "topRight": [
        522,
        722
      ],
      "topLeft": [
        372,
        722
      ]
    }
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
  }
];
