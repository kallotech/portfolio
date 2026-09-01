const projectIndex = [
  { number: '01', label: 'AIM93', href: '#aim93' },
  { number: '02', label: 'KRÖSSA', href: '#krossa' },
  { number: '03', label: 'PROMO-DRONES', href: '#promo-drones' },
  { number: '04', label: 'KINESIS', href: '#kinesis' },
];

export const dynamic = 'force-static';

type ProjectProps = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  details: string[];
  pages: { src: string; alt: string }[];
  dark?: boolean;
};

function Project({
  id,
  number,
  title,
  eyebrow,
  summary,
  details,
  pages,
  dark = false,
}: ProjectProps) {
  return (
    <section className={`project ${dark ? 'project-dark' : ''}`} id={id}>
      <div className="project-heading">
        <p className="project-number">{number} / 04</p>
        <div>
          <p className="section-label">{eyebrow}</p>
          <h2>/{title}</h2>
        </div>
        <div className="project-summary">
          <p>{summary}</p>
          <ul>
            {details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-spreads">
        {pages.map((page, index) => (
          <figure key={page.src} className={index === 0 ? 'featured-spread' : ''}>
            <img src={page.src} alt={page.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="monogram" href="#top" aria-label="Nassi Mandalas - home">
            NM<span>/26</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a className="contact-link" href="mailto:nassimandalas@icloud.com">
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </header>

        <div className="hero-copy" id="top">
          <p className="eyebrow">Portfolio / 2026</p>
          <h1 id="hero-title">
            Creative
            <br />
            Engineering
          </h1>
          <p className="intro">
            Product design, physical prototyping and CAD - turning ambitious
            ideas into things you can hold, test and improve.
          </p>
        </div>

        <figure className="hero-image-wrap">
          <img
            className="hero-image"
            src="portfolio/cover.webp"
            alt="Nassi Mandalas working with a physical prototype, surrounded by project models."
          />
        </figure>

        <div className="project-index" id="work" aria-label="Selected projects">
          {projectIndex.map((project) => (
            <a key={project.label} href={project.href}>
              <span>{project.number}</span>
              /{project.label}
            </a>
          ))}
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll to explore</span>
          <i />
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="about-copy">
          <p className="section-label">Profile / Capabilities</p>
          <h2 id="about-title">
            I design the bridge between an idea and the physical thing.
          </h2>
          <p>
            I&apos;m a creative engineer with practical experience in mechanical
            design, prototyping and CAD. My work combines hands-on making with a
            clear product story - from early research and form studies through to
            working prototypes.
          </p>
          <div className="capabilities" aria-label="Core capabilities">
            <span>Product design</span>
            <span>CAD development</span>
            <span>Physical prototyping</span>
            <span>Design for manufacture</span>
          </div>
          <a className="pdf-link" href="NassiMandalas-Portfolio.pdf" download>
            Download portfolio PDF <span aria-hidden="true">↓</span>
          </a>
        </div>
        <figure className="about-spread">
          <img
            src="portfolio/page-03.webp"
            alt="Profile page with a portrait of Nassi Mandalas, education, creative software and CAD skills."
            loading="lazy"
          />
        </figure>
      </section>

      <Project
        id="aim93"
        number="01"
        title="AIM93"
        eyebrow="Aerodynamics / Composites"
        summary="A full-scale human-powered vehicle fairing developed through CAD planning, CNC-machined foam tooling and carbon-fibre lay-up."
        details={['CAD segmentation', 'CNC foam tooling', 'Composite lay-up']}
        pages={[
          {
            src: 'portfolio/page-04.webp',
            alt: 'AIM93 aerodynamic fairing project introduction.',
          },
          {
            src: 'portfolio/page-05.webp',
            alt: 'AIM93 process covering CAD planning, foam preparation, CNC machining and carbon-fibre lay-up.',
          },
          {
            src: 'portfolio/page-06.webp',
            alt: 'AIM93 project photography from Battle Mountain, Nevada.',
          },
        ]}
      />

      <Project
        id="krossa"
        number="02"
        title="KRÖSSA"
        eyebrow="Household product / Circular materials"
        summary="A compact household recycling concept made from one sheet of plywood and Eco Leather offcuts, developed around flat-pack simplicity and an intuitive compression action."
        details={['Research and direction', 'Sketching and pop models', 'Concept visualisation']}
        pages={[
          {
            src: 'portfolio/page-07.webp',
            alt: 'KRÖSSA household recycling concept and design brief.',
          },
          {
            src: 'portfolio/page-08.webp',
            alt: 'KRÖSSA research, sketching and cardboard model development.',
          },
          {
            src: 'portfolio/page-09.webp',
            alt: 'KRÖSSA recycling concept visualised in a kitchen environment.',
          },
        ]}
      />

      <Project
        id="promo-drones"
        number="03"
        title="PROMO-DRONES"
        eyebrow="Controller concept / DFM"
        summary="A handheld drone-controller concept that translates Honda CBR visual cues into a compact enclosure, with CAD detailing and a mould-tool study exploring an injection-moulding direction."
        details={['Form ideation', 'Enclosure CAD', 'Tooling study']}
        pages={[
          {
            src: 'portfolio/page-10.webp',
            alt: 'Red Promo-Drones handheld controller concept.',
          },
          {
            src: 'portfolio/page-11.webp',
            alt: 'Promo-Drones ideation, enclosure breakdown and mould-tool development.',
          },
        ]}
        dark
      />

      <Project
        id="kinesis"
        number="04"
        title="KINESIS"
        eyebrow="Final year project / Wearable resistance"
        summary="A wearable fitness system designed to deliver adjustable resistance while preserving natural movement, developed through research, body-scale rigs, mechanism testing and integrated prototyping."
        details={['72-response aesthetics survey', 'BLDC motor and planetary gearbox', 'Documented 4 kg resistance target']}
        pages={[
          {
            src: 'portfolio/page-12.webp',
            alt: 'Kinesis wearable resistance system project introduction.',
          },
          {
            src: 'portfolio/page-13.webp',
            alt: 'Kinesis user research, journey mapping and aesthetics survey.',
          },
          {
            src: 'portfolio/page-14.webp',
            alt: 'Kinesis concept selection and prototype development.',
          },
          {
            src: 'portfolio/page-15.webp',
            alt: 'Kinesis final prototype exhibited in London in 2024.',
          },
        ]}
        dark
      />

      <footer className="site-footer">
        <p className="section-label">Have a physical idea?</p>
        <h2>
          Let&apos;s make the next
          <br />
          physical thing.
        </h2>
        <div className="footer-row">
          <a href="mailto:nassimandalas@icloud.com">
            nassimandalas@icloud.com <span aria-hidden="true">↗</span>
          </a>
          <a href="NassiMandalas-Portfolio.pdf" download>
            Portfolio PDF <span aria-hidden="true">↓</span>
          </a>
          <a href="#top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
        <p className="copyright">Nassi Mandalas / Creative Engineer / 2026 ©</p>
      </footer>
    </main>
  );
}
