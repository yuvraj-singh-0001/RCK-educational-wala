import { useEffect, useMemo, useState, useRef } from 'react'
import BakeryDemoApp from '../bakery-demo/src/App'
import EducationDemoApp from '../education-demo/src/App'

// ─── Fonts — loaded once, no global impact ────────────────────────
if (!document.getElementById('sm-fonts')) {
  const l = document.createElement('link')
  l.id  = 'sm-fonts'
  l.rel = 'stylesheet'
  l.href= 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap'
  document.head.appendChild(l)
}

// ─── ALL styles scoped under .sm-root — zero bleed to child apps ──
if (!document.getElementById('sm-styles')) {
  const s = document.createElement('style')
  s.id = 'sm-styles'
  s.textContent = `
/* reset only inside our wrapper */
.sm-root *, .sm-root *::before, .sm-root *::after {
  box-sizing: border-box; margin: 0; padding: 0;
}
.sm-root {
  --bg:     #07070f;
  --bg2:    #0e0e1a;
  --bg3:    #13132a;
  --bdr:    rgba(255,255,255,0.07);
  --bdr2:   rgba(139,92,246,0.38);
  --violet: #7c3aed;
  --vlt2:   #a78bfa;
  --teal:   #2dd4bf;
  --green:  #22c55e;
  --text:   #f0eeff;
  --muted:  #6b6b88;
  --muted2: #9898b8;
  --r:      14px;
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
}

/* ── keyframes (all prefixed sm-) ─────────────────────────────── */
@keyframes sm-fadeIn  { from{opacity:0} to{opacity:1} }
@keyframes sm-fadeUp  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
@keyframes sm-float   { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-20px) rotate(3deg)} }
@keyframes sm-floatB  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
@keyframes sm-marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
@keyframes sm-blink   { 0%,100%{opacity:1} 50%{opacity:0.15} }
@keyframes sm-orbit   { from{transform:rotate(0deg) translateX(70px) rotate(0deg)} to{transform:rotate(360deg) translateX(70px) rotate(-360deg)} }

/* cinematic hero animations */
@keyframes sm-wordIn {
  from { opacity:0; transform:translateY(38px) skewY(4deg); filter:blur(8px); }
  to   { opacity:1; transform:translateY(0)    skewY(0deg); filter:blur(0px); }
}
@keyframes sm-lineIn { from{opacity:0;transform:translateX(-18px)} to{opacity:1;transform:translateX(0)} }
@keyframes sm-btnIn  { from{opacity:0;transform:translateY(14px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }
@keyframes sm-statIn { from{opacity:0;transform:scale(0.72)} to{opacity:1;transform:scale(1)} }

/* ── scroll reveal ──────────────────────────────────────────────── */
.sm-root .reveal {
  opacity:0; transform:translateY(20px);
  transition: opacity 0.62s cubic-bezier(.22,1,.36,1), transform 0.62s cubic-bezier(.22,1,.36,1);
}
.sm-root .reveal.visible { opacity:1; transform:translateY(0); }

/* ── noise texture (scoped, not fixed) ─────────────────────────── */
.sm-root .sm-noise::after {
  content:''; position:absolute; inset:0; pointer-events:none; z-index:0;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.032'/%3E%3C/svg%3E");
  opacity:0.38;
}

/* ── marquee ────────────────────────────────────────────────────── */
.sm-root .mq-track { display:flex; width:max-content; animation:sm-marquee 32s linear infinite; }
.sm-root .mq-wrap  {
  overflow:hidden;
  -webkit-mask-image:linear-gradient(to right,transparent,black 12%,black 88%,transparent);
  mask-image:linear-gradient(to right,transparent,black 12%,black 88%,transparent);
}

/* ── glass card ─────────────────────────────────────────────────── */
.sm-root .glass {
  background:rgba(255,255,255,0.03);
  border:1px solid var(--bdr);
  backdrop-filter:blur(14px);
  border-radius:var(--r);
}
.sm-root .glass:hover { border-color:var(--bdr2); }

/* ── demo button ────────────────────────────────────────────────── */
.sm-root .demo-btn {
  width:100%; display:flex; align-items:center; gap:15px;
  padding:17px 19px; border-radius:var(--r);
  background:var(--bg2); border:1px solid var(--bdr);
  cursor:pointer; text-align:left; color:var(--text);
  transition:all 0.24s cubic-bezier(.22,1,.36,1);
  position:relative; overflow:hidden;
}
.sm-root .demo-btn::before {
  content:''; position:absolute; inset:0;
  background:linear-gradient(135deg,rgba(124,58,237,0.1),rgba(45,212,191,0.05));
  opacity:0; transition:opacity 0.24s;
}
.sm-root .demo-btn:hover::before { opacity:1; }
.sm-root .demo-btn:hover {
  border-color:rgba(124,58,237,0.52);
  transform:translateX(5px);
  box-shadow:0 0 28px rgba(124,58,237,0.12);
}
.sm-root .demo-btn:active { transform:translateX(2px) scale(0.99); }

/* ── CTA buttons ────────────────────────────────────────────────── */
.sm-root .btn-p {
  display:inline-flex; align-items:center; justify-content:center; gap:7px;
  background:var(--violet); color:#fff;
  padding:12px 26px; border-radius:10px;
  font-family:'DM Sans',sans-serif; font-size:15px; font-weight:500;
  border:none; cursor:pointer; text-decoration:none;
  transition:all 0.2s; position:relative; overflow:hidden;
}
.sm-root .btn-p::after {
  content:''; position:absolute; inset:0;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent);
  transform:translateX(-100%); transition:transform 0.44s;
}
.sm-root .btn-p:hover::after { transform:translateX(100%); }
.sm-root .btn-p:hover { background:#6d28d9; transform:translateY(-2px); box-shadow:0 8px 30px rgba(124,58,237,0.42); }

.sm-root .btn-g {
  display:inline-flex; align-items:center; justify-content:center; gap:7px;
  background:transparent; color:var(--muted2);
  padding:12px 22px; border-radius:10px;
  font-family:'DM Sans',sans-serif; font-size:15px; font-weight:400;
  border:1px solid var(--bdr); cursor:pointer; text-decoration:none;
  transition:all 0.2s;
}
.sm-root .btn-g:hover { border-color:var(--bdr2); color:var(--text); background:rgba(255,255,255,0.03); }

/* ── badges ─────────────────────────────────────────────────────── */
.sm-root .b-live {
  background:rgba(34,197,94,0.14); color:#22c55e;
  border:1px solid rgba(34,197,94,0.3);
  font-size:10px; font-weight:600; letter-spacing:.07em;
  padding:3px 9px; border-radius:100px; text-transform:uppercase; white-space:nowrap;
}
.sm-root .b-soon {
  background:rgba(245,158,11,0.12); color:#f59e0b;
  border:1px solid rgba(245,158,11,0.25);
  font-size:10px; font-weight:600; letter-spacing:.07em;
  padding:3px 9px; border-radius:100px; text-transform:uppercase; white-space:nowrap;
}

/* ── form field ─────────────────────────────────────────────────── */
.sm-root .field {
  width:100%; background:var(--bg3); border:1px solid var(--bdr);
  border-radius:9px; padding:11px 15px;
  color:var(--text); font-family:'DM Sans',sans-serif; font-size:14px;
  outline:none; transition:border-color 0.2s;
}
.sm-root .field::placeholder { color:var(--muted); }
.sm-root .field:focus { border-color:var(--vlt2); }

/* ── eyebrow label ──────────────────────────────────────────────── */
.sm-root .eyebrow {
  font-size:11px; font-weight:600; letter-spacing:.12em; text-transform:uppercase;
  color:var(--vlt2); margin-bottom:9px;
  display:flex; align-items:center; gap:8px;
}
.sm-root .eyebrow::before, .sm-root .eyebrow::after {
  content:''; flex:1; height:1px;
}
.sm-root .eyebrow::before { background:linear-gradient(to left,var(--bdr2),transparent); }
.sm-root .eyebrow::after  { background:linear-gradient(to right,var(--bdr2),transparent); }

/* ── hero word class ────────────────────────────────────────────── */
.sm-root .hw {
  display:inline-block;
  animation:sm-wordIn 0.82s cubic-bezier(.22,1,.36,1) both;
}

/* ── card hover shared ──────────────────────────────────────────── */
.sm-root .card-hover {
  background:var(--bg2); border:1px solid var(--bdr);
  border-radius:var(--r); transition:all 0.25s;
}
.sm-root .card-hover:hover { border-color:var(--bdr2); transform:translateY(-3px); box-shadow:0 14px 44px rgba(124,58,237,0.1); }

/* ── stat number ────────────────────────────────────────────────── */
.sm-root .stat-num {
  font-family:'Syne',sans-serif; font-size:29px; font-weight:800; line-height:1.1;
  background:linear-gradient(135deg,#a78bfa,#60a5fa);
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
}

/* ── trust item ─────────────────────────────────────────────────── */
.sm-root .ti {
  display:flex; align-items:center; gap:9px;
  white-space:nowrap; padding:0 26px;
  color:var(--muted); font-size:13px;
}
.sm-root .ti-dot { width:5px; height:5px; border-radius:50%; background:var(--vlt2); flex-shrink:0; }
`
  document.head.appendChild(s)
}

