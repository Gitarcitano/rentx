import React, { memo } from 'react';
import { View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

import { SafeAreaProps } from './interface';

/**
 * This custom SafeAreaView is being added with useSafeAreaInsets because it solves perfomance
 * problems with screens that have animation and too much loading, which generate jumpty toolbar during
 * the first render of the screen as can be seen/reported in the issues below
 * Issues related:
 * https://github.com/th3rdwave/react-native-safe-area-context/issues/114
 * https://github.com/th3rdwave/react-native-safe-area-context/issues/104
 * https://github.com/th3rdwave/react-native-safe-area-context/issues/82
 * https://github.com/th3rdwave/react-native-safe-area-context/issues/107
 * Check version 3.0.0 of this lib if they have solved this problem
 * Observations:
 * SafeAreaView from react-native-safe-area-view was not used because it does not solve this
 * problem and will be deprecated in the future in replace of `react-native-safe-area-context`:
 *   https://github.com/react-navigation/react-native-safe-area-view/issues/124
 * SafeAreaView from react-native was not used because of performance issues with the
 * react-navigation related in the link below and have the same jumpy problem on some devices:
 *   https://reactnavigation.org/docs/handling-safe-area/
 */

export const SafeArea: React.FunctionComponent<SafeAreaProps> = memo(
  ({ children, style = {}, removePaddingBottom = false, paddingTop }) => {
    const { top, left, right, bottom } = useSafeAreaInsets();
    const { colors } = useTheme();

    return (
      <View
        {...style}
        style={{
          flex: 1,
          backgroundColor: style.backgroundColor || colors.background_primary,
          paddingTop: paddingTop || top,
          paddingLeft: left,
          paddingRight: right,
          paddingBottom: removePaddingBottom ? 0 : bottom,
          // Do not add padding bottom, because react navigation already adds it
          // and in some iOS devices it adds additional 10px
          // https://github.com/th3rdwave/react-native-safe-area-context/issues/107
        }}
      >
        {children}
      </View>
    );
  },
);
