"use client";

import { type Icon } from "@tabler/icons-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks/typehooks";
import { setRouteHeader } from "@/store/slices/stateSlice";
import { useDispatch } from "react-redux";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) {
  const dispatch = useDispatch();
  const headerTitle = useAppSelector(state=> state.stateSlice.routeHeader)

  const handleNav = (item: { title: string; url: string; icon?: Icon }) => {
    dispatch(setRouteHeader(item.title));
  };
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2"></SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <Link
              onClick={() => handleNav(item)}
              key={item.title}
              href={item.url}
            >
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton tooltip={item.title} className={`${headerTitle === item.title && "bg-black text-white hover:bg-black/70 hover:text-white"}`}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Link>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
