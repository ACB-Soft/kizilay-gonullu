/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { 
  Heart, 
  User, 
  MapPin, 
  Users, 
  Stethoscope, 
  Wallet, 
  Home, 
  FileText, 
  ChevronRight, 
  ChevronLeft, 
  Download,
  CheckCircle2,
  AlertCircle,
  Check,
  HelpCircle,
  Info,
  Menu,
  X,
  Plus,
  Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

interface HouseholdMember {
  id: string;
  name: string;
  tc: string;
  relation: string;
  gender: 'KADIN' | 'ERKEK';
  birthDate: string;
  maritalStatus: string;
  education: string;
  job: string;
  workStatus: 'ÇALIŞIYOR' | 'ÇALIŞMIYOR';
  income: string;
  size: string;
}

interface DisabilityInfo {
  id: string;
  name: string;
  diagnosis: string;
  type: string[];
  status: 'GEÇİCİ' | 'SÜREKLİ';
  degree: string;
  medication: string;
  device: string;
  material: string;
  note: string;
}

interface FormData {
  // Section 1: Application
  applicationChannel: string;
  isUrgent: boolean;
  isConfidential: boolean;
  
  // Section 2: Applicant
  name: string;
  tc: string;
  fatherName: string;
  motherName: string;
  birthPlace: string;
  birthDate: string;
  maritalStatus: string;
  gender: string;
  nationality: string;
  job: string;
  workStatus: string;
  workReason: string;
  monthlyIncome: string;
  education: string;
  clothingSize: string;
  shoeSize: string;

  // Section 2.1: Address
  homePhone: string;
  mobilePhone: string;
  email: string;
  city: string;
  district: string;
  neighborhood: string;
  fullAddress: string;

  // Section 2.2: Guardian
  guardianName: string;
  guardianTc: string;
  guardianPhone: string;
  guardianAddress: string;
  guardianCity: string;

  // Section 2.3: Emergency Contact
  emergencyName: string;
  emergencyTc: string;
  emergencyPhone: string;
  emergencyAddress: string;
  emergencyCity: string;

  // Section 3: Household
  householdMembers: HouseholdMember[];

  // Section 4: Health
  disabilities: DisabilityInfo[];

  // Section 5: Social Security
  socialSecurity: string[];

  // Section 6: Income/Expense
  incomeDetails: {
    salary: string;
    rent: string;
    irregular: string;
    public: string;
    ngo: string;
    other: string;
  };
  expenseDetails: {
    health: string;
    rent: string;
    kitchen: string;
    education: string;
    bills: string;
    other: string;
  };
  debtStatus: 'VAR' | 'YOK';
  debtBank: string;
  debtHand: string;
  debtMonthly: string;

  // Section 7: Housing
  housingType: string;
  housingOwnership: string;
  householdItems: string[];
  neededItems: string[];
  housingNote: string;

  // Section 10: Other Aid
  otherAidStatus: 'EVET' | 'HAYIR' | '';

  // Section 11: Interview
  interviewerName: string;
  interviewDate: string;
}

const initialData: FormData = {
  applicationChannel: '',
  isUrgent: false,
  isConfidential: false,
  name: '',
  tc: '',
  fatherName: '',
  motherName: '',
  birthPlace: '',
  birthDate: '',
  maritalStatus: '',
  gender: '',
  nationality: 'T.C.',
  job: '',
  workStatus: '',
  workReason: '',
  monthlyIncome: '',
  education: '',
  clothingSize: '',
  shoeSize: '',
  homePhone: '',
  mobilePhone: '',
  email: '',
  city: '',
  district: '',
  neighborhood: '',
  fullAddress: '',
  guardianName: '',
  guardianTc: '',
  guardianPhone: '',
  guardianAddress: '',
  guardianCity: '',
  emergencyName: '',
  emergencyTc: '',
  emergencyPhone: '',
  emergencyAddress: '',
  emergencyCity: '',
  householdMembers: [],
  disabilities: [],
  socialSecurity: [],
  incomeDetails: { salary: '', rent: '', irregular: '', public: '', ngo: '', other: '' },
  expenseDetails: { health: '', rent: '', kitchen: '', education: '', bills: '', other: '' },
  debtStatus: 'YOK',
  debtBank: '',
  debtHand: '',
  debtMonthly: '',
  housingType: '',
  housingOwnership: '',
  householdItems: [],
  neededItems: [],
  housingNote: '',
  otherAidStatus: '',
  interviewerName: '',
  interviewDate: format(new Date(), 'yyyy-MM-dd'),
};

// --- Components ---

const StepIndicator = ({ currentStep, steps }: { currentStep: number; steps: string[] }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
        <div 
          className="absolute top-1/2 left-0 h-0.5 bg-red-600 -translate-y-1/2 z-0 transition-all duration-500" 
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
        {steps.map((_, idx) => (
          <div 
            key={idx}
            className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              idx <= currentStep ? 'bg-red-600 text-white shadow-lg scale-110' : 'bg-white text-gray-400 border-2 border-gray-200'
            }`}
          >
            {idx + 1}
          </div>
        ))}
      </div>
      <div className="mt-2 text-center">
        <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
          {steps[currentStep]}
        </span>
      </div>
    </div>
  );
};

// --- Render Helpers ---

const Input = ({ label, value, onChange, type = "text", placeholder = "", isTC = false }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (isTC) {
      // Only allow digits and max 11 chars
      val = val.replace(/\D/g, '').slice(0, 11);
    }
    onChange(val);
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-xs font-bold text-gray-600 uppercase tracking-tight">{label}</label>
      <input 
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm"
      />
    </div>
  );
};

const Select = ({ label, value, onChange, options }: any) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-xs font-bold text-gray-600 uppercase tracking-tight">{label}</label>
    <select 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm appearance-none"
    >
      <option value="">Seçiniz</option>
      {options.map((opt: any) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const Checkbox = ({ label, checked, onChange }: any) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${checked ? 'bg-red-600 border-red-600' : 'border-gray-300 group-hover:border-red-400'}`}>
      {checked && <Check size={14} className="text-white" />}
    </div>
    <span className="text-sm text-gray-700 font-medium">{label}</span>
    <input type="checkbox" className="hidden" checked={checked} onChange={(e) => onChange(e.target.checked)} />
  </label>
);

const Modal = ({ isOpen, onClose, title, children }: any) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl overflow-y-auto max-h-[80vh]"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-black text-gray-900">{title}</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>
          <div className="text-gray-600 text-sm leading-relaxed space-y-4">
            {children}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [view, setView] = useState<'home' | 'form' | 'result' | 'help'>('home');
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const steps = [
    'Başvuru Kanalı',      // 1
    'Kişisel Bilgiler',    // 2 (Kimlik, Vasi, İrtibat dahil)
    'İletişim & Adres',    // 2.1
    'Hane Halkı',          // 3
    'Sağlık & Engel',      // 4
    'Sosyal Güvence',      // 5
    'Gelir & Gider',       // 6
    'Konut Durumu',        // 7
    'Eşya Durumu',         // 8 & 9
    'Diğer Yardımlar',     // 10
    'Görüşme & Belge'      // 11
  ];

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // Complete form
      setView('result');
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      setView('home');
    }
  };

  const startNewForm = () => {
    setFormData(initialData);
    setStep(0);
    setView('form');
  };

  const generatePDF = async () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Try to load the template image, but don't fail if missing
    try {
      const img = new Image();
      img.src = '/form_template.jpg';
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });
      
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();
      doc.addImage(img, 'JPEG', 0, 0, width, height);
    } catch (e) {
      console.warn('Template image not found, generating plain PDF');
      // If template missing, add a title so it's not empty
      doc.setFontSize(16);
      doc.text('Sosyal İnceleme ve İhtiyaç Tespit Formu', 105, 20, { align: 'center' });
    }

    // Set font for text overlay
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);

    // --- COORDINATE MAPPING ---
    
    // Dates
    const iDate = formData.interviewDate ? format(new Date(formData.interviewDate), 'dd.MM.yyyy') : '';
    doc.text(iDate, 150, 30); // İnceleme Tarihi
    doc.text(iDate, 150, 35); // Başvuru Tarihi

      // 1. Başvuru Kanalı
      doc.text(formData.applicationChannel || '', 40, 45);
      if (formData.isUrgent) doc.text('X', 80, 45); // Acil kutucuğu
      if (formData.isConfidential) doc.text('X', 100, 45); // Gizli kutucuğu

      // 2. Kişisel Bilgiler
      doc.text(formData.tc || '', 40, 60);
      doc.text(formData.name || '', 80, 60);
      doc.text(formData.fatherName || '', 40, 65);
      doc.text(formData.motherName || '', 80, 65);
      doc.text(formData.birthPlace || '', 40, 70);
      doc.text(formData.birthDate || '', 80, 70);
      doc.text(formData.maritalStatus || '', 120, 70);
      doc.text(formData.gender || '', 150, 70);
      doc.text(formData.nationality || '', 180, 70);
      doc.text(formData.job || '', 40, 75);
      doc.text(formData.workStatus || '', 80, 75);
      doc.text(formData.monthlyIncome || '', 120, 75);
      doc.text(formData.education || '', 150, 75);
      doc.text(formData.clothingSize || '', 40, 80);
      doc.text(formData.shoeSize || '', 80, 80);

      // 2.1 İletişim
      doc.text(formData.mobilePhone || '', 40, 90);
      doc.text(formData.email || '', 80, 90);
      doc.text(`${formData.fullAddress || ''} ${formData.neighborhood || ''} ${formData.district || ''}/${formData.city || ''}`, 40, 95);

      // 2.2 & 2.3 Vasi/İrtibat
      doc.text(formData.guardianName || '', 40, 105);
      doc.text(formData.guardianPhone || '', 80, 105);
      doc.text(formData.emergencyName || '', 40, 110);
      doc.text(formData.emergencyPhone || '', 80, 110);

      // 3. Hane Halkı
      let yPos = 125;
      formData.householdMembers.forEach((member, i) => {
        if (i > 5) return;
        doc.text(member.name || '', 20, yPos);
        doc.text(member.tc || '', 60, yPos);
        doc.text(member.relation || '', 90, yPos);
        doc.text(member.gender || '', 120, yPos);
        doc.text(member.income || '', 150, yPos);
        yPos += 5;
      });

      // 4. Sağlık
      yPos = 160;
      formData.disabilities.forEach((d, i) => {
        if (i > 3) return;
        doc.text(d.name || '', 20, yPos);
        doc.text(d.diagnosis || '', 60, yPos);
        doc.text(d.degree || '', 100, yPos);
        doc.text(d.medication || '', 130, yPos);
        yPos += 5;
      });

      // 5. Sosyal Güvence
      doc.text(formData.socialSecurity.join(', ') || '', 40, 190);

      // 6. Gelir Gider
      doc.text(formData.incomeDetails.salary || '', 40, 205);
      doc.text(formData.incomeDetails.rent || '', 80, 205);
      doc.text(formData.expenseDetails.rent || '', 40, 210);
      doc.text(formData.expenseDetails.kitchen || '', 80, 210);
      doc.text(formData.expenseDetails.bills || '', 120, 210);
      doc.text(formData.debtStatus || '', 40, 215);
      if (formData.debtStatus === 'VAR') {
        doc.text(formData.debtBank || '', 80, 215);
        doc.text(formData.debtMonthly || '', 120, 215);
      }

      // 7. Konut
      doc.text(formData.housingType || '', 40, 230);
      doc.text(formData.housingOwnership || '', 80, 230);

      // 8 & 9 Eşyalar
      doc.text(formData.householdItems.join(', ') || '', 40, 245);
      doc.text(formData.neededItems.join(', ') || '', 40, 255);

      // 10. Diğer Yardımlar
      if (formData.otherAidStatus === 'EVET') {
        doc.text('Diğer kurumlardan yardım almaktadır.', 40, 270);
      } else {
        doc.text('Sistemde kayıtlı diğer yardım bilgisi bulunmamaktadır.', 40, 270);
      }
      
      // Interviewer
      doc.text(formData.interviewerName || '', 40, 280);

      doc.save(`Kizilay_Basvuru_${(formData.name || 'Isimsiz').replace(/\s+/g, '_')}.pdf`);
  };

  return (
    <div className="h-[100dvh] bg-white font-sans text-gray-900 flex flex-col overflow-hidden">
      {/* Onboarding Overlay */}
      <AnimatePresence>
        {showOnboarding && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-4 text-center"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-sm w-full space-y-6"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-40 h-40 flex items-center justify-center">
                  <img 
                    src="/kizilay_logo.svg" 
                    alt="Türk Kızılay Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-black text-gray-800 uppercase tracking-wide leading-tight">SOSYAL İNCELEME VE<br/>İHTİYAÇ TESPİT FORMU</p>
                </div>
              </div>

              <div className="space-y-4 py-4">
                <div className="grid grid-cols-1 gap-4 text-left">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                      <FileText className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900">Kolay Başvuru</h3>
                      <p className="text-sm text-gray-500">Adım adım soruları yanıtlayarak başvurunuzu tamamlayın.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                      <CheckCircle2 className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900">Hızlı Sonuç</h3>
                      <p className="text-sm text-gray-500">Sistem sizin için resmi PDF formlarını otomatik olarak hazırlar.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <button 
                  onClick={() => setShowOnboarding(false)}
                  className="w-full py-5 bg-red-600 text-white rounded-2xl font-black text-xl shadow-xl shadow-red-100 active:scale-95 transition-all"
                >
                  BAŞLAYALIM
                </button>
                <p className="text-sm font-bold text-gray-500">
                  MMG Bursa Şubesinin Katkılarıyla Hazırlanmıştır.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header - Fixed */}
      <header className="flex-none bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between shadow-sm z-50">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 flex items-center justify-center">
            <img 
              src="/kizilay_logo.svg" 
              alt="Türk Kızılay Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <p className="text-sm md:text-base font-black text-gray-800 uppercase tracking-wide leading-tight mt-0.5">SOSYAL İNCELEME VE<br/>İHTİYAÇ TESPİT FORMU</p>
          </div>
        </div>
        {view === 'form' ? (
          <button 
            onClick={() => {
              if (window.confirm('Formu kapatmak istediğinize emin misiniz? Kaydedilmemiş veriler kaybolabilir.')) {
                setView('home');
              }
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-red-600"
          >
            <X size={28} />
          </button>
        ) : (
          <button 
            onClick={() => setView('help')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <HelpCircle size={28} className="text-gray-600" />
          </button>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 pt-6 pb-24 scroll-smooth">
        <div className="max-w-2xl mx-auto h-full">
          
          {/* HELP VIEW */}
          {view === 'help' && (
            <div className="h-full flex flex-col">
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
                    <Info className="text-red-600" /> Hakkında
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-3xl text-sm text-gray-600 leading-relaxed space-y-4">
                    <p><strong>Türk Kızılay Sosyal İnceleme Sistemi</strong></p>
                    <p>Bu uygulama, Türk Kızılay personeli ve gönüllülerinin saha çalışmalarında sosyal inceleme formlarını dijital ortamda hızlı ve hatasız bir şekilde doldurabilmeleri için geliştirilmiştir.</p>
                    <p>Sistem, girilen verileri otomatik olarak standart FRM.005 formatına dönüştürür ve PDF olarak çıktısını verir.</p>
                    <p className="text-xs text-gray-400">Versiyon 1.0.0</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
                    <HelpCircle className="text-red-600" /> Yardım
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-3xl text-sm text-gray-600 leading-relaxed space-y-4">
                    <h3 className="font-bold text-gray-900">Nasıl Kullanılır?</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Tüm adımları sırasıyla doldurunuz.</li>
                      <li>Zorunlu alanları boş bırakmayınız.</li>
                      <li>En son adımda "PDF Olarak İndir" butonuna basarak formu cihazınıza kaydediniz.</li>
                    </ul>
                    <h3 className="font-bold text-gray-900 mt-4">Sorun Bildirimi</h3>
                    <p>Uygulama ile ilgili sorunlarınız için teknik destek birimi ile iletişime geçiniz.</p>
                  </div>
                </div>
              </div>

              <div className="py-8 text-center space-y-4">
                <p className="text-sm font-bold text-gray-500">
                  MMG Bursa Şubesinin Katkılarıyla Hazırlanmıştır.
                </p>
                <button 
                  onClick={() => setView('home')}
                  className="w-full py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-all"
                >
                  Geri Dön
                </button>
              </div>
            </div>
          )}

          {/* HOME VIEW */}
          {view === 'home' && (
            <div className="h-full flex flex-col items-center justify-center gap-6">
              <button 
                onClick={startNewForm}
                className="w-full p-8 bg-red-600 text-white rounded-3xl shadow-xl shadow-red-100 active:scale-95 transition-all flex flex-col items-center gap-4 group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Plus size={32} />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-black">Yeni Kayıt Oluştur</h2>
                  <p className="text-white/80 text-sm mt-1">Yeni bir sosyal inceleme formu başlat</p>
                </div>
              </button>

              <button 
                onClick={() => alert('Bu özellik yapım aşamasındadır.')}
                className="w-full p-8 bg-white border border-gray-100 text-gray-800 rounded-3xl shadow-lg active:scale-95 transition-all flex flex-col items-center gap-4 group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText size={32} className="text-gray-400" />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-black">Eski Kayıtları İncele</h2>
                  <p className="text-gray-400 text-sm mt-1">Geçmiş başvuruları görüntüle</p>
                </div>
              </button>
            </div>
          )}

          {/* RESULT VIEW */}
          {view === 'result' && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                <CheckCircle2 size={48} />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-black text-gray-900">Başvuru Tamamlandı!</h2>
                <p className="text-gray-500 max-w-xs mx-auto">Form başarıyla oluşturuldu. Aşağıdaki seçeneklerden devam edebilirsiniz.</p>
              </div>

              <div className="w-full space-y-4">
                <button 
                  onClick={generatePDF}
                  className="w-full py-5 bg-red-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-red-200 flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
                >
                  <Download size={24} />
                  PDF OLARAK İNDİR
                </button>
                
                <button 
                  onClick={() => setView('home')}
                  className="w-full py-5 bg-gray-100 text-gray-600 rounded-2xl font-bold text-lg hover:bg-gray-200 active:scale-[0.98] transition-all"
                >
                  ANA EKRANA DÖN
                </button>
              </div>
            </div>
          )}

          {/* FORM VIEW */}
          {view === 'form' && (
            <>
              <StepIndicator currentStep={step} steps={steps} />

              <div className="mt-6 pb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                {/* Step 1: Başvuru Kanalı (Eski Step 1) */}
                {step === 0 && (
                  <div className="space-y-6">
                    <div className="bg-red-50 p-6 rounded-3xl border border-red-100 mb-6">
                      <h2 className="text-xl font-black text-red-700 mb-4 flex items-center gap-2">
                        <FileText size={24} />
                        1. Başvuru Kanalı
                      </h2>
                      <p className="text-sm text-red-800 leading-relaxed opacity-80">
                        Başvurunun alındığı kanalı ve öncelik durumunu belirtiniz.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select 
                        label="Başvuru Kanalı" 
                        value={formData.applicationChannel} 
                        onChange={(v: string) => updateField('applicationChannel', v)}
                        options={['Sosyal Medya', 'Dilekçe', 'Yönlendirme', 'Kamu Kurumu', 'Çağrı Merkezi', 'Diğer']}
                      />
                      <div className="flex items-center gap-4 h-full pt-6">
                        <Checkbox label="Acil Destek" checked={formData.isUrgent} onChange={(v: boolean) => updateField('isUrgent', v)} />
                        <Checkbox label="Gizlilik Kararı" checked={formData.isConfidential} onChange={(v: boolean) => updateField('isConfidential', v)} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Kişisel Bilgiler (Eski Step 1'in devamı + Vasi) */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-black text-red-600 uppercase tracking-widest">2. İhtiyaç Sahibi Bilgileri</h3>
                      <Input label="Adı Soyadı" value={formData.name} onChange={(v: string) => updateField('name', v)} />
                      <Input label="T.C. Kimlik No" value={formData.tc} onChange={(v: string) => updateField('tc', v)} isTC />
                      <div className="grid grid-cols-2 gap-4">
                        <Input label="Baba Adı" value={formData.fatherName} onChange={(v: string) => updateField('fatherName', v)} />
                        <Input label="Ana Adı" value={formData.motherName} onChange={(v: string) => updateField('motherName', v)} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Input label="Doğum Yeri" value={formData.birthPlace} onChange={(v: string) => updateField('birthPlace', v)} />
                        <Input label="Doğum Tarihi" type="date" value={formData.birthDate} onChange={(v: string) => updateField('birthDate', v)} />
                      </div>
                      <Select 
                        label="Medeni Durum" 
                        value={formData.maritalStatus} 
                        onChange={(v: string) => updateField('maritalStatus', v)}
                        options={['Bekar', 'Evli', 'Dul', 'Boşanmış']}
                      />
                    </div>
                    <div className="h-px bg-gray-100" />
                    <div className="space-y-4">
                       <h3 className="text-sm font-black text-red-600 uppercase tracking-widest">2.2. Vasi/Veli/Kayyım Bilgileri</h3>
                       <Input label="Adı Soyadı" value={formData.guardianName} onChange={(v: string) => updateField('guardianName', v)} />
                       <div className="grid grid-cols-2 gap-4">
                         <Input label="T.C. Kimlik No" value={formData.guardianTc} onChange={(v: string) => updateField('guardianTc', v)} isTC />
                         <Input label="Telefon" value={formData.guardianPhone} onChange={(v: string) => updateField('guardianPhone', v)} />
                       </div>
                    </div>
                    <div className="h-px bg-gray-100" />
                    <div className="space-y-4">
                      <h3 className="text-sm font-black text-red-600 uppercase tracking-widest">2.3. İrtibat Kurulacak Kişi</h3>
                      <Input label="Adı Soyadı" value={formData.emergencyName} onChange={(v: string) => updateField('emergencyName', v)} />
                      <div className="grid grid-cols-2 gap-4">
                        <Input label="T.C. Kimlik No" value={formData.emergencyTc} onChange={(v: string) => updateField('emergencyTc', v)} isTC />
                        <Input label="Telefon" value={formData.emergencyPhone} onChange={(v: string) => updateField('emergencyPhone', v)} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: İletişim & Adres (Eski Step 2) */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-black text-red-600 uppercase tracking-widest">2.1. İletişim - Adres Bilgileri</h3>
                      <Input label="Cep Telefonu" value={formData.mobilePhone} onChange={(v: string) => updateField('mobilePhone', v)} placeholder="05xx xxx xx xx" />
                      <Input label="E-posta" type="email" value={formData.email} onChange={(v: string) => updateField('email', v)} />
                      <div className="grid grid-cols-2 gap-4">
                        <Input label="İl" value={formData.city} onChange={(v: string) => updateField('city', v)} />
                        <Input label="İlçe" value={formData.district} onChange={(v: string) => updateField('district', v)} />
                      </div>
                      <Input label="Mahalle" value={formData.neighborhood} onChange={(v: string) => updateField('neighborhood', v)} />
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-gray-600 uppercase tracking-tight">Açık Adres</label>
                        <textarea 
                          value={formData.fullAddress}
                          onChange={(e) => updateField('fullAddress', e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm h-32 resize-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Hane Halkı (Eski Step 4) */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-gray-800">3. Hanede Yaşayan Diğer Kişiler</h2>
                      <button 
                        onClick={() => {
                          const newMember: HouseholdMember = {
                            id: Math.random().toString(36).substr(2, 9),
                            name: '',
                            tc: '',
                            relation: '',
                            gender: 'KADIN',
                            birthDate: '',
                            maritalStatus: '',
                            education: '',
                            job: '',
                            workStatus: 'ÇALIŞMIYOR',
                            income: '',
                            size: ''
                          };
                          updateField('householdMembers', [...formData.householdMembers, newMember]);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-bold shadow-md active:scale-95 transition-all"
                      >
                        <Plus size={16} /> Ekle
                      </button>
                    </div>

                    {formData.householdMembers.length === 0 ? (
                      <div className="text-center py-12 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                        <Users className="mx-auto text-gray-300 mb-3" size={48} />
                        <p className="text-gray-400 text-sm font-medium">Henüz hane halkı eklenmedi.</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {formData.householdMembers.map((member, idx) => (
                          <div key={member.id} className="p-5 bg-white border border-gray-100 rounded-3xl shadow-sm relative group">
                            <button 
                              onClick={() => {
                                const updated = formData.householdMembers.filter(m => m.id !== member.id);
                                updateField('householdMembers', updated);
                              }}
                              className="absolute top-4 right-4 p-2 text-gray-300 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                            <div className="grid grid-cols-1 gap-4">
                              <Input 
                                label={`${idx + 1}. Kişi Adı Soyadı`} 
                                value={member.name} 
                                onChange={(v: string) => {
                                  const updated = [...formData.householdMembers];
                                  updated[idx].name = v;
                                  updateField('householdMembers', updated);
                                }} 
                              />
                              <div className="grid grid-cols-2 gap-4">
                                <Input 
                                  label="T.C. No" 
                                  value={member.tc} 
                                  onChange={(v: string) => {
                                    const updated = [...formData.householdMembers];
                                    updated[idx].tc = v;
                                    updateField('householdMembers', updated);
                                  }} 
                                  isTC
                                />
                                <Select 
                                  label="Yakınlık" 
                                  value={member.relation} 
                                  onChange={(v: string) => {
                                    const updated = [...formData.householdMembers];
                                    updated[idx].relation = v;
                                    updateField('householdMembers', updated);
                                  }}
                                  options={['Eşi', 'Çocuğu', 'Annesi', 'Babası', 'Kardeşi', 'Diğer']}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Step 5: Sağlık & Engel (Eski Step 5) */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold text-gray-800">4. Hastalık ve Engellilik</h2>
                      <button 
                        onClick={() => {
                          const newDisability: DisabilityInfo = {
                            id: Math.random().toString(36).substr(2, 9),
                            name: '',
                            diagnosis: '',
                            type: [],
                            status: 'GEÇİCİ',
                            degree: '',
                            medication: '',
                            device: '',
                            material: '',
                            note: ''
                          };
                          updateField('disabilities', [...formData.disabilities, newDisability]);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-bold shadow-md active:scale-95 transition-all"
                      >
                        <Plus size={16} /> Ekle
                      </button>
                    </div>

                    {formData.disabilities.length === 0 ? (
                      <div className="text-center py-12 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                        <Stethoscope className="mx-auto text-gray-300 mb-3" size={48} />
                        <p className="text-gray-400 text-sm font-medium">Kayıtlı hastalık/engel bilgisi yok.</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {formData.disabilities.map((item, idx) => (
                          <div key={item.id} className="p-5 bg-white border border-gray-100 rounded-3xl shadow-sm relative">
                            <button 
                              onClick={() => {
                                const updated = formData.disabilities.filter(d => d.id !== item.id);
                                updateField('disabilities', updated);
                              }}
                              className="absolute top-4 right-4 p-2 text-gray-300 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                            <div className="space-y-4">
                              <Input 
                                label="Hasta/Engelli Adı Soyadı" 
                                value={item.name} 
                                onChange={(v: string) => {
                                  const updated = [...formData.disabilities];
                                  updated[idx].name = v;
                                  updateField('disabilities', updated);
                                }} 
                              />
                              <Input 
                                label="Hastalık Teşhisi" 
                                value={item.diagnosis} 
                                onChange={(v: string) => {
                                  const updated = [...formData.disabilities];
                                  updated[idx].diagnosis = v;
                                  updateField('disabilities', updated);
                                }} 
                              />
                              <div className="grid grid-cols-2 gap-4">
                                <Select 
                                  label="Durum" 
                                  value={item.status} 
                                  onChange={(v: any) => {
                                    const updated = [...formData.disabilities];
                                    updated[idx].status = v;
                                    updateField('disabilities', updated);
                                  }}
                                  options={['GEÇİCİ', 'SÜREKLİ']}
                                />
                                <Input 
                                  label="Engel Derecesi (%)" 
                                  value={item.degree} 
                                  onChange={(v: string) => {
                                    const updated = [...formData.disabilities];
                                    updated[idx].degree = v;
                                    updateField('disabilities', updated);
                                  }} 
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Step 6: Sosyal Güvence (YENİ) */}
                {step === 5 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-black text-red-600 uppercase tracking-widest">5. Sosyal Güvence Durumu</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {['YOK', 'SSK', 'BAĞKUR', 'EMEKLİ SANDIĞI', 'YEŞİL KART', 'DİĞER'].map(item => (
                          <Checkbox 
                            key={item} 
                            label={item} 
                            checked={formData.socialSecurity.includes(item)} 
                            onChange={(checked: boolean) => {
                              const updated = checked 
                                ? [...formData.socialSecurity, item]
                                : formData.socialSecurity.filter(i => i !== item);
                              updateField('socialSecurity', updated);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 7: Gelir & Gider (Eski Step 6) */}
                {step === 6 && (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-sm font-black text-red-600 uppercase tracking-widest flex items-center gap-2">
                        <Wallet size={18} /> 6. Hane Gelir Durumu (Aylık)
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <Input label="Maaş" value={formData.incomeDetails.salary} onChange={(v: string) => updateField('incomeDetails', { ...formData.incomeDetails, salary: v })} />
                        <Input label="Kira Geliri" value={formData.incomeDetails.rent} onChange={(v: string) => updateField('incomeDetails', { ...formData.incomeDetails, rent: v })} />
                      </div>
                    </div>
                    <div className="h-px bg-gray-100" />
                    <div className="space-y-4">
                      <h3 className="text-sm font-black text-red-600 uppercase tracking-widest flex items-center gap-2">
                        <Download size={18} className="rotate-180" /> 6. Hane Gider Durumu (Aylık)
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <Input label="Kira" value={formData.expenseDetails.rent} onChange={(v: string) => updateField('expenseDetails', { ...formData.expenseDetails, rent: v })} />
                        <Input label="Mutfak" value={formData.expenseDetails.kitchen} onChange={(v: string) => updateField('expenseDetails', { ...formData.expenseDetails, kitchen: v })} />
                      </div>
                      <Input label="Faturalar (Elek, Su, Doğalgaz)" value={formData.expenseDetails.bills} onChange={(v: string) => updateField('expenseDetails', { ...formData.expenseDetails, bills: v })} />
                    </div>
                    <div className="h-px bg-gray-100" />
                    <div className="space-y-4">
                      <h3 className="text-sm font-black text-red-600 uppercase tracking-widest">Borç Durumu</h3>
                      <Select 
                        label="Borç Var mı?" 
                        value={formData.debtStatus} 
                        onChange={(v: any) => updateField('debtStatus', v)}
                        options={['VAR', 'YOK']}
                      />
                      {formData.debtStatus === 'VAR' && (
                        <div className="grid grid-cols-2 gap-4">
                          <Input label="Banka Borcu" value={formData.debtBank} onChange={(v: string) => updateField('debtBank', v)} />
                          <Input label="Aylık Ödeme" value={formData.debtMonthly} onChange={(v: string) => updateField('debtMonthly', v)} />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 8: Konut Durumu (Eski Step 7'nin ilk kısmı) */}
                {step === 7 && (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-sm font-black text-red-600 uppercase tracking-widest flex items-center gap-2">
                        <Home size={18} /> 7. Hane Konut Durumu
                      </h3>
                      <Select 
                        label="Konut Türü" 
                        value={formData.housingType} 
                        onChange={(v: string) => updateField('housingType', v)}
                        options={['Apartman', 'Müstakil', 'Gecekondu', 'Çadır/Baraka', 'Konteyner']}
                      />
                      <Select 
                        label="Oturma Durumu" 
                        value={formData.housingOwnership} 
                        onChange={(v: string) => updateField('housingOwnership', v)}
                        options={['Kiracı', 'Ev Sahibi', 'Kira Ödemeden Oturuyor', 'Diğer']}
                      />
                    </div>
                  </div>
                )}

                {/* Step 9: Eşya Durumu (Eski Step 7'nin devamı + İhtiyaç) */}
                {step === 8 && (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-sm font-black text-red-600 uppercase tracking-widest">8. Hanede Bulunan Eşyalar</h3>
                      <div className="grid grid-cols-2 gap-y-3">
                        {['Buzdolabı', 'Çamaşır Mak.', 'Bulaşık Mak.', 'Fırın', 'TV', 'Bilgisayar', 'Yatak', 'Koltuk'].map(item => (
                          <Checkbox 
                            key={item} 
                            label={item} 
                            checked={formData.householdItems.includes(item)} 
                            onChange={(checked: boolean) => {
                              const updated = checked 
                                ? [...formData.householdItems, item]
                                : formData.householdItems.filter(i => i !== item);
                              updateField('householdItems', updated);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="h-px bg-gray-100" />
                    <div className="space-y-4">
                      <h3 className="text-sm font-black text-red-600 uppercase tracking-widest">9. İhtiyaç Olduğu Tespit Edilen Eşyalar</h3>
                      <div className="grid grid-cols-2 gap-y-3">
                        {['Buzdolabı', 'Çamaşır Mak.', 'Bulaşık Mak.', 'Fırın', 'TV', 'Bilgisayar', 'Yatak', 'Koltuk'].map(item => (
                          <Checkbox 
                            key={`need-${item}`} 
                            label={item} 
                            checked={formData.neededItems.includes(item)} 
                            onChange={(checked: boolean) => {
                              const updated = checked 
                                ? [...formData.neededItems, item]
                                : formData.neededItems.filter(i => i !== item);
                              updateField('neededItems', updated);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 10: Diğer Yardımlar (YENİ) */}
                {step === 9 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-black text-red-600 uppercase tracking-widest">10. Diğer Kurum/Kuruluş Yardımları</h3>
                      <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <p className="text-sm text-gray-500 mb-4">Başka kurum veya kuruluşlardan yardım alınıyor mu?</p>
                        <div className="flex gap-4">
                           <button 
                             onClick={() => updateField('otherAidStatus', 'EVET')}
                             className={`flex-1 py-3 border rounded-xl text-sm font-bold shadow-sm transition-all ${formData.otherAidStatus === 'EVET' ? 'bg-red-600 text-white border-red-600' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}
                           >
                             EVET
                           </button>
                           <button 
                             onClick={() => updateField('otherAidStatus', 'HAYIR')}
                             className={`flex-1 py-3 border rounded-xl text-sm font-bold shadow-sm transition-all ${formData.otherAidStatus === 'HAYIR' ? 'bg-red-600 text-white border-red-600' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}
                           >
                             HAYIR
                           </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 11: Görüşme & Belge (YENİ + Özet) */}
                {step === 10 && (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-sm font-black text-red-600 uppercase tracking-widest">11. Görüşme Bilgileri</h3>
                      <Input 
                        label="Görüşme Yapan Kişi" 
                        value={formData.interviewerName} 
                        onChange={(v: string) => updateField('interviewerName', v)} 
                        placeholder="Ad Soyad Giriniz" 
                      />
                      <Input 
                        label="Tarih" 
                        type="date"
                        value={formData.interviewDate} 
                        onChange={(v: string) => updateField('interviewDate', v)} 
                      />
                    </div>

                    <div className="h-px bg-gray-100" />

                    <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500 font-medium">Başvuran:</span>
                        <span className="font-bold text-gray-900">{formData.name || 'Belirtilmedi'}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500 font-medium">T.C. Kimlik:</span>
                        <span className="font-bold text-gray-900">{formData.tc || 'Belirtilmedi'}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500 font-medium">Hane Sayısı:</span>
                        <span className="font-bold text-gray-900">{formData.householdMembers.length + 1} Kişi</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          </>
        )}
        </div>
      </main>

      {/* Navigation Footer - Fixed */}
      {view === 'form' && (
      <footer className="flex-none bg-white/80 backdrop-blur-lg border-t border-gray-100 p-4 z-40">
        <div className="max-w-2xl mx-auto flex gap-4">
          <button 
            onClick={prevStep}
            disabled={step === 0}
            className={`flex-1 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${step === 0 ? 'bg-gray-50 text-gray-300' : 'bg-gray-100 text-gray-600 active:bg-gray-200'}`}
          >
            <ChevronLeft size={18} /> Geri
          </button>
          <button 
            onClick={nextStep}
            className={`flex-[2] py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${step === steps.length - 1 ? 'bg-red-600 text-white shadow-lg shadow-red-100 active:scale-95' : 'bg-red-600 text-white shadow-lg shadow-red-100 active:scale-95'}`}
          >
            {step === steps.length - 1 ? 'Tamamla' : 'Devam Et'} <ChevronRight size={18} />
          </button>
        </div>
      </footer>
      )}
    </div>
  );
}
