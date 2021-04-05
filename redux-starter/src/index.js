import store from './store';

const unSubscribe = store.subscribe( () => {
    console.log(`Store changed: ${store.getState()}`);
});

//unSubscribe();

store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug wont add.",
    }
})

unSubscribe();

store.dispatch({
    type: "bugRemoved",
    payload: {
        id: 1,
    }
})

console.log(store.getState());
 