import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Terra新云 | AI Transformation & Agentic Solutions",
  description: "Empowering enterprises with AI transformation, agentic solutions, and professional AI training courses.",
};

function Logo() {
  return (
    <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em' }}>
      <span style={{ color: '#58a6ff' }}>Terra</span>
      <span style={{ color: '#fff' }}>新云</span>
    </span>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <nav className="navbar">
            <div className="nav-left">
              <Logo />
              <div className="nav-links">
                <a href="#services">Services</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            <div className="nav-auth">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="btn-secondary" style={{ padding: '0.5rem 1rem' }}>
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="btn-primary" style={{ padding: '0.5rem 1rem' }}>
                    Get Started
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: { width: 36, height: 36 }
                    }
                  }}
                />
              </SignedIn>
            </div>
          </nav>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
