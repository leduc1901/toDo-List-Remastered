import React from 'react';
import {Provider} from 'react-redux';
import Title from './components/Title';
import List from './components/List';
import Button from "./components/Button";
import allReducers from "./reducers"
import "./App.css"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import { PersistGate } from 'redux-persist/es/integration/react';
import {createStore} from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: [                    
  //   'accountReducer'
  // ],
  blacklist: [
    // 'late'
  ]
}

const persistedReducer = persistReducer(persistConfig, allReducers)

let store = createStore(persistedReducer);
let persistor = persistStore(store)

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="container" >
            <Title/>
            <List/>
            <Button/>
        </div>
      </PersistGate>
      
    </Provider>
  )
}

export default App;