// ─── Data ─────────────────────────────────────────────────────────
const demoOptions = [
  { key:'education',  label:'Education Portal',    slug:'education-demo',   status:'live',        icon:'🎓', desc:'Online courses, student management, assignments & results',         tag:'Schools · Coaching · Tuition'   },
  { key:'bakery',     label:'Bakery / Restaurant', slug:'bakery-demo',      status:'live',        icon:'🍞', desc:'Online orders, digital menu, home delivery system',               tag:'Bakery · Cafe · Food Business'  },
  { key:'ecommerce',  label:'E-Commerce Store',    slug:'ecommerce-demo',   status:'coming-soon', icon:'🛒', desc:'Product catalog, cart, payments & order tracking',                tag:'Retail · Fashion · Electronics' },
  { key:'recruitment',label:'Recruitment Portal',  slug:'recruitment-demo', status:'coming-soon', icon:'👔', desc:'Job listings, applicant tracking, HR management dashboard',        tag:'Startups · Agencies · Corporates'},
]

const REVIEWS0 = [
  { id:1, name:'Rajesh Malhotra', business:'Malhotra Bakery, Lucknow',         rating:5, review:'Online orders went up 300% after launch. The team delivered exactly what we needed — fast, clean and professional.',   project:'Bakery E-Commerce',   avatar:'RM', color:'#7c3aed' },
  { id:2, name:'Sunita Reddy',    business:'Bright Future Academy, Hyderabad', rating:5, review:'Students can study from home seamlessly. The portal is so smooth that teachers needed zero training to get started.',  project:'Education Portal',    avatar:'SR', color:'#0ea5e9' },
  { id:3, name:'Amit Patel',      business:'TechStore India, Ahmedabad',       rating:4, review:'Delivered on time, within budget. Very responsive on WhatsApp at every step. Would definitely recommend them again!',   project:'E-Commerce Platform', avatar:'AP', color:'#10b981' },
]

