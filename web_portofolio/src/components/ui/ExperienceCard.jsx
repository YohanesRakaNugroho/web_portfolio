import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";

export function ExperienceCard({ image, title, comp, desc }) {
  return (
    <Card size="sm" className=" w-full max-w-sm mb-3">
      <CardHeader className="flex items-center">
        <div className="overflow-hidden rounded-xl ">
          <img width={50} height={20} src={image} />
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
