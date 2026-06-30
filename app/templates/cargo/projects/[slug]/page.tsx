import { projects } from "../../components/data";
import ClientPage from "./ClientPage";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ClientPage paramsPromise={params} />;
}
