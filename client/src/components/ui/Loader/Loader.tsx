import { FC, FunctionComponent } from 'react';

import { ReactComponent as RoundLoading } from '../../../assets/round-loading.svg';

interface LoaderProps {
  size?: number;
}

export const Loader: FC<LoaderProps> = ({ size = 40 }) => {
  return <RoundLoading width={size} height={size} stroke="#2563eb" />;
};
