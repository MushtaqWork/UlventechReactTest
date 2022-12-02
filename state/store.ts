import { legacy_createStore as createStore, applyMiddleware } from "redux";

// Import thunk middleware
import thunk from "redux-thunk";

import reducers from "./reducers";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)