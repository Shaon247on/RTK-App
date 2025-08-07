"use client"
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ProfileDropdown } from "./elements/ProfileDropdown";
import { NavUser } from "./nav-user";
import { useAppSelector } from "@/store/hooks/typehooks";

const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  }

export function SiteHeader() {
  const headerTitle = useAppSelector(state=> state.stateSlice.routeHeader)
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 pl-4 lg:gap-2 lg:pl-6 ">
        <SidebarTrigger className="w" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

        <h1 className="text-base font-medium">{headerTitle}</h1>
        <div className="ml-auto flex items-center gap-2"></div>
        <div className="flex items-center gap-2.5">
          <NavUser user={user} />
        </div>
      </div>
    </header>
  );
}
