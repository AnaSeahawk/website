import { STEP_DEGREES, passageLongitude, zodiacPosition } from './geometry.mjs';
(() => {
  const root = document.getElementById('phoenix-visual-study');
  const wheel = root.querySelector('[data-wheel]');
  const figure = root.querySelector('[data-figure]');
  const position = root.querySelector('[data-position]');
  const detail = root.querySelector('[data-detail]');
  const desc = root.querySelector('#phoenix-wheel-desc');
  const slider = root.querySelector('#phoenix-study-step');
  const stops = Array.from(root.querySelectorAll('[data-step]'));
  const anchor = 791546;
  const stepDegrees = STEP_DEGREES;
  const center = [180, 175];
  const radius = 125;
  const longitude = passage => passageLongitude(anchor, passage) / 3600;
  const xy = (degrees, distance = radius) => {
    const angle = (-90 - degrees) * Math.PI / 180;
    return [center[0] + distance * Math.cos(angle), center[1] + distance * Math.sin(angle)];
  };
  const line = (from, to, style) =>
    '<line class="' + style + '" x1="' + from[0] + '" y1="' + from[1] +
    '" x2="' + to[0] + '" y2="' + to[1] + '"/>';
  const dot = (point, size, style) =>
    '<circle class="' + style + '" cx="' + point[0] + '" cy="' + point[1] + '" r="' + size + '"/>';
  const textAt = (point, label, style = 'study-label') =>
    '<text class="' + style + '" x="' + point[0] + '" y="' + point[1] + '">' + label + '</text>';
  const order = passage => {
    const position = zodiacPosition(passageLongitude(anchor, passage));
    return position.ordinal + 'º ' + position.sign;
  };
  const frame = [dot(center, radius, 'study-axis'), dot(center, 144, 'study-axis')];

  for (let index = 0; index < 12; index++) {
    frame.push(line(xy(index * 30), xy(index * 30, 144), 'study-axis'));
    const { glyph } = zodiacPosition(index * 30 * 3600);
    frame.push(textAt(xy(index * 30 + 15, 158), glyph + '\uFE0E', 'study-label study-glyph'));
  }
  wheel.innerHTML = frame.join('');

  function draw(passage) {
    const marks = [];
    const firstPoint = xy(longitude(0));
    const currentDegrees = longitude(passage);
    const currentPoint = xy(currentDegrees);
    const lastIsEvent = passage === 136;
    const history = lastIsEvent ? 60 : Math.max(0, passage - 1);
    for (let index = 1; index <= history; index++) {
      marks.push(line(xy(longitude(index - 1)), xy(longitude(index)), 'study-history'));
    }
    if (passage > 0) {
      const previousDegrees = longitude(passage - 1);
      const previousPoint = xy(previousDegrees);
      marks.push(line(previousPoint, currentPoint, 'study-current'));
      if (passage === 1) {
        const arcRadius = 93;
        const start = xy(previousDegrees, arcRadius);
        const end = xy(currentDegrees, arcRadius);
        marks.push(line(center, previousPoint, 'study-axis'));
        marks.push(line(center, currentPoint, 'study-axis'));
        marks.push('<path class="study-current" d="M ' + start.join(' ') +
          ' A 93 93 0 0 0 ' + end.join(' ') + '"/>');
        marks.push(textAt(xy(previousDegrees + stepDegrees / 2, 71), '138°'));
      }
      marks.push(dot(currentPoint, 4.5, 'study-point'));
    }
    marks.push(dot(firstPoint, passage === 60 ? 6 : 4, 'study-origin'));
    figure.innerHTML = marks.join('');

    position.textContent = (passage === 0 ? 'Natal Sun' : 'Passage ' + passage) + ' · ' + order(passage);
    if (lastIsEvent) {
      detail.textContent = '19 Dec 2026 · 12:42 p.m. Oaxaca';
    } else if (passage === 60) {
      detail.textContent = 'Returns to the natal longitude · 23 solar revolutions';
    } else if (passage > 0) {
      detail.textContent = '138° along the zodiac from ' + order(passage - 1);
    } else {
      detail.textContent = 'Starting longitude';
    }
    desc.textContent = position.textContent + '. ' + detail.textContent + '.';
    slider.value = lastIsEvent ? 16 : passage;
    slider.setAttribute('aria-valuetext', lastIsEvent ? '16, position of passage 136 within the repeating figure' : 'Passage ' + passage);
    for (const stop of stops) {
      stop.setAttribute('aria-pressed', String(Number(stop.dataset.step) === passage));
    }
  }

  for (const stop of stops) {
    stop.addEventListener('click', () => draw(Number(stop.dataset.step)));
  }
  slider.addEventListener('input', () => draw(Number(slider.value)));
  draw(1);
  root.hidden = false;
  document.querySelector('[href="#phoenix-visual-study"]').hidden = false;
})();
