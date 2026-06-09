import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  BookOpen,
  Briefcase,
  CreditCard,
  Home,
  Image,
  User,
} from "lucide-react"
import { ModeToggle } from "./ModeToggle"

export function Navigation() {
  return (
    <nav className="fixed w-full top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-4">
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 backdrop-blur-md px-6 py-2 rounded-full border border-foreground/10">
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="#top"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Home className="w-4 h-4" /> <span>Top</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="#benefits"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <User className="w-4 h-4" /> <span>Benefits</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="#investors"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Briefcase className="w-4 h-4" /> <span>Investors</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="#testimonials"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <BookOpen className="w-4 h-4" /> <span>Testimonials</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="#pricing"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <CreditCard className="w-4 h-4" /> <span>Pricing</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="#faq"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <Image className="w-4 h-4" /> <span>Faq</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu className="md:hidden flex items-center justify-center bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 backdrop-blur-md px-6 py-2 rounded-full border border-foreground/10">
            <NavigationMenuList className="flex items-center gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#top"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Home className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#benefits"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <User className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#investors"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Briefcase className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#testimonials"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <BookOpen className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#pricing"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <CreditCard className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#faq"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <Image className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
