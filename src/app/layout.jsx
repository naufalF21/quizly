import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/includes/header';
import { ClerkProvider } from '@clerk/nextjs';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata = {
	title: 'Quizly',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					<div className="flex min-h-screen w-full flex-col">
						<header>
							<Header />
						</header>
						<main>{children}</main>
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
