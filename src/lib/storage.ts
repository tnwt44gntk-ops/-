import { type BirthInput, validateBirth } from './validation';
export const CURRENT_KEY = 'siyeon-current-v1';
export const HISTORY_KEY = 'siyeon-history-v1';
export type HistoryRecord = { id: string; createdAt: string; birth: BirthInput | null; mockVersion: 'v1' };
export function isRecord(value: unknown): value is HistoryRecord {
  if (!value || typeof value !== 'object') return false;
  const r = value as Partial<HistoryRecord>;
  if (typeof r.id !== 'string' || !r.id || typeof r.createdAt !== 'string' || Number.isNaN(Date.parse(r.createdAt)) || r.mockVersion !== 'v1') return false;
  if (r.birth === null) return true;
  const b = r.birth;
  return !!b && typeof b.date === 'string' && typeof b.time === 'string' && typeof b.region === 'string' && typeof b.leap === 'boolean' && typeof b.unknownTime === 'boolean' && Object.keys(validateBirth(b)).length === 0;
}
export function parseCurrent(raw: string | null): HistoryRecord | null { if (!raw) return null; const r: unknown = JSON.parse(raw); if (!isRecord(r)) throw new Error('기록 형식이 올바르지 않습니다.'); return r; }
export function parseHistory(raw: string | null): HistoryRecord[] { if (!raw) return []; const records: unknown = JSON.parse(raw); if (!Array.isArray(records) || !records.every(isRecord)) throw new Error('저장된 기록을 읽을 수 없습니다.'); return records; }
export function addHistory(records: HistoryRecord[], record: HistoryRecord) { return [record, ...records.filter(r => r.id !== record.id)].slice(0, 20); }
export function createRecord(birth: BirthInput | null): HistoryRecord { return { id: crypto.randomUUID(), createdAt: new Date().toISOString(), birth, mockVersion: 'v1' }; }
