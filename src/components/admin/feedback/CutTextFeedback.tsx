interface Props {
  text: string
}

const CutTextFeedback = ({ text }: Props) => {
  if (text.length <= 120) {
    return <span>{text}</span>
  }

  const truncatedText = `${text.slice(0, 120)}...`

  return <span title={text}>{truncatedText}</span>
}
export default CutTextFeedback
