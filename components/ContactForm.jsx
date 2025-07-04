"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useSendMessage } from "@/hooks/useSendMessage";
import { useTranslations } from "next-intl";
import { Source_Sans_3 } from "next/font/google";
import { SignUpFormSchema } from "@/utils/validation";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export default function ContactForm() {
  const t = useTranslations("Contact");

  const { isLoading, sendMessage } = useSendMessage();

  const form = useForm({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;
  const handleSendMessage = handleSubmit(async (request) => {
    await sendMessage(request);
    form.resetField("name");
    form.resetField("email");
    form.resetField("message");
  });

  return (
    <section className="pt-56 pb-20 px-4 max-w-2xl mx-auto mb-10 animate-show-fade-in">
      <h2
        className={`${sourceSans.className} text-4xl mb-4 font-semibold text-center`}
      >
        {t("title")}
      </h2>

      <p className={`${sourceSans.className} mb-8 text-lg text-center`}>
        {t("description")}
      </p>
      <Form {...form}>
        <form onSubmit={handleSendMessage} className="space-y-4">
          <div>
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal text-[1.2rem]">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled={isLoading}
                      placeholder="Enter your name"
                      className={`${errors.name && "border-red-500 text-red-500"} ${false && "bg-slate-300"} dark:border-white`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal text-[1.2rem]">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled={isLoading}
                      placeholder="Enter your email"
                      className={`${errors.email && "border-red-500 text-red-500"} ${false && "bg-slate-300"} dark:border-white`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal text-[1.2rem]">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      disabled={isLoading}
                      className={`${errors.message && "border-red-500 text-red-500"} ${false && "bg-slate-300"} resize-none h-[20rem] dark:border-white outline-none`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full text-center">
            <Button
              type="submit"
              variant="default"
              className="bg-blue-600 dark:bg-dark-mode2nd dark:hover:bg-[#8dcbce] dark:text-white rounded-sm p-4 hover:bg-blue-500 transition-all "
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Please wait
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
