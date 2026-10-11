export function Landscape({ variant = 'palace', className = '' }: { variant?: string; className?: string }) {
  return <svg className={`landscape ${className}`} viewBox="0 0 800 700" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="금빛 달 아래 산과 전통 누각을 표현한 창작 풍경">
    <defs><linearGradient id={`sky-${variant}`} x2="0" y2="1"><stop stopColor="#162333"/><stop offset="1" stopColor="#0c141b"/></linearGradient><radialGradient id={`moon-${variant}`}><stop stopColor="#e1c896"/><stop offset=".85" stopColor="#b89b69"/><stop offset="1" stopColor="#ad8e59"/></radialGradient><linearGradient id={`fog-${variant}`} x2="0" y2="1"><stop stopColor="#86948e" stopOpacity=".13"/><stop offset="1" stopColor="#86948e" stopOpacity="0"/></linearGradient></defs>
    <path fill={`url(#sky-${variant})`} d="M0 0h800v700H0z"/>
    <g fill="#c8ae79" opacity=".45">{[[110,102],[283,79],[392,142],[574,60],[712,193],[656,276],[150,265],[472,229],[79,186],[529,165],[340,242],[747,80]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3===0?1.6:1}/>)}</g>
    <circle cx="515" cy="230" r="134" stroke="#c8ae79" strokeOpacity=".13"/><circle cx="515" cy="230" r="166" stroke="#c8ae79" strokeOpacity=".08"/>
    <circle cx="515" cy="230" r="92" fill={`url(#moon-${variant})`} />
    <path d="M0 408 96 310l57 45 90-138 43 67 34-24 107 151 60-41 58 44 70-83 86 112 99-94v351H0Z" fill="#26363c"/>
    <path d="m115 417 122-156 52 80 44-26 77 109 58-39 42 60 77-44 46 91 80-56 87 27v237H0V439Z" fill="#1b2b31"/>
    <path d="m0 492 117-65 77 63 102-74 79 103 78-26 87 48 137-91 123 40v210H0Z" fill="#14232a"/>
    <path d="M0 542q170-110 348-11t452-42v120H0Z" fill={`url(#fog-${variant})`}/>
    <path d="M0 626q149-100 304-26t496-38v138H0Z" fill="#0a1219"/>
    {variant !== 'mountains' && <g stroke="#b89b69" strokeWidth="1.2" strokeLinejoin="round"><path d="M367 504h278v17H367z" fill="#121c22"/><path d="M383 437h246v67H383z" fill="#132129"/><path d="M411 440v63m37-63v63m36-63v63m39-63v63m38-63v63m40-63v63"/><path d="m349 435 42-16q88-8 114-53 22 45 112 53l46 16q-152 20-314 0Z" fill="#0c171f"/><path d="m352 433 41-11q86-10 113-50 30 42 108 50l45 11M389 419h231" strokeOpacity=".7"/><path d="M451 386v-31h107v31" fill="#122028"/><path d="m419 352 29-7q35-6 57-35 24 29 60 35l29 7q-87 14-175 0Z" fill="#0c171f"/><path d="M467 358v27m37-29v35m38-33v27M353 525h306m-294 7h278"/><path d="M393 456h20v34h-20zm46 0h20v34h-20zm110 0h20v34h-20zm45 0h20v34h-20z" strokeOpacity=".45"/></g>}
    <g stroke="#5b726a" strokeWidth="2" opacity=".5"><path d="m68 690 5-171m0 48-32-22m31 55 42-36m-44 73-38-21m39-76 21-33m624 178-9-142m0 46 36-22m-35 52-36-21m38-71-22-26"/><path d="m38 545 36-15 32 9m-11 24 19-17 24 7m-85 63-23-21-20 11m711-67 28-18 32 12m-84 15-23-16-25 8"/></g>
    <g stroke="#c8ae79" strokeOpacity=".12"><path d="M46 55h35m-35 0v35m708-35h-35m35 0v35M46 646h35m-35 0v-35m708 35h-35m35 0v-35"/></g>
  </svg>;
}
