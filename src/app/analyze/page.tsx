import type { Metadata } from 'next';
import { AnalyzeForm } from '@/components/analyze-form';
export const metadata: Metadata = { title: '나의 시대 찾기' };
export default function Analyze() { return <div className="container page-content"><div className="page-intro"><p className="eyebrow">BEGIN YOUR JOURNEY</p><h1>시간을 건너는 첫걸음</h1><p>태어난 순간을 기록하고, 한국사 속 나의 가능성을 만나보세요.</p></div><AnalyzeForm/></div>; }
