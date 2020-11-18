import {Link} from "gatsby"
import styled from "styled-components"
import { colors, fonts, fontSizes} from "../"

const StyledButton = styled(Link)`
  font-family: ${fonts.mono};
  font-size: ${fontSizes.sm};
  color: ${colors.green};
  border-radius: 4px;
  border: 1px solid ${colors.green};
  background: transparent;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    background: ${colors.lightGreen};
  }
`

export default StyledButton