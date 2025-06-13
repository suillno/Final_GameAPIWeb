import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import GameDetail from "../gameApi/GameDetail";
import AdminIndex from "../admin/AdminIndex";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/game/:id" element={<GameDetail />} />
      <Route path="/admin" element={<AdminIndex />} />
    </Routes>
  );
}

export default Router;
