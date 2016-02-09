import * as pageSagas from "./page";
import * as pagesSagas from "./pages";
import * as pageContentSagas from "./pageContent";


function concatSagas(sagas, newSagas) {
    for (let saga in newSagas) {
        if (newSagas.hasOwnProperty(saga)) {
            sagas.push(newSagas[saga]);
        }
    }
}


const sagas = [];

concatSagas(sagas, pageSagas);
concatSagas(sagas, pagesSagas);
concatSagas(sagas, pageContentSagas);

export default sagas;
