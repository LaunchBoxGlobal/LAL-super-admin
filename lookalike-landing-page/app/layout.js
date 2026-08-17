import "./globals.css";
import { generalSans } from "@/fonts/general-sans";

export const metadata = {
  title: "LookAlike Match App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={generalSans.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
