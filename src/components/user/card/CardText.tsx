import { styled } from '@mui/material'
interface Props {
  text: string
}
const StyledTitle = styled('span')(() => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '22px',
  textTransform: 'capitalize',
  color: '#292929'
}))

const TextWithEllipsis = ({ text }: Props) => {
  if (text.length <= 45) {
    return <span>{text}</span>
  }

  const truncatedText = `${text.slice(0, 45)}...`

  return <StyledTitle title={text}>{truncatedText}</StyledTitle>
}
export default TextWithEllipsis
