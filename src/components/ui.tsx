import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Info, RotateCcw } from 'lucide-react';
import { kinds, MOCK_NOTICE, type ContentKind } from '@/lib/mock';
import type { ReactNode } from 'react';
export function Badge({ kind }: { kind: ContentKind }) { const k = kinds[kind]; return <span className={`badge ${k.className}`} title={k.description}><span className="badge-dot" />{k.label}</span>; }
export function ButtonLink({ href, children, secondary = false, className = '' }: { href: string; children: ReactNode; secondary?: boolean; className?: string }) { return <Link href={href} className={`button ${secondary ? 'button-secondary' : 'button-primary'} ${className}`}>{children}<ArrowRight size={17} /></Link>; }
export function SectionHeading({ number, eyebrow, title, text }: { number: string; eyebrow: string; title: string; text?: string }) { return <div className="section-heading"><div><p className="eyebrow"><span>{number}</span> {eyebrow}</p><h2>{title}</h2></div>{text && <p>{text}</p>}</div>; }
export function MockNotice({ compact = false }: { compact?: boolean }) { return <div className={`mock-notice ${compact ? 'compact' : ''}`}><Info size={16} aria-hidden="true" /><p>{MOCK_NOTICE}{!compact && <span> 입력값에 따라 결과가 바뀌지 않으며, 윤달 여부와 음력 날짜의 실제 유효성은 확인하지 않습니다.</span>}</p></div>; }
export function Fact({ text, source, sourceName }: { text: string; source: string; sourceName: string }) { return <div className="fact-box"><Badge kind="fact" /><p>{text}</p><a href={source} target="_blank" rel="noreferrer">{sourceName}<ArrowUpRight size={13} /></a></div>; }
export function EmptyState({ title, text, action }: { title: string; text: string; action?: ReactNode }) { return <div className="empty-state"><div className="seal">時</div><h2>{title}</h2><p>{text}</p>{action}</div>; }
export function ErrorState({ title = '기록을 불러오지 못했어요', text, retry }: { title?: string; text: string; retry?: () => void }) { return <div className="error-state" role="alert"><Info size={23} /><h2>{title}</h2><p>{text}</p>{retry && <button className="button button-secondary" onClick={retry}><RotateCcw size={16} />다시 시도</button>}</div>; }
