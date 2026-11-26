import { CYCLE_LENGTH, STEP_DEGREES, passageLongitude, zodiacPosition } from './geometry.mjs';

const ARCSECONDS_PER_DEGREE = 3600;
const DEGREES_PER_SIGN = 30;
const EXAMPLE = 791546; // 9°52′26″ Scorpio
const MAX_PASSAGE = Math.floor(Number.MAX_SAFE_INTEGER / STEP_DEGREES);
const SVG_NS = 'http://www.w3.org/2000/svg';

const root = document.querySelector('#phoenix-visual-study');
const app = root.querySelector('[data-explorer]');
const sign = app.querySelector('#sun-sign');
const degrees = app.querySelector('#sun-degree');
const minutes = app.querySelector('#sun-minute');
const seconds = app.querySelector('#sun-second');
const passageInput = app.querySelector('#passage-number');
const slider = app.querySelector('#phoenix-study-step');
const wheelFrame = app.querySelector('[data-wheel-frame]');
const wheelPath = app.querySelector('[data-wheel-path]');
const wheelDescription = app.querySelector('[data-wheel-description]');
const position = app.querySelector('[data-position]');
const measured = app.querySelector('[data-measured]');
const detail = app.querySelector('[data-detail]');
const presets = Array.from(app.querySelectorAll('[data-step]'));
const december = app.querySelector('[data-example-only]');
const restore = app.querySelector('[data-reset]');
const natal = app.querySelector('[data-natal]');
const progress = app.querySelector('[data-progress]');
const total = app.querySelector('[data-total]');
const revolutions = app.querySelector('[data-revolutions]');
const cycle = app.querySelector('[data-cycle]');
const announcement = app.querySelector('[data-announcement]');
const previous = app.querySelector('[data-move="-1"]');
const next = app.querySelector('[data-move="1"]');
const formatter = new Intl.NumberFormat(document.documentElement.lang);
const center = [180, 169];
const radius = 120;
let anchor = EXAMPLE;
let passage = 0;
let isExample = true;

function svg(tag, attributes, label) {
  const element = document.createElementNS(SVG_NS, tag);
  for (const [key, value] of Object.entries(attributes)) element.setAttribute(key, value);
  if (label) element.textContent = label;
  return element;
}

function pointAt(longitude, distance = radius) {
  const angle = (-90 - longitude) * Math.PI / 180;
  return [center[0] + distance * Math.cos(angle), center[1] + distance * Math.sin(angle)];
}

function pointFor(number) {
  return pointAt(passageLongitude(anchor, number) / ARCSECONDS_PER_DEGREE);
}

function circle([cx, cy], r, style) {
  return svg('circle', { cx, cy, r, class: style });
}

function line([x1, y1], [x2, y2], style) {
  return svg('line', { x1, y1, x2, y2, class: style });
}

function text([x, y], label, style) {
  return svg('text', { x, y, class: style }, label);
}

function formatPosition(longitude) {
  const { degree, minute, second, ordinal, sign: name } = zodiacPosition(longitude);
  const pad = value => String(value).padStart(2, '0');
  return {
    ordinal: ordinal + 'º ' + name,
    measured: degree + '°' + pad(minute) + '′' + pad(second) + '″ ' + name
  };
}

function loadAnchorFields(longitude) {
  const { degree, minute, second } = zodiacPosition(longitude);
  sign.value = String(Math.floor(longitude / (DEGREES_PER_SIGN * ARCSECONDS_PER_DEGREE)));
  degrees.value = degree;
  minutes.value = minute;
  seconds.value = second;
}

function drawFrame() {
  const marks = [circle(center, radius, 'wheel-rim'), circle(center, 137, 'wheel-rim')];
  for (let index = 0; index < 12; index++) {
    const boundary = index * DEGREES_PER_SIGN;
    const zodiac = zodiacPosition(boundary * ARCSECONDS_PER_DEGREE);
    marks.push(line(pointAt(boundary), pointAt(boundary, 137), 'wheel-rim'));
    marks.push(text(pointAt(boundary + 15, 151), zodiac.glyph + '\uFE0E', 'wheel-glyph'));
    sign.add(new Option(zodiac.sign, index));
  }
  wheelFrame.replaceChildren(...marks);
}

