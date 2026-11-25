import assert from 'node:assert/strict';
import { test } from 'node:test';
import { CYCLE_LENGTH, STEP_DEGREES, passageLongitude, zodiacPosition } from '../The-Living-Year/phoenix/geometry.mjs';

const arcseconds = (degrees, minutes = 0, seconds = 0) => degrees * 3600 + minutes * 60 + seconds;

test('the chart-based worked example preserves the anchor and the first and December passages', () => {
  const anchor = arcseconds(219, 52, 26);
  assert.equal(passageLongitude(anchor, 0), anchor);
  assert.equal(passageLongitude(anchor, 1), arcseconds(357, 52, 26));
  assert.deepEqual(zodiacPosition(passageLongitude(anchor, 136)), {
    sign: 'Sagittarius', glyph: '♐', ordinal: 28, degree: 27, minute: 52, second: 26
  });
});

test('sixty distinct positions close the figure after twenty-three revolutions', () => {
  const anchor = arcseconds(17);
  const points = Array.from({ length: CYCLE_LENGTH }, (_, index) => passageLongitude(anchor, index));
  assert.equal(new Set(points).size, 60);
  assert.equal(CYCLE_LENGTH * STEP_DEGREES, 23 * 360);
  assert.equal(passageLongitude(anchor, CYCLE_LENGTH), anchor);
  assert.equal(passageLongitude(anchor, 136), passageLongitude(anchor, 16));
  assert.equal(passageLongitude(anchor, Number.MAX_SAFE_INTEGER),
    passageLongitude(anchor, Number.MAX_SAFE_INTEGER % CYCLE_LENGTH));
});

test('longitudes wrap and ordinal degrees restart at sign boundaries', () => {
  assert.equal(passageLongitude(arcseconds(222), 1), 0);
  assert.equal(zodiacPosition(arcseconds(30) - 1).ordinal, 30);
  assert.deepEqual(zodiacPosition(arcseconds(30)), {
    sign: 'Taurus', glyph: '♉', ordinal: 1, degree: 0, minute: 0, second: 0
  });
});

test('invalid coordinates and passage numbers fail explicitly', () => {
  for (const longitude of [-1, 0.5, arcseconds(360), NaN]) {
    assert.throws(() => passageLongitude(longitude, 0), RangeError);
    assert.throws(() => zodiacPosition(longitude), RangeError);
  }
  for (const passage of [-1, 0.5, Number.MAX_SAFE_INTEGER + 1, NaN]) {
    assert.throws(() => passageLongitude(0, passage), RangeError);
  }
});
