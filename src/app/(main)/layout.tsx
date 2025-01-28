import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import vazirFont from "@/constants/localFonts";
import "@/styles/globals.css";

export const metadata = {
  title: "کیولاین / صفحه اصلی",
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
          <Toaster />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
