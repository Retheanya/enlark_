import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.jpeg';
import carousel3 from '../assets/carousel3.png';
import carousel4 from '../assets/carousel4.jpeg';
import heroImg from '../assets/hero.png';
import waterring from '../assets/waterring.jpg';
import { COMPANY } from '../config/company';

type AboutSectionKey =
  | 'vision-mission'
  | 'company-profile'
  | 'qa-qc'
  | 'infrastructure'
  | 'history'
  | 'why-ivc'
  | 'technical-support'
  | 'new-development';

function AboutUsHero() {
  return (
    <section className="about-hero">
      <div className="container about-hero-inner">
        <div className="about-hero-text">
          <h1 className="about-hero-title">{`About ${COMPANY.nameShort}`}</h1>
          <p className="about-hero-subtitle">
            Vacuum pump manufacturing focused on dependable performance, consistent quality, and long-term service support.
          </p>
        </div>
        <div className="about-hero-image">
          <img src={carousel4} alt="Vacuum pumps" className="about-hero-img" />
        </div>
      </div>
    </section>
  );
}

function AboutUsSections() {
  const sections: Array<{
    key: AboutSectionKey;
    title: string;
    image: string;
    paragraphs: string[];
    bullets?: string[];
  }> = [
    {
      key: 'vision-mission',
      title: 'Vision & Mission',
      image: heroImg,
      paragraphs: [
        'Our vision is to be a trusted global partner for vacuum pump solutions, known for reliability, performance, and responsive service.',
        'Our mission is to engineer, manufacture, and support vacuum pumps and systems that help customers achieve stable vacuum levels, lower downtime, and better process consistency.',
      ],
      bullets: [
        'Deliver dependable vacuum performance across applications',
        'Improve continuously through testing, feedback, and innovation',
        'Support customers with fast, practical technical help',
      ],
    },
    {
      key: 'company-profile',
      title: 'Company Profile',
      image: carousel1,
      paragraphs: [
        `${COMPANY.nameLong.toUpperCase()} designs and manufactures a broad range of industrial vacuum pumps, vacuum systems, and accessories for process industries.`,
        'With an engineering-led approach, we focus on robust construction, serviceability, and application-fit configurationsstandard and customized.',
      ],
      bullets: [
        'Product range: water ring, liquid ring, booster systems, oil sealed pumps, and vacuum packages',
        'Services: selection support, commissioning guidance, and after-sales spares',
        'Quality system: ISO-aligned processes (dummy data)',
      ],
    },
    {
      key: 'qa-qc',
      title: 'Quality Assurance And Quality Control',
      image: carousel2,
      paragraphs: [
        'Quality is built into every stepfrom incoming inspection to assembly, testing, and final dispatch. Our QA/QC practices emphasize consistency, traceability, and repeatable results.',
        'Each unit is checked against defined parameters to ensure safe operation and reliable vacuum performance for the intended duty point.',
      ],
      bullets: [
        'Incoming material inspection and vendor verification (dummy process)',
        'Assembly checks for alignment, clearances, and torque',
        'Performance testing for vacuum level, vibration, noise, and leakage',
      ],
    },
    {
      key: 'infrastructure',
      title: 'Infrastructure',
      image: carousel4,
      paragraphs: [
        'Our infrastructure supports precision assembly, controlled testing, and efficient dispatch. Dedicated areas for assembly, testing, and spares help keep lead times predictable.',
        'We maintain measuring and test instruments to verify critical dimensions and performance metrics.',
      ],
      bullets: [
        'Assembly bays with calibrated tools (dummy data)',
        'Test setup for performance verification',
        'Organized spares and service-ready inventory',
      ],
    },
    {
      key: 'history',
      title: 'History',
      image: carousel3,
      paragraphs: [
        'ENLARK began with a clear focus: build dependable vacuum pump solutions and back them with responsive support.',
        'From 20242026, we expanded our product portfolio and strengthened testing practices to meet higher process demands across industries (dummy timeline).',
      ],
      bullets: [
        '2024: Company foundation and initial product range (dummy)',
        '2025: Added new configurations and improved testing routines (dummy)',
        '2026: Expanded service support and spares readiness (dummy)',
      ],
    },
    {
      key: 'why-ivc',
      title: 'Why Ivc',
      image: waterring,
      paragraphs: [
        'Customers choose us for application-fit solutions and support that stays involved after delivery. We focus on practical engineering and consistent quality.',
        'Our goal is to help you achieve stable vacuum, lower energy cost, and fewer stoppages with the right pump selection and configuration.',
      ],
      bullets: ['Application guidance for correct selection and sizing', 'Robust build for industrial duty cycles', 'Quick spares and service support'],
    },
    {
      key: 'technical-support',
      title: 'Technical Support',
      image: carousel1,
      paragraphs: [
        'Our technical team helps with selection, troubleshooting, and optimizationwhether it is improving vacuum stability, reducing carryover, or fine-tuning system performance.',
        'Support can include parameter checks, recommended operating practices, and spares guidance for planned maintenance.',
      ],
      bullets: [
        'Selection support: duty point, sealing fluid, materials (dummy)',
        'Troubleshooting: low vacuum, noise/vibration, high temperature (dummy)',
        'Maintenance guidance and spares planning',
      ],
    },
    {
      key: 'new-development',
      title: 'New Development',
      image: carousel4,
      paragraphs: [
        'We continuously develop improved variants and system packages to meet evolving process requirementsbetter efficiency, easier service, and stable performance.',
        'New development efforts prioritize reliability in real-world conditions and compatibility with customer operating environments.',
      ],
      bullets: ['Product variants and customized skids (dummy)', 'Performance-focused testing and validation', 'Feedback-driven improvements from field experience'],
    },
  ];

  return (
    <div className="about-full" id="about-us">
      {sections.map((s, idx) => (
        <section key={s.key} className={`about-split ${idx % 2 === 0 ? 'even' : 'odd'}`}>
          <div className="about-split-inner">
            <div className="about-split-text">
              <p className="about-split-kicker">{`Section ${idx + 1} of 8`}</p>
              <h2 className="about-split-title">{s.title}</h2>
              {s.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="about-split-paragraph">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="about-split-bullets">
                  {s.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="about-split-media">
              <img src={s.image} alt={`${s.title} - vacuum pumps`} className="about-split-img" />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

function AboutUsPage() {
  return (
    <>
      <AboutUsHero />
      <AboutUsSections />
    </>
  );
}

export default AboutUsPage;
