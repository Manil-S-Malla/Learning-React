import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

const unSubscribe = store.subscribe( () => {
    console.log(`Store changed: ${store.getState()}`);
});

//unSubscribe();

store.dispatch(bugAdded("Bug wont add."))

store.dispatch(bugResolved(1))

unSubscribe();

store.dispatch(bugRemoved(1))

console.log(store.getState());
 