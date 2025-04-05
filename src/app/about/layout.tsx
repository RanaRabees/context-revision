import { ThemeCTXProvider } from "../../../context/ThemeContext";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ThemeCTXProvider>
                    {children}
                </ThemeCTXProvider>
            </body>
        </html>
    );
}

