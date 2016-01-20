export default function debug(state) {
    let message = "STATE:\n";
    let states = [];

    for (let stateName in state) {
        if (state.hasOwnProperty(stateName)) {
            message += `    ${stateName}: %o\n`;
            states.push(state[stateName].toJS());
        }
    }

    states.unshift(message);

    console.debug.apply(console, states);
}
