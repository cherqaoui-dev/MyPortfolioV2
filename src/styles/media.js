import { css } from 'styled-components'
const sizes = {
  tabletL: 1200,
  tablet: 992,
  phoneL: 768,
  phone: 480,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
        ${css(...args)};
    }
  `
  return acc;
}, {})