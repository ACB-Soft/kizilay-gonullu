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
  { id: 'kan_diger', label: 'Diğer', type: 'text', x: 680, y: 94, page: 1, section: '1. BAŞVURU KANALI' },
  
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
  { id: 'is_calismiyorsa_nedeni', label: 'Çalışmıyorsa Nedeni', type: 'text', x: 625, y: 172, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_gelir', label: 'Aylık Gelir', type: 'text', x: 625, y: 212, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_egitim', label: 'Eğitim Durumu', type: 'text', x: 625, y: 232, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_beden', label: 'Beden', type: 'text', x: 625, y: 252, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_giyim', label: 'Giyim', type: 'text', x: 700, y: 252, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },
  { id: 'is_ayakkabi', label: 'Ayakkabı', type: 'text', x: 775, y: 252, page: 1, section: '2. İHTİYAÇ SAHİBİ BİLGİLERİ' },

  // 2.1 İLETİŞİM - ADRES BİLGİLERİ
  { id: 'adr_ev_tel', label: 'Ev Telefonu', type: 'text', x: 215, y: 275, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },
  { id: 'adr_cep', label: 'Cep Telefonu', type: 'text', x: 215, y: 295, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },
  { id: 'adr_eposta', label: 'E-Posta', type: 'text', x: 215, y: 315, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },
  { id: 'adr_ilce_il', label: 'İlçe/İl', type: 'text', x: 215, y: 335, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },
  { id: 'adr_mahalle', label: 'Mahalle', type: 'text', x: 625, y: 275, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },
  { id: 'adr_acik', label: 'Açık Adres', type: 'text', x: 625, y: 295, page: 1, section: '2.1 İLETİŞİM - ADRES BİLGİLERİ' },

  // 2.2 VASİ/VELİ/KAYYIM BİLGİLERİ
  { id: 'vasi_adi_soyadi', label: 'Adı Soyadı', type: 'text', x: 215, y: 370, page: 1, section: '2.2 VASİ/VELİ/KAYYIM BİLGİLERİ' },
  { id: 'vasi_tc_no', label: 'T.C. Kimlik No', type: 'text', x: 215, y: 390, page: 1, section: '2.2 VASİ/VELİ/KAYYIM BİLGİLERİ' },
  { id: 'vasi_telefon', label: 'Telefon', type: 'text', x: 215, y: 410, page: 1, section: '2.2 VASİ/VELİ/KAYYIM BİLGİLERİ' },
  { id: 'vasi_acik_adres', label: 'Açık Adres', type: 'text', x: 625, y: 370, page: 1, section: '2.2 VASİ/VELİ/KAYYIM BİLGİLERİ' },
  { id: 'vasi_il_ilce', label: 'İl/İlçe', type: 'text', x: 625, y: 390, page: 1, section: '2.2 VASİ/VELİ/KAYYIM BİLGİLERİ' },

  // 2.3 ULAŞILAMADIĞINDA İRTİBAT KURULACAK KİŞİ BİLGİLERİ
  { id: 'irtibat_adi_soyadi', label: 'Adı Soyadı', type: 'text', x: 215, y: 450, page: 1, section: '2.3 İRTİBAT KURULACAK KİŞİ BİLGİLERİ' },
  { id: 'irtibat_tc_no', label: 'T.C. Kimlik No', type: 'text', x: 215, y: 470, page: 1, section: '2.3 İRTİBAT KURULACAK KİŞİ BİLGİLERİ' },
  { id: 'irtibat_telefon', label: 'Telefon', type: 'text', x: 215, y: 490, page: 1, section: '2.3 İRTİBAT KURULACAK KİŞİ BİLGİLERİ' },
  { id: 'irtibat_acik_adres', label: 'Açık Adres', type: 'text', x: 625, y: 450, page: 1, section: '2.3 İRTİBAT KURULACAK KİŞİ BİLGİLERİ' },
  { id: 'irtibat_il_ilce', label: 'İl/İlçe', type: 'text', x: 625, y: 470, page: 1, section: '2.3 İRTİBAT KURULACAK KİŞİ BİLGİLERİ' },

  // 3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ (Kişi 1)
  { id: 'hane_kisi1_adi_soyadi', label: 'Kişi 1 Adı Soyadı', type: 'text', x: 45, y: 555, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_tc_no', label: 'Kişi 1 T.C. Kimlik No', type: 'text', x: 155, y: 555, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_yakinligi', label: 'Kişi 1 Yakınlığı', type: 'text', x: 245, y: 555, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_cinsiyet', label: 'Kişi 1 Cinsiyet', type: 'text', x: 315, y: 555, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_dogum_tarihi', label: 'Kişi 1 Doğum Tarihi', type: 'text', x: 385, y: 555, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_medeni_hali', label: 'Kişi 1 Medeni Hali', type: 'text', x: 475, y: 555, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_egitim', label: 'Kişi 1 Eğitim Durumu', type: 'text', x: 555, y: 555, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_meslek', label: 'Kişi 1 Mesleği', type: 'text', x: 635, y: 555, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_calisma', label: 'Kişi 1 Çalışma Durumu', type: 'text', x: 715, y: 555, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },
  { id: 'hane_kisi1_gelir', label: 'Kişi 1 Aylık Geliri', type: 'text', x: 795, y: 555, page: 1, section: '3. HANEDE YAŞAYAN DİĞER KİŞİ BİLGİLERİ' },

  // 4. HASTALIK ve ENGELLİLİK DURUMU
  { id: 'hastalik_adi_soyadi', label: 'Hasta/Engelli Adı Soyadı', type: 'text', x: 45, y: 720, page: 1, section: '4. HASTALIK ve ENGELLİLİK DURUMU' },
  { id: 'hastalik_teshisi', label: 'Hastalık Teşhisi', type: 'text', x: 155, y: 720, page: 1, section: '4. HASTALIK ve ENGELLİLİK DURUMU' },
  { id: 'hastalik_turu', label: 'Engellilik Türü', type: 'text', x: 265, y: 720, page: 1, section: '4. HASTALIK ve ENGELLİLİK DURUMU' },
  { id: 'hastalik_durumu', label: 'Engellilik Durumu', type: 'text', x: 375, y: 720, page: 1, section: '4. HASTALIK ve ENGELLİLİK DURUMU' },
  { id: 'hastalik_derecesi', label: 'Engellilik Derecesi', type: 'text', x: 485, y: 720, page: 1, section: '4. HASTALIK ve ENGELLİLİK DURUMU' },
  { id: 'hastalik_ilac', label: 'Kullanılan İlaç', type: 'text', x: 595, y: 720, page: 1, section: '4. HASTALIK ve ENGELLİLİK DURUMU' },
  { id: 'hastalik_cihaz', label: 'Kullanılan Araç/Cihaz', type: 'text', x: 705, y: 720, page: 1, section: '4. HASTALIK ve ENGELLİLİK DURUMU' },

  // 5. SOSYAL GÜVENCE DURUMU
  { id: 'guvence_yok', label: 'Yok', type: 'checkbox', x: 125, y: 805, page: 1, section: '5. SOSYAL GÜVENCE DURUMU' },
  { id: 'guvence_ssk', label: 'SSK', type: 'checkbox', x: 185, y: 805, page: 1, section: '5. SOSYAL GÜVENCE DURUMU' },
  { id: 'guvence_bagkur', label: 'Bağkur', type: 'checkbox', x: 245, y: 805, page: 1, section: '5. SOSYAL GÜVENCE DURUMU' },
  { id: 'guvence_emekli', label: 'Emekli Sandığı', type: 'checkbox', x: 325, y: 805, page: 1, section: '5. SOSYAL GÜVENCE DURUMU' },
  { id: 'guvence_yesil_kart', label: 'Yeşil Kart', type: 'checkbox', x: 435, y: 805, page: 1, section: '5. SOSYAL GÜVENCE DURUMU' },
  { id: 'guvence_diger', label: 'Diğer', type: 'text', x: 555, y: 805, page: 1, section: '5. SOSYAL GÜVENCE DURUMU' },

  // --- SAYFA 2 ---
  // 6. HANE GELİR-GİDER DURUMU
  { id: 'gelir_maas', label: 'Maaş Geliri', type: 'text', x: 110, y: 55, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gelir_kira', label: 'Kira Geliri', type: 'text', x: 110, y: 70, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gelir_duzensiz', label: 'Düzensiz Gelir', type: 'text', x: 110, y: 85, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gelir_kamu', label: 'Kamu Geliri', type: 'text', x: 110, y: 100, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gelir_diger', label: 'Diğer Gelir', type: 'text', x: 110, y: 115, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gelir_toplam', label: 'Toplam Gelir', type: 'text', x: 110, y: 130, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  
  { id: 'gider_saglik', label: 'Sağlık Gideri', type: 'text', x: 330, y: 55, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gider_kira', label: 'Kira Gideri', type: 'text', x: 330, y: 70, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gider_mutfak', label: 'Mutfak Gideri', type: 'text', x: 330, y: 85, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gider_egitim', label: 'Eğitim Gideri', type: 'text', x: 330, y: 100, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gider_diger', label: 'Diğer Gider', type: 'text', x: 330, y: 115, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'gider_toplam', label: 'Toplam Gider', type: 'text', x: 330, y: 130, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },

  { id: 'borc_var', label: 'Borç Var', type: 'checkbox', x: 110, y: 155, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'borc_yok', label: 'Borç Yok', type: 'checkbox', x: 160, y: 155, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },
  { id: 'borc_miktari', label: 'Aylık Borç Miktarı', type: 'text', x: 330, y: 155, page: 2, section: '6. HANE GELİR-GİDER DURUMU' },

  // 7. HANE KONUT DURUMU
  { id: 'konut_apartman', label: 'Apartman', type: 'checkbox', x: 535, y: 55, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_mustakil', label: 'Müstakil', type: 'checkbox', x: 535, y: 70, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_gecekondu', label: 'Gecekondu', type: 'checkbox', x: 535, y: 85, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_diger_tur', label: 'Diğer Konut Türü', type: 'text', x: 535, y: 100, page: 2, section: '7. HANE KONUT DURUMU' },
  
  { id: 'konut_kiraci', label: 'Kiracı', type: 'checkbox', x: 755, y: 55, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_sahibi', label: 'Ev Sahibi', type: 'checkbox', x: 755, y: 70, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_kira_odemeden', label: 'Kira Ödemeden Oturuyor', type: 'checkbox', x: 755, y: 85, page: 2, section: '7. HANE KONUT DURUMU' },
  { id: 'konut_diger_durum', label: 'Diğer Oturma Durumu', type: 'text', x: 755, y: 100, page: 2, section: '7. HANE KONUT DURUMU' },

  // 8. HANEDE BULUNAN EŞYALAR
  { id: 'esya_buzdolabi', label: 'Buzdolabı', type: 'checkbox', x: 115, y: 215, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_camasir', label: 'Çamaşır Mak.', type: 'checkbox', x: 115, y: 230, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_bulasik', label: 'Bulaşık Mak.', type: 'checkbox', x: 115, y: 245, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_firin', label: 'Fırın', type: 'checkbox', x: 115, y: 260, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_supurge', label: 'Elektrikli Süp.', type: 'checkbox', x: 115, y: 275, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_tv', label: 'TV', type: 'checkbox', x: 265, y: 215, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_bilgisayar', label: 'Bilgisayar', type: 'checkbox', x: 265, y: 230, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_yatak', label: 'Yatak', type: 'checkbox', x: 265, y: 245, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_koltuk', label: 'Koltuk-Kanepe', type: 'checkbox', x: 265, y: 260, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_hali', label: 'Halı-Kilim', type: 'checkbox', x: 265, y: 275, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },
  { id: 'esya_diger', label: 'Diğer Eşyalar', type: 'text', x: 115, y: 295, page: 2, section: '8. HANEDE BULUNAN EŞYALAR' },

  // 9. İHTİYAÇ TESPİT EDİLEN EŞYALAR
  { id: 'ihtiyac_buzdolabi', label: 'Buzdolabı', type: 'checkbox', x: 535, y: 215, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_camasir', label: 'Çamaşır Mak.', type: 'checkbox', x: 535, y: 230, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_bulasik', label: 'Bulaşık Mak.', type: 'checkbox', x: 535, y: 245, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_firin', label: 'Fırın', type: 'checkbox', x: 535, y: 260, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_supurge', label: 'Elektrikli Süp.', type: 'checkbox', x: 535, y: 275, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_tv', label: 'TV', type: 'checkbox', x: 685, y: 215, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_bilgisayar', label: 'Bilgisayar', type: 'checkbox', x: 685, y: 230, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_yatak', label: 'Yatak', type: 'checkbox', x: 685, y: 245, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_koltuk', label: 'Koltuk-Kanepe', type: 'checkbox', x: 685, y: 260, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_hali', label: 'Halı-Kilim', type: 'checkbox', x: 685, y: 275, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_diger', label: 'Diğer İhtiyaçlar', type: 'text', x: 535, y: 295, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },
  { id: 'ihtiyac_aciklama', label: 'Açıklama', type: 'text', x: 535, y: 315, page: 2, section: '9. İHTİYAÇ TESPİT EDİLEN EŞYALAR' },

  // 10. DİĞER KURUM YARDIMLARI
  { id: 'yardim_yararlaniyor', label: 'Yararlanıyor', type: 'checkbox', x: 155, y: 385, page: 2, section: '10. DİĞER KURUM YARDIMLARI' },
  { id: 'yardim_yararlanmiyor', label: 'Yararlanmıyor', type: 'checkbox', x: 235, y: 385, page: 2, section: '10. DİĞER KURUM YARDIMLARI' },
  { id: 'yardim_kurum1_adi', label: '1. Kurum Adı', type: 'text', x: 115, y: 415, page: 2, section: '10. DİĞER KURUM YARDIMLARI' },
  { id: 'yardim_kurum1_turu', label: '1. Yardım Türü', type: 'text', x: 315, y: 415, page: 2, section: '10. DİĞER KURUM YARDIMLARI' },
  { id: 'yardim_kurum1_miktari', label: '1. Yardım Miktarı', type: 'text', x: 515, y: 415, page: 2, section: '10. DİĞER KURUM YARDIMLARI' },

  // --- SAYFA 3 ---
  // 11. GÖRÜŞME BİLGİLERİ VE BELGELENDİRME
  { id: 'gorusme_adi_soyadi', label: 'Görüşme Yapan Adı Soyadı', type: 'text', x: 215, y: 55, page: 3, section: '11. GÖRÜŞME BİLGİLERİ VE BELGELENDİRME' },
  { id: 'gorusme_gorevi', label: 'Görevi', type: 'text', x: 215, y: 75, page: 3, section: '11. GÖRÜŞME BİLGİLERİ VE BELGELENDİRME' },
  { id: 'gorusme_gorev_yeri', label: 'Görev Yeri', type: 'text', x: 215, y: 95, page: 3, section: '11. GÖRÜŞME BİLGİLERİ VE BELGELENDİRME' },
  { id: 'gorusme_tarih', label: 'Tarih', type: 'text', x: 625, y: 55, page: 3, section: '11. GÖRÜŞME BİLGİLERİ VE BELGELENDİRME' },
  { id: 'gorusme_yeri', label: 'Görüşme Yeri', type: 'text', x: 625, y: 75, page: 3, section: '11. GÖRÜŞME BİLGİLERİ VE BELGELENDİRME' },

  { id: 'belge_dilekce', label: 'Dilekçe/Başvuru Formu', type: 'checkbox', x: 125, y: 135, page: 3, section: '11. GÖRÜŞME BİLGİLERİ VE BELGELENDİRME' },
  { id: 'belge_kimlik', label: 'Kimlik Belgesi', type: 'checkbox', x: 225, y: 135, page: 3, section: '11. GÖRÜŞME BİLGİLERİ VE BELGELENDİRME' },
  { id: 'belge_riza', label: 'Açık Rıza Formu', type: 'checkbox', x: 325, y: 135, page: 3, section: '11. GÖRÜŞME BİLGİLERİ VE BELGELENDİRME' },
  { id: 'belge_saglik', label: 'Sağlık Raporu', type: 'checkbox', x: 425, y: 135, page: 3, section: '11. GÖRÜŞME BİLGİLERİ VE BELGELENDİRME' },
  { id: 'belge_gelir', label: 'Gelir Belgesi', type: 'checkbox', x: 525, y: 135, page: 3, section: '11. GÖRÜŞME BİLGİLERİ VE BELGELENDİRME' },

  // 12. YARDIM KARARI VE GEREKÇESİ
  { id: 'karar_sahibidir', label: 'İhtiyaç Sahibidir', type: 'checkbox', x: 155, y: 185, page: 3, section: '12. YARDIM KARARI VE GEREKÇESİ' },
  { id: 'karar_sahibi_degildir', label: 'İhtiyaç Sahibi Değildir', type: 'checkbox', x: 255, y: 185, page: 3, section: '12. YARDIM KARARI VE GEREKÇESİ' },
  { id: 'karar_aciklama', label: 'Görüş ve Öneriler', type: 'text', x: 115, y: 215, page: 3, section: '12. YARDIM KARARI VE GEREKÇESİ' },

  // 13. YÖNLENDİRİLEN KURUM/KURULUŞ
  { id: 'yonlendirme_belediye', label: 'Belediye', type: 'checkbox', x: 125, y: 315, page: 3, section: '13. YÖNLENDİRİLEN KURUM/KURULUŞ' },
  { id: 'yonlendirme_sosyal_hizmet', label: 'Sosyal Hizmet Merkezi', type: 'checkbox', x: 225, y: 315, page: 3, section: '13. YÖNLENDİRİLEN KURUM/KURULUŞ' },
  { id: 'yonlendirme_sydv', label: 'Sos. Yard. ve Dayanışma Vakfı', type: 'checkbox', x: 325, y: 315, page: 3, section: '13. YÖNLENDİRİLEN KURUM/KURULUŞ' },
  { id: 'yonlendirme_kizilay', label: 'Türk Kızılay Toplum Merkezi', type: 'checkbox', x: 425, y: 315, page: 3, section: '13. YÖNLENDİRİLEN KURUM/KURULUŞ' },

  // AÇIK RIZA FORMU
  { id: 'riza_onay1', label: 'Aydınlatma Metnini okudum anladım', type: 'checkbox', x: 125, y: 415, page: 3, section: 'AÇIK RIZA FORMU' },
  { id: 'riza_onay2', label: 'Özel nitelikli kişisel verilerin işlenmesine onay', type: 'checkbox', x: 125, y: 435, page: 3, section: 'AÇIK RIZA FORMU' },
  { id: 'riza_onay3', label: 'İletişim kanalları vasıtasıyla ileti gönderilmesine onay', type: 'checkbox', x: 125, y: 455, page: 3, section: 'AÇIK RIZA FORMU' },
  { id: 'riza_tc_no', label: 'T.C. Kimlik No (Rıza)', type: 'text', x: 175, y: 475, page: 3, section: 'AÇIK RIZA FORMU' },
  { id: 'riza_adi_soyadi', label: 'Ad Soyad (Rıza)', type: 'text', x: 335, y: 475, page: 3, section: 'AÇIK RIZA FORMU' },
  { id: 'riza_tarih', label: 'Tarih (Rıza)', type: 'text', x: 650, y: 475, page: 3, section: 'AÇIK RIZA FORMU' },
];
