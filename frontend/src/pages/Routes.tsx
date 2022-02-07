import {
    BrowserRouter,
    Routes as ReactRoutes,
    Route
} from "react-router-dom";
import App from '../App';
import NewUserPage from './users/NewUserPage';
import UserDetailPage from './users/UserDetailPage';
import UsersPage from './users/UsersPage';

export default function Routes() {
    return (
        <>
            <BrowserRouter>
                <ReactRoutes>
                    <Route path="/" element={<App />} />
                    <Route path="users" >
                        <Route path=":userId" element={<UserDetailPage />} />
                        <Route path="new" element={<NewUserPage />} />
                        <Route index element={<UsersPage />} />
                    </Route>
                </ReactRoutes>
            </BrowserRouter>
        </>
    )
}