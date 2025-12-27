import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Flex Group - Manufacturing at the Speed of Innovation",
  description: "From prototype to mass production in days, not months. Access a global network of elite manufacturers with one click.",
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

