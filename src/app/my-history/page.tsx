import type { Metadata } from 'next';
import { HistoryView } from '@/components/history-view';
export const metadata: Metadata = { title: '나의 역사' };
export default function MyHistory() { return <HistoryView/>; }
