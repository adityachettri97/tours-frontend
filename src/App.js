import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import UploadTourForm from "./components/UploadTourForm";
import TourList from "./components/TourList";
import EditTour from "./components/EditTour";
import PrivateRoute from "./components/PrivateRoute";
import BlogPage from "./pages/BlogPage";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import BookNow from "./pages/BookNow";
import "./App.css";
import DarjeelingPage from "./pages/DarjeelingPage";
import KalimpongPage from "./pages/KalimpongPage";
import SikkimPage from "./pages/SikkimPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Navigate to="/" />} /> */}
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route
          path="/upload"
          element={
            <PrivateRoute>
              <UploadTourForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/tours"
          element={
            <PrivateRoute>
              <TourList />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditTour />
            </PrivateRoute>
          }
        />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/blogPage/top-10-tips-for-first-time-travelers" element={<BlogPost1 />} />
        <Route path="/blogPage/why-solo-travel-can-change-your-life" element={<BlogPost2 />} />
        <Route path="/blogPage/hidden-gems-in-europe-you-must-visit" element={<BlogPost3 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/destinations/Darjeeling" element={<DarjeelingPage />} />
        <Route path="/destinations/Kalimpong" element={<KalimpongPage />} />
        <Route path="/destinations/Sikkim" element={<SikkimPage />} />
        {/* <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:destination" element={<Destinations />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
