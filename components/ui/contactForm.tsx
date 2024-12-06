import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "./textarea"; // Adjust imports to your project structure
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Define the structure of the form data
interface FormValues {
  message: string;
}

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize useForm with the explicit type
  const form = useForm<FormValues>({
    defaultValues: {
      message: "",
    },
  });

  // Define the handleSubmit function with the same type
  const handleSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setIsOpen(false); // Close the dialog after submission
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button>Contact Me</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Contact Me</AlertDialogTitle>
          <AlertDialogDescription>
            Please leave your message below, and I will get back to you soon!
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <Textarea
              id="message"
              {...form.register("message", { required: "Message is required" })}
              rows={4}
              className="mt-1 block w-full"
            />
          </div>
          <Button type="submit">Send</Button>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
