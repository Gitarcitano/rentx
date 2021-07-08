import React from 'react';

import { SvgProps } from 'react-native-svg';

export interface AccessoryProps {
  name: string;
  Icon: React.FC<SvgProps>;
}