function draw() {
  const marks = [];
  const shown = Math.min(passage, CYCLE_LENGTH);
  const activeConnection = passage > 0 ? (passage - 1) % CYCLE_LENGTH + 1 : 0;
  for (let index = 1; index <= shown; index++) {
    if (index !== activeConnection) marks.push(line(pointFor(index - 1), pointFor(index), 'wheel-history'));
  }

  const currentPoint = pointFor(passage);
  if (activeConnection) marks.push(line(pointFor(passage - 1), currentPoint, 'wheel-latest'));
  if (passage === 1) {
    const start = anchor / ARCSECONDS_PER_DEGREE;
    const arcRadius = 93;
    marks.push(svg('path', {
      d: 'M ' + pointAt(start, arcRadius).join(' ') +
        ' A 93 93 0 0 0 ' + pointAt(start + STEP_DEGREES, arcRadius).join(' '),
      class: 'wheel-arc'
    }));
    marks.push(text(pointAt(start + STEP_DEGREES / 2, 73), STEP_DEGREES + '°', 'wheel-label'));
  }

  const currentLongitude = passageLongitude(anchor, passage);
  const atOrigin = currentLongitude === anchor;
  marks.push(circle(pointFor(0), atOrigin ? 8 : 5, 'wheel-origin'));
  marks.push(circle(currentPoint, atOrigin ? 4 : 4.5, 'wheel-current'));
  wheelPath.replaceChildren(...marks);

  const current = formatPosition(currentLongitude);
  const start = formatPosition(anchor);
  const arc = passage * STEP_DEGREES;
  const turnIndex = passage % CYCLE_LENGTH;
  const decemberExample = isExample && passage === 136;
  const sliderPosition = decemberExample ? turnIndex : shown;
  position.textContent = 'Passage ' + formatter.format(passage) + ' · ' + current.ordinal;
  measured.textContent = current.measured;
  natal.textContent = (isExample ? 'Example natal Sun' : 'Your natal Sun') + ' · ' + start.measured;
  const exampleDate = isExample && passage === 0 ? 'November 2, 1974' : '';
  detail.textContent = decemberExample ? '19 Dec 2026 · 12:42 p.m. Oaxaca' : exampleDate;
  detail.hidden = detail.textContent === '';
  december.hidden = !isExample;
  restore.hidden = isExample;
  progress.textContent = sliderPosition + ' / ' + CYCLE_LENGTH;
  total.textContent = formatter.format(arc) + '°';
  revolutions.textContent = formatter.format(Math.floor(arc / 360));
  cycle.textContent = turnIndex === 0 ? '0 · natal point' : turnIndex + ' of ' + CYCLE_LENGTH;
  wheelDescription.textContent = position.textContent + ' (' + current.measured + '). ' +
    natal.textContent + '. ' + shown + ' of ' + CYCLE_LENGTH + ' connections drawn.';
  if (!detail.hidden) wheelDescription.textContent += ' ' + detail.textContent + '.';
  slider.value = sliderPosition;
  slider.setAttribute('aria-valuetext', decemberExample
    ? '16, position of passage 136 within the repeating figure'
    : 'Passage ' + shown);
  for (const button of presets) {
    button.setAttribute('aria-pressed', String(Number(button.dataset.step) === passage));
  }
  passageInput.value = passage;
  previous.disabled = passage === 0;
  next.disabled = passage === MAX_PASSAGE;
}

function setPassage(number, announce = true) {
  passage = number;
  draw();
  if (announce) announcement.textContent = wheelDescription.textContent;
}

function revealResult() {
  if (window.matchMedia('(max-width: 720px)').matches) {
    position.focus({ preventScroll: true });
    position.scrollIntoView({ block: 'start', behavior: 'instant' });
  }
}

passageInput.max = MAX_PASSAGE;
slider.max = CYCLE_LENGTH;
drawFrame();
loadAnchorFields(anchor);
draw();

app.querySelector('[data-anchor-form]').addEventListener('submit', event => {
  event.preventDefault();
  anchor = (Number(sign.value) * DEGREES_PER_SIGN + degrees.valueAsNumber) * ARCSECONDS_PER_DEGREE +
    minutes.valueAsNumber * 60 + seconds.valueAsNumber;
  isExample = false;
  setPassage(0);
  revealResult();
});
restore.addEventListener('click', () => {
  anchor = EXAMPLE;
  isExample = true;
  loadAnchorFields(anchor);
  setPassage(0);
  app.querySelector('[data-step="0"]').focus({ preventScroll: true });
});
app.querySelector('[data-passage-form]').addEventListener('submit', event => {
  event.preventDefault();
  setPassage(passageInput.valueAsNumber);
  revealResult();
});
slider.addEventListener('input', () => setPassage(slider.valueAsNumber, false));
previous.addEventListener('click', () => setPassage(passage - 1));
next.addEventListener('click', () => setPassage(passage + 1));
for (const button of presets) {
  button.addEventListener('click', () => setPassage(Number(button.dataset.step)));
}
root.hidden = false;
document.querySelector('[href="#phoenix-visual-study"]').hidden = false;
