import React, { useMemo, useState } from 'react';
import { ArrowRight, Feather, Leaf, Mail, MessageCircle, PenLine } from 'lucide-react';
import { Navigation } from './components/Navigation';
import arrivalsImage from './assets/waraq-arrivals-branded.png';
import heroImage from './assets/waraq-hero-branded.png';
import islamabadImage from './assets/waraq-islamabad-branded.png';
import paperImage from './assets/waraq-paper-study.png';

const philosophy = [
  ['01', 'The Expression', "You share what’s in your heart. A thought. A feeling. A moment that matters."],
  ['02', 'The Making', 'We shape your words with care into a letter that feels considered, beautiful and lasting.'],
  ['03', 'The Arrival', 'It reaches them, a quiet reminder that they are seen, remembered and deeply valued.'],
];
const paperNames = ['Cotton White', 'Warm Laid', 'Soft Ivory', 'Willow Grey'];
const arrivalNames = [['The Letter', 'A single, beautifully written letter.'], ['With Envelope', 'Classic and elegant.'], ['Keepsake Folio', 'For letters meant to be kept.'], ['With Ribbon', 'A final, thoughtful touch.']];

export default function App() {
  const [recipient, setRecipient] = useState('My mother');
  const [message, setMessage] = useState("Thank you for always being there, even when I didn’t have the words.");
  const [memory, setMemory] = useState('A summer in Islamabad, 2016');
  const [voice, setVoice] = useState('Warm & Personal');
  const [paper, setPaper] = useState('Soft Ivory');
  const [arrival, setArrival] = useState('Keepsake Folio');
  const salutation = useMemo(() => recipient === 'My mother' ? 'My Dearest Mother,' : recipient === 'My father' ? 'My Dear Father,' : 'My Dear Friend,', [recipient]);

  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <img className="hero__photo" src={heroImage} alt="Hands holding a WARAQ & WILLOW letter above a keepsake box" />
          <div className="hero__content">
            <p className="eyebrow">A more human world</p><h1 id="hero-title">The<br />Letter</h1>
            <p>Thoughtful letters for the people who matter. Beautifully written, carefully crafted, made to be kept.</p>
            <a className="button button--dark" href="#atelier">Begin a letter <ArrowRight size={15} /></a>
            <blockquote>“Some feelings deserve more than a text.”</blockquote>
          </div>
        </section>

        <section className="philosophy section" id="truth" aria-labelledby="truth-title"><div className="section__inner">
          <header className="center-heading"><p className="eyebrow">Our philosophy</p><h2 id="truth-title">Something true, given form.</h2><p className="microcopy">Meaningful words. A calmer world.</p></header>
          <div className="philosophy__grid">{philosophy.map(([number, title, copy]) => <article key={number}><span>{number}</span><div className="philosophy__mark" aria-hidden="true">{number === '01' ? <Feather /> : number === '02' ? <PenLine /> : <Mail />}</div><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div></section>

        <section className="islamabad" id="house" aria-labelledby="house-title"><img src={islamabadImage} alt="Islamabad and Faisal Mosque at dusk beneath the Margalla Hills" loading="lazy" /><div className="islamabad__copy"><p className="eyebrow eyebrow--light">A quieter tomorrow</p><h2 id="house-title">More human<br />connections, always.</h2><p>From our home in Islamabad, we craft letters that carry what truly matters, across cities, countries and time.</p><a className="button button--outline" href="#atelier">Our story <ArrowRight size={15} /></a></div></section>

        <section className="atelier section" id="atelier" aria-labelledby="atelier-title"><div className="section__inner">
          <header className="center-heading"><p className="eyebrow">The Letter Atelier</p><h2 id="atelier-title">A guided experience, from heart to hand.</h2><p>Answer a few simple questions, and we’ll help you craft a letter that feels just right.</p></header>
          <div className="atelier__grid"><form className="atelier__form" aria-label="Letter atelier">
            <Field number="1" label="Who is this for?"><select value={recipient} onChange={e => setRecipient(e.target.value)}><option>My mother</option><option>My father</option><option>A dear friend</option></select></Field>
            <Field number="2" label="What have you been meaning to say?"><textarea value={message} onChange={e => setMessage(e.target.value)} /></Field>
            <Field number="3" label="Is there a memory that belongs in the letter?"><input value={memory} onChange={e => setMemory(e.target.value)} /></Field>
            <Field number="4" label="Choose the voice"><select value={voice} onChange={e => setVoice(e.target.value)}><option>Warm & Personal</option><option>Simple & Direct</option><option>Formal & Graceful</option></select></Field>
            <Field number="5" label="Choose the paper"><select value={paper} onChange={e => setPaper(e.target.value)}>{paperNames.map(name => <option key={name}>{name}</option>)}</select></Field>
            <Field number="6" label="Choose the arrival"><select value={arrival} onChange={e => setArrival(e.target.value)}>{arrivalNames.map(([name]) => <option key={name}>{name}</option>)}</select></Field>
            <a className="button button--dark atelier__submit" href="#begin">See your letter <ArrowRight size={15} /></a>
          </form><aside className="letter-stage" aria-live="polite" aria-label="Letter preview"><div className="letter-stage__tabs"><span>Letter Preview</span><span>Envelope</span><span>Presentation</span></div><div className="letter-sheet"><p className="letter-sheet__brand"><Leaf aria-hidden="true" /><br />WARAQ &amp; WILLOW</p><p className="letter-sheet__date">12 March 2026</p><p>{salutation}</p><p>There are so many things I haven’t quite said out loud, but they live here, in these words.</p><p>{message} {memory && `I still think of ${memory.toLowerCase()}.`}</p><p>I hope this letter finds you well, and reminds you of how deeply you are loved.</p><p>Always,<br />Your Son</p><small>{voice} · {paper} · {arrival}</small></div></aside></div>
        </div></section>

        <section className="materials section" id="materials" aria-labelledby="materials-title"><div className="section__inner compact"><div className="section-row-heading"><div><p className="eyebrow">Paper becomes meaning</p><h2 id="materials-title">The right paper changes everything.</h2></div><p className="microcopy">Texture holds what words cannot.</p></div><div className="paper-strip">{paperNames.map((name, index) => <article key={name}><div className="paper-crop"><img src={paperImage} alt="" style={{ objectPosition: `${index * 33}% center` }} /></div><h3>{name}</h3><p>{['Clean. Timeless. Versatile.', 'Textured. Classic. Refined.', 'Gentle. Intimate. Enduring.', 'Quiet. Modern. Distinctive.'][index]}</p></article>)}</div></div></section>

        <section className="arrivals section" id="arrival" aria-labelledby="arrival-title"><div className="section__inner compact"><div className="section-row-heading"><div><p className="eyebrow">Ways it may arrive</p><h2 id="arrival-title">Considered details for a lasting impression.</h2></div><p className="microcopy">It’s more than a letter. It’s a keepsake.</p></div><div className="arrivals__visual"><img className="arrivals__image" src={arrivalsImage} alt="Four WARAQ & WILLOW letter presentation options" loading="lazy" /><span aria-hidden="true">WARAQ &amp; WILLOW</span></div><div className="arrivals__labels">{arrivalNames.map(([name, copy]) => <article key={name}><h3>{name}</h3><p>{copy}</p></article>)}</div></div></section>

        <section className="begin" id="begin" aria-labelledby="begin-title"><div><p className="eyebrow eyebrow--light">Letters move people</p><h2 id="begin-title">Begin Yours</h2><p>Turn what’s in your heart into a letter they’ll never forget.</p></div><div className="begin__actions"><a className="button button--light" href="mailto:studio@waraqandwillow.com">Begin a letter <ArrowRight size={15} /></a><a className="button button--outline" href="https://wa.me/923000000000"><MessageCircle size={16} /> Chat on WhatsApp</a></div></section>
      </main>
      <footer><strong>WARAQ &amp; WILLOW</strong><nav><a href="#top">Letters</a><a href="#materials">Materials</a><a href="#house">The House</a><a href="#atelier">Atelier</a><a href="#begin">Contact</a></nav><small>Small letters. A more human world.</small></footer>
    </div>
  );
}

function Field({ number, label, children }: { number: string; label: string; children: React.ReactNode }) { return <label className="field"><span className="field__number">{number}</span><span className="field__label">{label}</span>{children}</label>; }
