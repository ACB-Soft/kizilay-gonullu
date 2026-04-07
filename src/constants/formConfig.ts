export interface FieldConfig {
  id: string;
  label: string;
  type: 'text' | 'checkbox';
  x: number;
  y: number;
  width: number;
  height: number;
  page: number;
  section: string;
}

export const FORM_CONFIG: FieldConfig[] = [
  // --- SAYFA 1 ---
  // 1. BAŞVURU KANALI
  { id: 'kan_sosyal_medya', label: 'Sosyal Medya', type: 'checkbox', x: 42, y: 748, width: 10, height: 10, page: 1, section: '1. BAŞVURU KANALI' },
  { id: 'kan_dilekce', label: 'Dilekçe/Başvuru Formu', type: 'checkbox', x: 155, y: 748, width: 10, height: 10, page: 1, section: '1. BAŞVURU KANALI' },
  { id: 'kan_yonlendirme', label: 'Yönlendirme', type: 'checkbox', x: 320, y: 748, width: 10, height: 10, page: 1, section: '1. BAŞVURU KANALI' },
  { id: 'kan_kamu', label: 'Kamu Kurum/Kuruluş', type: 'checkbox', x: 440, y: 748, width: 10, height: 10, page: 1, section: '1. BAŞVURU KANALI' },
  { id: 'kan_cagri', label: 'Çağrı Merkezi', type: 'checkbox', x: 575, y: 748, width: 10, height: 10, page: 1, section: '1. BAŞVURU KANALI' },
  { id: 'kan_diger', label: 'Diğer', type: 'text', x: 680, y: 748, width: 48, height: 12, page: 1, section: '1. BAŞVURU KANALI' },
  
  // 2. İHTİYAÇ SAHİBİ BİLGİLERİ
  { id: 'is_adi_soyadi', label: 'Adı Soyadı', type: 'text', x: 215, y: 710, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_tc_no', label: 'T.C. Kimlik No', type: 'text', x: 215, y: 690, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_baba_adi', label: 'Baba Adı', type: 'text', x: 215, y: 670, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_ana_adi', label: 'Ana Adı', type: 'text', x: 215, y: 650, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_dogum_yeri', label: 'Doğum Yeri', type: 'text', x: 215, y: 630, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_dogum_tarihi', label: 'Doğum Tarihi', type: 'text', x: 350, y: 630, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_medeni_durum', label: 'Medeni Durum', type: 'text', x: 215, y: 610, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_cinsiyet', label: 'Cinsiyet', type: 'text', x: 215, y: 590, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_uyruk', label: 'Uyruk', type: 'text', x: 350, y: 590, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  
  { id: 'is_meslek', label: 'Meslek/İş', type: 'text', x: 625, y: 710, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_calisma_durumu', label: 'Çalışma Durumu', type: 'text', x: 625, y: 690, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_calismiyorsa_nedeni', label: 'Çalışmıyorsa Nedeni', type: 'text', x: 625, y: 670, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_gelir', label: 'Aylık Gelir', type: 'text', x: 625, y: 630, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_egitim', label: 'Eğitim Durumu', type: 'text', x: 625, y: 610, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_beden', label: 'Beden', type: 'text', x: 625, y: 590, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_giyim', label: 'Giyim', type: 'text', x: 700, y: 590, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_ayakkabi', label: 'Ayakkabı', type: 'text', x: 775, y: 590, width: 48, height: 12, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },

  // 2.1 İLETİŞİM - ADRES BİLGİLERİ
  { id: 'adr_ev_tel', label: 'Ev Telefonu', type: 'text', x: 215, y: 567, width: 48, height: 12, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },
  { id: 'adr_cep', label: 'Cep Telefonu', type: 'text', x: 215, y: 547, width: 48, height: 12, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },
  { id: 'adr_eposta', label: 'E-Posta', type: 'text', x: 215, y: 527, width: 48, height: 12, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },
  { id: 'adr_ilce_il', label: 'İlçe/İl', type: 'text', x: 215, y: 507, width: 48, height: 12, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },
  { id: 'adr_mahalle', label: 'Mahalle', type: 'text', x: 625, y: 567, width: 48, height: 12, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },
  { id: 'adr_acik', label: 'Açık Adres', type: 'text', x: 625, y: 547, width: 48, height: 12, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },

  // 2.2 VASİ/VELİ/KAYYIM BİLGİLERİ
  { id: 'vasi_adi_soyadi', label: 'Adı Soyadı', type: 'text', x: 215, y: 472, width: 48, height: 12, page: 1, section: '2.2 VASİ/VELİ/KAYYIM BİLGİLERİ' },
  { id: 'vasi_tc_no', label: 'T.C. Kimlik No', type: 'text', x: 215, y: 452, width: 48, height: 12, page: 1, section: '2.2 VASİ/VELİ/KAYYIM BİLGİLERİ' },
  { id: 'vasi_telefon', label: 'Telefon', type: 'text', x: 215, y: 432, width: 48, height: 12, page: 1, section: '2.2 VASİ/VELİ/KAYYIM BİLGİLERİ' },
  { id: 'vasi_acik_adres', label: 'Açık Adres', type: 'text', x: 625, y: 472, width: 48, height: 12, page: 1, section: '2.2 VASİ/VELİ/KAYYIM BİLGİLERİ' },
  { id: 'vasi_il_ilce', label: 'İl/İlçe', type: 'text', x: 625, y: 452, width: 48, height: 12, page: 1, section: '2.2 VASİ/VELİ/KAYYIM BİLGİLERİ' },

  // 2.3 ULAŞILAMADIĞINDA İRTİBAT KURULACAK KİŞİ BİLGİLERİ
  { id: 'irtibat_adi_soyadi', label: 'Adı Soyadı', type: 'text', x: 215, y: 392, width: 48, height: 12, page: 1, section: '2.3 İRTİBAT KURULACAK KİŞİ BİLGİLERİ' },
  { id: 'irtibat_tc_no', label: 'T.C. Kimlik No', type: 'text', x: 215, y: 372, width: 48, height: 12, page: 1, section: '2.3 İRTİBAT KURULACAK KİŞİ BİLGİLERİ' },
  { id: 'irtibat_telefon', label: 'Telefon', type: 'text', x: 215, y: 352, width: 48, height: 12, page: 1, section: '2.3 İRTİBAT KURULACAK KİŞİ BİLGİLERİ' },
  { id: 'irtibat_acik_adres', label: 'Açık Adres', type: 'text', x: 625, y: 392, width: 48, height: 12, page: 1, section: '2.3 İRTİBAT KURULACAK KİŞİ BİLGİLERİ' },
  { id: 'irtibat_il_ilce', label: 'İl/İlçe', type: 'text', x: 625, y: 372, width: 48, height: 12, page: 1, section: '2.3 İRTİBAT KURULACAK KİŞİ BİLGİLERİ' },

  // 3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ (Kişi 1)
  { id: 'hane_kisi1_adi_soyadi', label: 'Kişi 1 Adı Soyadı', type: 'text', x: 45, y: 287, width: 48, height: 12, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_tc_no', label: 'Kişi 1 T.C. Kimlik No', type: 'text', x: 155, y: 287, width: 48, height: 12, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_yakinligi', label: 'Kişi 1 Yakınlığı', type: 'text', x: 245, y: 287, width: 48, height: 12, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_cinsiyet', label: 'Kişi 1 Cinsiyet', type: 'text', x: 315, y: 287, width: 48, height: 12, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_dogum_tarihi', label: 'Kişi 1 Doğum Tarihi', type: 'text', x: 385, y: 287, width: 48, height: 12, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_medeni_hali', label: 'Kişi 1 Medeni Hali', type: 'text', x: 475, y: 287, width: 48, height: 12, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_egitim', label: 'Kişi 1 Eğitim Durumu', type: 'text', x: 555, y: 287, width: 48, height: 12, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_meslek', label: 'Kişi 1 Mesleği', type: 'text', x: 635, y: 287, width: 48, height: 12, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_calisma', label: 'Kişi 1 Çalışma Durumu', type: 'text', x: 715, y: 287, width: 48, height: 12, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_gelir', label: 'Kişi 1 Aylık Geliri', type: 'text', x: 795, y: 287, width: 48, height: 12, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },

  // 4. HASTALIK ve ENGELLİLİK DURUMU
  { id: 'hastalik_adi_soyadi', label: 'Hasta/Engelli Adı Soyadı', type: 'text', x: 45, y: 121, width: 48, height: 12, page: 1, section: '4. HASTALIK ve ENGELLİLİK DURUMU' },
  { id: 'hastalik_teshisi', label: 'Hastalık Teşhisi', type: 'text', x: 155, y: 121, width: 48, height: 12, page: 1, section: '4. HASTALIK ve ENGELLİLİK DURUMU' },
  { id: 'hastalik_turu', label: 'Engellilik Türü', type: 'text', x: 265, y: 121, width: 48, height: 12, page: 1, section: '4. HASTALIK ve ENGELLİLİK DURUMU' },
  { id: 'hastalik_durumu', label: 'Engellilik Durumu', type: 'text', x: 375, y: 121, width: 48, height: 12, page: 1, section: '4. HASTALIK ve ENGELLİLİK DURUMU' },
  { id: 'hastalik_derecesi', label: 'Engellilik Derecesi', type: 'text', x: 485, y: 121, width: 48, height: 12, page: 1, section: '4. HASTALIK ve ENGELLİLİK DURUMU' },
  { id: 'hastalik_ilac', label: 'Kullanılan İlaç', type: 'text', x: 595, y: 121, width: 48, height: 12, page: 1, section: '4. HASTALIK ve ENGELLİLİK DURUMU' },
  { id: 'hastalik_cihaz', label: 'Kullanılan Araç/Cihaz', type: 'text', x: 705, y: 121, width: 48, height: 12, page: 1, section: '4. HASTALIK ve ENGELLİLİK DURUMU' },

  // 5. SOSYAL GÜVENCE DURUMU
  { id: 'guvence_yok', label: 'Yok', type: 'checkbox', x: 125, y: 36, width: 10, height: 10, page: 1, section: '5. SOSYAL GÜVENCE DURUMU' },
  { id: 'guvence_ssk', label: 'SSK', type: 'checkbox', x: 185, y: 36, width: 10, height: 10, page: 1, section: '5. SOSYAL GÜVENCE DURUMU' },
  { id: 'guvence_bagkur', label: 'Bağkur', type: 'checkbox', x: 245, y: 36, width: 10, height: 10, page: 1, section: '5. SOSYAL GÜVENCE DURUMU' },
  { id: 'guvence_emekli', label: 'Emekli Sandığı', type: 'checkbox', x: 325, y: 36, width: 10, height: 10, page: 1, section: '5. SOSYAL GÜVENCE DURUMU' },
  { id: 'guvence_yesil_kart', label: 'Yeşil Kart', type: 'checkbox', x: 435, y: 36, width: 10, height: 10, page: 1, section: '5. SOSYAL GÜVENCE DURUMU' },
  { id: 'guvence_diger', label: 'Diğer', type: 'text', x: 555, y: 36, width: 48, height: 12, page: 1, section: '5. SOSYAL GÜVENCE DURUMU' },

  // --- SAYFA 2 ---
  // 6. HANE GELİR-GİDER DURUMU
  { id: 'gelir_maas', label: 'Maaş Geliri', type: 'text', x: 110, y: 787, width: 48, height: 12, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gelir_kira', label: 'Kira Geliri', type: 'text', x: 110, y: 772, width: 48, height: 12, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gelir_duzensiz', label: 'Düzensiz Gelir', type: 'text', x: 110, y: 757, width: 48, height: 12, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gelir_kamu', label: 'Kamu Geliri', type: 'text', x: 110, y: 742, width: 48, height: 12, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gelir_diger', label: 'Diğer Gelir', type: 'text', x: 110, y: 727, width: 48, height: 12, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gelir_toplam', label: 'Toplam Gelir', type: 'text', x: 110, y: 712, width: 48, height: 12, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  
  { id: 'gider_saglik', label: 'Sağlık Gideri', type: 'text', x: 330, y: 787, width: 48, height: 12, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gider_kira', label: 'Kira Gideri', type: 'text', x: 330, y: 772, width: 48, height: 12, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gider_mutfak', label: 'Mutfak Gideri', type: 'text', x: 330, y: 757, width: 48, height: 12, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gider_egitim', label: 'Eğitim Gideri', type: 'text', x: 330, y: 742, width: 48, height: 12, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gider_diger', label: 'Diğer Gider', type: 'text', x: 330, y: 727, width: 48, height: 12, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gider_toplam', label: 'Toplam Gider', type: 'text', x: 330, y: 712, width: 48, height: 12, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },

  { id: 'borc_var', label: 'Borç Var', type: 'checkbox', x: 110, y: 687, width: 10, height: 10, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'borc_yok', label: 'Borç Yok', type: 'checkbox', x: 160, y: 687, width: 10, height: 10, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'borc_miktari', label: 'Aylık Borç Miktarı', type: 'text', x: 330, y: 687, width: 48, height: 12, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },

  // 7. HANE KONUT DURUMU
  { id: 'konut_apartman', label: 'Apartman', type: 'checkbox', x: 535, y: 787, width: 10, height: 10, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_mustakil', label: 'Müstakil', type: 'checkbox', x: 535, y: 772, width: 10, height: 10, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_gecekondu', label: 'Gecekondu', type: 'checkbox', x: 535, y: 757, width: 10, height: 10, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_diger_tur', label: 'Diğer Konut Türü', type: 'text', x: 535, y: 742, width: 48, height: 12, page: 2, section: '7. HANE KONUT DURUMU' },
  
  { id: 'konut_kiraci', label: 'Kiracı', type: 'checkbox', x: 755, y: 787, width: 10, height: 10, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_sahibi', label: 'Ev Sahibi', type: 'checkbox', x: 755, y: 772, width: 10, height: 10, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_kira_odemeden', label: 'Kira Ödemeden Oturuyor', type: 'checkbox', x: 755, y: 757, width: 10, height: 10, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_diger_durum', label: 'Diğer Oturma Durumu', type: 'text', x: 755, y: 742, width: 48, height: 12, page: 2, section: '7. HANE KONUT DURUMU' },

  // 8. HANEDE BULUNAN EŞYALAR
  { id: 'esya_buzdolabi', label: 'Buzdolabı', type: 'checkbox', x: 115, y: 627, width: 10, height: 10, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_camasir', label: 'Çamaşır Mak.', type: 'checkbox', x: 115, y: 612, width: 10, height: 10, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_bulasik', label: 'Bulaşık Mak.', type: 'checkbox', x: 115, y: 597, width: 10, height: 10, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_firin', label: 'Fırın', type: 'checkbox', x: 115, y: 582, width: 10, height: 10, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_supurge', label: 'Elektrikli Süp.', type: 'checkbox', x: 115, y: 567, width: 10, height: 10, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_tv', label: 'TV', type: 'checkbox', x: 265, y: 627, width: 10, height: 10, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_bilgisayar', label: 'Bilgisayar', type: 'checkbox', x: 265, y: 612, width: 10, height: 10, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_yatak', label: 'Yatak', type: 'checkbox', x: 265, y: 597, width: 10, height: 10, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_koltuk', label: 'Koltuk-Kanepe', type: 'checkbox', x: 265, y: 582, width: 10, height: 10, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_hali', label: 'Halı-Kilim', type: 'checkbox', x: 265, y: 567, width: 10, height: 10, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_diger', label: 'Diğer Eşyalar', type: 'text', x: 115, y: 547, width: 48, height: 12, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },

  // 9. İHTİYAÇ TESPİT EDİLEN EŞYALAR
  { id: 'ihtiyac_buzdolabi', label: 'Buzdolabı', type: 'checkbox', x: 535, y: 627, width: 10, height: 10, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_camasir', label: 'Çamaşır Mak.', type: 'checkbox', x: 535, y: 612, width: 10, height: 10, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_bulasik', label: 'Bulaşık Mak.', type: 'checkbox', x: 535, y: 597, width: 10, height: 10, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_firin', label: 'Fırın', type: 'checkbox', x: 535, y: 582, width: 10, height: 10, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_supurge', label: 'Elektrikli Süp.', type: 'checkbox', x: 535, y: 567, width: 10, height: 10, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_tv', label: 'TV', type: 'checkbox', x: 685, y: 627, width: 10, height: 10, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_bilgisayar', label: 'Bilgisayar', type: 'checkbox', x: 685, y: 612, width: 10, height: 10, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_yatak', label: 'Yatak', type: 'checkbox', x: 685, y: 597, width: 10, height: 10, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_koltuk', label: 'Koltuk-Kanepe', type: 'checkbox', x: 685, y: 582, width: 10, height: 10, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_hali', label: 'Halı-Kilim', type: 'checkbox', x: 685, y: 567, width: 10, height: 10, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_diger', label: 'Diğer İhtiyaçlar', type: 'text', x: 535, y: 547, width: 48, height: 12, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_aciklama', label: 'Açıklama', type: 'text', x: 535, y: 527, width: 48, height: 12, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },

  // 10. DİĞER KURUM YARDIMLARI
  { id: 'yardim_yararlaniyor', label: 'Yararlanıyor', type: 'checkbox', x: 155, y: 457, width: 10, height: 10, page: 2, section: '10. DİĞER KURUM YARDIMLARI' },
  { id: 'yardim_yararlanmiyor', label: 'Yararlanmıyor', type: 'checkbox', x: 235, y: 457, width: 10, height: 10, page: 2, section: '10. DİĞER KURUM YARDIMLARI' },
  { id: 'yardim_kurum1_adi', label: '1. Kurum Adı', type: 'text', x: 115, y: 427, width: 48, height: 12, page: 2, section: '10. DİĞER KURUM YARDIMLARI' },
  { id: 'yardim_kurum1_turu', label: '1. Yardım Türü', type: 'text', x: 315, y: 427, width: 48, height: 12, page: 2, section: '10. DİĞER KURUM YARDIMLARI' },
  { id: 'yardim_kurum1_miktari', label: '1. Yardım Miktarı', type: 'text', x: 515, y: 427, width: 48, height: 12, page: 2, section: '10. DİĞER KURUM YARDIMLARI' },
];
