import { ButtonLink, EmptyState } from '@/components/ui';
export default function NotFound() { return <div className="container page-content"><EmptyState title="아직 쓰이지 않은 페이지" text="찾으시는 페이지가 없어요. 이야기의 시작으로 돌아가세요." action={<ButtonLink href="/">시연 홈으로</ButtonLink>}/></div>; }
