
const baseFields = [
  { id: "adisoyadı", label: "Adı Soyadı", type: "text", x: 27, y: 368, width: 90, height: 16 },
  { id: "tckimlikno", label: "T.C. Kimlik No.", type: "number", x: 128, y: 368, width: 70, height: 16 },
  { id: "basvurunayakinlik", label: "Başvuruna Yakınlık", type: "text", x: 203, y: 368, width: 45, height: 16 },
  { id: "dogumtarihi", label: "Doğum Tarihi", type: "date", x: 289, y: 368, width: 34, height: 16 },
  { id: "medenihali", label: "Medeni Hali", type: "select", x: 324, y: 368, width: 34.2, height: 16, options: ["EVLİ", "BEKAR", "BOŞANMIŞ", "VEFAT"] },
  { id: "egitimdurumu", label: "Eğitim Durumu", type: "select", x: 360, y: 368, width: 50, height: 16, options: ["İLKÖĞRETİM", "LİSE", "ÖNLİSANS", "LİSANS"] },
  { id: "meslegi", label: "Mesleği", type: "text", x: 422, y: 368, width: 30, height: 16 },
  { id: "aylikgeliri", label: "Aylık Geliri", type: "number", x: 506, y: 368, width: 30, height: 16 },
  { id: "bedengiyim", label: "Beden Giyim", type: "select", x: 565, y: 378, width: 20, height: 8 },
  { id: "bedenayakkabi", label: "Ayakkabı", type: "select", x: 565, y: 370.2, width: 20, height: 8, options: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"] },
  { 
    id: "cinsiyet", label: "Cinsiyet", type: "checkbox", x: 114, y: 401, width: 100, height: 20, maxSelections: 1,
    options: ["KADIN", "ERKEK"],
    optionMappings: {
      "KADIN": { x: 256, y: 377, width: 10, height: 7 },
      "ERKEK": { x: 256, y: 368, width: 10, height: 7 }
    }
  },
  { 
    id: "calismadurumu", label: "Çalışma Durumu", type: "checkbox", x: 298, y: 400, width: 100, height: 20, maxSelections: 1,
    options: ["ÇALIŞIYOR", "ÇALIŞMIYOR"],
    optionMappings: {
      "ÇALIŞIYOR": { x: 460, y: 377, width: 10, height: 7 },
      "ÇALIŞMIYOR": { x: 460, y: 368, width: 10, height: 7 }
    }
  }
];

const results = [];
for (let n = 3; n <= 10; n++) {
  const shift = (n - 1) * 19;
  baseFields.forEach(field => {
    const newField = { ...field };
    newField.id = `3.${n}-${field.id}`;
    newField.y = Number((field.y - shift).toFixed(2));
    newField.page = 1;
    newField.section = "Hanede Yaşayan Diğer Kişi Bilgileri";
    
    if (newField.optionMappings) {
      const newMappings = {};
      for (const opt in newField.optionMappings) {
        newMappings[opt] = {
          ...newField.optionMappings[opt],
          y: Number((newField.optionMappings[opt].y - shift).toFixed(2))
        };
      }
      newField.optionMappings = newMappings;
    }
    
    newField.corners = {
      bottomLeft: [newField.x, newField.y],
      bottomRight: [Number((newField.x + newField.width).toFixed(2)), newField.y],
      topRight: [Number((newField.x + newField.width).toFixed(2)), Number((newField.y + newField.height).toFixed(2))],
      topLeft: [newField.x, Number((newField.y + newField.height).toFixed(2))]
    };
    
    results.push(newField);
  });
}

console.log(JSON.stringify(results, null, 2));
