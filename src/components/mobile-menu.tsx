import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Menu, Github, Linkedin, Mail, X } from 'lucide-react';

type NavItem = { name: string; id: string };

interface MobileMenuProps {
  open: boolean;
  setOpen: (v: boolean) => void;
  navigation: NavItem[];
  currentPage: string;
  onNavigate: (id: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, setOpen, navigation, currentPage, onNavigate }) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className={`md:hidden ${open ? 'hidden' : ''}`}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="top" showCloseButton={false} className="w-screen h-screen p-6 md:hidden">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-end">
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <div className="mt-8 flex-1 flex flex-col justify-center items-center gap-6">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-center text-2xl font-semibold py-4 px-6 rounded-lg transition-colors hover:bg-muted/10 ${
                  currentPage === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <Separator className="my-4" />
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/mechtech-star" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/bharath-m-s-88ba17190/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:bharath.ms@zohomail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">© 2026 Bharath M S</div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
