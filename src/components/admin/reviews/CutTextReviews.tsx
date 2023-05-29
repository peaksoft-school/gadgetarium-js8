import { Typography } from '@mui/material'
import { styled } from '@mui/material'
interface Props {
  text: string
  open: boolean
  images: string[]
  answer: string | null
  date: string | null
}
const DateStyled = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: '.75rem',
  lineHeight: '140%',
  color: '#00000080',
  marginBottom: '.75rem'
}))
const ContainerImage = styled('div')(() => ({
  display: 'flex',
  gap: '.625rem'
}))
const StyledImage = styled('img')(() => ({
  height: '5rem',
  display: 'grid',
  gridTemplateColumns: '4.375rem 4.375rem 4.375rem 4.375rem 4.375rem',
  gap: '.75rem'
}))
const Container = styled('div')(() => ({
  paddingRight: '1.375rem'
}))
const Span = styled('span')(({ answer }: { answer: string | null }) => ({
  fontWeight: answer === null || answer === '' ? 700 : 400
}))
const CutTextReviews = ({ text, open, images, answer, date }: Props) => {
  if (text.length <= 1) {
    return <span>{text}</span>
  }
  const currenText = () => {
    if (text.length <= 120) {
      return `${text.slice(0, 120)}`
    } else {
      return `${text.slice(0, 120)}...`
    }
  }

  if (open) {
    return (
      <Container>
        <Span title={text} answer={answer}>
          {text}
        </Span>
        <DateStyled>{date}</DateStyled>
        <ContainerImage>
          {images?.map((image, index) => (
            <StyledImage key={index} src={image} />
          ))}
        </ContainerImage>
      </Container>
    )
  } else {
    return (
      <Container>
        <Span title={text} answer={answer}>
          {currenText()}
        </Span>
        <DateStyled>{date}</DateStyled>
      </Container>
    )
  }
}
export default CutTextReviews
