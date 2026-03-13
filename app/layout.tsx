import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Joki Apk Majalengka ",
    description:
        "Tim profesional untuk jasa pengerjaan tugas koding, web, mobile, dan aplikasi berkualitas tinggi.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id">
            <body>{children}</body>
        </html>
    );
}