const TRUST = [
  '✅ 100% Client Satisfaction','⚡ Delivery in 7–21 Days','🔒 Secure & Scalable Code',
  '📱 Mobile-First Design','🛠 Free Support After Launch','💰 Affordable Pricing',
  '🇮🇳 Built in India','📞 WhatsApp Support 24/7','🚀 Modern Tech Stack',
]

const TEAM = [
  { name:'Yuvraj Singh', role:'Full Stack Developer', exp:'2+ yrs', i:'YS', g:'linear-gradient(135deg,#6d28d9,#2563eb)' },
  { name:'Rahul Kumar',  role:'Frontend Developer',   exp:'1+ yr',  i:'RK', g:'linear-gradient(135deg,#0f766e,#1d4ed8)' },
  { name:'Priya Sharma', role:'Backend Developer',    exp:'3+ yrs', i:'PS', g:'linear-gradient(135deg,#9d174d,#7e22ce)' },
  { name:'Amit Verma',   role:'Mobile Developer',     exp:'3+ yrs', i:'AV', g:'linear-gradient(135deg,#b45309,#15803d)' },
]

const SERVICES = [
  { icon:'🌐', t:'Business Website',   d:'Professional sites that put your brand online and convert visitors into customers.' },
  { icon:'🛒', t:'E-Commerce Store',   d:'Full online shop — products, payments, inventory and delivery management.'        },
  { icon:'🎓', t:'Education Platform', d:'Online classes, courses, attendance tracking and results management system.'       },
  { icon:'📱', t:'Mobile Application', d:'Android & iOS apps that put your business right in your customers\' hands.'       },
  { icon:'🍽️',t:'Restaurant System',  d:'Digital menu, online ordering, table booking and kitchen management.'             },
  { icon:'⚙️', t:'Custom Software',   d:'Tailored ERP, CRM or any system built around your exact business workflow.'       },
]

const WHY = [
  { icon:'⚡', t:'Fast Delivery',    d:'Simple sites in 7 days, complex projects in 21 days — on-time, every time.',        a:'#f59e0b' },
  { icon:'💰', t:'Budget Friendly',  d:'Plans for every pocket. No hidden charges, fully transparent pricing always.',       a:'#22c55e' },
  { icon:'📱', t:'Mobile First',     d:'Every site looks perfect on phones — 80% of your visitors are on mobile.',           a:'#60a5fa' },
  { icon:'🛠', t:'Free Support',     d:'Post-launch bugs, updates, small changes — all covered at no extra cost.',            a:'#a78bfa' },
  { icon:'🔒', t:'Secure & Fast',    d:'SSL certificates, clean code and fast hosting — your data is always safe.',          a:'#2dd4bf' },
  { icon:'🤝', t:'WhatsApp Support', d:'Any issue? Just WhatsApp us — available around the clock for you.',                  a:'#f97316' },
]

// ─── Helpers ──────────────────────────────────────────────────────
const getPathname = () => typeof window==='undefined' ? '/' : window.location.pathname||'/'
const normPath    = p  => (p||'').replace(/\/+$/,'')||'/'
function getOption(pathname) {
  const n=normPath(pathname); if(n==='/') return null
  const seg=n.split('/').filter(Boolean)[0]||''
  return demoOptions.find(o=>o.slug===seg)||null
}
function go(to) {
  const n=normPath(to); if(window.location.pathname===n) return
  window.history.pushState({},'',n); window.dispatchEvent(new Event('popstate'))
}

// ─── useScrollReveal ──────────────────────────────────────────────
function useReveal() {
  useEffect(()=>{
    const root=document.querySelector('.sm-root'); if(!root) return
    const els=root.querySelectorAll('.reveal')
    const io=new IntersectionObserver(
      es=>es.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible') }),
      { threshold:0.1, rootMargin:'0px 0px -28px 0px' }
    )
    els.forEach(el=>io.observe(el))
    return ()=>els.forEach(el=>io.unobserve(el))
  })
}

