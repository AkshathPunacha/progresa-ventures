import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Image as ImageIcon,
  LineChart,
  Compass,
  Share2,
  Megaphone,
  Check,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Twitter,
  Play,
  Menu,
  X,
} from 'lucide-react';

const services = [
  {
    id: 'ai-creators',
    label: 'AI Creators & Videos',
    icon: Sparkles,
    title: 'AI Creators & AI Videos',
    description:
      'Create high-quality content without the time and cost of traditional shoots. We develop AI-powered creator content, product videos, ad creatives, and performance-driven visuals.',
    points: ['AI creator personas', 'Product & ad videos', 'Performance creatives'],
  },
  {
    id: 'ai-statics',
    label: 'AI Statics & Design',
    icon: ImageIcon,
    title: 'AI Statics & Creative Design',
    description:
      'Scroll-stopping static creatives for ads, marketplaces, websites, and social media — optimized for performance and brand consistency.',
    points: ['Marketplace creatives', 'Ad statics at scale', 'Brand-system design'],
  },
  {
    id: 'marketing-strategy',
    label: 'Marketing Strategy',
    icon: LineChart,
    title: 'Marketing Strategy',
    description:
      'Data-backed marketing strategies tailored to your business goals, audience, and category — built to compound across channels.',
    points: ['Audience & category research', 'Channel mix planning', 'Quarterly roadmaps'],
  },
  {
    id: 'brand-strategy',
    label: 'Brand Strategy',
    icon: Compass,
    title: 'Brand Consulting & Brand Strategy',
    description:
      'Build a strong brand identity, positioning, messaging, and long-term growth roadmap that earns trust and drives preference.',
    points: ['Positioning & messaging', 'Identity systems', 'Growth narratives'],
  },
  {
    id: 'social',
    label: 'Social Media',
    icon: Share2,
    title: 'Social Media Strategy',
    description:
      'Content planning, platform strategy, audience engagement, and growth-focused social media execution — engineered for momentum.',
    points: ['Content calendars', 'Platform-native creative', 'Community & growth'],
  },
  {
    id: 'digital',
    label: 'Digital Marketing',
    icon: Megaphone,
    title: 'Digital Marketing',
    description:
      'Performance marketing solutions across Meta, Google, marketplaces, and digital platforms to help brands scale efficiently.',
    points: ['Meta & Google ads', 'Marketplace performance', 'Funnel optimization'],
  },
];

const reasons = [
  { title: 'AI-first creative solutions', detail: 'Every brief touched by intelligent systems for speed and signal.' },
  { title: 'Faster content production', detail: 'Weeks of shoots compressed into days of polished output.' },
  { title: 'Cost-efficient execution', detail: 'A leaner stack that doesn’t compromise the craft.' },
  { title: 'Strategy-led approach', detail: 'Decisions modeled before they’re made — not after.' },
  { title: 'Performance-focused campaigns', detail: 'Every asset measured against revenue, not vanity.' },
  { title: 'Customized for every brand', detail: 'No templates. Systems built around your category.' },
];

