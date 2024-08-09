import {useEffect} from 'react';
import { createConnection } from './chat.js';


export default function useChatRoom({serverUrl, roomId}) {
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [serverUrl, roomId]);
}