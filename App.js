import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BuilderScreen from './screens/BuilderScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import HomeScreen from './screens/HomeScreen';
import SetupDetailsScreen from './screens/SetupDetailsScreen';
import { colors } from './theme/colors';

const Stack = createNativeStackNavigator();

const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.destaque,
    background: colors.fundo,
    card: colors.fundo,
    text: colors.textoPrincipal,
    border: colors.borda,
  },
};

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (setupId) => {
    setFavorites((previous) =>
      previous.includes(setupId)
        ? previous.filter((id) => id !== setupId)
        : [...previous, setupId]
    );
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: colors.fundo },
            headerTintColor: colors.textoPrincipal,
            headerTitleStyle: { fontWeight: '700' },
            headerShadowVisible: false,
            contentStyle: { backgroundColor: colors.fundo },
          }}
        >
          <Stack.Screen name="Home" options={{ title: 'SetupCraft', headerShown: false }}>
            {(props) => (
              <HomeScreen {...props} favorites={favorites} onToggleFavorite={toggleFavorite} />
            )}
          </Stack.Screen>
          <Stack.Screen name="SetupDetails" options={{ title: 'Detalhes do setup' }}>
            {(props) => (
              <SetupDetailsScreen {...props} favorites={favorites} onToggleFavorite={toggleFavorite} />
            )}
          </Stack.Screen>
          <Stack.Screen name="Favorites" options={{ title: 'Meus favoritos' }}>
            {(props) => (
              <FavoritesScreen {...props} favorites={favorites} onToggleFavorite={toggleFavorite} />
            )}
          </Stack.Screen>
          <Stack.Screen name="Builder" component={BuilderScreen} options={{ title: 'Montador de PC' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
