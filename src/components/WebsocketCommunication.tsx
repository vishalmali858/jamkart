import React, { createContext } from 'react'
import io from 'socket.io-client';

const WebSocketContext = createContext(null)

export { WebSocketContext }

interface Iprops {
    children: any;
}
export default function WebSocketProvider(props: Iprops) {
    const { children } = props;
    let socket: any;
    let ws: any;

    if (!socket) {
        socket = io("https://test.ejam.com/", {
            transports: ["websocket"]
        })

        socket.addEventListener('UPDATE_VIEWERS', function (event: any) {
            console.log("update no of viewers", event);
        });

        socket.on("connect", () => {
            console.log(socket.id);
            let objToSend = {
                applicantAuth: "cV874bxX9TmbBp2H8vsZkFaZ"
            };
            socket.send(JSON.stringify(objToSend));
        });

        ws = {
            socket
        }
    }

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}