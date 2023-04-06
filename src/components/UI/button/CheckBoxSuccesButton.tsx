import styled from '@emotion/styled';
import { Checkbox } from '@mui/material';
const StyledCheckBox = styled(Checkbox)({
  color: '#858FA4',
  '&.Mui-checked': {
    color: '#2FC509'
  }
});

export const CheckBoxSuccesButton = () => {
  return (
    <div>
      <StyledCheckBox />
    </div>
  );
};
