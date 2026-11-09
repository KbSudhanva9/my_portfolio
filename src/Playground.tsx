import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Bike, Headphones, Moon, Sparkles, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const steps = [
  { title: 'Wonder', label: 'An idea shows up.', detail: 'Start with a question, a problem, or a “what if?” worth following.', result: 'a spark' },
  { title: 'Explore', label: 'Get curious.', detail: 'Figure out who it helps, what it needs, and which unfamiliar bits are worth learning.', result: 'a map' },
  { title: 'Shape', label: 'Make a plan.', detail: 'Connect the user experience, data, APIs, and architecture before the pieces get tangled.', result: 'a blueprint' },
  { title: 'Make', label: 'Build the thing.', detail: 'Write the code, use AI to accelerate exploration, and understand the decisions behind the result.', result: 'working code' },
  { title: 'Prove', label: 'Kick the tyres.', detail: 'Test, debug, review the output, and fix the edge cases before calling it ready.', result: 'confidence' },
  { title: 'Release', label: 'Let it out.', detail: 'Deploy it, learn from real use, and keep making it better.', result: 'something real' },
]

const skillGroups = [
  { title: 'Backend', color: 'coral', skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Hibernate', 'JPA', 'Node.js'] },
  { title: 'Frontend', color: 'blue', skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Redux', 'AngularJS'] },
  { title: 'Data', color: 'yellow', skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Azure SQL', 'MongoDB'] },
  { title: 'Cloud & delivery', color: 'green', skills: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'AKS', 'Firebase', 'Grafana'] },
  { title: 'Security', color: 'purple', skills: ['OAuth 2.0', 'OpenID Connect', 'Azure AD B2C', 'Okta', 'JWT', 'RBAC'] },
  { title: 'Tools', color: 'pink', skills: ['Git', 'GitHub', 'Maven', 'Postman', 'Swagger', 'JUnit', 'Mockito', 'VS Code', 'Copilot'] },
]

const moods = [
  { title: 'Headphones on', note: 'The world fades out. One more idea gets a chance.', color: 'mood-orange' },
  { title: 'Windows down', note: 'A good track, a long road, nowhere urgent to be.', color: 'mood-blue' },
  { title: 'Slow Sunday', note: 'A quieter soundtrack for letting thoughts wander.', color: 'mood-violet' },
]

const rabbitHoles = [
  'A new tool I have not tried yet',
  'What makes an app feel effortless',
  'AI as a practical building partner',
  'The tiny bug that turns into a big lesson',
]

const email = 'sudhanvakonakalla@gmail.com'
const linkedin = 'https://www.linkedin.com/in/bhargava-sudhanva-konakalla'

export default function Playground() {
  const reduceMotion = useReducedMotion()
  const [isDark, setIsDark] = useState(() => localStorage.getItem('portfolio-theme') === 'dark')
  const [activeStep, setActiveStep] = useState(0)
  const [activeMood, setActiveMood] = useState(0)
  const [activeRabbitHole, setActiveRabbitHole] = useState(0)
  const [activeSkillGroup, setActiveSkillGroup] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.55, ease: 'easeOut' as const },
      }

  return (
    <div className="playground">
      <header className="masthead">
        <a className="wordmark" href="#home" aria-label="Sudhanva, back to top">
          <span className="wordmark-dot" /> little internet, big ideas
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#outside">Outside</a>
          <a href="#workshop">Workshop</a>
          <a href="#things">Things</a>
          <a href="#hello">Say hello</a>
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setIsDark((current) => !current)}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="header-note" href="#hello">Make something <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main id="home">
        <section className="opening">
          <div className="opening-topline">
            <span className="eyebrow"><span className="live-dot" /> Hyderabad, India <span className="tiny-star">✳</span> Open tab, open mind</span>
            <span className="issue-mark">A personal corner of the internet / 001</span>
          </div>

          <div className="opening-grid">
            <div className="opening-copy">
              <p className="pre-title">Hey there, I’m Sudhanva.</p>
              <h1>I like making <span className="title-line">things <span className="wobble-word">happen<span className="scribble">!</span></span></span></h1>
              <p className="opening-description">
                Somewhere between music, long rides, random ideas and a very curious brain, I build software that turns “what if?” into “it works.”
              </p>
              <div className="opening-actions">
                <a className="button button-dark" href="#outside">Come have a look <ArrowRight size={17} /></a>
                <a className="text-link" href="#workshop">How I make things <span aria-hidden="true">↓</span></a>
              </div>
              <div className="experience-note">
                <span className="note-number">4+</span>
                <span>years building software<br />without making it my whole personality</span>
              </div>
            </div>

            <div className="playground-scene" aria-label="A playful illustration representing music, riding, and building">
              <div className="scene-sticker sticker-sound"><Headphones size={23} /><span>sound on<br />(in spirit)</span></div>
              <motion.div
                className="sunburst"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
                aria-hidden="true"
              >
                <div className="sunburst-core"><span>MAKE</span><strong>stuff</strong></div>
              </motion.div>
              <motion.div
                className="orbit orbit-one"
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                aria-hidden="true"
              >
                <span className="orbit-dot" />
              </motion.div>
              <div className="scene-sticker sticker-bike"><Bike size={21} /><span>take the<br />long way</span></div>
              <motion.div
                className="idea-note"
                initial={reduceMotion ? false : { rotate: 7, y: 14, opacity: 0 }}
                animate={{ rotate: 4, y: 0, opacity: 1 }}
                transition={{ delay: reduceMotion ? 0 : 0.35, duration: 0.5 }}
              >
                <span className="note-tape" />
                <span className="note-caption">current operating system</span>
                <strong>Curious<br />by default.</strong>
                <span className="note-doodle" aria-hidden="true">↗</span>
              </motion.div>
              <span className="scene-caption">A LITTLE CHAOS, A LOT OF CURIOSITY.</span>
            </div>
          </div>
          <div className="scroll-cue"><span /> keep wandering</div>
        </section>

        <div className="ticker" aria-label="Music, motion, curiosity, and making">
          <div className="ticker-track" aria-hidden="true">
            {Array.from({ length: 4 }, (_, index) => (
              <span key={index}>MUSIC <b>✳</b> MOTION <b>✳</b> CURIOSITY <b>✳</b> MAKING THINGS <b>✳</b></span>
            ))}
          </div>
        </div>

        <motion.section id="outside" className="section outside-section" {...reveal}>
          <div className="section-intro">
            <span className="section-index">01 / the human bits</span>
            <h2>Outside the<br /><em>code.</em></h2>
            <p>A few things that make the days feel like mine.</p>
          </div>

          <div className="outside-grid">
            <article className={`outside-card music-card ${moods[activeMood].color}`}>
              <div className="card-kicker"><Headphones size={17} /><span>Currently, in my head</span><span className="card-number">A</span></div>
              <div className="vinyl" aria-hidden="true"><div className="vinyl-label">SIDE<br />{String.fromCharCode(65 + activeMood)}</div></div>
              <div className="mood-copy" aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMood}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="mood-label">MOOD {String(activeMood + 1).padStart(2, '0')}</span>
                    <h3>{moods[activeMood].title}</h3>
                    <p>{moods[activeMood].note}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mood-selector" aria-label="Choose a music mood">
                {moods.map((mood, index) => (
                  <button key={mood.title} type="button" className={index === activeMood ? 'selected' : ''} aria-pressed={index === activeMood} onClick={() => setActiveMood(index)}>
                    <span className="mood-dot" /> {mood.title}
                  </button>
                ))}
              </div>
              <p className="honesty-note">Just moods—not an audio player. No music is playing here.</p>
            </article>

            <article className="outside-card ride-card">
              <div className="card-kicker"><Bike size={17} /><span>Riding around</span><span className="card-number">B</span></div>
              <div className="road-art" aria-hidden="true">
                <div className="road-sun" /><div className="road-horizon" />
                <div className="road-ribbon"><span /><span /><span /></div>
                <div className="road-label">TAKE THE<br />SCENIC ROUTE</div>
              </div>
              <h3>Some thoughts need a little road.</h3>
              <p>I like riding. The open air, the motion, the headspace. No route lore here—just a genuine love of the ride.</p>
            </article>

            <article className="outside-card curiosity-card">
              <div className="card-kicker"><Sparkles size={17} /><span>Curiosity, lately</span><span className="card-number">C</span></div>
              <p className="curiosity-prompt">Pick a rabbit hole.</p>
              <div className="curiosity-picker">
                {rabbitHoles.map((item, index) => (
                  <button key={item} type="button" className={index === activeRabbitHole ? 'curiosity-active' : ''} aria-pressed={index === activeRabbitHole} onClick={() => setActiveRabbitHole(index)}>
                    <span>{String(index + 1).padStart(2, '0')}</span>{item}<b aria-hidden="true">↗</b>
                  </button>
                ))}
              </div>
              <div className="curiosity-result" aria-live="polite">
                <span>RIGHT NOW I'M THINKING ABOUT</span><strong>{rabbitHoles[activeRabbitHole]}</strong>
              </div>
            </article>
          </div>
        </motion.section>

        <motion.section id="workshop" className="section workshop-section" {...reveal}>
          <div className="section-intro">
            <span className="section-index">02 / my slightly messy process</span>
            <h2>The idea<br />becomes <em>real.</em></h2>
            <p>I don’t wait until I know everything. I start, learn what’s needed, and keep going.</p>
          </div>
          <div className="workshop">
            <div className="step-tabs" role="tablist" aria-label="Build process">
              {steps.map((step, index) => (
                <button
                  type="button" key={step.title} role="tab" id={`step-tab-${index}`}
                  aria-selected={index === activeStep} aria-controls="step-panel"
                  tabIndex={index === activeStep ? 0 : -1}
                  className={index === activeStep ? 'step-tab active' : 'step-tab'}
                  onClick={() => setActiveStep(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                      event.preventDefault()
                      const next = (index + 1) % steps.length
                      setActiveStep(next)
                      document.getElementById(`step-tab-${next}`)?.focus()
                    }
                    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                      event.preventDefault()
                      const previous = (index - 1 + steps.length) % steps.length
                      setActiveStep(previous)
                      document.getElementById(`step-tab-${previous}`)?.focus()
                    }
                  }}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>{step.title}
                </button>
              ))}
            </div>
            <div id="step-panel" role="tabpanel" aria-labelledby={`step-tab-${activeStep}`} className="step-panel">
              <AnimatePresence mode="wait">
                <motion.div key={activeStep} className="step-content"
                  initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.22 }}
                >
                  <span className="step-number">{String(activeStep + 1).padStart(2, '0')} / 06</span>
                  <h3>{steps[activeStep].label}</h3>
                  <p>{steps[activeStep].detail}</p>
                  <div className="step-sketch">
                    <span className="sketch-lines"><i /><i /><i /></span>
                    <span className="sketch-arrow">↗</span>
                    <span className="sketch-caption">eventually: <strong>{steps[activeStep].result}</strong></span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <p className="ai-footnote">AI helps me explore and move faster. I’m still responsible for understanding, reviewing, testing, and shipping what I build.</p>
        </motion.section>

        <motion.section id="things" className="section things-section" {...reveal}>
          <div className="things-heading">
            <div>
              <span className="section-index">03 / no imaginary case studies</span>
              <h2>Things that<br />started as <em>ideas.</em></h2>
            </div>
            <span className="handwritten">The shelf is<br />ready when you are ↙</span>
          </div>
          <div className="empty-shelf">
            <div className="shelf-orbit" aria-hidden="true"><span>?</span></div>
            <div>
              <span className="shelf-label">PERSONAL PROJECTS</span>
              <h3>No made-up projects.<br />No work stuff.</h3>
              <p>This space is for personal apps you’re happy to share. Until then, the shelf stays open—your work stays yours.</p>
            </div>
            <span className="shelf-sticker" aria-hidden="true">YOUR<br />IDEA<br />HERE</span>
          </div>
        </motion.section>

        <motion.section id="stack" className="section skills-section" {...reveal}>
          <div className="section-intro">
            <span className="section-index">04 / tools in the toolbox</span>
            <h2>Many layers.<br /><em>One builder.</em></h2>
            <p>Four-plus years in software, across the layers it takes to bring an app to life.</p>
          </div>
          <div className="skill-explorer">
            <div className="skill-tabs" role="tablist" aria-label="Technology categories">
              {skillGroups.map((group, index) => (
                <button type="button" key={group.title} role="tab" aria-selected={activeSkillGroup === index}
                  className={activeSkillGroup === index ? 'skill-tab active' : 'skill-tab'}
                  onClick={() => setActiveSkillGroup(index)}
                >
                  <span className={`skill-dot ${group.color}`} />{group.title}
                </button>
              ))}
            </div>
            <div className="skill-display" role="tabpanel">
              <AnimatePresence mode="wait">
                <motion.div key={activeSkillGroup} className="skill-cloud"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                >
                  <span className={`skill-category ${skillGroups[activeSkillGroup].color}`}>THE {skillGroups[activeSkillGroup].title.toUpperCase()} CORNER</span>
                  <div className="skill-chips">
                    {skillGroups[activeSkillGroup].skills.map((skill, index) => (
                      <motion.span key={skill} className={`skill-chip chip-${skillGroups[activeSkillGroup].color}`}
                        initial={reduceMotion ? false : { scale: 0.86, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: reduceMotion ? 0 : index * 0.035, type: 'spring', stiffness: 280, damping: 20 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  <p>Click another category to poke around.</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.section>

        <motion.section id="hello" className="hello-section" {...reveal}>
          <div className="hello-spark" aria-hidden="true">✳</div>
          <span className="section-index">05 / your turn</span>
          <h2>Have an idea?<br /><em>Let’s make a little noise.</em></h2>
          <p>Open to full-stack opportunities, interesting problems, and conversations that start with “what if?”</p>
          <div className="hello-links">
            <a className="button button-dark" href={`mailto:${email}`}>Write me a note <ArrowUpRight size={17} /></a>
            <a className="button button-outline" href={linkedin} target="_blank" rel="noreferrer">Find me on LinkedIn <ArrowUpRight size={17} /></a>
          </div>
          <a className="email-address" href={`mailto:${email}`}>{email}</a>
        </motion.section>
      </main>

      <footer className="footer">
        <a className="wordmark" href="#home"><span className="wordmark-dot" />Made with curiosity, by Konakalla Bhargava Sudhanva</a>
        <span>Hyderabad, India <span aria-hidden="true">✳</span> Go make something.</span>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button type="button" className="back-top" aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' })}
            initial={reduceMotion ? false : { opacity: 0, y: 12, rotate: -12 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          >↑</motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
