import API from "../core/api"
import T from "../constants/ACTION_TYPES";

export function responseReceived(type, id, response) {
    return {
        type, id, response,
        receivedAt: Date.now()
    };
}
