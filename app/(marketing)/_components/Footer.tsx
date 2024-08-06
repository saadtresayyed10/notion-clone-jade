import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center w-full dark:bg-[#1f1f1f] p-6 bg-background z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" className="cursor-default capitalize" size="sm">
          Dev - Sayyed Saad
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="hover:underline duration-300"
          asChild
        >
          <Link
            href="https://sayyedsaad.vercel.app/"
            target="_blank"
            className="flex items-center"
          >
            Portfolio <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
