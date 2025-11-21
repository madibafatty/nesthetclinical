/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  readonly VITE_CONTACT_RECIPIENT?: string;
  // add more VITE_ variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
