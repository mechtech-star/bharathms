import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MobileMenu from '@/components/mobile-menu';
import { Button } from '@/components/ui/button';
import Avatar from '@/components/ui/avatar';
import { Sun, Moon } from 'lucide-react';

type NavItem = { name: string; id: string };

interface DesktopNavbarProps {
	navigation: NavItem[];
	currentPage: string;
	onNavigate: (pageId: string) => void;
	mobileMenuOpen: boolean;
	setMobileMenuOpen: (v: boolean) => void;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
	navigation,
	currentPage,
	onNavigate,
	mobileMenuOpen,
	setMobileMenuOpen,
}) => {

	// initialize theme from localStorage on mount
	const [themeInitialized, setThemeInitialized] = useState(false);

	// typing intro
	const fullIntro = 'Hi, I am Bharath';
	const [introIndex, setIntroIndex] = useState(0);
	useEffect(() => {
		if (introIndex < fullIntro.length) {
			const t = setTimeout(() => setIntroIndex((i) => i + 1), 80);
			return () => clearTimeout(t);
		}
		// keep the full text once finished
	}, [introIndex]);

	useEffect(() => {
		try {
			const stored = window.localStorage.getItem('theme');
			if (stored === 'dark') document.documentElement.classList.add('dark');
			else if (stored === 'light') document.documentElement.classList.remove('dark');
		} catch {}
		setThemeInitialized(true);
	}, []);
	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
		>
			<div className="container mx-auto px-4">
				<div className="relative flex h-16 items-center justify-between">
					{/* Avatar + Logo with typing intro */}
					<div className="flex items-center gap-3">
						<Avatar src="/profile.jpg" alt="Bharath" size={40} />
						<button
							onClick={() => onNavigate('home')}
							className="text-xl md:text-3xl font-bold hover:text-primary transition-colors tracking-tight font-heading"
						>
							<span>{fullIntro.slice(0, introIndex)}</span>
							<span className="typing-cursor" aria-hidden />
						</button>
					</div>

					{/* Desktop Navigation */}
					<div className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:flex items-center gap-6 h-16 justify-center">
						{navigation.map((item) => (
							<button
								key={item.id}
								onClick={() => onNavigate(item.id)}
								className={`text-sm font-medium transition-colors hover:text-primary ${
									currentPage === item.id ? 'text-primary' : 'text-muted-foreground'
								}`}
							>
								{item.name}
							</button>
						))}
					</div>

					{/* Theme toggle + Mobile Menu */}
					<div className="flex items-center gap-2">
						<Button
							variant="ghost"
							size="icon"
							onClick={() => {
								const isDark = document.documentElement.classList.toggle('dark');
								try {
									window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
								} catch {}
							}}
							aria-label="Toggle theme"
						>
							{document.documentElement.classList.contains('dark') ? (
								<Moon className="h-5 w-5" />
							) : (
								<Sun className="h-5 w-5" />
							)}
						</Button>

						<MobileMenu
							open={mobileMenuOpen}
							setOpen={setMobileMenuOpen}
							navigation={navigation}
							currentPage={currentPage}
							onNavigate={onNavigate}
						/>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default DesktopNavbar;

