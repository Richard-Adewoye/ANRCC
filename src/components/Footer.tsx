// app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-green-200 py-6">
      <div className="max-w-screen-xl mx-auto px-6 text-center space-y-2">
        <p className="text-sm">
          <strong>Abuja Office:</strong> Suite 4 Iwande House Yauri Street, Off Jere Street, Behind Rita Lori Hotel, Abuja
        </p>
         <p className="text-sm">
          <strong>Lagos Office:</strong>No. 4 Jolly Star Close, off Allen Avenue. Ikeja
        </p>
        <p className="text-sm">
          <strong>Phone:</strong> +2348033661741
        </p>
        <p className="text-sm">
          <strong>Email:</strong> <Link href="mailto:info@anrccc.com" className="hover:text-green-400">info@anrccc.com</Link>
        </p>
        <p className="text-sm">
          <strong>Website:</strong> <Link href="https://www.anrccc.com" className="hover:text-green-400">www.anrccc.com.ng</Link>
        </p>

        <p className="text-xs mt-2">
          © {new Date().getFullYear()} ANRCCC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}