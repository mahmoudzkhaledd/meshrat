import InfoForm from "./_components/InfoForm";
import { prisma } from "@/lib/db";
export default async function InfoPage() {
  const info = await prisma.websiteInfo.findUnique({
    where: { id: 1 },
    
  });
  return (
    <div>
      <InfoForm info={info ?? undefined} />
    </div>
  );
}
