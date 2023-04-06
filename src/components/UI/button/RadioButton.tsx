import { styled } from '@mui/material';
import Radio from '@mui/material/Radio';

const StyledRadio = styled(Radio)({
  '&:hover': {
    color: '#CB11AB'
  },
  '&.Mui-checked': {
    color: '#CB11AB'
  },
  color: '#858FA4'
});
export const RadioButton = () => {
  return (
    <>
      <StyledRadio />
    </>
  );
};
