export default function debug(state) {
    for (let stateName in state) {
        if (state.hasOwnProperty(stateName)) {
            console.debug(`STATE: ${stateName}`, state[stateName].toJS());
        }
    }
}
