import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import UploadTourForm from "./components/UploadTourForm";
import TourList from "./components/TourList";
import EditTour from "./components/EditTour";
import PrivateRoute from "./components/PrivateRoute";
import PackageList from "./components/PackageList";
import UploadPackageForm from "./components/UploadPackageForm";
import EditPackage from "./components/EditPackage";
import BlogList from "./components/BlogList";
import UploadBlogForm from "./components/UploadBlogForm";
import EditBlog from "./components/EditBlog";
import EditAbout from "./components/EditAbout";
import ReviewList from "./components/ReviewList";
import UploadReviewForm from "./components/UploadReviewForm";
import EditReview from "./components/EditReview";
import BlogPage from "./pages/BlogPage";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPostDetail from "./pages/BlogPostDetail";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import BookNow from "./pages/BookNow";
import "./App.css";
import DarjeelingPage from "./pages/DarjeelingPage";
import KalimpongPage from "./pages/KalimpongPage";
import SikkimPage from "./pages/SikkimPage";
import DestinationDetail from "./pages/DestinationDetail";
import ChatWidget from "./components/ChatWidget";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Navigate to="/" />} /> */}
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
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
        <Route
          path="/packages"
          element={
            <PrivateRoute>
              <PackageList />
            </PrivateRoute>
          }
        />
        <Route
          path="/upload-package"
          element={
            <PrivateRoute>
              <UploadPackageForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-package/:id"
          element={
            <PrivateRoute>
              <EditPackage />
            </PrivateRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <PrivateRoute>
              <BlogList />
            </PrivateRoute>
          }
        />
        <Route
          path="/upload-blog"
          element={
            <PrivateRoute>
              <UploadBlogForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-blog/:id"
          element={
            <PrivateRoute>
              <EditBlog />
            </PrivateRoute>
          }
        />
        <Route
          path="/about-admin"
          element={
            <PrivateRoute>
              <EditAbout />
            </PrivateRoute>
          }
        />
        <Route
          path="/reviews"
          element={
            <PrivateRoute>
              <ReviewList />
            </PrivateRoute>
          }
        />
        <Route
          path="/upload-review"
          element={
            <PrivateRoute>
              <UploadReviewForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-review/:id"
          element={
            <PrivateRoute>
              <EditReview />
            </PrivateRoute>
          }
        />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/blogPage/post/:id" element={<BlogPostDetail />} />
        <Route path="/blogPage/top-10-tips-for-first-time-travelers" element={<BlogPost1 />} />
        <Route path="/blogPage/why-solo-travel-can-change-your-life" element={<BlogPost2 />} />
        <Route path="/blogPage/hidden-gems-in-europe-you-must-visit" element={<BlogPost3 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/destinations/Darjeeling" element={<DarjeelingPage />} />
        <Route path="/destinations/Kalimpong" element={<KalimpongPage />} />
        <Route path="/destinations/Sikkim" element={<SikkimPage />} />
        <Route path="/destinations/:title" element={<DestinationDetail />} />
        {/* <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:destination" element={<Destinations />} /> */}
      </Routes>
      <ChatWidget />
    </BrowserRouter>
  );
}

export default App;
