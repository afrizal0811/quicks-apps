import styled from 'styled-components'
import Image from '../image/Image'

export const StyledIcon = styled(Image)`
  ${({ isSelected }) => !isSelected && `filter: brightness(0) saturate(100%);`};
`
