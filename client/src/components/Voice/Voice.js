import annyang from "annyang";

class Annyang {
    isSupported() {
        return annyang !== null;
    }

    start() {
        if (annyang) {
            annyang.start();
        }
    }

    abort() {
        if (annyang) {
            annyang.abort();
        }
    }

    resume() {
        if (annyang) {
            annyang.resume();
        }
    }

    addCommands(addStats, removeStats) {
        if(annyang) {
            annyang.addCommands({
                ':player add :number to :stat': () => addStats(),
                ':player remove :number from :stat': () => removeStats(),
            });
        }
    }

    addCallback(engineCallback, resultCallback) {
        if (annyang) {
            annyang.addCallback('start', event => engineCallback('on'));
            annyang.addCallback('soundstart', event => engineCallback('listening'));
            annyang.addCallback('end', event => engineCallback('off'));
            annyang.addCallback('error', event => engineCallback(event.error));
            annyang.addCallback('errorNetwork', event => engineCallback('network error'));
            annyang.addCallback('errorPermissionBlocked', event => engineCallback('permission blocked'));
            annyang.addCallback('errorPermissionDenied', event => engineCallback('permission denied'));
            annyang.addCallback('result', event => resultCallback(event));
        }
    }
}

export default new Annyang();