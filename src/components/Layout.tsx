import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
