# Actions

Actions are facts/data that describes “what happened”, not what should happen.

Every action only describes what happened in the outside world (user wants to do this, server said that) and can be
consumed by any reducer.

The only way to change the state tree is to emit an action, an object describing what happened.

They are glued together with action creators (or sagas).
