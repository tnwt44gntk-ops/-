export const MOCK_NOTICE = '이 체험은 고정된 mock 데이터를 사용합니다. 실제 AI 분석·사주 계산·음양력 변환을 수행하지 않습니다.';
export type ContentKind = 'fact' | 'interpretation' | 'fiction';
export const kinds = {
  fact: { label: '역사적 사실', description: '출처로 확인할 수 있는 역사 설명', className: 'badge-fact' },
  interpretation: { label: '명리학 해석 · 예시', description: '전통 명리학에서 착안한 가상 성향 · 실제 사주 해석 아님', className: 'badge-interpretation' },
  fiction: { label: '창작', description: '체험을 위해 만든 추천과 가상 이야기', className: 'badge-fiction' },
};
export const eras = [
  { id: 'joseon-late', name: '조선 후기', hanja: '朝鮮後期', period: '18세기 · 정조의 시대', keyword: '새로운 생각이 꽃피던 시간', color: 'gold', description: '책을 통해 세상을 읽고, 일상의 문제에 새로운 답을 찾는 당신. 변화를 꿈꾸는 학자의 하루를 상상해 보세요.', fact: '정조는 즉위한 1776년에 규장각을 설치했습니다. 규장각은 왕실 도서를 보관하고 학문과 정책 연구를 지원했습니다.', source: 'https://contents.history.go.kr/front/tg/view.do?levelId=tg_003_2320', sourceName: '우리역사넷 · 규장각', scene: 'palace' },
  { id: 'joseon-early', name: '조선 전기', hanja: '朝鮮前期', period: '15세기 · 세종의 시대', keyword: '호기심이 발명이 되는 시간', color: 'blue', description: '작은 궁금증을 끝까지 따라가는 마음. 하늘의 움직임과 시간의 흐름을 탐구하는 삶을 떠올려 보세요.', fact: '세종 대에 장영실은 자격루를 비롯한 시계와 천문 관측 기구 제작에 참여했습니다.', source: 'https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_n310300', sourceName: '우리역사넷 · 장영실', scene: 'stars' },
  { id: 'goryeo', name: '고려', hanja: '高麗', period: '13세기 · 기록의 시대', keyword: '한 글자에 마음을 새기는 시간', color: 'green', description: '오래 남을 무언가를 만들고 싶은 당신. 나무와 종이, 잉크 사이에서 정성을 쌓는 삶을 그려 보세요.', fact: '고려 시대의 팔만대장경은 몽골의 침입을 불교의 힘으로 극복하려는 염원을 담아 제작되었습니다.', source: 'https://contents.history.go.kr/front/tg/view.do?levelId=tg_002_0060', sourceName: '우리역사넷 · 팔만대장경', scene: 'mountains' },
] as const;
export const figures = [
  { name: '정약용', hanja: '丁若鏞', title: '세상을 살피는 사유', years: '1762 — 1836', text: '문제를 관찰하고 더 나은 일상을 상상하는 마음을 연결한 창작 추천입니다.', fact: '정약용은 1818년 지방 수령의 지침을 담은 《목민심서》를 완성했습니다.', source: 'https://contents.history.go.kr/front/tg/view.do?levelId=tg_003_2490', sourceName: '우리역사넷 · 목민심서' },
  { name: '장영실', hanja: '蔣英實', title: '호기심을 현실로', years: '조선 전기', text: '손으로 만들고 원리를 탐구하는 성향에 연결한 창작 추천입니다.', fact: '장영실은 세종 대 자격루 등 과학 기구 제작에 참여했습니다.', source: 'https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_n310300', sourceName: '우리역사넷 · 장영실' },
  { name: '정조', hanja: '正祖', title: '새로운 길을 여는 마음', years: '1752 — 1800', text: '새로운 생각에 열려 있는 성향을 바탕으로 한 창작 추천입니다.', fact: '정조는 즉위 직후 규장각을 세우고 규장각신을 등용했습니다.', source: 'https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_o300100', sourceName: '우리역사넷 · 규장각' },
];
export const jobs = [
  { name: '책을 엮는 편찬자', icon: 'book', description: '흩어진 지식을 모으고, 다음 세대가 읽을 책을 만드는 삶.', tags: ['탐구', '기록', '몰입'] },
  { name: '별을 읽는 관측자', icon: 'star', description: '밤하늘을 관찰하며 계절과 시간의 작은 변화를 기록하는 삶.', tags: ['관찰', '호기심', '정밀함'] },
  { name: '나무에 새기는 각수', icon: 'pen', description: '한 글자씩 정성을 새겨, 사라지지 않을 이야기를 남기는 삶.', tags: ['인내', '창작', '섬세함'] },
];
export const story = [
  { age: '첫 장', title: '서당 창가에 앉은 아이', text: '한양에서 조금 떨어진 작은 마을. 당신은 빛이 가장 오래 머무는 창가를 좋아했습니다. 글을 읽다가도 밖으로 눈을 돌려, 이름을 모르는 풀과 별을 공책에 그리곤 했습니다.' },
  { age: '스무 살', title: '한양으로 향하는 길', text: '책 한 권과 붓 한 자루를 품에 넣고 길을 나섰습니다. 북적이는 골목의 책방에서 당신은 처음으로 먼 곳의 생각을 만났습니다. 그날부터 낯선 질문을 적는 것이 당신의 일이 되었습니다.' },
  { age: '서른 살', title: '세상을 기록하는 사람', text: '당신의 작은 작업방에는 사람들의 이야기가 쌓였습니다. 논에 물을 대는 방법, 장터의 물건값, 아이들이 쓰는 말. 누구에게나 읽히는 책을 만들겠다는 마음으로 매일 한 장씩 엮었습니다.' },
  { age: '마지막 장', title: '오래도록 남은 한 문장', text: '세월이 흘러 머리에 서리가 내려도 창가의 자리는 같았습니다. 당신이 남긴 책의 첫머리에는 이런 문장이 적혀 있었습니다. “작은 것을 살피는 마음이, 큰 세상을 바꾼다.”' },
];
export const elements = [ { name: '목', hanja: '木', value: 32, color: '#89b6a5', word: '성장' }, { name: '화', hanja: '火', value: 18, color: '#cb8c79', word: '열정' }, { name: '토', hanja: '土', value: 24, color: '#c9ae75', word: '안정' }, { name: '금', hanja: '金', value: 14, color: '#b9bfce', word: '결단' }, { name: '수', hanja: '水', value: 12, color: '#789bba', word: '사유' } ];
