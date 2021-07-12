import { RectButtonProps } from 'react-native-gesture-handler';

export interface ButtonProps {
  title: string;
  color?: string;
}

export interface ContainerProps extends RectButtonProps {
  color: string;
}
