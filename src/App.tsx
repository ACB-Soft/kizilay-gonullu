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
  Copy,
  RefreshCw,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import * as XLSX from 'xlsx';
import SignatureCanvas from 'react-signature-canvas';
import { FORM_CONFIG, FieldConfig } from './constants/formConfig';

// Import assets
import kizilayLogo from './assets/kizilay_logo.svg';
import * as formImages from './constants/formImages';
import { INTER_BOLD_BASE64 } from './constants/fonts';

// Helper for robust asset paths (especially for GitHub Pages)
const getAssetPath = (path: string) => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

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
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
        <div 
          className="h-full bg-red-600 transition-all duration-500 rounded-full" 
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>
      <div className="w-full">
        <span className="text-xs font-bold text-red-600 uppercase tracking-wider block leading-relaxed">
          {steps[currentStep]}
        </span>
      </div>
    </div>
  );
};

const Input = ({ label, value, onChange, type = "text", placeholder = "", inputMode }: any) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-xs font-bold text-gray-600 tracking-tight">{label}</label>
    <input 
      type={type}
      inputMode={inputMode}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm"
    />
  </div>
);

const Checkbox = ({ label, options = [], value = [], onChange, maxSelections }: any) => {
  const selectedValues = Array.isArray(value) ? value : (value ? [value] : []);
  const isSingle = maxSelections === 1;
  
  const handleToggle = (option: string) => {
    let newValues;
    if (selectedValues.includes(option)) {
      if (isSingle) return; // Keep selection if single choice
      newValues = selectedValues.filter(v => v !== option);
    } else {
      if (isSingle) {
        newValues = [option];
      } else if (!maxSelections || selectedValues.length < maxSelections) {
        newValues = [...selectedValues, option];
      } else {
        return; // Limit reached
      }
    }
    onChange(newValues);
  };

  if (options.length === 0) {
    const checked = value === true;
    return (
      <label className="flex items-center gap-3 cursor-pointer group">
        <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${checked ? 'bg-red-600 border-red-600' : 'border-gray-300 group-hover:border-red-400'}`}>
          {checked && <Check size={14} className="text-white" />}
        </div>
        <span className="text-sm text-gray-700 font-medium">{label}</span>
        <input type="checkbox" className="hidden" checked={checked || false} onChange={(e) => onChange(e.target.checked)} />
      </label>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-xs font-bold text-gray-600 tracking-tight">{label}</label>
      <div className="grid grid-cols-1 gap-3">
        {options.map((opt: string) => (
          <label 
            key={opt} 
            onClick={() => handleToggle(opt)}
            className={`flex items-center gap-3 cursor-pointer transition-all ${
              isSingle 
                ? `p-4 bg-white border-2 rounded-2xl ${selectedValues.includes(opt) ? 'border-red-600 bg-red-50/30' : 'border-gray-100 hover:border-gray-200'}`
                : 'group'
            }`}
          >
            <div 
              className={`w-6 h-6 border-2 flex items-center justify-center transition-all ${
                isSingle ? 'rounded-full' : 'rounded-md'
              } ${selectedValues.includes(opt) ? 'bg-red-600 border-red-600' : 'border-gray-300 group-hover:border-red-400'}`}
            >
              {selectedValues.includes(opt) && (
                isSingle ? <div className="w-2 h-2 bg-white rounded-full" /> : <Check size={14} className="text-white" />
              )}
            </div>
            <span className={`text-sm font-medium ${isSingle && selectedValues.includes(opt) ? 'text-red-700' : 'text-gray-700'}`}>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const Select = ({ label, value, onChange, options = [] }: any) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-xs font-bold text-gray-600 tracking-tight">{label}</label>
    <div className="relative">
      <select 
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm appearance-none cursor-pointer"
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

// --- Base64 to Uint8Array Utility (Robust against Latin1 errors) ---
const decodeBase64 = (base64: string) => {
  if (!base64) return new Uint8Array(0);
  try {
    // Try standard atob first, it works for most cases
    const binaryString = window.atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  } catch (e) {
    // Fallback to manual decoding for strings with non-Latin1 characters
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    const lookup = new Uint8Array(256);
    for (let i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;
    
    const cleanBase64 = base64.replace(/=+$/, '').replace(/[\r\n]/g, '');
    const len = cleanBase64.length;
    const bufferLength = Math.floor(len * 0.75);
    const bytes = new Uint8Array(bufferLength);
    
    let p = 0;
    for (let i = 0; i < len; i += 4) {
      const encoded1 = lookup[cleanBase64.charCodeAt(i)] || 0;
      const encoded2 = lookup[cleanBase64.charCodeAt(i + 1)] || 0;
      const encoded3 = lookup[cleanBase64.charCodeAt(i + 2)] || 0;
      const encoded4 = lookup[cleanBase64.charCodeAt(i + 3)] || 0;

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      if (p < bufferLength) bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      if (p < bufferLength) bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return bytes;
  }
};

const SignaturePad = ({ label, value, onChange }: any) => {
  const sigCanvas = useRef<SignatureCanvas>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(!!value);

  // PDF Form signature field dimensions are 140x32
  // Let's use the same ratio (4.375:1) for the UI component, but doubled in height as requested
  const canvasWidth = 400; // Optimal width for display
  const canvasHeight = (64 / 140) * canvasWidth; // Doubled height ~182.8px

  const clear = () => {
    sigCanvas.current?.clear();
    setIsConfirmed(false);
    onChange('');
  };

  const handleConfirm = async () => {
    if (sigCanvas.current?.isEmpty()) {
      alert('Lütfen önce imza atın.');
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate processing time as requested by user ("resim işleniyor uyarısı")
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      const canvas = sigCanvas.current?.getCanvas();
      if (canvas) {
        // Get high quality PNG
        const dataURL = canvas.toDataURL('image/png');
        onChange(dataURL);
        setIsConfirmed(true);
      }
    } catch (error) {
      console.error('Signature processing error:', error);
      alert('İmza işlenirken bir hata oluştu.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full pt-2">
      <div className="flex items-center justify-between px-1">
        <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{label}</label>
        {isConfirmed && (
          <span className="flex items-center gap-1.5 text-[10px] font-black text-green-600 uppercase animate-in fade-in slide-in-from-right-2">
            <CheckCircle2 size={12} strokeWidth={3} /> ONAYLANDI
          </span>
        )}
      </div>

      <div className="relative group">
        <div className={`relative bg-gray-50 border-2 rounded-[28px] p-5 overflow-hidden transition-all duration-500 ${isConfirmed ? 'border-green-200 bg-green-50/20 shadow-inner' : 'border-dashed border-gray-200 group-focus-within:border-red-400'}`}>
          {isProcessing && (
            <div className="absolute inset-0 z-50 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center animate-in fade-in duration-300">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-red-600/10 border-t-red-600 rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
                </div>
              </div>
              <p className="mt-4 text-[11px] font-black text-red-600 uppercase tracking-[0.2em] animate-pulse">İmza İşleniyor...</p>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">Lütfen bekleyin</p>
            </div>
          )}

          {isConfirmed ? (
            <div className="relative flex flex-col items-center py-4 animate-in zoom-in-95 duration-500">
              <div className="relative p-2 bg-white rounded-2xl shadow-xl border border-green-100 mb-6 w-full max-w-[400px] overflow-hidden" 
                   style={{ aspectRatio: '140 / 64' }}>
                <img src={value} alt="İmza" className="w-full h-full object-contain" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                   <Check size={16} strokeWidth={4} />
                </div>
              </div>
              <button 
                onClick={clear}
                className="group flex items-center gap-3 px-6 py-2.5 bg-white border border-gray-200 text-gray-500 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:border-red-300 hover:text-red-600 hover:bg-red-50 transition-all active:scale-95"
              >
                <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-700" />
                İMZAYI SIFIRLA
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div 
                className="w-full max-w-[400px] mx-auto bg-white rounded-3xl shadow-inner mb-6 relative touch-none border border-gray-100 overflow-hidden group-hover:border-red-100 transition-colors"
                style={{ aspectRatio: '140 / 64' }}
              >
                <SignatureCanvas 
                  ref={sigCanvas}
                  penColor="#000"
                  canvasProps={{ 
                    className: "signature-canvas w-full h-full",
                    style: { width: '100%', height: '100%' }
                  }}
                />
              </div>
              
              <div className="flex gap-4 w-full">
                <button 
                  onClick={clear}
                  className="flex-1 py-4 bg-gray-100 text-gray-400 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-gray-200 hover:text-gray-600 transition-all active:scale-95"
                >
                  TEMİZLE
                </button>
                <button 
                  onClick={handleConfirm}
                  className="flex-[2.5] py-4 bg-red-600 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.15em] hover:bg-red-700 transition-all shadow-xl shadow-red-200 active:scale-95 flex items-center justify-center gap-3"
                >
                  <Zap size={16} fill="currentColor" /> İMZAYI ONAYLA
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<'home' | 'form' | 'result' | 'help' | 'debug' | 'frm006' | 'selection'>('home');
  const [formMode, setFormMode] = useState<'all' | 'mandatory'>('all');
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
  const [isGenerating, setIsGenerating] = useState(false);
  const [fontLoadingStatus, setFontLoadingStatus] = useState<'loading' | 'success' | 'error'>('success');

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
    const visibleFields = debugFields.filter(f => !f.hidden && (formMode === 'all' || f.required));
    const groups: { id: string; label: string; fields: FieldConfig[] }[] = [];
    
    // Get the count of other people
    const haneSayisi = parseInt(formData['3.0-haneoturansayisi'] || '0');
    
    // Get the count of health conditions
    const hastalikAdediVal = formData['4.0-hastalikadedi'] || 'YOK';
    const hastalikAdedi = hastalikAdediVal === 'YOK' ? 0 : parseInt(hastalikAdediVal);

    // Get unique prefixes in order of appearance
    const prefixes: string[] = [];
    visibleFields.forEach(f => {
      let p = getPrefix(f.id);
      
      // Filter out 3.x steps if they are beyond the haneSayisi
      if (p.startsWith('3.')) {
        const stepNum = parseInt(p.split('.')[1]);
        if (stepNum > haneSayisi) return;
      }

      // Filter out 4.x steps if they are beyond the hastalikAdedi
      if (p.startsWith('4.')) {
        const stepNum = parseInt(p.split('.')[1]);
        if (stepNum === 0) {
          // Keep 4.0
        } else if (stepNum > hastalikAdedi) {
          return;
        }
      }

      // Group 8 and 9 together into a single summary step
      if (p.startsWith('8.') || p.startsWith('9.')) {
        p = '8-9';
      }

      if (!prefixes.includes(p)) prefixes.push(p);
    });

    prefixes.forEach(p => {
      const fields = visibleFields.filter(f => {
        const fp = getPrefix(f.id);
        if (p === '8-9') return fp.startsWith('8.') || fp.startsWith('9.');
        return fp === p;
      });
      
      // Map prefix to specific labels
      let label = fields[0].section;
      if (p === '1.0') label = "Başvuru Kanalı";
      else if (p === '2.0') label = "İhtiyaç Sahibi Bilgileri";
      else if (p === '2.1') label = "İletişim - Adres Bilgileri";
      else if (p === '2.2') label = "Vasi/Veli/Kayyım Bilgileri";
      else if (p === '2.3') label = "Ulaşılamadığında İrtibat Kurulacak Kişi Bİlgileri";
      else if (p === '3.0') label = "Hanede Yaşayan Diğer Kişi Sayısı";
      else if (p.startsWith('3.')) label = `Hanede Yaşayan Diğer Kişi Bilgileri (${p.split('.')[1]})`;
      else if (p === '4.0') label = "Hastalık ve Engellilik Durumu Sayısı";
      else if (p.startsWith('4.')) label = `Hastalık ve Engellilik Durumu (${p.split('.')[1]})`;
      else if (p === '5.1') label = "Sosyal Güvence";
      else if (p === '6.1') label = "Hane Gelir Durumu";
      else if (p === '6.2') label = "Hane Gider Durumu";
      else if (p === '6.3') label = "Hane Borç Durumu";
      else if (p.startsWith('7.')) label = "Hane Konut Durumu";
      else if (p === '8-9') label = "Hane Eşya Durumu";
      else if (p.startsWith('10.')) label = "Diğer Kurum Yardımlarından Yararlanma Durumu";
      else if (p.startsWith('11.')) label = "Görüşme Yapan Kişi Bilgileri";

      groups.push({
        id: p,
        label: label,
        fields
      });
    });
    
    return groups;
  }, [debugFields, formData['3.0-haneoturansayisi'], formData['4.0-hastalikadedi'], formMode]);

  const sections = stepGroups.map(g => g.label);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const fieldsInCurrentSection = stepGroups[currentSectionIndex]?.fields || [];

  const updateField = (id: string, value: any) => {
    let processedValue = value;
    if (typeof value === 'string') {
      // PRO TIP: Do not uppercase technical data like base64 signatures
      if (id === '11.1-imza') {
        processedValue = value;
      } else if (id === '2.1-eposta') {
        processedValue = value.toLocaleLowerCase('tr-TR');
      } else {
        processedValue = value.toLocaleUpperCase('tr-TR');
      }
    }
    setFormData(prev => ({ ...prev, [id]: processedValue }));
  };

  const getPDFBytes = async () => {
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);
    
    const isCustomFont = !!INTER_BOLD_BASE64;
    
    // Internal helper to ensure text is encodable by the current font
    const encodeForPDF = (str: string) => {
      if (!str) return '';
      if (isCustomFont) return String(str);
      
      // Fallback for standard fonts (Helvetica) which don't support Turkish characters
      return String(str)
        .replace(/Ğ/g, 'G').replace(/ğ/g, 'g')
        .replace(/Ü/g, 'U').replace(/ü/g, 'u')
        .replace(/Ş/g, 'S').replace(/ş/g, 's')
        .replace(/İ/g, 'I').replace(/ı/g, 'i')
        .replace(/Ö/g, 'O').replace(/ö/g, 'o')
        .replace(/Ç/g, 'C').replace(/ç/g, 'c')
        .replace(/[^\x00-\x7F]/g, '');
    };
    
    let font;
    try {
      if (INTER_BOLD_BASE64) {
        const binaryString = window.atob(INTER_BOLD_BASE64);
        const len = binaryString.length;
        const uint8 = new Uint8Array(len);
        for (let j = 0; j < len; j++) {
          uint8[j] = binaryString.charCodeAt(j);
        }
        font = await pdfDoc.embedFont(uint8);
      } else {
        font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      }
    } catch (e) {
      console.error('Font embedding error:', e);
      font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    }

    const pageImages = [formImages.form_sayfa1, formImages.form_sayfa2];
    
    let pagesAdded = 0;
    let lastError = '';
    
    for (let i = 0; i < pageImages.length; i++) {
      const base64Data = pageImages[i];
      try {
        // Convert base64 to Uint8Array using our robust utility
        const base64Content = base64Data.split(',')[1];
        const uint8 = decodeBase64(base64Content);

        const image = await pdfDoc.embedJpg(uint8);

        const page = pdfDoc.addPage([595, 842]);
        page.drawImage(image, { x: 0, y: 0, width: 595, height: 842 });
        pagesAdded++;

        const fieldsOnThisPage = debugFields.filter(f => f.page === i + 1);
        for (const field of fieldsOnThisPage) {
          const value = formData[field.id];
          if (value === undefined || value === '') continue;

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

          // Handle Checkbox with multiple options (Option Mappings)
          if (field.type === 'checkbox' && field.options && field.optionMappings) {
            const selectedOptions = Array.isArray(value) ? value : (value ? [value] : []);
            selectedOptions.forEach(opt => {
              const mapping = field.optionMappings?.[opt];
              if (mapping) {
                if (debugMode) {
                  page.drawRectangle({
                    x: mapping.x,
                    y: mapping.y,
                    width: mapping.width,
                    height: mapping.height,
                    borderColor: rgb(0, 0, 1),
                    borderWidth: 0.5,
                  });
                }

                const checkboxSize = 6;
                const xOffset = (mapping.width - (font.widthOfTextAtSize('X', checkboxSize))) / 2;
                const yOffset = (mapping.height - checkboxSize) / 2 + 1;

                page.drawText('X', {
                  x: mapping.x + xOffset,
                  y: mapping.y + yOffset,
                  size: checkboxSize,
                  font: font,
                  color: rgb(0, 0, 0),
                });
              }
            });
            continue;
          }

          if (field.type === 'text' || field.type === 'number' || field.type === 'date' || field.type === 'select') {
            // CRITICAL: Handle Signature Image embedding
            if (field.id === '11.1-imza' && typeof value === 'string' && value.toLowerCase().includes('base64,')) {
              try {
                // Decode base64 using our robust utility
                const base64Content = value.split(',')[1];
                const bytes = decodeBase64(base64Content);
                
                const signatureImage = await pdfDoc.embedPng(bytes);
                
                const dims = signatureImage.scale(1);
                const targetWidth = field.width;
                const targetHeight = field.height;
                
                let renderWidth = targetWidth;
                let renderHeight = (dims.height * targetWidth) / dims.width;
                
                if (renderHeight > targetHeight) {
                  renderHeight = targetHeight;
                  renderWidth = (dims.width * targetHeight) / dims.height;
                }

                page.drawImage(signatureImage, {
                  x: field.x + (targetWidth - renderWidth) / 2,
                  y: field.y + (targetHeight - renderHeight) / 2,
                  width: renderWidth,
                  height: renderHeight,
                });
              } catch (sigErr) {
                console.error('Error embedding signature image:', sigErr);
              }
              continue; // Skip text rendering for signature image
            }

            let displayValue = String(value);
            if (field.type === 'date' && displayValue.match(/^\d{4}-\d{2}-\d{2}$/)) {
              const [y, m, d] = displayValue.split('-');
              displayValue = `${d}.${m}.${y}`;
            }
            const text = encodeForPDF(displayValue);
            const baseFontSize = 6;
            const padding = 1.5;
            const availableWidth = field.width - (padding * 2);
            
            try {
              // Word wrap logic
              const words = text.split(' ');
              const lines: string[] = [];
              let currentLine = '';

              for (const word of words) {
                const testLine = currentLine ? `${currentLine} ${word}` : word;
                const testWidth = font.widthOfTextAtSize(testLine, baseFontSize);
                if (testWidth <= availableWidth) {
                  currentLine = testLine;
                } else {
                  if (currentLine) lines.push(currentLine);
                  currentLine = word;
                }
              }
              if (currentLine) lines.push(currentLine);

              const lineHeight = baseFontSize * 1.1;
              const fitsMultiLine = field.height >= lineHeight * 1.5;

              if (!fitsMultiLine || lines.length <= 1) {
                // Existing scaling logic for single line or small boxes
                let textWidth = font.widthOfTextAtSize(text, baseFontSize);
                let scaledFontSize = baseFontSize;
                if (textWidth > availableWidth) {
                  scaledFontSize = (availableWidth / textWidth) * baseFontSize;
                  scaledFontSize = Math.max(4, scaledFontSize);
                }
                const vOffset = (field.height - scaledFontSize) / 2 + 0.5;
                page.drawText(text, {
                  x: field.x + padding,
                  y: field.y + vOffset,
                  size: scaledFontSize,
                  font: font,
                  color: rgb(0, 0, 0),
                });
              } else {
                // Multi-line drawing (Left Aligned)
                // Start from the top of the field with a small offset
                let currentY = field.y + field.height - baseFontSize - 0.5; 
                
                lines.forEach((line) => {
                  if (currentY >= field.y) {
                    page.drawText(line, {
                      x: field.x + padding,
                      y: currentY,
                      size: baseFontSize,
                      font: font,
                      color: rgb(0, 0, 0),
                    });
                    currentY -= lineHeight;
                  }
                });
              }
            } catch (textErr) {
              console.error(`Error drawing text for field ${field.id}:`, textErr);
            }
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
        }
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

  const generateExcel = () => {
    // Get all fields that were actually part of the visible step groups
    const visibleFields = stepGroups.flatMap(group => group.fields);
    
    const data = visibleFields.map(field => ({
      id: field.id,
      label: field.label,
      'seçilen değer': formData[field.id] || ''
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Form Verileri");
    
    const fileName = `FRM.005_${formData['2.0-tckimlikno'] || 'Yeni'}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const pdfBytes = await getPDFBytes();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `FRM.005_${formData['2.0-tckimlikno'] || 'Yeni'}.pdf`;
      link.click();
      setView('result');
    } catch (error: any) {
      console.error('PDF Error:', error);
      alert(`Hata: ${error.message || 'PDF oluşturulamadı.'}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="h-[100dvh] bg-white font-sans text-gray-900 flex flex-col overflow-hidden">
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
      {view !== 'home' && (
        <header className="flex-none bg-white border-b border-gray-100 shadow-sm z-50 flex justify-center py-2">
          <div className="w-full max-w-xl px-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => {
                  if (view === 'form' && currentSectionIndex > 0) {
                    setCurrentSectionIndex(prev => prev - 1);
                  } else {
                    setView('home');
                  }
                }}
                className="p-1.5 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 flex items-center gap-1"
              >
                <ChevronLeft size={24} />
                <span className="text-sm font-bold uppercase hidden sm:inline">Geri</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              {fontLoadingStatus === 'loading' && <RefreshCw size={14} className="animate-spin text-gray-400" />}
              <span className="text-sm font-black text-red-600 tracking-widest uppercase">TÜRK KIZILAY</span>
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className={`flex-1 overflow-y-auto px-4 scroll-smooth flex flex-col items-center bg-gray-50/30 ${view === 'home' ? 'pt-0 pb-6' : 'py-6'}`}>
        <div className="w-full max-w-7xl flex flex-col min-h-full relative">
          
          {/* HELP VIEW */}
          {view === 'help' && (
            <div className="space-y-8 py-4 flex-1 max-w-xl mx-auto w-full flex flex-col">
              <div className="space-y-4 flex-1">
                <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
                  <Info className="text-red-600" /> Uygulama Hakkında
                </h2>
                <div className="bg-white p-6 rounded-3xl text-sm text-gray-600 leading-relaxed space-y-6 shadow-sm border border-gray-100">
                  <div className="space-y-4 text-justify">
                    <p>Uygulama, Türk Kızılay'ın insani yardım faaliyetlerini kolaylaştırmak ve saha ekiplerinin sosyal inceleme süreçlerini hızlandırmak amacıyla geliştirilmiştir.</p>
                    <p><strong>Türk Kızılay'ın resmi uygulaması değildir.</strong></p>
                    <p>Uygulamaya girilen veriler anlık olarak işlenerek resmi "FRM.005" ve "FRM.006" formatlarına uygun PDF belgeleri üretilir. Veriler tarayıcı oturumunuzda tutulur, PDF oluşturulduktan sonra silinir.</p>
                    <p><strong>Mimar ve Mühendisler Grubu Derneği (MMG) Bursa Şubesi'nin teknik destek ve vizyonuyla hayata geçirilmiştir.</strong></p>
                  </div>
                </div>
              </div>
              
              {/* Version Info Footer - Only on About page */}
              <div className="mt-auto pt-8 pb-6 text-center flex flex-col items-center">
                <button 
                  onClick={() => {
                    setShowPasswordModal(true);
                    setPasswordInput('');
                    setPasswordError(false);
                  }}
                  className="text-[10px] font-bold text-gray-300 uppercase tracking-widest hover:text-red-500 transition-colors mb-2"
                >
                  Geliştirici modu
                </button>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Versiyon 2.1.0</p>
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
                    onClick={() => setView('home')}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
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
                  className={`flex-1 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${debugPage === 1 ? 'bg-red-600 text-white shadow-lg shadow-red-100' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                  SAYFA 1
                </button>
                <button 
                  onClick={() => setDebugPage(2)}
                  className={`flex-1 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${debugPage === 2 ? 'bg-red-600 text-white shadow-lg shadow-red-100' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                  SAYFA 2
                </button>
              </div>


              <div className="relative border-2 border-gray-200 rounded-2xl overflow-hidden shadow-xl bg-white select-none aspect-[595/842]">
                <img 
                  ref={debugImageRef}
                  src={debugPage === 1 ? formImages.form_sayfa1 : formImages.form_sayfa2} 
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
                      <React.Fragment key={field.id}>
                        <motion.div
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
                            display: (field.type === 'checkbox' && field.options && field.options.length > 0) ? 'none' : 'flex',
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

                        {/* Render Option Mapping Boxes */}
                        {field.optionMappings && Object.entries(field.optionMappings).map(([opt, mappingValue]) => {
                          const mapping = mappingValue as { x: number, y: number, width: number, height: number };
                          return (
                            <motion.div
                              key={`${field.id}-${opt}`}
                              drag
                              dragMomentum={false}
                              onDragStart={() => setSelectedFieldId(field.id)}
                              onDragEnd={(e, info) => {
                                if (!debugImageRef.current) return;
                                const rect = debugImageRef.current.getBoundingClientRect();
                                const deltaX = (info.offset.x / rect.width) * 595;
                                const deltaY = (info.offset.y / rect.height) * 842;
                                
                                setDebugFields(prev => prev.map(f => {
                                  if (f.id !== field.id) return f;
                                  const newMappings = { ...(f.optionMappings || {}) } as any;
                                  newMappings[opt] = {
                                    ...mapping,
                                    x: Number((mapping.x + deltaX).toFixed(2)),
                                    y: Number((mapping.y - deltaY).toFixed(2))
                                  };
                                  return { ...f, optionMappings: newMappings };
                                }));
                              }}
                              style={{
                                position: 'absolute',
                                left: `${(mapping.x / 595) * 100}%`,
                                bottom: `${(mapping.y / 842) * 100}%`,
                                width: `${(mapping.width / 595) * 100}%`,
                                height: `${(mapping.height / 842) * 100}%`,
                                border: isSelected ? '2px solid #3b82f6' : '1px solid rgba(59, 130, 246, 0.4)',
                                backgroundColor: isSelected ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                cursor: 'move',
                                zIndex: isSelected ? 49 : 9,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span className="text-[6px] font-bold text-blue-500 truncate px-0.5">{opt}</span>
                              {isSelected && (
                                <>
                                  <motion.div
                                    drag="x"
                                    dragMomentum={false}
                                    onDrag={(e, info) => {
                                      e.stopPropagation();
                                      if (!debugImageRef.current) return;
                                      const rect = debugImageRef.current.getBoundingClientRect();
                                      const deltaW = (info.delta.x / rect.width) * 595;
                                      setDebugFields(prev => prev.map(f => {
                                        if (f.id !== field.id) return f;
                                        const newMappings = { ...(f.optionMappings || {}) } as any;
                                        newMappings[opt] = { ...mapping, width: Math.max(1, mapping.width + deltaW) };
                                        return { ...f, optionMappings: newMappings };
                                      }));
                                    }}
                                    className="absolute right-0 top-0 bottom-0 w-1 cursor-ew-resize bg-blue-500/50"
                                  />
                                  <motion.div
                                    drag="y"
                                    dragMomentum={false}
                                    onDrag={(e, info) => {
                                      e.stopPropagation();
                                      if (!debugImageRef.current) return;
                                      const rect = debugImageRef.current.getBoundingClientRect();
                                      const deltaH = (-info.delta.y / rect.height) * 842;
                                      setDebugFields(prev => prev.map(f => {
                                        if (f.id !== field.id) return f;
                                        const newMappings = { ...(f.optionMappings || {}) } as any;
                                        newMappings[opt] = { ...mapping, height: Math.max(1, mapping.height + deltaH) };
                                        return { ...f, optionMappings: newMappings };
                                      }));
                                    }}
                                    className="absolute top-0 left-0 right-0 h-1 cursor-ns-resize bg-blue-500/50"
                                  />
                                </>
                              )}
                            </motion.div>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {selectedFieldId && (
                <>
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
                    {debugFields.find(f => f.id === selectedFieldId)?.type === 'checkbox' && (
                      <div className="flex flex-col mr-4">
                        <span className="text-red-500 font-black uppercase tracking-wider text-[10px] mb-1">Seçim Limiti</span>
                        <input 
                          type="number"
                          min="1"
                          value={debugFields.find(f => f.id === selectedFieldId)?.maxSelections || ''}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || undefined;
                            setDebugFields(prev => prev.map(f => f.id === selectedFieldId ? { ...f, maxSelections: val } : f));
                          }}
                          placeholder="Sınırsız"
                          className="bg-white/5 border border-white/10 rounded-xl p-3 text-white font-bold text-sm focus:outline-none focus:border-red-500 transition-all w-20"
                        />
                      </div>
                    )}
                        <div className="flex flex-col mr-4">
                          <span className="text-red-500 font-black uppercase tracking-wider text-[10px] mb-1">Sayfa</span>
                          <select 
                            value={debugFields.find(f => f.id === selectedFieldId)?.page || 1}
                            onChange={(e) => {
                              const val = parseInt(e.target.value);
                              setDebugFields(prev => prev.map(f => f.id === selectedFieldId ? { ...f, page: val } : f));
                            }}
                            className="bg-white/5 border border-white/10 rounded-xl p-3 text-white font-bold text-sm focus:outline-none focus:border-red-500 transition-all appearance-none cursor-pointer"
                          >
                            <option value={1} className="bg-gray-900">1</option>
                            <option value={2} className="bg-gray-900">2</option>
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

                  {(debugFields.find(f => f.id === selectedFieldId)?.type === 'select' || debugFields.find(f => f.id === selectedFieldId)?.type === 'checkbox') && (
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
                  
                  {debugFields.find(f => f.id === selectedFieldId)?.type !== 'checkbox' && (
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
                  </div>
                )}
                
                {/* Option Mappings UI */}
                    {debugFields.find(f => f.id === selectedFieldId)?.options && (
                      <div className="col-span-2 space-y-4 bg-white/5 p-5 rounded-[24px] border border-white/10 mt-2">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-4 bg-red-500 rounded-full"></div>
                          <label className="text-[10px] text-white uppercase font-black tracking-widest block">Seçeneğe Bağlı Koordinatlar</label>
                        </div>
                        
                        <div className="space-y-4">
                          {debugFields.find(f => f.id === selectedFieldId)?.options?.map(option => {
                            const field = debugFields.find(f => f.id === selectedFieldId)!;
                            const mapping = field.optionMappings?.[option] || { x: 0, y: 0, width: 8, height: 8 };
                            
                            return (
                              <div key={option} className="p-4 bg-black/20 rounded-2xl border border-white/5 space-y-3">
                                <div className="flex items-center justify-between">
                                  <span className="text-[11px] font-black text-red-500 uppercase tracking-wider">{option}</span>
                                  <button 
                                    onClick={() => {
                                      setDebugFields(prev => prev.map(f => {
                                        if (f.id !== selectedFieldId) return f;
                                        const newMappings = { ...(f.optionMappings || {}) };
                                        if (newMappings[option]) {
                                          delete newMappings[option];
                                        } else {
                                          newMappings[option] = { x: f.x, y: f.y, width: 8, height: 8 };
                                        }
                                        return { ...f, optionMappings: newMappings };
                                      }));
                                    }}
                                    className={`text-[9px] font-bold px-3 py-1 rounded-lg uppercase tracking-tighter transition-all ${field.optionMappings?.[option] ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-white/5 text-gray-500 border border-white/10'}`}
                                  >
                                    {field.optionMappings?.[option] ? 'Aktif' : 'Aktif Et'}
                                  </button>
                                </div>

                                {field.optionMappings?.[option] && (
                                  <div className="grid grid-cols-4 gap-2">
                                    <div className="space-y-1">
                                      <label className="text-[8px] text-gray-500 uppercase font-bold">X</label>
                                      <input 
                                        type="number"
                                        step="0.1"
                                        value={mapping.x}
                                        onChange={(e) => {
                                          const val = parseFloat(e.target.value);
                                          setDebugFields(prev => prev.map(f => {
                                            if (f.id !== selectedFieldId) return f;
                                            return {
                                              ...f,
                                              optionMappings: {
                                                ...f.optionMappings,
                                                [option]: { ...mapping, x: val }
                                              }
                                            };
                                          }));
                                        }}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white font-bold text-[10px] focus:outline-none focus:border-red-500"
                                      />
                                    </div>
                                    <div className="space-y-1">
                                      <label className="text-[8px] text-gray-500 uppercase font-bold">Y</label>
                                      <input 
                                        type="number"
                                        step="0.1"
                                        value={mapping.y}
                                        onChange={(e) => {
                                          const val = parseFloat(e.target.value);
                                          setDebugFields(prev => prev.map(f => {
                                            if (f.id !== selectedFieldId) return f;
                                            return {
                                              ...f,
                                              optionMappings: {
                                                ...f.optionMappings,
                                                [option]: { ...mapping, y: val }
                                              }
                                            };
                                          }));
                                        }}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white font-bold text-[10px] focus:outline-none focus:border-red-500"
                                      />
                                    </div>
                                    <div className="space-y-1">
                                      <label className="text-[8px] text-gray-500 uppercase font-bold">G</label>
                                      <input 
                                        type="number"
                                        step="0.1"
                                        value={mapping.width}
                                        onChange={(e) => {
                                          const val = parseFloat(e.target.value);
                                          setDebugFields(prev => prev.map(f => {
                                            if (f.id !== selectedFieldId) return f;
                                            return {
                                              ...f,
                                              optionMappings: {
                                                ...f.optionMappings,
                                                [option]: { ...mapping, width: val }
                                              }
                                            };
                                          }));
                                        }}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white font-bold text-[10px] focus:outline-none focus:border-red-500"
                                      />
                                    </div>
                                    <div className="space-y-1">
                                      <label className="text-[8px] text-gray-500 uppercase font-bold">Y</label>
                                      <input 
                                        type="number"
                                        step="0.1"
                                        value={mapping.height}
                                        onChange={(e) => {
                                          const val = parseFloat(e.target.value);
                                          setDebugFields(prev => prev.map(f => {
                                            if (f.id !== selectedFieldId) return f;
                                            return {
                                              ...f,
                                              optionMappings: {
                                                ...f.optionMappings,
                                                [option]: { ...mapping, height: val }
                                              }
                                            };
                                          }));
                                        }}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white font-bold text-[10px] focus:outline-none focus:border-red-500"
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

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
                </>
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
                             field.type === 'date' ? 'Tarih' : 
                             field.type === 'select' ? 'Çoktan Seçmeli' : 'Onay Kutusu'}
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
            <div className="space-y-3 pb-12 pt-0 flex-1 max-w-xl mx-auto w-full flex flex-col items-center">
              <div className="w-48 h-48 mb-2 flex items-center justify-center">
                <img 
                  src={kizilayLogo} 
                  alt="Türk Kızılay Logo" 
                  className="w-full h-full object-contain"
                />
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
                  setView('selection');
                }}
                className="w-full p-6 bg-red-600 text-white rounded-3xl shadow-xl shadow-red-100 active:scale-95 transition-all flex items-center gap-5 group"
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Plus size={28} />
                </div>
                <div className="flex flex-col items-start text-left">
                  <h2 className="text-lg md:text-xl font-black uppercase tracking-wide">FRM.005 Oluştur</h2>
                  <p className="text-xs font-bold opacity-80 tracking-tight">Sosyal İnceleme ve İhtiyaç Tespit Formu</p>
                </div>
              </button>

              <div className="flex-1" />

              <button 
                onClick={() => setView('help')}
                className="w-full mt-4 p-4 bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-100 rounded-2xl transition-all duration-300 flex items-center justify-center gap-4 group mb-4 active:scale-95"
              >
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HelpCircle size={22} className="text-gray-400 group-hover:text-red-500 transition-colors" />
                </div>
                <span className="text-sm font-black text-gray-500 group-hover:text-red-600 uppercase tracking-widest transition-colors">Uygulama Hakkında</span>
              </button>
            </div>
          )}

          {/* SELECTION VIEW */}
          {view === 'selection' && (
            <div className="space-y-4 py-8 flex-1 max-w-md mx-auto w-full flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-500">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">FORM TÜRÜNÜ SEÇİN</h2>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <button 
                  onClick={() => {
                    setFormMode('mandatory');
                    setView('form');
                  }}
                  className="p-5 bg-white border-2 border-gray-100 rounded-3xl hover:border-red-500 hover:shadow-xl transition-all flex items-center text-left space-x-4 group"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <CheckCircle2 className="text-red-600" size={24} />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight">ZORUNLU ALANLAR</h3>
                    <p className="text-[10px] font-bold text-gray-400 leading-tight">
                      Sadece temel ve zorunlu bilgileri içeren hızlı form
                    </p>
                  </div>
                </button>

                <button 
                  onClick={() => {
                    setFormMode('all');
                    setView('form');
                  }}
                  className="p-5 bg-white border-2 border-gray-100 rounded-3xl hover:border-gray-900 hover:shadow-xl transition-all flex items-center text-left space-x-4 group"
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <Menu className="text-gray-900" size={24} />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight">TÜM ALANLAR</h3>
                    <p className="text-[10px] font-bold text-gray-400 leading-tight">
                      Eşya, konut ve gelir detaylarını içeren kapsamlı form
                    </p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* FRM.006 PLACEHOLDER VIEW */}
          {view === 'frm006' && (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 max-w-xl mx-auto w-full">
              <div className="w-20 h-20 bg-gray-100 text-gray-400 rounded-3xl flex items-center justify-center mx-auto shadow-inner">
                <RefreshCw size={40} className="animate-spin-slow" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">FRM.006 Hazırlanıyor</h2>
                <p className="text-gray-500 text-sm">Açık Rıza Formu modülü çok yakında burada olacak.</p>
              </div>
              <button 
                onClick={() => setView('home')}
                className="px-8 py-3 bg-gray-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest active:scale-95 transition-all"
              >
                ANA SAYFAYA DÖN
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
                  onClick={generatePDF}
                  disabled={isGenerating}
                  className="w-full py-5 bg-red-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-red-200 flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
                >
                  {isGenerating ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" /> : <Download size={24} />}
                  PDF OLARAK İNDİR
                </button>

                <button 
                  onClick={generateExcel}
                  className="w-full py-5 bg-green-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-green-200 flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
                >
                  <FileText size={24} />
                  EXCEL OLARAK İNDİR
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
                            {field.id === '11.1-imza' ? (
                              <SignaturePad 
                                label={field.label + (field.required ? ' *' : '')} 
                                value={formData[field.id]} 
                                onChange={(v: string) => updateField(field.id, v)} 
                              />
                            ) : field.type === 'checkbox' ? (
                              <div className="pt-2">
                                <Checkbox 
                                  label={field.label + (field.required ? ' *' : '')} 
                                  value={formData[field.id]} 
                                  options={field.options}
                                  maxSelections={field.maxSelections}
                                  onChange={(v: any) => updateField(field.id, v)} 
                                />
                              </div>
                            ) : (field.type === 'select') ? (
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
                                type={field.id.includes('tckimlikno') ? 'text' : (field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : 'text')}
                                inputMode={field.id.includes('tckimlikno') ? 'numeric' : undefined}
                                onChange={(v: string) => {
                                  if (field.id.includes('tckimlikno')) {
                                    const numericValue = v.replace(/\D/g, '');
                                    updateField(field.id, numericValue.slice(0, 11));
                                  } else {
                                    updateField(field.id, v);
                                  }
                                }} 
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
        </div>
      </main>
    </div>
  );
}
