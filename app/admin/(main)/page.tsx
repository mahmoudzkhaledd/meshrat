import { prisma } from "@/lib/db";
import ServicesTable from "./_components/ServicesTable";
import RecentBlogs from "./_components/RecentBlogs";
export default async function AdminMainPage() {
  const services = await prisma.service.findMany({
    take: 5,
    orderBy: {
      visits: "desc",
    },
  });
  const blogs = await prisma.blog.findMany({
    take: 5,
    orderBy: {
      visits: "desc",
    },
  });
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <ServicesTable services={services} />
        <RecentBlogs blogs={blogs} />
      </div>
    </div>
  );
}
