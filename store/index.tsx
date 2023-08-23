import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import flightReducer from "./slices/flight";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const combinedReducer = combineReducers({
  flight: flightReducer,
});
const reducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const reducers = ["flight"];
    let nextState = {
      ...state,
    };
    reducers.map(
      (item) =>
        (nextState = {
          ...nextState,
          [item]: action.payload[item],
        })
    );
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
type Store = ReturnType<typeof makeStore>;
export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const reduxWrapper = createWrapper(makeStore, { debug: false });
