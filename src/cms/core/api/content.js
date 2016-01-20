import API from "./index";


export function update(id, attributes) {
    return API.put(`/content/${id}`, { attributes });
}

export function remove(id) {
    // TODO: > Check this - it doesnt seem to work
    return API.delete(`/content/${id}`, { data: {}});
}
