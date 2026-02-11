import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PrimaryButton from "./PrimaryButton";
import { TechBadge } from "./TechBadge";

export function ProjectCard({ title, desc, type, image, tech, ...props }) {
  return (
    <Card className="relative w-full max-w-sm pt-0 ">
      {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
      <img
        src={image}
        alt="Event cover"
        className="relative h-40 w-full object-cover brightness-60  dark:brightness-90 rounded-t-xl"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary" className="text-[14px]">
            {type}
          </Badge>
        </CardAction>
        <CardTitle className="heading-4">{title}</CardTitle>
        <CardDescription>
          <div className="text-body mb-2.5">{desc}</div>

          <div className="flex gap-2">
            {tech.map((item, index) => (
              <TechBadge key={index}>{item}</TechBadge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <PrimaryButton>View Detail</PrimaryButton>
      </CardFooter>
    </Card>
  );
}
