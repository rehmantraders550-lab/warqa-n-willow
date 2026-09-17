import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  BookOpenText,
  Check,
  ChevronRight,
  Feather,
  Mail,
  PenLine,
  Sparkles,
} from 'lucide-react';
import { Navigation } from './components/Navigation';

type AtelierChoice = {
  tone: string;
  intention: string;
  paper: string;
  presentation: string;
};

const reasons = [
  'To say what should not vanish into a thread.',
  'To give gratitude a body.',
  'To mark a threshold, a return, an apology, a beginning.',
  'To let someone keep the exact weight of your attention.',
];

const materials = [
  {
    name: 'Cotton Rag',
    note: 'Soft tooth, generous ink hold, made for letters that unfold slowly.',
  },
  {
    name: 'Deckled Sheet',
    note: 'A quiet edge for vows, blessings, and notes meant to feel found by hand.',
  },
  {
    name: 'Pressed Willow',
    note: 'A botanical impression for seasonal notes, family letters, and keepsakes.',
  },
  {
    name: 'Warm Vellum',
    note: 'Translucent overlays for a second voice: date, place, name, or small prayer.',
  },
];

const arrivals = [
  'Folded letter with addressed envelope',
  'Sealed keepsake folio',
  'Nested paper suite for gatherings',
  'Hand-tied archive bundle',
];

const atelierOptions = {
  tone: ['Tender', 'Ceremonial', 'Plainspoken'],
  intention: ['Gratitude', 'Apology', 'Blessing'],
  paper: ['Cotton Rag', 'Deckled Sheet', 'Pressed Willow'],
  presentation: ['Envelope', 'Folio', 'Bundle'],
};

const sampleLines: Record<string, string> = {
  Tender: 'I wanted this to arrive slowly, with room around every word.',
  Ceremonial: 'Let this page hold the occasion with care and witness.',
  Plainspoken: 'Here is the truth, simply kept and clearly given.',
  Gratitude: 'Thank you for the shelter of your presence.',
  Apology: 'I am writing because the repair deserves more than a passing sentence.',
  Blessing: 'May what begins here be carried with steadiness and light.',
};

