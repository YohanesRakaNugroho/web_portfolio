import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ExperienceCard({ image, title, comp, desc }) {
  return (
    <Card size="sm" className="w-full mb-3">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="overflow-hidden rounded-xl flex-shrink-0">
          <img width={50} height={50} src={image} alt={title} />
        </div>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{comp}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p>{desc}</p>
      </CardContent>
    </Card>
  );
}