import { motion, useScroll, useTransform } from "framer-motion";
import {
  Aperture,
  ArrowDownRight,
  ArrowUpRight,
  Camera,
  Clapperboard,
  Film,
  Menu,
  Play,
  WandSparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const work = [
  {
    title: "RPMMC",
    type: "Brand film",
    source: "1lXS5xGbqebPVOce_LPfHcSEh0TrbJ3-U",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "PWC",
    type: "Brand film",
    source: "1EcmECIaX1qDSSFE1XbYqVBM0u79q4X9G",
    className: "",
  },
  {
    title: "NISSAN",
    type: "Brand film",
    source: "1XqVOWlUDNhN3RBoI6R5HeY2mE7_6ug9U",
    className: "",
  },
  {
    title: "MAKI",
    type: "MUSIC VIDEO",
    source: "1vKaurkt-N08olt4j7GK1ywC6Dr4tDrV1",
    className: "",
  },
  {
    title: "LACTUME",
    type: "Brand film",
    source: "13vPmrB0-WCrPfQyqcOQrSodW4GUZhTNL",
    className: "",
  },
];

const services = [
  {
    icon: Film,
    title: "Video editing",
    copy: "Story-driven cuts, pacing, sound design, subtitles, social versions and delivery-ready exports.",
  },
  {
    icon: WandSparkles,
    title: "Motion graphics",
    copy: "Animated titles, lower thirds, logo reveals, transitions and expressive brand motion.",
  },
  {
    icon: Aperture,
    title: "Photo editing",
    copy: "Retouching, color, cleanup, compositing and editorial polish for campaigns and portraits.",
  },
  {
    icon: Clapperboard,
    title: "Creative direction",
    copy: "Visual references, edit direction, sequencing and platform-first storytelling from concept to final.",
  },
];

const nav = ["Home", "About", "Portfolio", "Services", "Contact"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 110]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.96]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="min-h-screen bg-[#080018] text-white">
      <div className="fixed left-0 top-0 z-[80] h-0.5 w-full bg-white/10">
        <motion.div
          className="h-full origin-left bg-cyan-400"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      <section
        id="home"
        className="noise relative min-h-screen overflow-hidden border-b border-white/10 bg-[#0a0221]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(0,193,255,.18),transparent_35%),radial-gradient(circle_at_15%_60%,rgba(113,44,255,.26),transparent_35%)]" />
        <div className="absolute inset-0 grid-bg opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
        <div className="absolute -left-20 bottom-14 h-72 w-72 rotate-12 bg-fuchsia-600/15 blur-3xl" />

        <header className="relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 md:px-8 lg:px-10">
          <a
            href="/"
            className="flex items-center gap-2.5 font-semibold tracking-tight"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#0a0221]">
              <Play size={14} fill="currentColor" />
            </span>
            <span className="text-sm tracking-[.08em]">LY-ANN</span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative text-[11px] font-semibold uppercase tracking-[.16em] text-white/70 transition hover:text-white"
              >
                {item}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#contact"
              className="ml-3 border border-white/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-[#07111c]"
            >
              Book a project
            </a>
          </div>
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center border border-white/15 lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </header>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-5 top-20 z-40 border border-white/10 bg-[#0b0320]/95 p-5 backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-1">
              {nav.map((item) => (
                <a
                  key={item}
                  onClick={() => setMenuOpen(false)}
                  href={`#${item.toLowerCase()}`}
                  className="border-b border-white/10 px-2 py-4 text-sm font-semibold uppercase tracking-[.12em] text-white/80 last:border-b-0"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-94px)] max-w-7xl items-center gap-10 px-5 pb-12 pt-8 md:px-8 lg:grid-cols-[.9fr_1.3fr] lg:px-10 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 lg:-mr-28"
          >
            <h1 className="max-w-2xl text-5xl font-black uppercase leading-[.88] tracking-[-.055em] sm:text-6xl md:text-7xl lg:text-[5.9rem]">
              I TURN RAW FOOTAGE{" "}
              <span className="block text-stroke">INTO STORIES THAT MOVE.</span>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-6 text-white/62 md:text-base">
              From the first frame to the final cut, I create videos that capture attention, 
              communicate emotion, and leave a lasting impression.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-3 border-l-2 border-b-2 border-cyan-400 px-5 py-3 text-[10px] font-bold uppercase tracking-[.18em] transition hover:bg-cyan-400 hover:text-[#07111c]"
              >
                See my work{" "}
                <ArrowDownRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            style={{ y: heroY, scale: heroScale }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[420px] sm:min-h-[500px] lg:min-h-[610px]"
          >
            <div className="absolute left-[2%] top-[9%] h-[78%] w-[87%] border border-cyan-400/25 bg-cyan-500/5" />
            <div className="absolute -right-2 top-0 h-[18%] w-[76%] bg-cyan-500/10" />
            <div className="absolute bottom-0 left-[12%] h-[86%] w-[88%] overflow-hidden shadow-glow">
              <img
                src="/ly-ann.jpeg"
                alt="My Img"
                className="h-full w-full object-cover grayscale-[15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#110226]/50 via-transparent to-cyan-300/10" />
            </div>
            <div className="absolute -bottom-4 -right-1 select-none text-[clamp(5rem,13vw,10rem)] font-black leading-none text-white/[.035]">
              01
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="services"
        className="relative border-b border-white/10 bg-[#070016] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[.3em] text-white/45">
                My services
              </p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-[-.04em] md:text-5xl">
                What I do?
              </h2>
              <span className="mt-5 block h-0.5 w-12 bg-cyan-400" />
            </motion.div>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {services.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="group relative bg-[#070016] p-7 md:p-9"
                >
                  <div className="mb-6 grid h-12 w-12 place-items-center border border-cyan-400/80 text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-[#07111c]">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/48">
                    {item.copy}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-[#0b0320] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-[-.04em] md:text-6xl">
                Portfolio
              </h2>
            </div>
              <p className="text-[10px] font-bold uppercase tracking-[.3em] text-cyan-300/80">
                My featured works
              </p>
          </div>

          <div className="grid auto-rows-[260px] gap-4 md:grid-cols-3 md:auto-rows-[280px]">
            {work.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`group relative overflow-hidden bg-white/5 ${item.className}`}
              >
                <iframe
                  src={`https://drive.google.com/file/d/${item.source}/preview`}
                  title={item.title}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="h-full w-full border-0 transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent opacity-90" />

                {/* Content */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-6">
                  <div>
                    <p className="text-[9px] uppercase tracking-[.24em] text-white/55">
                      {item.type}
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                  </div>

                  <span className="grid h-10 w-10 translate-y-2 place-items-center border border-white/25 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative overflow-hidden border-y border-white/10 bg-[#070016] py-20 md:py-28"
      >
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[480px]"
          >
            <img
              src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85"
              alt="Editor at work"
              className="absolute inset-0 h-full w-[90%] object-cover"
            />
            <div className="absolute bottom-7 right-0 w-[48%] border border-white/10 bg-[#0b0320] p-6 shadow-2xl">
              <p className="text-4xl font-black">8+</p>
              <p className="mt-2 text-[10px] uppercase tracking-[.2em] text-white/45">
                Years video editing experience
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-cyan-300/80">
              About me
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-black uppercase leading-[.98] tracking-[-.045em] md:text-5xl">
              Clean cuts. Bold frames. Stronger stories.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/52">
              I help brands and creators turn raw footage and photographs into
              polished visual stories. The process balances creative instinct
              with a precise technical workflow, keeping every deliverable
              cohesive across screens and platforms.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">
              {[
                ["120+", "Projects"],
                ["24M+", "Views"],
                ["18", "Brand partners"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="text-2xl font-bold">{n}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[.18em] text-white/35">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0b0320] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="mb-12 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-cyan-300/80">
              Workflow
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-.04em] md:text-5xl">
              From raw to remarkable.
            </h2>
          </div>
          <div className="grid border-l border-t border-white/10 md:grid-cols-4">
            {[
              [ "Brief", "Goals, references, deliverables and deadlines."],
              [
                "Build",
                "Selects, assembly, retouching and first creative pass.",
              ],
              [
                "Refine",
                "Feedback, sound, color, graphics and finishing details.",
              ],
              [
                "Deliver",
                "Platform-ready exports, masters and organized handoff.",
              ],
            ].map((s, i) => (
              <motion.div
                key={s[0]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                className="border-b border-r border-white/10 p-7 md:min-h-60 md:p-8"
              >
                <span className="text-[10px] font-bold tracking-[.2em] text-cyan-400">
                  {s[0]}
                </span>
                <h3 className="mt-10 text-xl font-semibold">{s[1]}</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">{s[2]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-cyan-400 py-20 text-[#07111c] md:py-24"
      >
        <div className="absolute -right-8 -top-20 rotate-[-12deg] text-[13rem] font-black text-[#07111c]/[.06]">
          <Camera size={260} strokeWidth={1} />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 px-5 md:px-8 lg:flex-row lg:items-end lg:px-10">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[.28em] opacity-60">
              Have a project in mind?
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[.92] tracking-[-.055em] md:text-7xl">
              Let's make something worth replaying.
            </h2>
          </div>
          <a
            href="mailto:email"
            className="group inline-flex shrink-0 items-center gap-3 border-2 border-[#07111c] px-6 py-4 text-[10px] font-black uppercase tracking-[.18em] transition hover:bg-[#07111c] hover:text-white"
          >
            Start a project{" "}
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </section>

      <footer className="bg-[#05000f] py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 text-[10px] uppercase tracking-[.16em] text-white/35 md:flex-row md:items-center md:px-8 lg:px-10">
          <div className="flex items-center gap-2 text-white">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#0a0221]">
              <Play size={12} fill="currentColor" />
            </span>
            <span className="font-bold tracking-[.08em]">LY-ANN</span>
          </div>
          <p>Video editor</p>
          <div className="flex gap-5">
            <a href="#home" className="hover:text-white">
              Top
            </a>
            <a href="#portfolio" className="hover:text-white">
              Work
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
