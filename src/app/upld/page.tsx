"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

import { UploadButton } from "@uploadthing/react";

import { OurFileRouter } from "../../app/api/uploadthing/core";

import { useRouter } from "next/navigation";

export default function UploadButtonPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <UploadButton<OurFileRouter>
        endpoint="profilePicture"
        onClientUploadComplete={(res) => {
          if (res) {
            router.push("/profile");
          }

          //alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          console.log(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
