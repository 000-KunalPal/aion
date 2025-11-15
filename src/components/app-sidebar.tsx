import { Link, useNavigate } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import {
	CreditCardIcon,
	FolderOpenIcon,
	HistoryIcon,
	KeyIcon,
	LogOutIcon,
	StarIcon,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "./ui/sidebar";

const menuItems = [
	{
		title: "Main",
		items: [
			{
				title: "Workflows",
				icon: FolderOpenIcon,
				url: "/workflows",
			},
			{
				title: "Credentials",
				icon: KeyIcon,
				url: "/credentials",
			},
			{
				title: "Executions",
				icon: HistoryIcon,
				url: "/executions",
			},
		],
	},
];

export function AppSidebar() {
	const navigate = useNavigate();
	return (
		<Sidebar collapsible="icon">
			<SidebarHeader>
				<SidebarMenuItem>
					<SidebarMenuButton asChild className="h-10 gap-x-4 px-4">
						<Link to="/">
							<Image alt="Aion" height={30} src="/src/logo.svg" width={30} />
							<span className="font-semibold text-lg">Aion</span>
						</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarHeader>
			<SidebarContent>
				{menuItems.map((group) => (
					<SidebarGroup key={group.title}>
						<SidebarGroupContent>
							<SidebarMenu>
								{group.items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<Link activeOptions={{ exact: false }} to={item.url}>
											{({ isActive }) => (
												<SidebarMenuButton
													className="h-10 gap-x-4 px-4"
													isActive={isActive}
													tooltip={item.title}
												>
													<item.icon className="size-4" />
													<span>{item.title}</span>
												</SidebarMenuButton>
											)}
										</Link>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							className="h-10 gap-x-4 px-4"
							// onClick={() => {}}
							tooltip="Upgrade to Pro"
						>
							<StarIcon className="h-4 w-4" />
							<span>Upgrade to Pro</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<SidebarMenuButton
							className="h-10 gap-x-4 px-4"
							// onClick={() => {}}
							tooltip="Billing portal"
						>
							<CreditCardIcon className="h-4 w-4" />
							<span>Billing Portal</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<SidebarMenuButton
							className="h-10 gap-x-4 px-4"
							onClick={async () =>
								await authClient.signOut({
									fetchOptions: {
										onSuccess: () => {
											navigate({
												to: "/auth",
											});
										},
									},
								})
							}
							tooltip="Sign out"
						>
							<LogOutIcon className="h-4 w-4" />
							<span>Sign out</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
