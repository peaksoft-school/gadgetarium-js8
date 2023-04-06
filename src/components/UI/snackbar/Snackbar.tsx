import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import { ReactComponent as SnackbarIcon } from '../../../assets/icons/SnackbarIcon.svg';
import { styled } from '@mui/material';

const StyledButton = styled(Button)({
  color: '#3CDE14',
  fontWeight: 700
});

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginRight: '1.65rem'
});

const StyledSnackbarIcon = styled(SnackbarIcon)({
  width: '0.75rem',
  height: '0.75rem',
  marginLeft: '2rem'
});
const StyledSnackbarContent = styled(SnackbarContent)({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  color: '#FFFFFF',
  fontSize: '1.125rem',
  lineHeight: '140%',
  fontWeight: '400',
  backgroundColor: '#202027',
  width: '100%'
});

const Action = ({ btnChildren, onClose }: Props) => {
  return (
    <Container>
      <StyledButton>{btnChildren}</StyledButton>
      <StyledSnackbarIcon onClick={onClose} />
    </Container>
  );
};

interface Props {
  message?: string;
  btnChildren: string;
  onClose: () => void;
}
const LongTextSnackbar = ({ message, btnChildren, onClose }: Props) => {
  return (
    <Stack sx={{ maxWidth: 600, height: 65 }}>
      <StyledSnackbarContent
        message={message}
        action={<Action btnChildren={btnChildren} onClose={onClose} />}
      />
    </Stack>
  );
};

export default LongTextSnackbar;
