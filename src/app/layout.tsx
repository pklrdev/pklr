import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageHeader from "@/app/components/PageHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Pklr - the pkl repository",
    description: "Pklr is the package repository for the pkl language.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <PageHeader />
                {children}
            </body>
        </html>
    );
}
