import store from './store';
import { bugAdded, bugRemoved } from './actions';

const unSubscribe = store.subscribe( () => {
    console.log(`Store changed: ${store.getState()}`);
});

//unSubscribe();

store.dispatch(bugAdded("Bug wont add."))

unSubscribe();

store.dispatch(bugRemoved(1))

console.log(store.getState());
 