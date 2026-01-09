import { Server, Socket } from 'socket.io';

interface ConnectedUser {
    odckerId: string;
    erId: string;
    role: string;
}

const connectedUsers = new Map<string, ConnectedUser>();

export const initializeSocket = (io: Server) => {
    io.on('connection', (socket: Socket) => {
        console.log(`📡 Client connected: ${socket.id}`);

        // User authentication
        socket.on('authenticate', (data: { userId: string; role: string }) => {
            connectedUsers.set(socket.id, {
                odckerId: socket.id,
                erId: data.userId,
                role: data.role
            });
            socket.join(`user:${data.userId}`);
            console.log(`✅ User ${data.userId} authenticated`);
        });

        // Join conversation room
        socket.on('join:conversation', (conversationId: string) => {
            socket.join(`conversation:${conversationId}`);
            console.log(`📥 Socket ${socket.id} joined conversation ${conversationId}`);
        });

        // Leave conversation room
        socket.on('leave:conversation', (conversationId: string) => {
            socket.leave(`conversation:${conversationId}`);
        });

        // Send message
        socket.on('message:send', (data: { conversationId: string; message: any }) => {
            io.to(`conversation:${data.conversationId}`).emit('message:new', data.message);
        });

        // Typing indicator
        socket.on('typing:start', (data: { conversationId: string; userId: string }) => {
            socket.to(`conversation:${data.conversationId}`).emit('typing:start', { userId: data.userId });
        });

        socket.on('typing:stop', (data: { conversationId: string; userId: string }) => {
            socket.to(`conversation:${data.conversationId}`).emit('typing:stop', { userId: data.userId });
        });

        // Disconnect
        socket.on('disconnect', () => {
            connectedUsers.delete(socket.id);
            console.log(`📴 Client disconnected: ${socket.id}`);
        });
    });
};

// Helper function to send notification to specific user
export const sendNotificationToUser = (io: Server, userId: string, notification: any) => {
    io.to(`user:${userId}`).emit('notification:new', notification);
};
