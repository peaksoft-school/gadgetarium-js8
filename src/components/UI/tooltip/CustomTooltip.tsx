import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { Tooltip } from '@mui/material'
import { withStyles } from '@mui/styles'
const CustomTooltipStyled = withStyles(() => ({
  tooltip: {
    backgroundColor: '#202027',
    fontSize: '14px',
    '& .MuiTooltip-arrow': {
      color: '#202027' /* Replace with your desired arrow color */
    }
  }
}))(Tooltip)
export const CustomTooltip = ({
  title,
  children
}: {
  title: string
  children: ReactJSXElement
}) => {
  return (
    <>
      <CustomTooltipStyled title={title} arrow placement="top">
        {children}
      </CustomTooltipStyled>
    </>
  )
}
