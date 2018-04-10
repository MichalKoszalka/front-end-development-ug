var Rx = require('rxjs/Rx');

var myObservable = Rx.Observable.range(0,5)

.map(item => Rx.Observable.range(0, item))

.switchMap(item => item)

.subscribe({
    next: item => console.log(`Next ${item}`),
    error: ex => console.log(`Error ${ex}`),
    complete: () => console.log("Completed")
});