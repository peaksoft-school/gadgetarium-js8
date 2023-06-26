import { styled, keyframes } from '@mui/material/styles'
import { ReactComponent as Logo } from '../../../assets/icons/loading/loading.svg'
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const StyledLogo = styled(Logo)`
  width: 4.125rem;
  height: 4.125rem;
  position: absolute;
  top: 45%;
  right: 50%;
  animation: ${rotateAnimation} 1s infinite linear;
  background-color: #cb11ab;
  padding: 0.375rem;
  border-radius: 100%;
`

const Loading = () => {
  return <StyledLogo />
}
export default Loading
