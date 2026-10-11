import type { Metadata } from 'next';
import { ResultView } from '@/components/result-view';
export const metadata: Metadata = { title: '또 다른 나의 시대 · 예시 결과' };
export default function Result() { return <ResultView/>; }
