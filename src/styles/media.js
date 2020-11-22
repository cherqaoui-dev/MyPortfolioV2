import { css } from 'styled-components'
const sizes = {
  tabletL: 1199,
  tablet: 991,
  phoneL: 767,
  phone: 479,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
        ${css(...args)};
    }
  `
  return acc;
}, {})