import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  // Define the types for the props
  interface CardWithPictureProps {
    title: string;
    description: string;
    content: string;
  }
  
  export function CardWithPicture({
    title,
    description,
    content,
  }: CardWithPictureProps) {
    return (
      <Card className=" lg:w-full  lg:h-[500px]  sm:w-full sm:h-[100px] sm:w-full  md:h-[300px] md:w-full flex flex-col justify-betwee mx-auto">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    );
  }
  