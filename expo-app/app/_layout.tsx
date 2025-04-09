import "@/global.css";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from "expo-status-bar";
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const MainLayout = () => {
  const [fontsLoaded] = useFonts({
    "dm-sans-regular": DMSans_400Regular,
    "dm-sans-medium": DMSans_500Medium,
    "dm-sans-bold": DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
      <StatusBar translucent/>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" redirect={true} />
        <Stack.Screen name="GroupPlan" />
        <Stack.Screen name="AdminsScreen" />
        <Stack.Screen name="SettingsScreen" />
        <Stack.Screen name="ContactUsScreen" />
        <Stack.Screen name="SubscriptionsScreen" />
        <Stack.Screen name="UsageScreen" />
      </Stack>
    </GluestackUIProvider>
  );
};

export default function RootLayout() {
  return <MainLayout />;
}
