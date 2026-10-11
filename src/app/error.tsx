'use client';
import { ErrorState } from '@/components/ui';
export default function Error({ reset }: { reset: () => void }) { return <div className="container page-content"><ErrorState title="이야기를 펼치지 못했어요" text="일시적인 문제가 발생했습니다. 다시 시도해 주세요." retry={reset}/></div>; }
