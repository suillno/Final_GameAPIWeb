import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import GameDetail from "../gameApi/GameDetail";
import AdminIndex from "../admin/AdminIndex";
import Library from "../member/Library";
import MainPage from "../layout/MainPage";
import Dashboard from "../member/Dashboard";
import Profile from "../member/Profile";
import Security from "../member/Security";
import Wallet from "../member/Wallet";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="game/:id" element={<GameDetail />} />
        <Route index element={<MainPage />} /> {/* index: / 경로 */}
        <Route path="admin" element={<AdminIndex />} />
        <Route path="library" element={<Library />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="security" element={<Security />} />
        <Route path="wallet" element={<Wallet />} />
      </Route>
    </Routes>
  );
}

export default Router;
