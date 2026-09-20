import { redirect } from "next/navigation";

// /docs/web no longer exists – the Web Components package has been removed.
// Redirect visitors to the new CSS package documentation page.
export default function WebDocsRedirect() {
  redirect("/docs/css");
}
