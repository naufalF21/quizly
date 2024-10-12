import Link from 'next/link';
import { BringToFront, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export function Header() {
	return (
		<header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
			<Sheet>
				<SheetTrigger asChild>
					<nav className="grid gap-6 text-lg font-medium">
						<Link href="#" className="flex items-center gap-2 text-lg font-semibold">
							<BringToFront className="h-6 w-6" />
							<span>Quizly</span>
						</Link>
					</nav>
				</SheetTrigger>
			</Sheet>
			<div className="flex justify-end w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
				<SignedOut>
					<Button>
						<SignInButton />
					</Button>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</header>
	);
}
