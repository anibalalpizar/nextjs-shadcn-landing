import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Home, User, Briefcase, BookOpen, Image } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export function Navigation() {
  return (
    <nav className="fixed w-full top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-4">
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 backdrop-blur-md px-6 py-2 rounded-full border border-foreground/10">
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors">
                  <Home className="w-4 h-4" /> <span>Home</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors">
                  <User className="w-4 h-4" /> <span>About</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors">
                  <Briefcase className="w-4 h-4" /> <span>Work</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors">
                  <BookOpen className="w-4 h-4" /> <span>Blog</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors">
                  <Image className="w-4 h-4" /> <span>Gallery</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu className="md:hidden flex items-center justify-center bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 backdrop-blur-md px-6 py-2 rounded-full border border-foreground/10">
            <NavigationMenuList className="flex items-center gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors">
                  <Home className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors">
                  <User className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors">
                  <Briefcase className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors">
                  <BookOpen className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors">
                  <Image className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}