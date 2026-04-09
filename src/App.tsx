import React, { useState, useRef, useEffect, useMemo } from 'react';
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
  Save,
  Copy,
  RefreshCw,
  ExternalLink,
  Grid,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FORM_CONFIG, FieldConfig } from './constants/formConfig';

// --- Types ---
interface FormData {
  [key: string]: any;
}

const initialData: FormData = {};

// --- Components ---
const StepIndicator = ({ currentStep, steps }: { currentStep: number; steps: string[] }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-end mb-2">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          ADIM {currentStep + 1} / {steps.length}
        </span>
        <span className="text-xs font-bold text-red-600 uppercase tracking-wider text-right max-w-[60%] truncate">
          {steps[currentStep]}
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-red-600 transition-all duration-500 rounded-full" 
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
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
      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm uppercase"
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

const Select = ({ label, value, onChange, options = [] }: any) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-xs font-bold text-gray-600 uppercase tracking-tight">{label}</label>
    <div className="relative">
      <select 
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm uppercase appearance-none cursor-pointer"
      >
        <option value="">SEÇİNİZ</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
        <ChevronRight size={16} className="rotate-90" />
      </div>
    </div>
  </div>
);

export default function App() {
  const [view, setView] = useState<'home' | 'form' | 'result' | 'help' | 'debug'>('home');
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  
  // Handle URL parameters for direct view access (e.g., for opening in new tab)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    if (viewParam === 'debug') {
      setView('debug');
    }
  }, []);

  const [formData, setFormData] = useState<FormData>(() => {
    const initial: FormData = {};
    FORM_CONFIG.forEach(field => {
      if (field.defaultValue !== undefined) {
        initial[field.id] = field.defaultValue;
      }
    });
    return initial;
  });
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [fontData, setFontData] = useState<ArrayBuffer | null>(null);

  const PT_TO_MM = 0.352778;
  const MM_TO_PT = 2.83465;

  const calculateCorners = (x: number, y: number, width: number, height: number) => {
    return {
      bottomLeft: [Number(x.toFixed(2)), Number(y.toFixed(2))] as [number, number],
      bottomRight: [Number((x + width).toFixed(2)), Number(y.toFixed(2))] as [number, number],
      topRight: [Number((x + width).toFixed(2)), Number((y + height).toFixed(2))] as [number, number],
      topLeft: [Number(x.toFixed(2)), Number((y + height).toFixed(2))] as [number, number]
    };
  };

  // Load Turkish compatible font
  useEffect(() => {
    const loadFont = async () => {
      // Multiple CDN sources for Roboto Regular to ensure reliability and bypass CORS issues
      const fontUrls = [
        'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.ttf',
        'https://cdn.jsdelivr.net/npm/roboto-fontface@0.10.0/fonts/roboto/Roboto-Regular.ttf',
        'https://cdnjs.cloudflare.com/ajax/libs/roboto-fontface/0.10.0/fonts/roboto/Roboto-Regular.ttf'
      ];

      for (const url of fontUrls) {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.arrayBuffer();
            setFontData(data);
            console.log(`Font successfully loaded from: ${url}`);
            return;
          }
        } catch (error) {
          // Silent fail for individual URLs, we try the next one
        }
      }
      
      // If all attempts fail, we log a warning instead of a scary error
      // The application will fallback to Helvetica and ASCII conversion automatically
      console.warn('Custom font could not be loaded from any source. Turkish characters will be converted to ASCII for PDF compatibility.');
    };
    loadFont();
  }, []);

  const [debugMode, setDebugMode] = useState(false);
  const [debugPage, setDebugPage] = useState(1);
  const [clickedCoord, setClickedCoord] = useState<{x: number, y: number} | null>(null);
  const [debugFields, setDebugFields] = useState<FieldConfig[]>(FORM_CONFIG);
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null);

  const moveField = (id: string, direction: 'up' | 'down') => {
    setDebugFields(prev => {
      const index = prev.findIndex(f => f.id === id);
      if (index === -1) return prev;
      
      const newFields = [...prev];
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      
      if (targetIndex >= 0 && targetIndex < newFields.length) {
        [newFields[index], newFields[targetIndex]] = [newFields[targetIndex], newFields[index]];
      }
      
      return newFields;
    });
  };
  const debugImageRef = useRef<HTMLImageElement>(null);

  // Keyboard navigation for debug fields
  useEffect(() => {
    if (view !== 'debug' || !selectedFieldId) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const step = e.altKey ? 0.1 : (e.shiftKey ? 10 : 1);
      
      setDebugFields(prev => prev.map(f => {
        if (f.id !== selectedFieldId) return f;
        
        let newX = f.x;
        let newY = f.y;

        switch (e.key) {
          case 'ArrowUp':
            newY = Number((f.y + step).toFixed(2));
            break;
          case 'ArrowDown':
            newY = Number((f.y - step).toFixed(2));
            break;
          case 'ArrowLeft':
            newX = Number((f.x - step).toFixed(2));
            break;
          case 'ArrowRight':
            newX = Number((f.x + step).toFixed(2));
            break;
        }

        return { 
          ...f, 
          x: newX, 
          y: newY, 
          corners: calculateCorners(newX, newY, f.width, f.height) 
        };
      }));

      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [view, selectedFieldId]);

  const getPrefix = (id: string) => id.split('-')[0];
  
  // Group fields by their ID prefix (e.g., "2.0", "2.1")
  const stepGroups = useMemo(() => {
    const visibleFields = debugFields.filter(f => !f.hidden);
    const groups: { id: string; label: string; fields: FieldConfig[] }[] = [];
    
    // Get unique prefixes in order of appearance
    const prefixes: string[] = [];
    visibleFields.forEach(f => {
      const p = getPrefix(f.id);
      if (!prefixes.includes(p)) prefixes.push(p);
    });

    prefixes.forEach(p => {
      const fields = visibleFields.filter(f => getPrefix(f.id) === p);
      
      // Map prefix to specific labels
      let label = fields[0].section;
      if (p === '1.0') label = "Başvuru Kanalı";
      else if (p === '2.0') label = "İhtiyaç Sahibi Bilgileri";
      else if (p === '2.1') label = "İletişim - Adres Bilgileri";
      else if (p === '2.2') label = "Vasi/Veli/Kayyım Bilgileri";
      else if (p === '2.3') label = "Ulaşılamadığında İrtibat Kurulacak Kişi Bİlgileri";

      groups.push({
        id: p,
        label: label,
        fields
      });
    });
    
    return groups;
  }, [debugFields]);

  const sections = stepGroups.map(g => g.label);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const fieldsInCurrentSection = stepGroups[currentSectionIndex]?.fields || [];

  const updateField = (id: string, value: any) => {
    const processedValue = typeof value === 'string' ? value.toLocaleUpperCase('tr-TR') : value;
    setFormData(prev => ({ ...prev, [id]: processedValue }));
  };

  const trToEn = (str: string) => {
    if (!str) return '';
    if (fontData) return String(str); // Don't convert if we have the custom font
    return String(str)
      .replace(/Ğ/g, 'G').replace(/ğ/g, 'g')
      .replace(/Ü/g, 'U').replace(/ü/g, 'u')
      .replace(/Ş/g, 'S').replace(/ş/g, 's')
      .replace(/İ/g, 'I').replace(/ı/g, 'i')
      .replace(/Ö/g, 'O').replace(/ö/g, 'o')
      .replace(/Ç/g, 'C').replace(/ç/g, 'c')
      .replace(/[^\x00-\x7F]/g, ''); // Remove any remaining non-ASCII characters to prevent PDFLib crashes
  };

  const getPDFBytes = async () => {
    const { PDFDocument, rgb, StandardFonts } = (window as any).PDFLib;
    if (!PDFDocument) throw new Error('PDFLib not loaded');
    
    const pdfDoc = await PDFDocument.create();
    
    // Use custom font if loaded, otherwise fallback to Helvetica
    let font;
    if (fontData) {
      font = await pdfDoc.embedFont(fontData);
    } else {
      font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    }

    const pageImages = ['/sayfa_1.png', '/sayfa_2.png'];
    let pagesAdded = 0;
    let lastError = '';
    
    for (let i = 0; i < pageImages.length; i++) {
      const imgUrl = pageImages[i];
      try {
        const response = await fetch(imgUrl, { cache: 'no-cache' });
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(`${imgUrl} dosyası sunucuda bulunamadı (404).`);
          }
          throw new Error(`${imgUrl} yüklenemedi (HTTP ${response.status})`);
        }
        
        const contentType = response.headers.get('Content-Type');
        if (contentType && !contentType.startsWith('image/') && !contentType.includes('application/octet-stream')) {
          throw new Error(`${imgUrl} bir görsel değil, sunucu ${contentType} döndürdü. Dosya bozulmuş olabilir.`);
        }

        const imgBytes = await response.arrayBuffer();
        const uint8 = new Uint8Array(imgBytes);
        let image;
        
        if (uint8[0] === 0xFF && uint8[1] === 0xD8 && uint8[2] === 0xFF) {
          image = await pdfDoc.embedJpg(imgBytes);
        } else if (uint8[0] === 0x89 && uint8[1] === 0x50 && uint8[2] === 0x4E && uint8[3] === 0x47) {
          image = await pdfDoc.embedPng(imgBytes);
        } else {
          throw new Error(`${imgUrl} geçerli bir JPEG veya PNG değil.`);
        }

        const page = pdfDoc.addPage([595, 842]);
        page.drawImage(image, { x: 0, y: 0, width: 595, height: 842 });
        pagesAdded++;

        const fieldsOnThisPage = debugFields.filter(f => f.page === i + 1);
        fieldsOnThisPage.forEach(field => {
          const value = formData[field.id];
          if (value === undefined || value === '') return;

          if (debugMode) {
            page.drawRectangle({
              x: field.x,
              y: field.y,
              width: field.width,
              height: field.height,
              borderColor: rgb(1, 0, 0),
              borderWidth: 0.5,
            });
          }

          if (field.type === 'text' || field.type === 'number' || field.type === 'date') {
            const text = trToEn(String(value));
            let currentFontSize = 6; // Reduced from 7
            const padding = 1.5;
            const availableWidth = field.width - (padding * 2);
            
            let textWidth = font.widthOfTextAtSize(text, currentFontSize);
            
            // Auto-scale font size if text is wider than the field
            if (textWidth > availableWidth) {
              currentFontSize = (availableWidth / textWidth) * currentFontSize;
              // Minimum readable font size
              currentFontSize = Math.max(4, currentFontSize);
            }

            // Vertical offset to center text in the box (PDF Y is baseline)
            const vOffset = (field.height - currentFontSize) / 2 + 0.5;
            const pdfY = field.y + vOffset;

            page.drawText(text, {
              x: field.x + padding,
              y: pdfY,
              size: currentFontSize,
              font: font,
              color: rgb(0, 0, 0),
            });
          } else if (field.type === 'checkbox' && value === true) {
            // Checkbox size is 6x6 in config, so X should be smaller
            const checkboxSize = 6; // Reduced from 10 to fit 6x6 boxes
            // Center X perfectly in the box
            const xOffset = (field.width - (font.widthOfTextAtSize('X', checkboxSize))) / 2;
            const yOffset = (field.height - checkboxSize) / 2 + 1;
            
            page.drawText('X', {
              x: field.x + xOffset,
              y: field.y + yOffset,
              size: checkboxSize,
              font: font,
              color: rgb(0, 0, 0),
            });
          }
        });
      } catch (err: any) {
        console.error(`Page ${i+1} error:`, err);
        lastError = err.message;
      }
    }

    if (pagesAdded === 0) {
      throw new Error(`Hiçbir sayfa oluşturulamadı. Son hata: ${lastError}`);
    }

    return await pdfDoc.save();
  };

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const pdfBytes = await getPDFBytes();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `Kizilay_Formu_${formData.is_tc_no || 'Yeni'}.pdf`;
      link.click();
      setView('result');
    } catch (error: any) {
      console.error('PDF Error:', error);
      alert(`Hata: ${error.message || 'PDF oluşturulamadı.'}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const uploadToDrive = async () => {
    setIsUploading(true);
    setUploadStatus('idle');
    try {
      const pdfBytes = await getPDFBytes();
      
      // Convert to base64
      const base64 = btoa(
        new Uint8Array(pdfBytes)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );

      const fileName = `Kizilay_Formu_${formData.is_tc_no || 'Yeni'}_${format(new Date(), 'yyyyMMdd_HHmm')}.pdf`;

      const response = await fetch('/api/upload-to-drive', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileName,
          pdfBase64: base64
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Yükleme başarısız oldu.');
      }

      setUploadStatus('success');
      alert('Form başarıyla Kızılay Drive klasörüne gönderildi!');
    } catch (error: any) {
      console.error('Upload Error:', error);
      setUploadStatus('error');
      alert(`Gönderim Hatası: ${error.message}`);
    } finally {
      setIsUploading(false);
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
              className="max-w-sm w-full space-y-4"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-32 h-32 flex items-center justify-center">
                  <img 
                    src="kizilay_logo.svg" 
                    alt="Türk Kızılay Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-black text-gray-800 uppercase tracking-wide leading-tight">SOSYAL İNCELEME VE<br/>İHTİYAÇ TESPİT FORMU</p>
                </div>
              </div>

              <div className="space-y-2 py-2">
                <div className="grid grid-cols-1 gap-2 text-left">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-2xl">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                      <FileText className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">Kolay Başvuru</h3>
                      <p className="text-xs text-gray-500">Adım adım soruları yanıtlayarak başvurunuzu tamamlayın.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-2xl">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                      <CheckCircle2 className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">Hızlı Sonuç</h3>
                      <p className="text-xs text-gray-500">Sistem sizin için resmi PDF formlarını otomatik olarak hazırlar.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <button 
                  onClick={() => setShowOnboarding(false)}
                  className="w-full py-4 bg-red-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-red-100 active:scale-95 transition-all"
                >
                  BAŞLAYALIM
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Password Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-sm rounded-[32px] p-8 shadow-2xl"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center">
                  <Zap className="text-red-600" size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">GELİŞTİRİCİ GİRİŞİ</h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Devam etmek için şifreyi girin</p>
                </div>
                
                <div className="w-full space-y-4">
                  <div className="space-y-1.5">
                    <input 
                      type="password"
                      value={passwordInput}
                      onChange={(e) => {
                        setPasswordInput(e.target.value);
                        setPasswordError(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          if (passwordInput === "748123") {
                            setView('debug');
                            setShowPasswordModal(false);
                          } else {
                            setPasswordError(true);
                          }
                        }
                      }}
                      placeholder="••••••"
                      autoFocus
                      className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl text-center text-2xl tracking-[0.5em] font-black focus:outline-none transition-all ${passwordError ? 'border-red-500 bg-red-50 text-red-600 animate-shake' : 'border-gray-100 focus:border-red-500 text-gray-900'}`}
                    />
                    {passwordError && (
                      <p className="text-[10px] font-black text-red-600 uppercase tracking-widest flex items-center justify-center gap-1">
                        <AlertCircle size={12} /> Hatalı Şifre
                      </p>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => setShowPasswordModal(false)}
                      className="flex-1 py-4 bg-gray-100 text-gray-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-all"
                    >
                      İPTAL
                    </button>
                    <button 
                      onClick={() => {
                        if (passwordInput === "748123") {
                          setView('debug');
                          setShowPasswordModal(false);
                        } else {
                          setPasswordError(true);
                        }
                      }}
                      className="flex-1 py-4 bg-red-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-red-100 hover:bg-red-700 transition-all"
                    >
                      GİRİŞ YAP
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="flex-none bg-white border-b border-gray-100 shadow-sm z-50 flex justify-center">
        <div className="w-full max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            {view !== 'home' && (
              <button 
                onClick={() => {
                  if (view === 'form' && currentSectionIndex > 0) {
                    setCurrentSectionIndex(prev => prev - 1);
                  } else {
                    setView('home');
                  }
                }}
                className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 flex items-center gap-1"
              >
                <ChevronLeft size={32} />
                <span className="text-sm font-bold uppercase hidden sm:inline">Geri</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-4 text-right">
            <div className="flex flex-col justify-center">
              <p className="text-base md:text-xl font-black text-gray-800 uppercase tracking-tight leading-[1.1]">
                SOSYAL İNCELEME VE<br/>İHTİYAÇ TESPİT FORMU
              </p>
            </div>
            <div className="w-14 h-14 flex items-center justify-center">
              <img 
                src="kizilay_logo.svg" 
                alt="Türk Kızılay Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 py-6 scroll-smooth flex flex-col items-center bg-gray-50/30">
        <div className="w-full max-w-7xl flex flex-col min-h-full relative">
          
          {/* HELP VIEW */}
          {view === 'help' && (
            <div className="space-y-8 py-4 flex-1 max-w-xl mx-auto w-full">
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
                  <Info className="text-red-600" /> Hakkında
                </h2>
                <div className="bg-white p-6 rounded-3xl text-sm text-gray-600 leading-relaxed space-y-6 shadow-sm border border-gray-100">
                  <div className="space-y-4">
                    <p>Uygulama, Türk Kızılay'ın insani yardım faaliyetlerini kolaylaştırma vizyonu doğrultusunda, saha ekiplerinin sosyal inceleme süreçlerini hızlandırmak amacıyla geliştirilmiştir. <strong>Türk Kızılay'ın resmi uygulaması değildir.</strong></p>
                    <p>Uygulamaya girilen veriler anlık olarak işlenerek resmi "FRM.005" ve "FRM.006" formatlarına uygun PDF belgeleri üretilir. Veriler tarayıcı oturumunuzda tutulur, PDF oluşturulduktan sonra silinir.</p>
                    <p>Mimar ve Mühendisler Grubu Derneği (MMG) Bursa Şubesi'nin teknik destek ve vizyonuyla hayata geçirilmiştir.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DEBUG VIEW */}
          {view === 'debug' && (
            <div className="space-y-6 py-4 flex-1">
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col">
                  <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">Gelişmiş Koordinatör</h2>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Kutuları sürükleyerek konumlandırın</p>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => {
                      const url = new URL(window.location.href);
                      url.searchParams.set('view', 'debug');
                      window.open(url.toString(), '_blank');
                    }}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl text-[10px] font-bold uppercase transition-all"
                    title="Yeni sekmede açarak yakınlaştırma yapabilirsiniz"
                  >
                    <ExternalLink size={14} />
                    Yeni Sekme
                  </button>
                  <button 
                    onClick={() => setView('home')}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-4 flex items-start gap-3">
                    <Info className="text-blue-600 mt-0.5 shrink-0" size={18} />
                    <div className="text-xs text-blue-800 leading-relaxed">
                      <p className="font-bold mb-1 uppercase tracking-wider">Koordinat Sistemi Notu</p>
                      <p>PDF standartlarına göre <b>(0,0) noktası sol alt köşedir.</b></p>
                      <ul className="list-disc ml-4 mt-1 space-y-0.5">
                        <li>X arttıkça sağa gider.</li>
                        <li>Y arttıkça <b>yukarı</b> gider.</li>
                        <li>A4 Boyutu: 595 x 842 birimdir.</li>
                      </ul>
                    </div>
                  </div>

              <div className="flex gap-2 mb-4">
                <button 
                  onClick={() => {
                    const newId = `yeni_alan_${Date.now()}`;
                    const newField: FieldConfig = {
                      id: newId,
                      label: 'Yeni Alan (Düzenle)',
                      type: 'text',
                      x: 100,
                      y: 400,
                      width: 100,
                      height: 20,
                      page: debugPage,
                      section: 'YENİ',
                      corners: calculateCorners(100, 400, 100, 20)
                    };
                    setDebugFields(prev => [...prev, newField]);
                    setSelectedFieldId(newId);
                  }}
                  className="w-full py-4 bg-green-600 text-white rounded-2xl text-xs font-black transition-all uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-green-100 active:scale-95"
                >
                  <Plus size={20} />
                  Yeni Alan Ekle
                </button>
              </div>

              <div className="flex gap-2 mb-4">
                <button 
                  onClick={() => setDebugPage(1)}
                  className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${debugPage === 1 ? 'bg-red-600 text-white shadow-lg shadow-red-100' : 'bg-white border border-gray-200 text-gray-600'}`}
                >
                  Sayfa 1
                </button>
                <button 
                  onClick={() => setDebugPage(2)}
                  className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${debugPage === 2 ? 'bg-red-600 text-white shadow-lg shadow-red-100' : 'bg-white border border-gray-200 text-gray-600'}`}
                >
                  Sayfa 2
                </button>
              </div>

              <div className="relative border-2 border-gray-200 rounded-2xl overflow-hidden shadow-xl bg-white select-none aspect-[595/842]">
                <img 
                  ref={debugImageRef}
                  src={debugPage === 1 ? '/sayfa_1.png' : '/sayfa_2.png'} 
                  alt="Debug" 
                  className="w-full h-full object-fill block pointer-events-none opacity-60"
                  onLoad={() => {
                    // Force re-render to position boxes correctly after image loads
                    setClickedCoord(prev => prev ? {...prev} : null);
                  }}
                />
                
                {/* Draggable Boxes Overlay */}
                <div className="absolute inset-0 overflow-hidden">
                  {debugFields.filter(f => f.page === debugPage).map(field => {
                    const isSelected = selectedFieldId === field.id;
                    return (
                      <motion.div
                        key={field.id}
                        drag
                        dragMomentum={false}
                        onDragStart={() => setSelectedFieldId(field.id)}
                        onDragEnd={(e, info) => {
                          if (!debugImageRef.current) return;
                          const rect = debugImageRef.current.getBoundingClientRect();
                          
                          // Calculate deltas in PDF points
                          const deltaX = (info.offset.x / rect.width) * 595;
                          const deltaY = (info.offset.y / rect.height) * 842;
                          
                          let newPdfX = Number((field.x + deltaX).toFixed(2));
                          let newPdfY = Number((field.y - deltaY).toFixed(2));

                          // Bounds check
                          newPdfX = Math.max(0, Math.min(595 - field.width, newPdfX));
                          newPdfY = Math.max(0, Math.min(842 - field.height, newPdfY));

                          setDebugFields(prev => prev.map(f => 
                            f.id === field.id ? { 
                              ...f, 
                              x: newPdfX, 
                              y: newPdfY,
                              corners: calculateCorners(newPdfX, newPdfY, f.width, f.height)
                            } : f
                          ));
                        }}
                        style={{
                          position: 'absolute',
                          left: `${(field.x / 595) * 100}%`,
                          bottom: `${(field.y / 842) * 100}%`,
                          width: `${(field.width / 595) * 100}%`,
                          height: `${(field.height / 842) * 100}%`,
                          border: isSelected ? '2px solid #ef4444' : '1px solid rgba(239, 68, 68, 0.4)',
                          backgroundColor: isSelected ? 'rgba(239, 68, 68, 0.1)' : 'transparent',
                          cursor: 'move',
                          zIndex: isSelected ? 50 : 10,
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'flex-start',
                        }}
                      >
                        {isSelected && (
                          <>
                            {/* Resize Handle Right (Width) */}
                            <motion.div
                              drag="x"
                              dragMomentum={false}
                              onDrag={(e, info) => {
                                e.stopPropagation();
                                if (!debugImageRef.current) return;
                                const rect = debugImageRef.current.getBoundingClientRect();
                                const deltaW = (info.delta.x / rect.width) * 595;
                                setDebugFields(prev => prev.map(f => {
                                  if (f.id === field.id) {
                                    const newWidth = Math.max(0.1, Number((f.width + deltaW).toFixed(2)));
                                    return { 
                                      ...f, 
                                      width: newWidth,
                                      corners: calculateCorners(f.x, f.y, newWidth, f.height)
                                    };
                                  }
                                  return f;
                                }));
                              }}
                              className="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize bg-red-500/50 hover:bg-red-500 transition-colors"
                            />
                            {/* Resize Handle Top (Height) */}
                            <motion.div
                              drag="y"
                              dragMomentum={false}
                              onDrag={(e, info) => {
                                e.stopPropagation();
                                if (!debugImageRef.current) return;
                                const rect = debugImageRef.current.getBoundingClientRect();
                                // PDF Y is bottom-up, so dragging UP (negative delta.y) increases height
                                const deltaH = (-info.delta.y / rect.height) * 842;
                                setDebugFields(prev => prev.map(f => {
                                  if (f.id === field.id) {
                                    const newHeight = Math.max(0.1, Number((f.height + deltaH).toFixed(2)));
                                    return { 
                                      ...f, 
                                      height: newHeight,
                                      corners: calculateCorners(f.x, f.y, f.width, newHeight)
                                    };
                                  }
                                  return f;
                                }));
                              }}
                              className="absolute top-0 left-0 right-0 h-2 cursor-ns-resize bg-red-500/50 hover:bg-red-500 transition-colors"
                            />
                          </>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {selectedFieldId && (
                <div className="mt-6 bg-gray-900 text-white p-6 rounded-3xl font-mono text-[11px] shadow-2xl border border-gray-800 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="flex justify-between items-start mb-5">
                    <div className="flex flex-col flex-1 mr-4">
                      <span className="text-red-500 font-black uppercase tracking-wider text-[10px] mb-1">Alan Kimliği (ID)</span>
                      <input 
                        type="text"
                        value={debugFields.find(f => f.id === selectedFieldId)?.id || ''}
                        onChange={(e) => {
                          const newId = e.target.value;
                          setDebugFields(prev => prev.map(f => f.id === selectedFieldId ? { ...f, id: newId } : f));
                          setSelectedFieldId(newId);
                        }}
                        placeholder="Örn: 2.1-adisoyadi"
                        className="bg-white/5 border border-white/10 rounded-xl p-3 text-white font-bold text-sm focus:outline-none focus:border-red-500 transition-all"
                      />
                    </div>
                    <div className="flex flex-col flex-1 mr-4">
                      <span className="text-red-500 font-black uppercase tracking-wider text-[10px] mb-1">Alan Adı (Etiket)</span>
                      <input 
                        type="text"
                        value={debugFields.find(f => f.id === selectedFieldId)?.label || ''}
                        onChange={(e) => {
                          const newLabel = e.target.value;
                          setDebugFields(prev => prev.map(f => f.id === selectedFieldId ? { ...f, label: newLabel } : f));
                        }}
                        placeholder="Örn: Adı Soyadı"
                        className="bg-white/5 border border-white/10 rounded-xl p-3 text-white font-bold text-sm focus:outline-none focus:border-red-500 transition-all"
                      />
                    </div>
                    <div className="flex flex-col mr-4">
                      <span className="text-red-500 font-black uppercase tracking-wider text-[10px] mb-1">Tür</span>
                      <select 
                        value={debugFields.find(f => f.id === selectedFieldId)?.type || 'text'}
                        onChange={(e) => {
                          const val = e.target.value as any;
                          setDebugFields(prev => prev.map(f => f.id === selectedFieldId ? { ...f, type: val } : f));
                        }}
                        className="bg-white/5 border border-white/10 rounded-xl p-3 text-white font-bold text-sm focus:outline-none focus:border-red-500 transition-all appearance-none cursor-pointer"
                      >
                        <option value="text" className="bg-gray-900">Metin</option>
                        <option value="number" className="bg-gray-900">Sayı</option>
                        <option value="date" className="bg-gray-900">Tarih</option>
                        <option value="select" className="bg-gray-900">Çoktan Seçmeli</option>
                        <option value="checkbox" className="bg-gray-900">Onay Kutusu</option>
                      </select>
                    </div>
                        <div className="flex flex-col mr-4">
                          <span className="text-red-500 font-black uppercase tracking-wider text-[10px] mb-1">Gizli</span>
                          <button 
                            onClick={() => {
                              const isHidden = debugFields.find(f => f.id === selectedFieldId)?.hidden;
                              setDebugFields(prev => prev.map(f => f.id === selectedFieldId ? { ...f, hidden: !isHidden } : f));
                            }}
                            className={`p-3 rounded-xl border transition-all font-bold text-[10px] uppercase tracking-widest ${debugFields.find(f => f.id === selectedFieldId)?.hidden ? 'bg-red-600 border-red-600 text-white' : 'bg-white/5 border-white/10 text-gray-400'}`}
                          >
                            {debugFields.find(f => f.id === selectedFieldId)?.hidden ? 'EVET' : 'HAYIR'}
                          </button>
                        </div>
                        <div className="flex flex-col mr-4">
                          <span className="text-red-500 font-black uppercase tracking-wider text-[10px] mb-1">Zorunlu</span>
                          <button 
                            onClick={() => {
                              const isReq = debugFields.find(f => f.id === selectedFieldId)?.required;
                              setDebugFields(prev => prev.map(f => f.id === selectedFieldId ? { ...f, required: !isReq } : f));
                            }}
                            className={`p-3 rounded-xl border transition-all font-bold text-[10px] uppercase tracking-widest ${debugFields.find(f => f.id === selectedFieldId)?.required ? 'bg-red-600 border-red-600 text-white' : 'bg-white/5 border-white/10 text-gray-400'}`}
                          >
                            {debugFields.find(f => f.id === selectedFieldId)?.required ? 'EVET' : 'HAYIR'}
                          </button>
                        </div>
                        <div className="flex gap-2 pt-5">
                      <button 
                        onClick={() => {
                          if (confirm('Bu alanı silmek istediğinize emin misiniz?')) {
                            setDebugFields(prev => prev.filter(f => f.id !== selectedFieldId));
                            setSelectedFieldId(null);
                          }
                        }}
                        className="p-3 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white rounded-xl transition-all border border-red-600/20"
                        title="Alanı Sil"
                      >
                        <Trash2 size={18} />
                      </button>
                      <button 
                        onClick={() => setSelectedFieldId(null)}
                        className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>

                  {debugFields.find(f => f.id === selectedFieldId)?.type === 'select' && (
                    <div className="mb-6 space-y-2">
                      <span className="text-red-500 font-black uppercase tracking-wider text-[10px] mb-1">Seçenekler (Virgülle ayırın)</span>
                      <input 
                        type="text"
                        value={debugFields.find(f => f.id === selectedFieldId)?.options?.join(', ') || ''}
                        onChange={(e) => {
                          const opts = e.target.value.split(',').map(s => s.trim()).filter(s => s !== '');
                          setDebugFields(prev => prev.map(f => f.id === selectedFieldId ? { ...f, options: opts } : f));
                        }}
                        placeholder="Örn: SEÇENEK 1, SEÇENEK 2"
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white font-bold text-sm focus:outline-none focus:border-red-500 transition-all"
                      />
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-[10px] text-gray-400 uppercase font-black tracking-widest">X (Sol Kenardan)</label>
                        <span className="text-[10px] text-red-500 font-bold">{((debugFields.find(f => f.id === selectedFieldId)?.x || 0) * PT_TO_MM).toFixed(1)} mm</span>
                      </div>
                      <input 
                        type="number" 
                        step="0.1"
                        value={debugFields.find(f => f.id === selectedFieldId)?.x || 0}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          setDebugFields(prev => prev.map(f => 
                            f.id === selectedFieldId ? { 
                              ...f, 
                              x: val,
                              corners: calculateCorners(val, f.y, f.width, f.height)
                            } : f
                          ));
                        }}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white font-bold focus:outline-none focus:border-red-500 transition-all text-sm"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Y (Alt Kenardan)</label>
                        <span className="text-[10px] text-red-500 font-bold">{((debugFields.find(f => f.id === selectedFieldId)?.y || 0) * PT_TO_MM).toFixed(1)} mm</span>
                      </div>
                      <input 
                        type="number" 
                        step="0.1"
                        value={debugFields.find(f => f.id === selectedFieldId)?.y || 0}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          setDebugFields(prev => prev.map(f => 
                            f.id === selectedFieldId ? { 
                              ...f, 
                              y: val,
                              corners: calculateCorners(f.x, val, f.width, f.height)
                            } : f
                          ));
                        }}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white font-bold focus:outline-none focus:border-red-500 transition-all text-sm"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] text-gray-400 uppercase font-black tracking-widest block">Y (Üst Kenardan)</label>
                      <input 
                        type="number" 
                        step="0.1"
                        value={Number((842 - (debugFields.find(f => f.id === selectedFieldId)?.y || 0) - (debugFields.find(f => f.id === selectedFieldId)?.height || 0)).toFixed(2))}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          const height = debugFields.find(f => f.id === selectedFieldId)?.height || 0;
                          const newPdfY = Number((842 - val - height).toFixed(2));
                          setDebugFields(prev => prev.map(f => 
                            f.id === selectedFieldId ? { 
                              ...f, 
                              y: newPdfY,
                              corners: calculateCorners(f.x, newPdfY, f.width, height)
                            } : f
                          ));
                        }}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white font-bold focus:outline-none focus:border-blue-500 transition-all text-sm"
                      />
                      <p className="text-[9px] text-blue-400/60 mt-1 italic">Cetvelle üstten ölçtüğünüz değeri buraya girin.</p>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] text-gray-400 uppercase font-black tracking-widest block">Genişlik / Yükseklik</label>
                      <div className="flex gap-3">
                        <input 
                          type="number" 
                          step="0.1"
                          placeholder="G"
                          value={debugFields.find(f => f.id === selectedFieldId)?.width || 0}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value);
                            setDebugFields(prev => prev.map(f => 
                              f.id === selectedFieldId ? { 
                                ...f, 
                                width: val,
                                corners: calculateCorners(f.x, f.y, val, f.height)
                              } : f
                            ));
                          }}
                          className="w-1/2 bg-white/5 border border-white/10 rounded-xl p-4 text-white font-bold focus:outline-none focus:border-red-500 transition-all text-sm"
                        />
                        <input 
                          type="number" 
                          step="0.1"
                          placeholder="Y"
                          value={debugFields.find(f => f.id === selectedFieldId)?.height || 0}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value);
                            setDebugFields(prev => prev.map(f => 
                              f.id === selectedFieldId ? { 
                                ...f, 
                                height: val,
                                corners: calculateCorners(f.x, f.y, f.width, val)
                              } : f
                            ));
                          }}
                          className="w-1/2 bg-white/5 border border-white/10 rounded-xl p-4 text-white font-bold focus:outline-none focus:border-red-500 transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="col-span-2 space-y-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                      <label className="text-[10px] text-red-500 uppercase font-black tracking-widest block mb-2">Köşe Koordinatları (PDF Puanı)</label>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div className="flex justify-between items-center border-b border-white/5 pb-1">
                          <span className="text-[9px] text-gray-400 uppercase">Sol Alt:</span>
                          <span className="text-[10px] text-white font-mono">[{debugFields.find(f => f.id === selectedFieldId)?.corners.bottomLeft.join(', ')}]</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-1">
                          <span className="text-[9px] text-gray-400 uppercase">Sağ Alt:</span>
                          <span className="text-[10px] text-white font-mono">[{debugFields.find(f => f.id === selectedFieldId)?.corners.bottomRight.join(', ')}]</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-1">
                          <span className="text-[9px] text-gray-400 uppercase">Sağ Üst:</span>
                          <span className="text-[10px] text-white font-mono">[{debugFields.find(f => f.id === selectedFieldId)?.corners.topRight.join(', ')}]</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-1">
                          <span className="text-[9px] text-gray-400 uppercase">Sol Üst:</span>
                          <span className="text-[10px] text-white font-mono">[{debugFields.find(f => f.id === selectedFieldId)?.corners.topLeft.join(', ')}]</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 pt-4">
                      <button 
                        onClick={() => setSelectedFieldId(null)}
                        className="w-full py-5 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-red-900/40 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                      >
                        <Check size={22} />
                        Değişiklikleri Onayla
                      </button>
                    </div>
                  </div>
                  <p className="mt-5 text-[10px] text-gray-500 italic text-center border-t border-white/5 pt-4">İpucu: Aynı satırdaki kutuların Y değerlerini eşitleyerek mükemmel hizalama sağlayabilirsiniz.</p>
                </div>
              )}

              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => {
                      const json = JSON.stringify(debugFields, null, 2);
                      navigator.clipboard.writeText(json);
                      alert('Tüm koordinatlar JSON olarak panoya kopyalandı! formConfig.ts dosyasına yapıştırabilirsiniz.');
                    }}
                    className="flex items-center justify-center gap-2 py-4 bg-white border border-gray-200 text-gray-800 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-sm uppercase tracking-widest text-[10px]"
                  >
                    <Copy size={16} /> JSON
                  </button>
                  <button 
                    onClick={() => {
                      if (confirm('Tüm alanlar silinecek. Emin misiniz?')) {
                        setDebugFields([]);
                        setSelectedFieldId(null);
                      }
                    }}
                    className="flex items-center justify-center gap-2 py-4 bg-white border border-gray-200 text-red-600 rounded-2xl font-bold hover:bg-red-50 transition-all shadow-sm uppercase tracking-widest text-[10px]"
                  >
                    <Trash2 size={16} /> Hepsini Sil
                  </button>
                  <button 
                    onClick={() => {
                      if (confirm('Tüm değişiklikler sıfırlanacak. Emin misiniz?')) {
                        setDebugFields(FORM_CONFIG);
                      }
                    }}
                    className="flex items-center justify-center gap-2 py-4 bg-white border border-gray-200 text-gray-400 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-sm uppercase tracking-widest text-[10px]"
                  >
                    <RefreshCw size={16} /> Sıfırla
                  </button>
                </div>

                <button 
                  onClick={() => setView('form')}
                  className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-lg uppercase tracking-widest text-xs"
                >
                  Forma Dön
                </button>

                {/* Field List */}
                <div className="mt-6 space-y-3">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">Mevcut Alanlar ({debugFields.filter(f => f.page === debugPage).length})</h3>
                  <div className="max-h-[300px] overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                    {debugFields.filter(f => f.page === debugPage).map(field => (
                      <div 
                        key={field.id}
                        className={`p-3 rounded-xl border transition-all flex items-center justify-between ${selectedFieldId === field.id ? 'bg-red-50 border-red-200 shadow-sm' : 'bg-white border-gray-100 hover:border-gray-200'}`}
                      >
                        <div className="flex flex-col">
                          <span className="text-[11px] font-bold text-gray-900">{field.id}</span>
                          <span className="text-[10px] text-gray-600 font-medium">{field.label}</span>
                          <span className="text-[9px] text-gray-400">
                            {field.type === 'text' ? 'Metin' : 
                             field.type === 'number' ? 'Sayı' : 
                             field.type === 'date' ? 'Tarih' : 'Onay Kutusu'}
                            {field.hidden && <span className="ml-2 text-red-500 font-bold">(GİZLİ)</span>}
                            {field.required && <span className="ml-2 text-blue-500 font-bold">(ZORUNLU)</span>}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex flex-col gap-1 mr-2">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                moveField(field.id, 'up');
                              }}
                              className="p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-900 transition-colors"
                              title="Yukarı Taşı"
                            >
                              <ChevronRight size={14} className="-rotate-90" />
                            </button>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                moveField(field.id, 'down');
                              }}
                              className="p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-900 transition-colors"
                              title="Aşağı Taşı"
                            >
                              <ChevronRight size={14} className="rotate-90" />
                            </button>
                          </div>
                          <button 
                            onClick={() => setSelectedFieldId(field.id)}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${selectedFieldId === field.id ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                          >
                            Düzenle
                          </button>
                        </div>
                      </div>
                    ))}
                    {debugFields.filter(f => f.page === debugPage).length === 0 && (
                      <div className="py-8 text-center border-2 border-dashed border-gray-100 rounded-2xl">
                        <p className="text-[10px] text-gray-400 font-medium italic">Bu sayfada henüz alan yok.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* HOME VIEW */}
          {view === 'home' && (
            <div className="space-y-6 py-4 flex-1 max-w-xl mx-auto w-full">
              <div className="flex justify-end">
                <button 
                  onClick={() => setView('help')}
                  className="w-1/2 p-4 bg-white border border-gray-200 text-gray-800 rounded-2xl shadow-sm active:scale-95 transition-all flex items-center justify-center gap-3 group"
                >
                  <HelpCircle size={20} className="text-red-600" />
                  <span className="text-sm font-black uppercase tracking-wide">Hakkında</span>
                </button>
              </div>

              <button 
                onClick={() => {
                  const initial: FormData = {};
                  FORM_CONFIG.forEach(field => {
                    if (field.defaultValue !== undefined) {
                      initial[field.id] = field.defaultValue;
                    }
                  });
                  setFormData(initial);
                  setCurrentSectionIndex(0);
                  setView('form');
                }}
                className="w-full p-6 bg-red-600 text-white rounded-3xl shadow-xl shadow-red-100 active:scale-95 transition-all flex items-center gap-5 group"
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Plus size={28} />
                </div>
                <h2 className="text-lg md:text-xl font-black uppercase tracking-wide">Yeni Kayıt Oluştur</h2>
              </button>

              <button 
                onClick={() => {
                  setShowPasswordModal(true);
                  setPasswordInput('');
                  setPasswordError(false);
                }}
                className="w-full p-6 bg-white border-2 border-gray-100 text-gray-800 rounded-3xl shadow-sm active:scale-95 transition-all flex items-center gap-5 group"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <FileText size={28} className="text-gray-400" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg md:text-xl font-black uppercase tracking-wide">Alan Düzenle</h2>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Geliştirici Modu</p>
                </div>
              </button>
            </div>
          )}

          {/* RESULT VIEW */}
          {view === 'result' && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-8 max-w-xl mx-auto w-full">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                <CheckCircle2 size={48} />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-black text-gray-900">Başvuru Tamamlandı!</h2>
                <p className="text-gray-500 max-w-xs mx-auto">Form başarıyla oluşturuldu.</p>
              </div>

              <div className="w-full space-y-4">
                <button 
                  onClick={uploadToDrive}
                  disabled={isUploading}
                  className={`w-full py-5 rounded-2xl font-black text-lg shadow-xl flex items-center justify-center gap-3 active:scale-[0.98] transition-all ${uploadStatus === 'success' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white shadow-blue-100'}`}
                >
                  {isUploading ? <RefreshCw className="animate-spin" size={24} /> : <FileDown size={24} />}
                  {uploadStatus === 'success' ? 'GÖNDERİLDİ!' : "KIZILAY'A GÖNDER"}
                </button>

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
            <div className="max-w-xl mx-auto w-full">
              <StepIndicator currentStep={currentSectionIndex} steps={sections} />

              <div className="mt-6 pb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stepGroups[currentSectionIndex]?.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {fieldsInCurrentSection.map(field => (
                          <div key={field.id}>
                            {field.type === 'checkbox' ? (
                              <div className="pt-6">
                                <Checkbox 
                                  label={field.label + (field.required ? ' *' : '')} 
                                  checked={formData[field.id]} 
                                  onChange={(v: boolean) => updateField(field.id, v)} 
                                />
                              </div>
                            ) : field.type === 'select' ? (
                              <Select 
                                label={field.label + (field.required ? ' *' : '')} 
                                value={formData[field.id]} 
                                options={field.options}
                                onChange={(v: string) => updateField(field.id, v)} 
                              />
                            ) : (
                              <Input 
                                label={field.label + (field.required ? ' *' : '')} 
                                value={formData[field.id]} 
                                type={field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : 'text'}
                                onChange={(v: string) => updateField(field.id, v)} 
                              />
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
                    onClick={() => {
                      if (currentSectionIndex === 0) {
                        setView('home');
                      } else {
                        setCurrentSectionIndex(prev => Math.max(0, prev - 1));
                      }
                    }}
                    className="flex-1 py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                  >
                    <ChevronLeft size={20} /> Geri
                  </button>
                  
                  {currentSectionIndex < sections.length - 1 ? (
                    <button
                      onClick={() => {
                        // Validate current section
                        const missingRequired = fieldsInCurrentSection.some(f => f.required && !formData[f.id]);
                        if (missingRequired) {
                          alert('Lütfen zorunlu alanları doldurunuz.');
                          return;
                        }
                        setCurrentSectionIndex(prev => prev + 1);
                      }}
                      className="flex-1 py-4 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-100"
                    >
                      İleri <ChevronRight size={20} />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        // Final validation
                        const allRequiredFields = debugFields.filter(f => f.required && !f.hidden);
                        const missingFields = allRequiredFields.filter(f => !formData[f.id]);
                        
                        if (missingFields.length > 0) {
                          alert(`Lütfen zorunlu alanları doldurunuz: ${missingFields.map(f => f.label).join(', ')}`);
                          return;
                        }
                        setView('result');
                      }}
                      className="flex-1 py-4 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Check size={20} />
                      Tamamla
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          {/* Version Info Footer - Visible on all pages */}
          <div className="mt-auto pt-8 pb-6 text-center">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-2">Versiyon 2.1.0</p>
          </div>
        </div>
      </main>
    </div>
  );
}
