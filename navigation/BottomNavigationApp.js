import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import { Text, TouchableOpacity, View } from 'react-native';
import { HomeIcon, MagnifyingGlassIcon } from 'react-native-heroicons/mini';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  const tabIcons = {
    HomeScreen: HomeIcon,
    SearchScreen: MagnifyingGlassIcon,
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: '9%', alignItems: 'center', backgroundColor: 'black',shadowColor:'#0e0e0e',shadowOffset:{height:-1,width:1},shadowOpacity:1,shadowRadius:10}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const TabIcon = tabIcons[route.name];

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1, borderWidth: 1, alignItems: 'center' }}
          >
            <TabIcon size={30} color={isFocused ? 'red' : '#222'} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
