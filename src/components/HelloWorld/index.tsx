/**
 * The HelloWorld component renders an alert with
 * the package name, version and environment.
 */

// External imports
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import { AlertProps, BoxProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Local imports
import styles from './index.module.scss';

// Component props
export interface HelloWorldProps {
  /**
   * The alert message styles.
   * See: https://mui.com/material-ui/api/alert
   */
  alert?: AlertProps,
  /**
   * The box container styles.
   * See: https://mui.com/material-ui/api/box
   */
  box?: BoxProps,
}

// Component definition
function HelloWorld({ alert, box } : HelloWorldProps) {
  const { t } = useTranslation();

  const defaults = HelloWorld.defaultProps;
  const boxProps = { ...defaults.box, ...box } as BoxProps;
  const alertProps = { ...defaults.alert, ...alert } as AlertProps;

  const name = process.env.REACT_APP_PACKAGE_NAME;
  const version = process.env.REACT_APP_PACKAGE_VERSION;
  const env = process.env.REACT_APP_ENV;

  return (
    <Box {...boxProps}>
      <Alert {...alertProps}>
        <AlertTitle>{t('hello-world')}</AlertTitle>
        <div className={styles.info}>{name}</div>
        <div className={styles.info}>{version}</div>
        <div className={styles.info}>{env}</div>
      </Alert>
    </Box>
  );
}

// Default props
HelloWorld.defaultProps = {
  alert: {
    severity: 'success',
    sx: { width: 300 },
    variant: 'filled',
  },
  box: {},
};

// Default export
export default HelloWorld;
