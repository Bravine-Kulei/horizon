import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen  justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div className="m-12">
          <Image 
            src="/icons/auth-image.png"
            alt="Auth image"
            width={800}
            height={800}
            className="rounded-l-xl object-contain w-full height-full "
          />
        </div>
      </div>
    </main>
  );
}
