import { ViewProps, ViewStyle } from 'react-native';

export interface SafeAreaProps extends ViewProps {
  style?: ViewStyle;
  removePaddingBottom?: boolean;
  paddingTop?: number;
}
