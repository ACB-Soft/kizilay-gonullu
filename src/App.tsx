import React, { useState } from 'react';
import { format } from 'date-fns';
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
  Trash2,
  FileDown,
  Save
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FORM_CONFIG } from './constants/formConfig';

// --- Types ---
interface FormData {
  [key: string]: any;
}

const initialData: FormData = {};

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

const Input = ({ label, value, onChange, type = "text", placeholder = "" }: any) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-xs font-bold text-gray-600 uppercase tracking-tight">{label}</label>
    <input 
      type={type}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm"
    />
  </div>
);

const Checkbox = ({ label, checked, onChange }: any) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${checked ? 'bg-red-600 border-red-600' : 'border-gray-300 group-hover:border-red-400'}`}>
      {checked && <Check size={14} className="text-white" />}
    </div>
    <span className="text-sm text-gray-700 font-medium">{label}</span>
    <input type="checkbox" className="hidden" checked={checked || false} onChange={(e) => onChange(e.target.checked)} />
  </label>
);

export default function App() {
  const [view, setView] = useState<'home' | 'form' | 'result' | 'help'>('home');
  const [formData, setFormData] = useState<FormData>(initialData);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  const sections = Array.from(new Set(FORM_CONFIG.map(f => f.section)));
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const currentSection = sections[currentSectionIndex];
  const fieldsInCurrentSection = FORM_CONFIG.filter(f => f.section === currentSection);

  const updateField = (id: string, value: any) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const { PDFDocument, rgb, StandardFonts } = (window as any).PDFLib;
      const pdfDoc = await PDFDocument.create();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

      const pageImages = ['sayfa_1.jpg', 'sayfa_2.jpg', 'sayfa_3.jpg'];
      
      for (let i = 0; i < pageImages.length; i++) {
        const imgUrl = pageImages[i];
        try {
          const imgBytes = await fetch(imgUrl).then(res => {
            if (!res.ok) throw new Error(`${imgUrl} not found`);
            return res.arrayBuffer();
          });
          const image = await pdfDoc.embedJpg(imgBytes);
          const page = pdfDoc.addPage([image.width, image.height]);
          page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });

          const fieldsOnThisPage = FORM_CONFIG.filter(f => f.page === i + 1);
          fieldsOnThisPage.forEach(field => {
            const value = formData[field.id];
            if (value === undefined || value === '') return;

            const pdfY = image.height - field.y;

            if (field.type === 'text') {
              page.drawText(String(value), {
                x: field.x,
                y: pdfY,
                size: 10,
                font: font,
                color: rgb(0, 0, 0),
              });
            } else if (field.type === 'checkbox' && value === true) {
              page.drawText('X', {
                x: field.x - 4,
                y: pdfY - 4,
                size: 12,
                font: font,
                color: rgb(0, 0, 0),
              });
            }
          });
        } catch (err) {
          console.warn(`Page ${i+1} could not be loaded:`, err);
        }
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `Kizilay_Formu_${formData.is_tc_no || 'Yeni'}.pdf`;
      link.click();
      setView('result');
    } catch (error) {
      console.error('PDF Error:', error);
      alert('PDF oluşturulurken hata oluştu. Lütfen görsellerin doğru yüklendiğinden emin olun.');
    } finally {
      setIsGenerating(false);
    }
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
                    src="kizilay_logo.svg" 
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

      {/* Header */}
      <header className="flex-none bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between shadow-sm z-50">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 flex items-center justify-center">
            <img 
              src="kizilay_logo.svg" 
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
              if (window.confirm('Formu kapatmak istediğinize emin misiniz?')) {
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
                onClick={() => {
                  setFormData({});
                  setCurrentSectionIndex(0);
                  setView('form');
                }}
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
                <p className="text-gray-500 max-w-xs mx-auto">Form başarıyla oluşturuldu.</p>
              </div>

              <div className="w-full space-y-4">
                <button 
                  onClick={generatePDF}
                  disabled={isGenerating}
                  className="w-full py-5 bg-red-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-red-200 flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
                >
                  {isGenerating ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" /> : <Download size={24} />}
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
              <StepIndicator currentStep={currentSectionIndex} steps={sections} />

              <div className="mt-6 pb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSection}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="space-y-6">
                      <div className="bg-red-50 p-6 rounded-3xl border border-red-100 mb-6">
                        <h2 className="text-xl font-black text-red-700 mb-2 flex items-center gap-2 uppercase">
                          {currentSection}
                        </h2>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {fieldsInCurrentSection.map(field => (
                          <div key={field.id}>
                            {field.type === 'text' ? (
                              <Input 
                                label={field.label} 
                                value={formData[field.id]} 
                                onChange={(v: string) => updateField(field.id, v)} 
                              />
                            ) : (
                              <div className="pt-6">
                                <Checkbox 
                                  label={field.label} 
                                  checked={formData[field.id]} 
                                  onChange={(v: boolean) => updateField(field.id, v)} 
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="mt-12 flex justify-between gap-4">
                  <button
                    onClick={() => setCurrentSectionIndex(prev => Math.max(0, prev - 1))}
                    className={`flex-1 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${
                      currentSectionIndex === 0 ? 'bg-gray-50 text-gray-300 cursor-not-allowed' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    disabled={currentSectionIndex === 0}
                  >
                    <ChevronLeft size={20} /> Geri
                  </button>
                  
                  {currentSectionIndex < sections.length - 1 ? (
                    <button
                      onClick={() => setCurrentSectionIndex(prev => prev + 1)}
                      className="flex-1 py-4 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-100"
                    >
                      İleri <ChevronRight size={20} />
                    </button>
                  ) : (
                    <button
                      onClick={generatePDF}
                      disabled={isGenerating}
                      className="flex-1 py-4 bg-black text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      {isGenerating ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" /> : <Save size={20} />}
                      Tamamla ve İndir
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
