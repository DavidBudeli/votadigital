import { VotaDigitalLanding } from "@/components/votadigital-landing";
import { jsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VotaDigitalLanding />
    </>
  );
}
