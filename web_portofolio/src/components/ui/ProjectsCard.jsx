import { Badge } from "@/components/ui/badge";
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
import Link from "next/link";

export function ProjectCard({ link, action, title, desc, type, image, tech, ...props }) {
  return (
    <Card className="relative w-full sm:w-[calc(50%-8px)] lg:max-w-sm pt-0">
      <img
        src={image}
        alt="Event cover"
        className="relative h-40 w-full object-cover brightness-60 dark:brightness-90 rounded-t-xl"
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
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <TechBadge key={index}>{item}</TechBadge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex-1">
          <PrimaryButton className="w-full">{action}</PrimaryButton>
        </a>
      </CardFooter>
    </Card>
  );
}