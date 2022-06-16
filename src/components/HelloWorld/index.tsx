import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { AlertProps, Box, BoxProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

export interface HelloWorldProps {
  alert?: AlertProps,
  box?: BoxProps
}

function HelloWorld({ alert, box } : HelloWorldProps) {
  const { t } = useTranslation();
  const boxProps = { ...HelloWorld.defaultProps.box, ...box } as BoxProps;
  const alertProps = { ...HelloWorld.defaultProps.alert, ...alert } as AlertProps;
  return (
    <Box {...boxProps}>
      <Alert {...alertProps}>
        <AlertTitle>{t('hello-world')}</AlertTitle>
        <div>{process.env.REACT_APP_PACKAGE_NAME}</div>
        <div>{process.env.REACT_APP_PACKAGE_VERSION}</div>
        <div>{process.env.REACT_APP_ENV}</div>
      </Alert>
    </Box>
  );
}

HelloWorld.defaultProps = {
  alert: {
    severity: 'success',
    sx: { width: 300 },
    variant: 'filled',
  },
  box: {},
};

export default HelloWorld;
