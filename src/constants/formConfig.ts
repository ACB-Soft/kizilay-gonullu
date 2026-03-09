export interface FieldConfig {
  id: string;
  label: string;
  type: 'text' | 'checkbox';
  x: number;
  y: number;
  page: number;
  section: string;
}

export const FORM_CONFIG: FieldConfig[] = [
  // --- SAYFA 1 ---
  // 1. BAŞVURU KANALI
  { id: 'kan_sosyal_medya', label: 'Sosyal Medya', type: 'checkbox', x: 42, y: 94, page: 1, section: '1. BAŞVURU KANALI' },
  { id: 'kan_dilekce', label: 'Dilekçe/Başvuru Formu', type: 'checkbox', x: 155, y: 94, page: 1, section: '1. BAŞVURU KANALI' },
  { id: 'kan_yonlendirme', label: 'Yönlendirme', type: 'checkbox', x: 320, y: 94, page: 1, section: '1. BAŞVURU KANALI' },
  { id: 'kan_kamu', label: 'Kamu Kurum/Kuruluş', type: 'checkbox', x: 440, y: 94, page: 1, section: '1. BAŞVURU KANALI' },
  { id: 'kan_cagri', label: 'Çağrı Merkezi', type: 'checkbox', x: 575, y: 94, page: 1, section: '1. BAŞVURU KANALI' },
  
  // 2. İHTİYAÇ SAHİBİ BİLGİLERİ
  { id: 'is_adi_soyadi', label: 'Adı Soyadı', type: 'text', x: 215, y: 132, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_tc_no', label: 'T.C. Kimlik No', type: 'text', x: 215, y: 152, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_baba_adi', label: 'Baba Adı', type: 'text', x: 215, y: 172, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_ana_adi', label: 'Ana Adı', type: 'text', x: 215, y: 192, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_dogum_yeri', label: 'Doğum Yeri', type: 'text', x: 215, y: 212, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_dogum_tarihi', label: 'Doğum Tarihi', type: 'text', x: 350, y: 212, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_medeni_durum', label: 'Medeni Durum', type: 'text', x: 215, y: 232, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_cinsiyet', label: 'Cinsiyet', type: 'text', x: 215, y: 252, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_uyruk', label: 'Uyruk', type: 'text', x: 350, y: 252, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  
  { id: 'is_meslek', label: 'Meslek/İş', type: 'text', x: 625, y: 132, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_calisma_durumu', label: 'Çalışma Durumu', type: 'text', x: 625, y: 152, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_gelir', label: 'Aylık Gelir', type: 'text', x: 625, y: 212, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_egitim', label: 'Eğitim Durumu', type: 'text', x: 625, y: 232, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },

  // 2.1 İLETİŞİM - ADRES BİLGİLERİ
  { id: 'adr_cep', label: 'Cep Telefonu', type: 'text', x: 215, y: 295, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },
  { id: 'adr_eposta', label: 'E-Posta', type: 'text', x: 215, y: 315, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },
  { id: 'adr_ilce_il', label: 'İlçe/İl', type: 'text', x: 215, y: 335, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },
  { id: 'adr_mahalle', label: 'Mahalle', type: 'text', x: 625, y: 275, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },
  { id: 'adr_acik', label: 'Açık Adres', type: 'text', x: 625, y: 295, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },

  // --- SAYFA 2 ---
  // 6. HANE GELİR-GİDER DURUMU
  { id: 'gelir_maas', label: 'Maaş Geliri', type: 'text', x: 110, y: 55, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gider_kira', label: 'Kira Gideri', type: 'text', x: 330, y: 70, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  
  // 7. HANE KONUT DURUMU
  { id: 'konut_apartman', label: 'Apartman', type: 'checkbox', x: 535, y: 55, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_mustakil', label: 'Müstakil', type: 'checkbox', x: 535, y: 70, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_gecekondu', label: 'Gecekondu', type: 'checkbox', x: 535, y: 85, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_sahibi', label: 'Ev Sahibi', type: 'checkbox', x: 755, y: 70, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_kiraci', label: 'Kiracı', type: 'checkbox', x: 755, y: 55, page: 2, section: '7. HANE KONUT DURUMU' },

  // --- SAYFA 3 ---
  // AÇIK RIZA FORMU
  { id: 'riza_tc_no', label: 'T.C. Kimlik No (Rıza)', type: 'text', x: 175, y: 475, page: 3, section: 'AÇIK RIZA FORMU' },
  { id: 'riza_adi_soyadi', label: 'Ad Soyad (Rıza)', type: 'text', x: 335, y: 475, page: 3, section: 'AÇIK RIZA FORMU' },
  { id: 'riza_tarih', label: 'Tarih (Rıza)', type: 'text', x: 650, y: 475, page: 3, section: 'AÇIK RIZA FORMU' },
];
