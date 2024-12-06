// components/ui/contact-form-modal.tsx
"use client";

import { useState } from "react";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FormSchema = z.object({
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  const handleSubmit = (data: any) => {
    // Handle form submission logic here (e.g., send message)
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
            <label htmlFor="message">Your Message</label>
            <Textarea id="message" {...form.register("message")} rows={4} />
          </div>

          <div className="flex justify-between space-x-2">
            <AlertDialogCancel asChild>
              <Button variant="outline">Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button type="submit">Send Message</Button>
            </AlertDialogAction>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
