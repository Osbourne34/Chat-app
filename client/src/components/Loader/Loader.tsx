import { FC } from 'react';

import { ReactComponent as RoundLoading } from '../../assets/round-loading.svg';

export const Loader: FC = () => {
  return <RoundLoading width="100" height="100" stroke="#2563eb" />;
};
