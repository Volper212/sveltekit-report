import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 8080 });

// Added after @bluwy's comment, still crashes
if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
        server.close();
    });
}