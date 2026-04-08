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

export const FORM_CONFIG: FieldConfig[] = [];
