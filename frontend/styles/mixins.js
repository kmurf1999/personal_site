import { css } from 'styled-components';

export function darken(color, percent) {
  const num = parseInt(color.substr(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = ((num >> 8) & 0x00ff) - amt;
  const B = (num & 0x0000ff) - amt;
  const colString = (
    0x1000000
    + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000
    + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100
    + (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1);
  return `#${colString}`;
}

export function lighten(color, percent) {
  const num = parseInt(color.substr(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  const colString = (
    0x1000000
    + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000
    + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100
    + (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1);
  return `#${colString}`;
}

export const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px'
};

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

export const fontSize = px => `${px / 16}rem`;
export const toEm = px => `${px / 16}em`;

export function boxShadow(elevation) {
  return `
    box-shadow: 0 ${elevation}px ${3 * elevation}px rgba(0,0,0,${0.12
    * elevation}), 0 ${elevation}px ${2 * elevation}px rgba(0,0,0,${0.24 * elevation})
  `;
}

export function boxShadowTransition() {
  return `
    transition: all 0.3s cubic-bezier(.25,.8,.25,1)
  `;
}