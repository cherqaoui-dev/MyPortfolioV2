import {Link} from "gatsby"
import styled from "styled-components"
import { colors, fonts} from "../"

const StyledButton = styled(Link)`
  font-family: ${fonts.mono};
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