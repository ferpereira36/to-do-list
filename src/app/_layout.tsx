import '../../global.css'
import 'react-native-reanimated'

import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { PortalHost } from '@rn-primitives/portal'
import { Providers } from '@/providers'

export { ErrorBoundary } from 'expo-router'

export const unstableSettings = {
  initialRouteName: 'index',
}

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Providers>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="adicionar-tarefa" />
        </Stack>
        <PortalHost />
      </Providers>
    </SafeAreaView>
  )
}
