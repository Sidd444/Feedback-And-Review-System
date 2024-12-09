import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import routes from './routes';
import AuthProvider from './contexts/AuthContext';
import ReviewProvider from './contexts/ReviewContext';
import ReviewsList from './components/ReviewsList';
import ReviewDetail from './components/ReviewDetail';
import CreateReview from './components/CreateReview';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <ReviewProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-gray-900">
            <div className="flex bg-gray-900">
              <Sidebar />
              <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="p-4">
                  <Routes>
                    <Route path={routes.home} element={<Home />} />
                    <Route path={routes.login} element={<Login />} />
                    <Route path={routes.signup} element={<Signup />} />
                    <Route path={routes.reviews} element={<ReviewsList />} />
                    <Route path={routes.reviews_id} element={<ReviewDetail />} />
                    <Route path={routes.create_review} element={<CreateReview />} />
                  </Routes>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </Router>
      </ReviewProvider>
    </AuthProvider>
  );
}

export default App;
