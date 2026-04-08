import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { google } from 'googleapis';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json({ limit: '50mb' }));

  // --- Google Drive API Setup ---
  const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
  
  // Lazy init for Google Auth
  const getDriveService = () => {
    const credentials = {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    };

    if (!credentials.client_email || !credentials.private_key) {
      throw new Error('Google Drive credentials (EMAIL or PRIVATE_KEY) are missing in environment variables.');
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: credentials.client_email,
        private_key: credentials.private_key,
      },
      scopes: SCOPES,
    });

    return google.drive({ version: 'v3', auth });
  };

  // --- API Routes ---
  app.post('/api/upload-to-drive', async (req, res) => {
    try {
      const { fileName, pdfBase64, folderId } = req.body;

      if (!pdfBase64) {
        return res.status(400).json({ error: 'PDF verisi eksik.' });
      }

      const drive = getDriveService();
      const targetFolderId = folderId || process.env.GOOGLE_DRIVE_FOLDER_ID;

      if (!targetFolderId) {
        return res.status(400).json({ error: 'Hedef klasör ID (GOOGLE_DRIVE_FOLDER_ID) ayarlanmamış.' });
      }

      // Convert base64 to buffer
      const buffer = Buffer.from(pdfBase64, 'base64');
      const { Readable } = await import('stream');
      const stream = new Readable();
      stream.push(buffer);
      stream.push(null);

      const response = await drive.files.create({
        requestBody: {
          name: fileName || `Kizilay_Formu_${Date.now()}.pdf`,
          parents: [targetFolderId],
        },
        media: {
          mimeType: 'application/pdf',
          body: stream,
        },
        fields: 'id, webViewLink',
      });

      res.json({ 
        success: true, 
        fileId: response.data.id,
        link: response.data.webViewLink 
      });
    } catch (error: any) {
      console.error('Drive Upload Error:', error);
      res.status(500).json({ error: error.message || 'Dosya yüklenirken bir hata oluştu.' });
    }
  });

  // --- Vite Middleware ---
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
