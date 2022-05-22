import Link from '@mui/material/Link';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

function Copyright(props: TypographyProps) {
  const { t } = useTranslation();
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {t('copyright-text')}
      {' '}
      <Link color="inherit" href={t('copyright-url')} target="_blank">
        {t('copyright-author')}
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

export default Copyright;
