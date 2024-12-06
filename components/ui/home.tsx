import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import ContactForm from "@/components/ui/contactForm";
export function Home() {
  return (
    <div className="   flex flex-col justify-center sm:flex-row gap-2 w-full p-4">
      <div className="w-1/3  ">
        <Card className=" max-w-md mx-auto h-    ">
          <CardHeader>
            <CardTitle> </CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/your-image.png" // Path to your image in the public folder
              alt="Home Image"
              width={500} // Set the width you want for the image
              height={500} // Set the height you want for the image
              className="object-cover rounded-lg"
            />
          </CardContent>
        </Card>
      </div>

      <div id="about-me-section" className="w-1/2  ">
        <Card className="w-300  mx-auto h-full">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-2">
              {" "}
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{" "}
            </p>
            <p className="text-xl mb-2">
              {" "}
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{" "}
            </p>
            <p className="text-xl mb-2">
              {" "}
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{" "}
            </p>

            <p className="text-xl mb-2">
              {" "}
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{" "}
            </p>

            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
