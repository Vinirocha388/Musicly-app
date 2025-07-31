import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Drawer 
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#000',
          opacity: 0.7,
          width: '80%',

        },
        drawerActiveBackgroundColor: '#f4f4f4',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
      }}>

      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Início',
          title: 'Home',
          headerShown: false,
          headerLeft: false,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}