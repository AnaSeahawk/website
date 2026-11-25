const ARCSECONDS_PER_DEGREE = 3600;
const SIGN_ARCSECONDS = 30 * ARCSECONDS_PER_DEGREE;
const TURN_ARCSECONDS = 360 * ARCSECONDS_PER_DEGREE;
const SIGNS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const GLYPHS = Array.from('♈♉♊♋♌♍♎♏♐♑♒♓');

export const STEP_DEGREES = 138;
export const CYCLE_LENGTH = 60;

function validateLongitude(longitude) {
  if (!Number.isInteger(longitude) || longitude < 0 || longitude >= TURN_ARCSECONDS) {
    throw new RangeError('Longitude must be an integer number of arcseconds within one turn.');
  }
}

// The longitude repeats after sixty passages. The passage number and transit time do not.
export function passageLongitude(anchor, passage) {
  validateLongitude(anchor);
  if (!Number.isSafeInteger(passage) || passage < 0) {
    throw new RangeError('Passage must be a nonnegative safe integer.');
  }
  const arc = (passage % CYCLE_LENGTH) * STEP_DEGREES * ARCSECONDS_PER_DEGREE;
  return (anchor + arc) % TURN_ARCSECONDS;
}

export function zodiacPosition(longitude) {
  validateLongitude(longitude);
  const signIndex = Math.floor(longitude / SIGN_ARCSECONDS);
  const withinSign = longitude % SIGN_ARCSECONDS;
  const degree = Math.floor(withinSign / ARCSECONDS_PER_DEGREE);
  const minute = Math.floor((withinSign % ARCSECONDS_PER_DEGREE) / 60);
  return {
    sign: SIGNS[signIndex],
    glyph: GLYPHS[signIndex],
    ordinal: degree + 1,
    degree,
    minute,
    second: withinSign % 60
  };
}
