import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import vazirFont from "@/constants/localFonts";
import "@/styles/globals.css";
import Sidebar from "./_/components/Sidebar";
import HeaderProfile from "./_/components/HeaderProfile";

export const metadata = {
  title: "کیولاین / پنل کاربری ",
  description: "کیولاین برای ساخت پرسشنامه فرم و نظرسنجی آنلاین",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable} font-sans`}
      >
        <ReactQueryProvider>
          <main className="flex h-[100vh]">
            <Sidebar />
            <section className="flex-1">
              <HeaderProfile/>
              {children}
            </section>
          </main>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
