import { Link } from "gatsby"
import styled from "styled-components"
import { colors, fonts } from "../"

const StyledLink = styled(Link)`
  font-family: ${fonts.mono};
  color: ${colors.lightSlate};
  &:hover {
    color: ${colors.green};
  } 
`

export default StyledLink