export default function App() {
  const [choice, setChoice] = useState<AtelierChoice>({
    tone: 'Tender',
    intention: 'Gratitude',
    paper: 'Cotton Rag',
    presentation: 'Envelope',
  });

  const preview = useMemo(() => {
    return [
      'Dear you,',
      sampleLines[choice.tone],
      sampleLines[choice.intention],
      `We would set it on ${choice.paper.toLowerCase()} and let it arrive as ${choice.presentation === 'Envelope' ? 'an' : 'a'} ${choice.presentation.toLowerCase()}, made to be opened by hand.`,
      'With care,',
      'WARAQ & WILLOW',
    ];
  }, [choice]);

  const setAtelierChoice = (group: keyof AtelierChoice, value: string) => {
    setChoice((current) => ({ ...current, [group]: value }));
  };

  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <section className="hero section" id="top" aria-labelledby="hero-title">
          <div className="hero__paper" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="section__inner hero__inner">
            <p className="eyebrow">Letters, composed and made by hand</p>
            <h1 id="hero-title">The Letter</h1>
            <p className="hero__lede">
              WARAQ & WILLOW turns feeling into a written object: considered words,
              beautiful paper, and a form that can be held, kept, and returned to.
            </p>
            <div className="hero__actions" aria-label="Primary actions">
              <a className="button button--dark" href="#atelier">
                Begin yours <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className="button button--light" href="#materials">
                Explore paper <Feather aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="truth section" id="truth" aria-labelledby="truth-title">
          <div className="section__inner split">
            <div>
              <p className="eyebrow">Something true given form</p>
              <h2 id="truth-title">A letter is a place where attention becomes visible.</h2>
            </div>
            <div className="prose">
              <p>
                We write with you, not over you. The work begins with listening:
                what happened, what must be said, what should remain unsaid, and
                what kind of silence the page needs around it.
              </p>
              <p>
                Then we shape the language, choose the paper, and prepare the
                piece so it feels intimate without becoming ornate.
              </p>
            </div>
          </div>
        </section>

        <section className="reasons section" id="reasons" aria-labelledby="reasons-title">
          <div className="section__inner">
            <div className="section-heading">
              <p className="eyebrow">Reasons we write</p>
              <h2 id="reasons-title">Some words ask for a slower room.</h2>
            </div>
            <div className="reason-grid">
              {reasons.map((reason, index) => (
                <article className="reason" key={reason}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{reason}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="atelier section" id="atelier" aria-labelledby="atelier-title">
          <div className="section__inner atelier__inner">
            <div className="section-heading">
              <p className="eyebrow">Letter Atelier</p>
              <h2 id="atelier-title">Compose the outline of a letter.</h2>
            </div>
            <div className="atelier__workspace">
              <form className="atelier__controls" aria-label="Letter atelier choices">
                {Object.entries(atelierOptions).map(([group, values]) => (
                  <fieldset key={group}>
                    <legend>{group}</legend>
                    <div className="segmented">
                      {values.map((value) => {
                        const active = choice[group as keyof AtelierChoice] === value;
                        return (
                          <button
                            aria-pressed={active}
                            className={active ? 'is-active' : ''}
                            key={value}
                            onClick={() => setAtelierChoice(group as keyof AtelierChoice, value)}
                            type="button"
                          >
                            {active && <Check aria-hidden="true" size={15} />}
                            {value}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                ))}
              </form>
              <aside className="letter-preview" aria-live="polite" aria-label="Live editorial letter preview">
                <div className="letter-preview__sheet">
                  {preview.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="materials section" id="materials" aria-labelledby="materials-title">
          <div className="section__inner">
            <div className="section-heading">
              <p className="eyebrow">Paper becomes material</p>
              <h2 id="materials-title">The Paper Cabinet</h2>
            </div>
            <div className="material-grid">
              {materials.map((material) => (
                <article className="material" key={material.name}>
                  <div className="material__swatch" aria-hidden="true" />
                  <h3>{material.name}</h3>
                  <p>{material.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="making section" id="making" aria-labelledby="making-title">
          <div className="section__inner split">
            <div>
              <p className="eyebrow">The Making</p>
              <h2 id="making-title">From conversation to keepsake.</h2>
            </div>
            <ol className="timeline">
              <li><span>Listen</span><p>A private prompt gathers the memory, tone, names, and occasion.</p></li>
              <li><span>Write</span><p>The letter is drafted, refined, and balanced until it sounds like it belongs to you.</p></li>
              <li><span>Form</span><p>Paper, fold, seal, and presentation are chosen to match the message.</p></li>
              <li><span>Arrive</span><p>The finished piece is prepared for giving, keeping, or sending.</p></li>
            </ol>
          </div>
        </section>

        <section className="arrival section" id="arrival" aria-labelledby="arrival-title">
          <div className="section__inner">
            <div className="section-heading">
              <p className="eyebrow">Ways it may arrive</p>
              <h2 id="arrival-title">Quiet forms for different kinds of saying.</h2>
            </div>
            <div className="arrival-list">
              {arrivals.map((item) => (
                <a href="#begin" key={item}>
                  <BookOpenText aria-hidden="true" size={20} />
                  <span>{item}</span>
                  <ChevronRight aria-hidden="true" size={18} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="house section" id="house" aria-labelledby="house-title">
          <div className="section__inner split">
            <div>
              <p className="eyebrow">Islamabad / House story</p>
              <h2 id="house-title">Made from a city that understands pause.</h2>
            </div>
            <div className="prose">
              <p>
                WARAQ & WILLOW is imagined from Islamabad: a house of paper,
                shade, measured hospitality, and careful words. The work borrows
                its pace from mornings that open gently and evenings that ask
                people to sit a little longer.
              </p>
              <p>
                Every letter is treated as a guest: received with attention,
                prepared with restraint, and sent onward with dignity.
              </p>
            </div>
          </div>
        </section>

        <section className="begin section" id="begin" aria-labelledby="begin-title">
          <div className="section__inner begin__inner">
            <Sparkles aria-hidden="true" size={28} />
            <p className="eyebrow">Begin yours</p>
            <h2 id="begin-title">Bring the feeling. We will help it find the page.</h2>
            <a className="button button--dark" href="mailto:studio@waraqandwillow.com">
              <Mail aria-hidden="true" size={18} />
              Write to the studio
            </a>
          </div>
        </section>
      </main>

      <footer className="footer" aria-label="WARAQ & WILLOW footer">
        <div className="section__inner footer__inner">
          <a className="footer__brand" href="#top">WARAQ & WILLOW</a>
          <nav aria-label="Footer">
            <a href="#truth">Truth</a>
            <a href="#atelier">Atelier</a>
            <a href="#materials">Paper</a>
            <a href="#house">House</a>
          </nav>
          <p>Letters and paper forms from Islamabad.</p>
          <PenLine aria-hidden="true" size={20} />
        </div>
      </footer>
    </div>
  );
}
