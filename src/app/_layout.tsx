import '../../global.css'
import 'react-native-reanimated'

import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { PortalHost } from '@rn-primitives/portal'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Providers } from '@/providers'

export { ErrorBoundary } from 'expo-router'

export const unstableSettings = {
  initialRouteName: 'index',
}

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    //
  })

  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <SafeAreaView className="flex-1">
      <Providers>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="adicionar-tarefa" />
        </Stack>
        <PortalHost />
      </Providers>
    </SafeAreaView>
  )
}
