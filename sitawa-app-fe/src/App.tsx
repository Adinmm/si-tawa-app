import { Route, Routes } from "react-router-dom";

import settings from "./page/superadmin/settings";
import Navbar from "./components/Navbar";
import pengaduanmasyarakat from "./page/superadmin/PengaduanMasyarakat.tsx";
import tambahakun from "./page/superadmin/tambahakun.tsx";
import perangkatdesa from "./page/superadmin/PerangkatDesa.tsx";
import login from "./page/loginregist/login.tsx";

import regist from "./page/loginregist/regist.tsx";

import hasilpengaduan from "./page/User/hasilpengaduan.tsx";

import FooterLogin from "./components/loginregistcomp/FooterLogin.tsx";

import pengaduan from "./page/User/pengaduan.tsx";

import editprofile from "./page/User/editprofile.tsx";
import balasPengaduan from "./page/superadmin/HasilPengaduan.tsx";
import hasilProduksi from "./page/superadmin/hasilProduksi.tsx";
import statistikProduksi from "./page/superadmin/statistikProduksi.tsx";
import perangkatKecamatan from "./page/perangkat-kecamatan/perangkatKecamatan.tsx";
import detailPengaduan from "./page/User/detailPengaduan.tsx";
import { AuthProvider } from "./auth/AuthContext.tsx";
import ProtectedRoute from "./auth/ProtectedRoute.tsx";
import PengaduanMasyarakat from "./page/superadmin/PengaduanMasyarakat.tsx";
import Beranda from "./page/superadmin/Beranda.tsx";
import PerangkatDesa from "./page/superadmin/PerangkatDesa.tsx";
import HasilPengaduan from "./page/superadmin/HasilPengaduan.tsx";
import Home from "./page/User/Home.tsx";


const App = () => {
  return (
    <div className=" relative  w-full h-[100vh] ">
      <AuthProvider>
        <Routes>
          {/*----- route for user -------*/}

          <Route path="/" Component={Home} />
          <Route path="/pengaduan" Component={pengaduan} />
          <Route path="/hasil-pengaduan" Component={hasilpengaduan} />
          <Route
            path="/hasil-pengaduan/detail-pengaduan/:id"
            Component={detailPengaduan}
          />
          {/*----- route for user -------*/}

          {/*----- route for superadmin -------*/}
          <Route
            path="/pengaduan-masyarakat"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <PengaduanMasyarakat />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pengaduan-masyarakat/balas-pengaduan/:id"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <HasilPengaduan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/beranda"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Beranda />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perangkat-desa"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <PerangkatDesa />
              </ProtectedRoute>
            }
          />

          {/*----- route for superadmin -------*/}

          <Route path="/edit-profile" Component={editprofile} />
          <Route path="/settings" Component={settings} />

          <Route path="/hasil-produksi" Component={hasilProduksi} />
          <Route path="/statistik-produksi" Component={statistikProduksi} />

          <Route path="/perangkat-desa/tambah-akun" Component={tambahakun} />
          <Route path="/register" Component={regist} />
          <Route path="/login" Component={login} />
        </Routes>
      </AuthProvider>
    </div>
  );
};
export default App;
