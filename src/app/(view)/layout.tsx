import BottomNavbar from "../components/bottom-navbar";
import TopNavbar from "../components/top-navbar";

export default function ViewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <TopNavbar />
      <main className="flex-1">{children}</main>
      <BottomNavbar />
    </div>
  );
}
