import { TextareaAutosize, TextareaAutosizeProps } from '@mui/material'

type CustomTextFieldProps = TextareaAutosizeProps & {
  bold?: boolean
  italic?: boolean
  underline?: boolean
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ bold, italic, underline, ...props }) => (
  <TextareaAutosize
    style={{
      fontWeight: bold ? 'bold' : 'normal',
      fontStyle: italic ? 'italic' : '',
      textDecoration: underline ? 'underline' : ''
    }}
    {...props}
  />
)

export default CustomTextField
