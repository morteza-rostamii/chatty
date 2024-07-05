import { SOCKET_URL } from "@/configs/config";
import { useAuthStore } from "@/features/auth";
import { Header } from "@/features/dashboard"
import { usePanelStore } from "@/features/dashboard/stores/panelStore";
import { useEffect } from "react";
import { Outlet } from "react-router"
import io from 'socket.io-client'

export const DashboardLayout = () => {
  const {authUser}:any = useAuthStore();
  const {setNotificationAct} = usePanelStore();

  // setup socket.io
  useEffect(() => {
    const userId = authUser?._id; 

    if (!userId) return;

    console.log(userId)
    const socket = io(SOCKET_URL, {
      query: {userId},
    });

    if (!userId) return () => socket.disconnect();

    // connection event
    socket.on('connect', () => {
      if (userId) {
        socket.emit('joinNotificationRoom', userId);
      }
    })

    // receive new notification.
    socket.on('newNotification', (data:any) => {
      console.log('*** NEW NOTE', data);
      setNotificationAct(data.results);
    })

    return () => {
      socket.disconnect();
    }
  }, []);

  return (
    <main className="#flex flex-col min-h-[100vh]">
    <Header/>
    <Outlet/>
    </main>
  )
}
