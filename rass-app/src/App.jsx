import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Loading from './components/Loading';

// LAZY LOADING - Teknik optimasi untuk load halaman hanya saat diakses
// Penggunaan React.lazy() mencegah bundling semua halaman di awal, mengurangi ukuran file awal
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Product = lazy(() => import('./pages/admin/Product'));
const ProductDetail = lazy(() => import('./pages/admin/ProductDetail'));
const Booking = lazy(() => import('./pages/admin/Booking'));
const Customers = lazy(() => import('./pages/admin/Customers'));
const Services = lazy(() => import('./pages/admin/Services'));
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/auth/ResetPassword'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

// Suspense Fallback - UI yang ditampilkan saat komponen lazy loading sedang diload
// Ini mencegah blank screen sambil file component di-download dari server
function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* ========== AUTH ROUTES ========== */}
          {/* AuthLayout: Menampilkan halaman login tanpa sidebar/header kompleks */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
          </Route>

          {/* ========== ADMIN ROUTES ========== */}
          {/* MainLayout: Layout utama dengan sidebar, header, footer untuk dashboard */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/services" element={<Services />} />
          </Route>

          {/* ========== ERROR ROUTES ========== */}
          {/* Redirect index ke dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          {/* 404 Not Found Page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
