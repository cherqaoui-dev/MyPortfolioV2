import {Link} from "gatsby"
import styled from "styled-components"
import { colors, fontSizes, fonts} from "../"
const StyledButton = styled(Link)`
  padding: 10px;
  font-family: ${fonts.mono};
  font-size: ${fontSizes.xs};
  color: ${colors.green};
  border-radius: 4px;
  border: 1px solid ${colors.green};
  background: transparent;
  text-transform: capitalize;

  &:hover {
    background: ${colors.lightGreen};
  }
`

export default StyledButton