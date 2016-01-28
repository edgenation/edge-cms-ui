export function responseReceived(type, id, response) {
    return {
        type, id, response,
        receivedAt: Date.now()
    };
}
