import { useEffect } from "react";
import "./App.css";
import PostContainer from "./components/PostContainer";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";

import { userSlice } from "./store/reducers/UserSlice";

function App() {
    const dispatch = useAppDispatch();
    const { users, error, isLoading } = useAppSelector((state) => state.UserReducer);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    return (
        <div className='App'>
            <PostContainer />
            {/* <hr />
            {isLoading && <h1> Идет загрузка....</h1>}
            {error && <h1> {error}</h1>}
            {JSON.stringify(users, null, 2)} */}
        </div>
    );
}

export default App;
