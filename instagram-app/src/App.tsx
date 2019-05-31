import './App.css';
import withAuthenticate from './authentication/withAuthenticate.js';
import Login from './components/Login/Login';
import PostsPage from './components/PostsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
export default withAuthenticate(PostsPage)(Login);
