import AdminHeader from "@/components/admin/AdminHeader";
// import { FirstTab, IMenuItemType } from "@/types/IMenuType";
// import { useState } from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  // const [open, setOpen] = useState(false);
  // const toggleOpenMenu = () => setOpen((prev) => !prev);
  // const [activeTab, setActiveTab] = useState<IMenuItemType>(FirstTab);
  return (
    <section className="font-general">
      <AdminHeader />
      <div className="flex">
        {/* <AdminSidebar
          open={open}
          toggleOpenMenu={toggleOpenMenu}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        /> */}
        <div className="flex-1 overflow-hidden rounded-lg *:h-full *:min-h-full *:w-full *:rounded-lg *:p-4">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AdminLayout;