const audiences = [
  { tag: '01', name: 'Startups', detail: 'Zero-to-one launches that need momentum from day one.' },
  { tag: '02', name: 'D2C Brands', detail: 'Direct-to-consumer brands ready to scale beyond inflection.' },
  { tag: '03', name: 'E-commerce', detail: 'Marketplace-first businesses optimizing for unit economics.' },
  { tag: '04', name: 'Growing Companies', detail: 'Teams scaling digital presence with smarter marketing.' },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#why', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = (e, href) => {
    try {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 70; // collapsed header height
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        window.history.pushState(null, null, href);
      }
      
      setTimeout(() => {
        setOpen(false);
      }, 300);
    } catch (err) {
      console.error("Error in handleLinkClick:", err);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-md bg-cream/80 border-b border-ink/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-ink/10 bg-cream">
            <img src={`${import.meta.env.BASE_URL}favicon.jpg`} alt="Progressa Ventures" className="h-full w-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg text-ink">Progressa</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-ink/60">Ventures</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleLinkClick(e, l.href)}
              className="relative text-sm text-ink/70 hover:text-ink transition-colors"
            >
              <span>{l.label}</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-sage transition-all duration-300 group-hover:w-full hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink border border-ink/15 rounded-full px-5 py-2.5 hover:bg-ink hover:text-cream transition-all duration-300"
          >
            Get in Touch
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-cream/95 backdrop-blur border-t border-ink/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col items-start gap-5">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={(e) => handleLinkClick(e, l.href)}
                  className="text-ink/80 text-lg text-left py-1 w-full"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="inline-flex items-center gap-2 text-base font-medium text-cream bg-ink rounded-full px-5 py-3 w-fit"
              >
                Get in Touch <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section id="top" ref={ref} className="relative pt-36 pb-12 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="grain" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-7">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fade}
            className="inline-flex items-center gap-2 mb-8 text-xs tracking-[0.25em] uppercase text-sage-dark"
          >
            <span className="h-px w-8 bg-sage" />
            <span className="line-through opacity-60">A Creative</span> · AI Creative
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fade}
            className="font-display text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] leading-[1.02] text-ink"
          >
            AI-Powered <br />
            Marketing for{' '}
            <span className="italic text-sage">Modern</span>
            <br />
            Brands.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fade}
            className="mt-8 max-w-xl text-ink/70 text-base sm:text-lg leading-relaxed"
          >
            At Progressa Ventures, we help brands grow with a mix of creativity, strategy, and
            AI-powered execution. We build marketing systems designed for visibility, engagement,
            and growth.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fade}
            className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6"
          >
            <a href="#contact" className="cta-primary group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-ink text-cream overflow-hidden">
              <span className="absolute inset-0 bg-sage translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative font-medium tracking-wide">Let’s Build Your Story</span>
              <ArrowRight size={16} className="relative transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#services" className="group inline-flex items-center gap-3 text-ink">
              <span className="relative">
                See What We Do
                <span className="absolute left-0 -bottom-1 h-px w-full bg-ink/30 group-hover:bg-sage transition-colors" />
              </span>
              <span className="h-9 w-9 rounded-full border border-ink/15 inline-flex items-center justify-center group-hover:bg-sage group-hover:border-sage group-hover:text-cream transition-all">
                <ArrowRight size={14} />
              </span>
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fade}
            className="mt-16 grid grid-cols-3 max-w-md gap-6 border-t border-ink/10 pt-6"
          >
            {[
              { k: '10x', v: 'Faster creative cycles' },
              { k: '40+', v: 'Brand systems built' },
              { k: '6', v: 'Core capabilities' },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl text-ink">{s.k}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink/55 mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual canvas */}
        <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] lg:h-[640px] mt-12 lg:mt-0">
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute top-0 right-0 w-[68%] h-[58%] rounded-2xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(26,32,44,0.25)] ring-1 ring-ink/5"
          >
            <img
              alt="Brand creative work"
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/30 via-transparent to-transparent" />
            <button className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-cream/90 text-ink text-xs font-medium backdrop-blur">
              <Play size={12} className="fill-ink" /> Reel · 2026
            </button>
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="absolute bottom-2 lg:bottom-6 left-0 w-[58%] h-[48%] rounded-2xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(26,32,44,0.25)] ring-1 ring-ink/5"
          >
            <img
              alt="AI creative"
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=80"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            style={{ y: y3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="absolute top-[42%] right-[-8px] sm:right-[-16px] w-[200px] rounded-xl bg-cream ring-1 ring-ink/10 shadow-xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.18em] text-ink/60">Live Campaign</span>
            </div>
            <div className="font-display text-xl text-ink leading-tight">ROAS 4.7×</div>
            <div className="text-xs text-ink/60 mt-1">D2C launch · Meta + Google</div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-ink/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '78%' }}
                transition={{ duration: 1.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-sage"
              />
            </div>
          </motion.div>

          <div className="absolute -z-10 -top-10 -right-10 h-64 w-64 rounded-full bg-sage/15 blur-3xl" />
          <div className="absolute -z-10 bottom-0 left-10 h-48 w-48 rounded-full bg-ink/5 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ['Strategy', 'AI Creative', 'Performance', 'Brand', 'Social', 'Growth'];
  const row = [...words, ...words, ...words];
  return (
    <div className="border-y border-ink/10 py-6 overflow-hidden bg-cream">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
      >
        {row.map((w, i) => (
          <span key={i} className="font-display text-3xl sm:text-5xl text-ink/80 flex items-center gap-12">
            {w}
            <span className="inline-block h-2 w-2 rounded-full bg-sage" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Services() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active);

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fade}
          className="flex items-end justify-between flex-wrap gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-sage-dark mb-5">
              <span className="h-px w-8 bg-sage" />
              What We Do
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink max-w-2xl leading-[1.05]">
              Six capabilities. <span className="italic">One</span> growth engine.
            </h2>
          </div>
          <p className="text-ink/65 max-w-md">
            A modular studio model — built so creative, strategy, and performance compound instead of compete.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Tabs */}
          <div className="lg:col-span-5">
            <ul className="flex flex-col">
              {services.map((s, i) => {
                const isActive = s.id === active;
                const Icon = s.icon;
                return (
                  <motion.li
                    key={s.id}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fade}
                    custom={i}
                    className="border-b border-ink/10"
                  >
                    <button
                      onMouseEnter={() => setActive(s.id)}
                      onFocus={() => setActive(s.id)}
                      onClick={() => setActive(s.id)}
                      className="w-full flex items-center justify-between gap-4 lg:gap-6 py-3 lg:py-6 group text-left"
                    >
                      <div className="flex items-center gap-3 lg:gap-4">
                        <span
                          className={`h-8 w-8 lg:h-10 lg:w-10 rounded-full inline-flex items-center justify-center transition-all duration-500 ${
                            isActive ? 'bg-sage text-cream' : 'bg-ink/5 text-ink/60 group-hover:bg-ink/10'
                          }`}
                        >
                          <Icon size={14} />
                        </span>
                        <span
                          className={`font-display text-xl lg:text-3xl transition-colors ${
                            isActive ? 'text-ink' : 'text-ink/55 group-hover:text-ink'
                          }`}
                        >
                          {s.label}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className={`shrink-0 transition-all duration-500 ${
                          isActive
                            ? 'text-sage opacity-100 translate-x-0 -translate-y-0'
                            : 'text-ink/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                        }`}
                      />
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-ink text-cream min-h-[440px] lg:min-h-[520px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative lg:absolute lg:inset-0 p-6 sm:p-8 lg:p-12 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-sage-light">
                      <span className="h-px w-8 bg-sage-light" />
                      Capability · 0{services.findIndex((s) => s.id === current.id) + 1}
                    </div>
                    <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-6 leading-tight">{current.title}</h3>
                    <p className="mt-5 text-cream/75 max-w-lg leading-relaxed">{current.description}</p>
                  </div>

                  <div className="mt-10 grid sm:grid-cols-3 gap-4">
                    {current.points.map((p) => (
                      <div key={p} className="border border-cream/15 rounded-xl p-4">
                        <div className="h-8 w-8 rounded-full bg-sage/20 inline-flex items-center justify-center mb-3">
                          <Check size={14} className="text-sage-light" />
                        </div>
                        <div className="text-sm text-cream/85">{p}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sage/20 blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoShowcase() {
  const handleLetTalkClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, null, '#contact');
    }
  };

  const videosList = [
    { src: 'videos/ads.mp4', label: 'Ads' },
    { src: 'videos/ugc.mp4', label: 'UGC' },
    { src: 'videos/organic.mp4', label: 'Organic' },
    { src: 'videos/influencer.mp4', label: 'Influencer' },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-ink text-cream overflow-hidden border-t border-cream/10">
      <div className="grain" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 2 Videos */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6 order-2 lg:order-1">
            {videosList.slice(0, 2).map((vid) => (
              <div key={vid.label} className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl group ring-1 ring-cream/10 bg-cream/5">
                <video
                  src={`${import.meta.env.BASE_URL}${vid.src}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 bg-cream/10 backdrop-blur-md border border-cream/15 text-cream px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {vid.label}
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Text content */}
          <div className="lg:col-span-6 text-center flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-sage-light mb-6">
              <span className="h-px w-8 bg-sage-light" />
              Automated Creative Execution
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              MANUAL WORK.
              <br />
              <span className="font-sans text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-cream/70 lowercase block my-3 italic">
                your team keeps doing.
              </span>
              AUTOMATED.
            </h2>
            
            <p className="mt-8 text-cream/75 max-w-lg leading-relaxed text-sm sm:text-base">
              Ads. UGC. Organic. Influencer. Marketplace. Progressa watches every signal, researches every trend and executes so your team does more without growing headcount.
            </p>
            
            <a
              href="#contact"
              onClick={handleLetTalkClick}
              className="mt-10 group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-cream text-ink overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-sage translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative font-medium tracking-wide">Let’s Talk</span>
              <ArrowRight size={16} className="relative transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Column: 2 Videos */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6 order-3">
            {videosList.slice(2, 4).map((vid) => (
              <div key={vid.label} className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl group ring-1 ring-cream/10 bg-cream/5">
                <video
                  src={`${import.meta.env.BASE_URL}${vid.src}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 bg-cream/10 backdrop-blur-md border border-cream/15 text-cream px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {vid.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sage/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-sage/10 blur-3xl pointer-events-none" />
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="py-24 lg:py-32 bg-[#EEF6F1] relative overflow-hidden">
      <div className="grain" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fade}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-sage-dark mb-5">
              <span className="h-px w-8 bg-sage" />
              Why Progressa Ventures
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink">
              The studio of the
              <br />
              <span className="italic text-sage">next-decade</span> brand.
            </h2>
            <p className="mt-6 text-ink/70 max-w-md">
              We pair human craft with AI velocity — so your brand ships faster, looks sharper, and performs harder than the category expects.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-ink group">
              <span className="border-b border-ink/30 group-hover:border-sage transition-colors">Start a conversation</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-ink/10 rounded-2xl overflow-hidden">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fade}
                custom={i}
                className="bg-[#EEF6F1] p-7 lg:p-8 group hover:bg-cream transition-colors duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="h-9 w-9 rounded-full bg-sage/15 text-sage-dark inline-flex items-center justify-center shrink-0 group-hover:bg-sage group-hover:text-cream transition-colors duration-500">
                    <Check size={15} />
                  </div>
                  <div>
                    <div className="font-display text-2xl text-ink">{r.title}</div>
                    <p className="text-sm text-ink/60 mt-2 leading-relaxed">{r.detail}</p>
                  </div>
                </div>
                <div className="mt-6 text-[11px] tracking-[0.2em] uppercase text-ink/35">0{i + 1} / 06</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fade}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-sage-dark mb-5">
            <span className="h-px w-8 bg-sage" />
            Who We Work With
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink">
            Partners building <span className="italic">what’s next</span>.
          </h2>
          <p className="mt-6 text-ink/65 max-w-xl">
            Startups, D2C brands, e-commerce businesses, and growing companies looking to scale their digital presence with smarter marketing.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fade}
              custom={i}
              className="group relative rounded-2xl border border-ink/10 p-7 hover:border-sage transition-colors duration-500"
            >
              <div className="text-[11px] tracking-[0.25em] uppercase text-ink/40">{a.tag}</div>
              <div className="font-display text-3xl text-ink mt-3">{a.name}</div>
              <p className="mt-3 text-sm text-ink/60 leading-relaxed">{a.detail}</p>
              <ArrowUpRight
                size={18}
                className="absolute top-6 right-6 text-ink/30 group-hover:text-sage group-hover:rotate-12 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${form.name || 'Website'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBusiness Type: ${form.business}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:progressa.ventures@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-ink text-cream overflow-hidden">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sage/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-sage/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fade}
          className="lg:col-span-5"
        >
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-sage-light mb-5">
            <span className="h-px w-8 bg-sage-light" />
            Let’s talk
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
            Let’s Build Your
            <br />
            Brand <span className="italic text-sage-light">Growth Story</span>.
          </h2>
          <p className="mt-6 text-cream/70 max-w-md leading-relaxed">
            Tell us where you are and where you want to go. We’ll come back within one business day with a tailored next step.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <a href="mailto:progressa.ventures@gmail.com" className="flex items-center gap-3 text-cream/85 hover:text-sage-light transition-colors">
              <Mail size={16} /> progressa.ventures@gmail.com
            </a>
            <a href="tel:+918879946327" className="flex items-center gap-3 text-cream/85 hover:text-sage-light transition-colors">
              <Phone size={16} /> +91 88799 46327
            </a>
            <div className="flex items-center gap-3 text-cream/85">
              <MapPin size={16} /> Mumbai, India
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fade}
          className="lg:col-span-7 rounded-3xl bg-cream text-ink p-8 lg:p-12"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="field">
              <input
                id="name"
                type="text"
                placeholder=" "
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="field">
              <input
                id="email"
                type="email"
                placeholder=" "
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="field sm:col-span-2">
              <select
                id="business"
                className={form.business ? 'has-value' : ''}
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                required
              >
                <option value="" disabled hidden></option>
                <option value="Startup">Startup</option>
                <option value="D2C Brand">D2C Brand</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Growing Company">Growing Company</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="business">Business Type</label>
            </div>
            <div className="field sm:col-span-2">
              <textarea
                id="message"
                placeholder=" "
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <label htmlFor="message">Tell us about your brand</label>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-xs text-ink/55 max-w-xs">
              By submitting, you agree to be contacted about your inquiry. No spam, ever.
            </p>
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-ink text-cream overflow-hidden"
            >
              <span className="absolute inset-0 bg-sage translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative font-medium tracking-wide">{sent ? 'Sent — Thank you' : 'Send Inquiry'}</span>
              <ArrowRight size={16} className="relative transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-cream/70 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-cream/15 bg-cream">
              <img src={`${import.meta.env.BASE_URL}favicon.jpg`} alt="Progressa Ventures" className="h-full w-full object-cover" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl text-cream">Progressa Ventures</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-cream/50">Creative · Strategy · AI</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm">
            Marketing systems for modern brands — built with creativity, strategy, and AI-powered execution.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.25em] text-cream/40 mb-4">Studio</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-sage-light transition-colors">Services</a></li>
            <li><a href="#why" className="hover:text-sage-light transition-colors">Why Us</a></li>
            <li><a href="#contact" className="hover:text-sage-light transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.25em] text-cream/40 mb-4">Elsewhere</div>
          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, href: 'https://instagram.com' },
              { Icon: Linkedin, href: 'https://linkedin.com' },
              { Icon: Twitter, href: 'https://twitter.com' },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-cream/15 inline-flex items-center justify-center hover:bg-sage hover:border-sage hover:text-cream transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          <a
            href="mailto:progressa.ventures@gmail.com"
            className="mt-6 inline-flex items-center gap-2 text-sm text-cream hover:text-sage-light transition-colors"
          >
            progressa.ventures@gmail.com <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-cream/45">
          <div>© {new Date().getFullYear()} Progressa Ventures Private Limited. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-cream transition-colors">Privacy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms</a>
            <a href="#" className="hover:text-cream transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-cream text-ink overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <VideoShowcase />
        <WhyUs />
        <Audience />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
