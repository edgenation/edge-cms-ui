import reducers from "./reducers";
import makeStore from "./core/store";
import actors from "./actors";
import { navigationComplete } from "./actions/navigation";

export default function CMS() {
    const store = makeStore(reducers);

    // Handle changes to our store with a list of actor functions, but ensure
    // that the actor sequence cannot be started by a dispatch from an actor
    let acting = false;
    store.subscribe(function () {
        if (!acting) {
            acting = true;

            for (let actor of actors) {
                actor(store.getState(), store.dispatch);
            }

            acting = false;
        }
    });

    function onHashChange() {
        store.dispatch(navigationComplete());
    }

    // Handle browser navigation events
    window.addEventListener("hashchange", onHashChange, false);

    // Trigger initial render
    onHashChange();
}
