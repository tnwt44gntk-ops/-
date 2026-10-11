export const regions = ['서울', '경기', '인천', '강원', '충북', '충남', '대전', '세종', '전북', '전남', '광주', '경북', '경남', '대구', '부산', '울산', '제주', '해외'] as const;
export type BirthInput = { date: string; calendar: 'solar' | 'lunar'; leap: boolean; time: string; unknownTime: boolean; region: string };
export type FormErrors = Partial<Record<keyof BirthInput, string>>;
export const emptyBirth: BirthInput = { date: '', calendar: 'solar', leap: false, time: '', unknownTime: false, region: '' };
export function seoulToday(now = new Date()) { return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now); }
export function validateBirth(input: BirthInput, today = seoulToday()): FormErrors {
  const errors: FormErrors = {};
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(input.date);
  if (!match) errors.date = '생년월일을 모두 입력해 주세요.';
  else {
    const [, ys, ms, ds] = match; const y = Number(ys), m = Number(ms), d = Number(ds);
    const maxDay = input.calendar === 'lunar' ? 30 : new Date(Date.UTC(y, m, 0)).getUTCDate();
    if (y < 1900 || m < 1 || m > 12 || d < 1 || d > maxDay) errors.date = '1900년 이후의 올바른 날짜를 입력해 주세요.';
    else if (input.date > today) errors.date = input.calendar === 'lunar' ? '체험 입력 범위를 벗어났어요. 날짜를 확인해 주세요.' : '미래의 날짜는 입력할 수 없어요.';
  }
  if (input.calendar !== 'solar' && input.calendar !== 'lunar') errors.calendar = '달력 종류를 선택해 주세요.';
  if (input.leap && input.calendar !== 'lunar') errors.leap = '윤달은 음력에서만 선택할 수 있어요.';
  if (!input.unknownTime && !/^([01]\d|2[0-3]):[0-5]\d$/.test(input.time)) errors.time = '출생 시간을 입력하거나 ‘시간 모름’을 선택해 주세요.';
  if (!(regions as readonly string[]).includes(input.region)) errors.region = '출생 지역을 선택해 주세요.';
  return errors;
}
