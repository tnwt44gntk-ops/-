import type { Metadata } from 'next';
import { Header, Footer } from '@/components/shell';
import './globals.css';
export const metadata: Metadata = { title: { default: '시연 時緣 — 당신의 또 다른 시대', template: '%s | 시연 時緣' }, description: '당신은 어느 시대에 태어났어야 했을까? 한국사와 창작으로 만나는 또 다른 나. 실제 사주 계산이 없는 mock 역사 체험.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><body><a className="skip-link" href="#main">본문으로 건너뛰기</a><Header /><main id="main">{children}</main><Footer /></body></html>; }
