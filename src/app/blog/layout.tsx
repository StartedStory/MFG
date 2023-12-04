import React from "react";
import "../globals.css";
import { getGlobalData } from "../../lib/cosmic";
import Generator from "next/font/local";

const sans = Generator({
  src: "../../fonts/Generator-Variable.ttf",
  variable: "--font-sans",
});

export async function generateMetadata() {
  const siteData = await getGlobalData();
  return {
    title: siteData.metadata.site_title,
    description: siteData.metadata.site_tag,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${sans.variable} font-sans`}>{children}</div>;
}