// ─── AnimatedCounter ──────────────────────────────────────────────
function Counter({ to, suf='' }) {
  const [v,setV]=useState(0)
  const ref=useRef(null); const done=useRef(false)
  useEffect(()=>{
    const io=new IntersectionObserver(([e])=>{
      if(e.isIntersecting && !done.current){
        done.current=true
        const t0=performance.now(), dur=1300
        const tick=now=>{
          const p=Math.min((now-t0)/dur,1), ease=1-Math.pow(1-p,3)
          setV(Math.round(ease*to))
          if(p<1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    },{ threshold:0.5 })
    if(ref.current) io.observe(ref.current)
    return ()=>io.disconnect()
  },[to])
  return <span ref={ref}>{v}{suf}</span>
}

// ─── Stars ────────────────────────────────────────────────────────
function Stars({ n }) {
  return <div style={{ display:'flex',gap:2 }}>
    {[1,2,3,4,5].map(i=>(
      <svg key={i} width="13" height="13" viewBox="0 0 24 24"
        fill={i<=n?'#f59e0b':'none'} stroke={i<=n?'#f59e0b':'#3a3a5c'} strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
}

// ─── Background orbs (absolute, inside sm-root — never fixed) ─────
function Orbs() {
  return <div style={{ position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none',zIndex:0 }}>
    <div style={{ position:'absolute',top:'-8%',left:'-5%',width:520,height:520,borderRadius:'50%',background:'radial-gradient(circle,rgba(124,58,237,0.13) 0%,transparent 70%)',animation:'sm-float 10s ease-in-out infinite' }}/>
    <div style={{ position:'absolute',top:'28%',right:'-8%',width:440,height:440,borderRadius:'50%',background:'radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 70%)',animation:'sm-floatB 12s ease-in-out infinite' }}/>
    <div style={{ position:'absolute',bottom:'8%',left:'28%',width:360,height:360,borderRadius:'50%',background:'radial-gradient(circle,rgba(96,165,250,0.07) 0%,transparent 70%)',animation:'sm-float 14s ease-in-out infinite 3s' }}/>
  </div>
}

// ─── CinematicHero ────────────────────────────────────────────────
function Hero() {
  // Each word enters like a film title — blur lifts, slides up, skew resets
  const rows = [
    { words:['Build','Your','Business'], gradient:false },
    { words:['Online,','the','Right','Way'], gradient:true  },
  ]
  let delay = 0.28

  return (
    <>
      {/* Responsive style for stats bar (mobile 2x2, desktop 4x1) */}
      <style>{`
        @media (max-width: 600px) {
          .sm-stats-bar {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
      <section style={{ position:'relative',zIndex:1,padding:'56px 24px 48px',maxWidth:780,margin:'0 auto',textAlign:'center' }}>

      {/* pulsing live badge */}
      <div style={{ animation:'sm-fadeIn 0.5s ease both',animationDelay:'0.05s',marginBottom:18,display:'flex',justifyContent:'center' }}>
        <div style={{ display:'inline-flex',alignItems:'center',gap:7,background:'rgba(124,58,237,0.12)',border:'1px solid rgba(124,58,237,0.42)',borderRadius:100,padding:'5px 15px' }}>
          <span style={{ width:7,height:7,borderRadius:'50%',background:'#22c55e',display:'inline-block',animation:'sm-blink 1.5s ease-in-out infinite' }}/>
          <span style={{ fontSize:11,color:'var(--vlt2)',fontWeight:600,letterSpacing:'0.07em' }}>
            AVAILABLE NOW — LIMITED SPOTS
          </span>
        </div>
      </div>

      {/* Headline — word-by-word cinematic reveal */}
      <h1 style={{ fontFamily:'Syne',fontWeight:800,lineHeight:1.06,marginBottom:20,fontSize:'clamp(30px,6vw,56px)' }}>
        {rows.map((row,ri)=>(
          <div key={ri} style={{ display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'0 11px',marginBottom:ri<rows.length-1?5:0 }}>
            {row.words.map((w)=>{
              delay += 0.11
              const d = `${delay}s`
              return (
                <span key={w} className="hw" style={{
                  animationDelay:d,
                  ...(row.gradient ? {
                    background:'linear-gradient(135deg,#a78bfa 0%,#60a5fa 55%,#2dd4bf 100%)',
                    WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',
                  } : { color:'var(--text)' }),
                }}>{w}</span>
              )
            })}
          </div>
        ))}
      </h1>

      {/* Sub-line */}
      <p style={{
        fontSize:16,color:'var(--muted2)',lineHeight:1.78,
        maxWidth:490,margin:'0 auto 30px',
        animation:'sm-lineIn 0.7s ease both',animationDelay:'1.1s',
      }}>
        We build professional websites, online systems and mobile apps that turn your business into a{' '}
        <strong style={{ color:'var(--text)',fontWeight:500 }}>24/7 revenue engine</strong>.
      </p>

      {/* CTA row */}
      <div style={{ display:'flex',gap:11,justifyContent:'center',flexWrap:'wrap',marginBottom:48,
        animation:'sm-btnIn 0.7s cubic-bezier(.22,1,.36,1) both',animationDelay:'1.25s' }}>
        <a href="https://wa.me/918601300910" target="_blank" rel="noreferrer" className="btn-p">
          💬 WhatsApp — Start Your Project
        </a>
        <a href="tel:+918601300910" className="btn-g">📞 Call Us</a>
      </div>

      {/* Stats bar */}
      <div
        className="sm-stats-bar"
        style={{
          display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:1,
          background:'var(--bdr)',borderRadius:15,overflow:'hidden',
          border:'1px solid var(--bdr)',
          animation:'sm-statIn 0.7s cubic-bezier(.22,1,.36,1) both',animationDelay:'1.4s',
        }}
      >
        {[
          { to:15,suf:'+', l:'Projects'    },
          { to:10,suf:'+', l:'Clients'     },
          { to:2, suf:'+', l:'Years Exp.'  },
          { to:100,suf:'%',l:'Satisfaction'},
        ].map((s,i)=>(
          <div key={i} style={{ background:'var(--bg2)',padding:'19px 8px',textAlign:'center' }}>
            <div className="stat-num"><Counter to={s.to} suf={s.suf}/></div>
            <div style={{ fontSize:10,color:'var(--muted)',marginTop:5,textTransform:'uppercase',letterSpacing:'0.06em' }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

// ─── DemoLanding ──────────────────────────────────────────────────
function DemoLanding({ onSelect }) {
  useReveal()

  const [reviews,setReviews]=useState(()=>{
    try{ const x=localStorage.getItem('sm-rv3'); return x?JSON.parse(x):REVIEWS0 }
    catch{ return REVIEWS0 }
  })
  const [showForm,setShowForm]=useState(false)
  const [form,setForm]=useState({ name:'',business:'',review:'',rating:5 })
  const [busy,setBusy]=useState(false)

  useEffect(()=>{ localStorage.setItem('sm-rv3',JSON.stringify(reviews)) },[reviews])

  const submit=()=>{
    if(!form.name.trim()||!form.business.trim()||!form.review.trim()) return
    setBusy(true)
    setTimeout(()=>{
      setReviews([...reviews,{ id:Date.now(),name:form.name,business:form.business,rating:form.rating,
        review:form.review,project:'Client Project',avatar:form.name.slice(0,2).toUpperCase(),color:'#7c3aed' }])
      setForm({ name:'',business:'',review:'',rating:5 })
      setShowForm(false); setBusy(false)
    },650)
  }
  const del=id=>{ if(window.confirm('Remove this review?')) setReviews(reviews.filter(r=>r.id!==id)) }

  /* shared section wrapper */
  const Sec=({ children,max=720,pb=68 })=>(
    <section style={{ position:'relative',zIndex:1,maxWidth:max,margin:'0 auto',padding:`0 24px ${pb}px` }}>
      {children}
    </section>
  )

  const SHead=({ eye,h,sub })=>(
    <div className="reveal" style={{ textAlign:'center',marginBottom:38 }}>
      <div className="eyebrow" style={{ fontSize:13, letterSpacing:'.15em', marginBottom:13 }}>{eye}</div>
      <h2
        style={{
          fontFamily:'Syne',
          fontWeight:900,
          fontSize:'clamp(2.1rem,5vw,2.7rem)',
          marginBottom:sub?13:0,
          lineHeight:1.13,
          background:'linear-gradient(90deg,#a78bfa 0%,#60a5fa 55%,#2dd4bf 100%)',
          WebkitBackgroundClip:'text',
          WebkitTextFillColor:'transparent',
          backgroundClip:'text',
          textShadow:'0 2px 18px rgba(124,58,237,0.10)',
          letterSpacing:'-0.5px',
          padding:'0 2px',
        }}
      >{h}</h2>
      {sub && <p style={{ color:'var(--muted2)',fontSize:16,marginTop:2,lineHeight:1.7 }}>{sub}</p>}
    </div>
  )

  return (
    <div className="sm-root sm-noise">
      <Orbs/>

      {/* NAV */}
      <nav style={{
        position:'sticky',top:0,zIndex:100,
        display:'flex',alignItems:'center',justifyContent:'space-between',
        padding:'0 26px',height:56,
        background:'rgba(7,7,15,0.9)',backdropFilter:'blur(22px)',
        borderBottom:'1px solid var(--bdr)',
        animation:'sm-fadeIn 0.4s ease both',
      }}>
        <div style={{ fontFamily:'Syne',fontWeight:800,fontSize:16,color:'var(--text)',display:'flex',alignItems:'center',gap:5 }}>
          <span style={{ color:'var(--vlt2)' }}>◆</span> SiteMint
        </div>
        <a href="https://wa.me/918601300910" target="_blank" rel="noreferrer" className="btn-p" style={{ padding:'7px 16px',fontSize:13 }}>
          💬 WhatsApp
        </a>
      </nav>

      {/* HERO */}
      <Hero/>

      {/* TRUST MARQUEE */}
      <div className="mq-wrap" style={{ position:'relative',zIndex:1,borderTop:'1px solid var(--bdr)',borderBottom:'1px solid var(--bdr)',padding:'12px 0',marginBottom:62 }}>
        <div className="mq-track">
          {[...TRUST,...TRUST].map((t,i)=>(
            <div key={i} className="ti"><div className="ti-dot"/>{t}</div>
          ))}
        </div>
      </div>

      {/* DEMOS */}
      <Sec>
        <SHead eye="Live Demos" h="See It Before You Buy It" sub="Every demo is a real, working website — click and explore it yourself"/>
        <div style={{ display:'grid',gap:10 }}>
          {demoOptions.map((opt,i)=>(
            <div key={opt.key} className="reveal" style={{ transitionDelay:`${i*65}ms` }}>
              <button className="demo-btn"
                onClick={()=>opt.status==='live'?onSelect(opt.slug):window.open('https://wa.me/918601300910','_blank')}>
                <div style={{
                  width:48,height:48,borderRadius:12,
                  background:opt.status==='live'?'linear-gradient(135deg,rgba(124,58,237,0.25),rgba(45,212,191,0.14))':'rgba(255,255,255,0.04)',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  fontSize:20,flexShrink:0,
                  border:'1px solid '+(opt.status==='live'?'rgba(124,58,237,0.28)':'var(--bdr)'),
                }}>
                  {opt.icon}
                </div>
                <div style={{ flex:1,minWidth:0 }}>
                  <div style={{ fontFamily:'Syne',fontWeight:700,fontSize:14,marginBottom:3,color:'var(--text)' }}>{opt.label}</div>
                  <div style={{ fontSize:12,color:'var(--muted)',marginBottom:4,lineHeight:1.45 }}>{opt.desc}</div>
                  <div style={{ fontSize:11,color:'var(--vlt2)',opacity:0.7 }}>{opt.tag}</div>
                </div>
                <div style={{ display:'flex',flexDirection:'column',alignItems:'flex-end',gap:7,flexShrink:0 }}>
                  <span className={opt.status==='live'?'b-live':'b-soon'}>{opt.status==='live'?'Live':'Soon'}</span>
                  <span style={{ color:opt.status==='live'?'var(--vlt2)':'var(--muted)',fontSize:16 }}>
                    {opt.status==='live'?'→':'💬'}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </Sec>

      {/* SERVICES */}
      <Sec max={860}>
        <SHead eye="Services" h="What We Build" sub="One team for everything your business needs online"/>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(235px,1fr))',gap:12 }}>
          {SERVICES.map((s,i)=>(
            <div key={i} className="reveal glass" style={{ padding:'18px 17px',transitionDelay:`${i*50}ms` }}>
              <div style={{ fontSize:25,marginBottom:10 }}>{s.icon}</div>
              <div style={{ fontFamily:'Syne',fontWeight:700,fontSize:14,marginBottom:5,color:'var(--text)' }}>{s.t}</div>
              <div style={{ fontSize:13,color:'var(--muted2)',lineHeight:1.65 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </Sec>

      {/* WHY US */}
      <Sec max={860}>
        <SHead eye="Why Choose Us" h="Why Work With SiteMint?"/>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(255px,1fr))',gap:12 }}>
          {WHY.map((w,i)=>(
            <div key={i} className="reveal card-hover" style={{ padding:'18px 17px',transitionDelay:`${i*50}ms` }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor=w.a+'55'; e.currentTarget.style.transform='translateY(-3px)' }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--bdr)';  e.currentTarget.style.transform='translateY(0)' }}>
              <div style={{ width:40,height:40,borderRadius:10,background:w.a+'18',border:`1px solid ${w.a}30`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,marginBottom:11 }}>
                {w.icon}
              </div>
              <div style={{ fontFamily:'Syne',fontWeight:700,fontSize:14,marginBottom:5,color:'var(--text)' }}>{w.t}</div>
              <div style={{ fontSize:13,color:'var(--muted2)',lineHeight:1.65 }}>{w.d}</div>
            </div>
          ))}
        </div>
      </Sec>

      {/* TEAM */}
      <Sec>
        <SHead eye="Our Team" h="Meet the Developers" sub="Experienced professionals dedicated to your project's success"/>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',gap:12 }}>
          {TEAM.map((m,i)=>(
            <div key={i} className="reveal card-hover" style={{ padding:'20px 14px',textAlign:'center',transitionDelay:`${i*60}ms` }}>
              <div style={{ width:50,height:50,borderRadius:'50%',background:m.g,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Syne',fontWeight:700,fontSize:14,color:'white',margin:'0 auto 12px',boxShadow:'0 4px 18px rgba(0,0,0,0.3)' }}>{m.i}</div>
              <div style={{ fontFamily:'Syne',fontWeight:700,fontSize:13,color:'var(--text)',marginBottom:3 }}>{m.name}</div>
              <div style={{ fontSize:11,color:'var(--vlt2)',marginBottom:3 }}>{m.role}</div>
              <div style={{ fontSize:11,color:'var(--muted)' }}>{m.exp} Exp.</div>
            </div>
          ))}
        </div>
      </Sec>

      {/* REVIEWS */}
      <Sec max={900}>
        <SHead eye="Client Reviews" h="What Our Clients Say" sub="Real clients. Real projects. Real results. 🙏"/>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:13,marginBottom:26 }}>
          {reviews.map((r,i)=>(
            <div key={r.id} className="reveal card-hover" style={{ padding:'20px',transitionDelay:`${i*65}ms`,position:'relative' }}>
              <button onClick={()=>del(r.id)} style={{ position:'absolute',top:11,right:11,background:'none',border:'none',cursor:'pointer',color:'var(--muted)',fontSize:15,lineHeight:1,opacity:0.55,padding:3 }}>×</button>
              <div style={{ display:'flex',alignItems:'center',gap:10,marginBottom:12 }}>
                <div style={{ width:38,height:38,borderRadius:'50%',background:r.color||'var(--violet)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Syne',fontWeight:700,fontSize:12,color:'white',flexShrink:0 }}>{r.avatar}</div>
                <div>
                  <div style={{ fontFamily:'Syne',fontWeight:700,fontSize:13,color:'var(--text)' }}>{r.name}</div>
                  <div style={{ fontSize:11,color:'var(--muted)' }}>{r.business}</div>
                </div>
              </div>
              <Stars n={r.rating}/>
              <p style={{ fontSize:13,color:'var(--muted2)',lineHeight:1.7,margin:'10px 0 12px',fontStyle:'italic' }}>"{r.review}"</p>
              <div style={{ display:'inline-block',fontSize:11,color:'var(--teal)',background:'rgba(45,212,191,0.1)',border:'1px solid rgba(45,212,191,0.2)',borderRadius:100,padding:'3px 9px',fontWeight:500 }}>{r.project}</div>
            </div>
          ))}
        </div>
        {!showForm ? (
          <div style={{ textAlign:'center' }}>
            <button onClick={()=>setShowForm(true)} className="btn-g" style={{ fontSize:14 }}>⭐ Add Your Review</button>
          </div>
        ) : (
          <div className="reveal visible glass" style={{ padding:24,maxWidth:500,margin:'0 auto' }}>
            <h3 style={{ fontFamily:'Syne',fontWeight:700,fontSize:16,marginBottom:16,textAlign:'center' }}>Share Your Experience</h3>
            <div style={{ display:'grid',gap:11 }}>
              <input className="field" placeholder="Your Name *"      value={form.name}     onChange={e=>setForm({...form,name:e.target.value})}/>
              <input className="field" placeholder="Business Name *"  value={form.business} onChange={e=>setForm({...form,business:e.target.value})}/>
              <div>
                <div style={{ fontSize:12,color:'var(--muted)',marginBottom:6 }}>Rating *</div>
                <div style={{ display:'flex',gap:4 }}>
                  {[1,2,3,4,5].map(n=>(
                    <button key={n} onClick={()=>setForm({...form,rating:n})} style={{ background:'none',border:'none',cursor:'pointer',fontSize:21,lineHeight:1,transition:'transform 0.15s' }}
                      onMouseEnter={e=>e.currentTarget.style.transform='scale(1.28)'}
                      onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>
                      {n<=form.rating?'⭐':'☆'}
                    </button>
                  ))}
                </div>
              </div>
              <textarea className="field" placeholder="Describe your experience... *" rows={3} value={form.review} onChange={e=>setForm({...form,review:e.target.value})} style={{ resize:'none' }}/>
              <div style={{ display:'flex',gap:9 }}>
                <button className="btn-p" style={{ flex:1 }} onClick={submit} disabled={busy}>{busy?'Submitting...':'✅ Submit Review'}</button>
                <button className="btn-g" onClick={()=>setShowForm(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </Sec>

      {/* CTA BANNER */}
      <Sec>
        <div className="reveal" style={{
          background:'linear-gradient(135deg,rgba(124,58,237,0.2),rgba(45,212,191,0.11))',
          border:'1px solid rgba(124,58,237,0.36)',
          borderRadius:18,padding:'42px 26px',textAlign:'center',position:'relative',overflow:'hidden',
        }}>
          {/* orbiting dot */}
          <div style={{ position:'absolute',top:'50%',left:'50%',width:1,height:1,pointerEvents:'none' }}>
            <div style={{ width:6,height:6,borderRadius:'50%',background:'var(--vlt2)',position:'absolute',animation:'sm-orbit 6s linear infinite',opacity:0.4 }}/>
          </div>
          <div style={{ position:'relative',zIndex:1 }}>
            <div style={{ display:'inline-flex',alignItems:'center',gap:6,background:'rgba(34,197,94,0.13)',border:'1px solid rgba(34,197,94,0.3)',borderRadius:100,padding:'4px 13px',marginBottom:16 }}>
              <span style={{ width:6,height:6,borderRadius:'50%',background:'#22c55e',display:'inline-block',animation:'sm-blink 1.5s ease-in-out infinite' }}/>
              <span style={{ fontSize:11,color:'#22c55e',fontWeight:600,letterSpacing:'0.06em' }}>CURRENTLY ACCEPTING NEW PROJECTS</span>
            </div>
            <h2 style={{ fontFamily:'Syne',fontWeight:800,fontSize:'clamp(20px,4vw,34px)',marginBottom:10 }}>
              Ready to Start? Let's Talk 🚀
            </h2>
            <p style={{ color:'var(--muted2)',fontSize:15,maxWidth:390,margin:'0 auto 26px',lineHeight:1.72 }}>
              Free consultation — we'll understand your needs, suggest the best solution and give you transparent pricing.
            </p>
            <div style={{ display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap',marginBottom:16 }}>
              <a href="https://wa.me/918601300910" target="_blank" rel="noreferrer" className="btn-p">💬 WhatsApp Us Now</a>
              <a href="tel:+918601300910" className="btn-g">📞 +91 86013 00910</a>
              <a href="mailto:singhyuvraj8420@gmail.com" className="btn-g">✉️ Email</a>
            </div>
            <p style={{ fontSize:12,color:'var(--muted)' }}>
              ✅ Free Consultation &nbsp;·&nbsp; ✅ No Advance Needed &nbsp;·&nbsp; ✅ Transparent Pricing
            </p>
          </div>
        </div>
      </Sec>

      {/* FOOTER */}
      <footer style={{ position:'relative',zIndex:1,borderTop:'1px solid var(--bdr)',padding:'22px 26px',textAlign:'center' }}>
        <div style={{ fontFamily:'Syne',fontWeight:800,fontSize:14,marginBottom:5,color:'var(--text)' }}>
          <span style={{ color:'var(--vlt2)' }}>◆</span> SiteMint
        </div>
        <p style={{ fontSize:12,color:'var(--muted)',lineHeight:1.9 }}>
          Professional Web Development — India 🇮🇳<br/>
          <a href="tel:+918601300910" style={{ color:'var(--vlt2)',textDecoration:'none' }}>+91 86013 00910</a>
          {' · '}
          <a href="mailto:singhyuvraj8420@gmail.com" style={{ color:'var(--vlt2)',textDecoration:'none' }}>singhyuvraj8420@gmail.com</a>
        </p>
        <p style={{ fontSize:11,color:'var(--muted)',marginTop:8,opacity:0.4 }}>
          © {new Date().getFullYear()} SiteMint. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

// ─── ComingSoonDemo ────────────────────────────────────────────────
function ComingSoon({ opt, back }) {
  const base = { fontFamily:'DM Sans,sans-serif', fontSize:15, fontWeight:500, border:'none', cursor:'pointer', textDecoration:'none', display:'flex', alignItems:'center', justifyContent:'center', gap:7, padding:'12px 22px', borderRadius:10, transition:'all 0.2s' }
  return (
    <div style={{ minHeight:'100vh',display:'grid',placeItems:'center',padding:24,background:'#07070f',fontFamily:'DM Sans,sans-serif',color:'#f0eeff' }}>
      <div style={{ maxWidth:440,width:'100%',padding:34,textAlign:'center',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:15,animation:'sm-fadeUp 0.55s ease both' }}>
        <div style={{ fontSize:42,marginBottom:13 }}>{opt.icon||'🚧'}</div>
        <h2 style={{ fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:24,marginBottom:9 }}>Coming Soon!</h2>
        <p style={{ color:'#9898b8',marginBottom:24,lineHeight:1.65 }}>
          <strong style={{ color:'#f0eeff' }}>{opt.label}</strong> demo is launching shortly.<br/>WhatsApp us to book your project now!
        </p>
        <div style={{ display:'flex',flexDirection:'column',gap:9 }}>
          <a href="https://wa.me/918601300910" target="_blank" rel="noreferrer" style={{ ...base,background:'#7c3aed',color:'white' }}>💬 WhatsApp to Order</a>
          <a href="tel:+918601300910" style={{ ...base,background:'transparent',color:'#9898b8',border:'1px solid rgba(255,255,255,0.07)' }}>📞 Call Us</a>
          <button onClick={back} style={{ ...base,background:'transparent',color:'#9898b8',border:'1px solid rgba(255,255,255,0.07)' }}>← Back</button>
        </div>
      </div>
    </div>
  )
}

// ─── App router ───────────────────────────────────────────────────
export default function App() {
  const [path,setPath]=useState(getPathname)
  useEffect(()=>{
    const s=()=>setPath(getPathname())
    window.addEventListener('popstate',s)
    return ()=>window.removeEventListener('popstate',s)
  },[])
  const opt=useMemo(()=>getOption(path),[path])
  if(!opt)                    return <DemoLanding onSelect={s=>go(`/${s}`)}/>
  if(opt.key==='education')   return <EducationDemoApp/>
  if(opt.key==='bakery')      return <BakeryDemoApp/>
  return <ComingSoon opt={opt} back={()=>go('/')}/>
}