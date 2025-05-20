import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const { toast } = useToast();

  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formValues.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formValues.email)) {
      errors.email = "Email is invalid";
    }

    if (!formValues.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate success
      setFormStatus("success");
      setFormValues({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    } catch (error) {
      setFormStatus("error");
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-4 bg-white dark:bg-darkBackground transition-colors duration-300"
    >
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-navy mb-4">Get In Touch</h3>
            <p className="text-gray-700 text-lg mb-6 dark:text-white/90">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out! I'm always open to new challenges and
              collaborations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:lazo.c2001@gmail.com"
                    className="text-black hover:underline dark:text-white"
                  >
                    lazo.c2001@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium dark:text-white">Phone</p>
                  <a className="text-black dark:text-white hover:underline">
                    (+63) 965-7731801
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="dark:text-white">Caloocan, Philippines</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-6 shadow-lg animate-fade-in dark:bg-white hover:shadow-xl transition-shadow">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium mb-1 text-navy"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={formErrors.name ? "border-red-500 " : ""}
                  disabled={isSubmitting}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-medium mb-1 text-navy"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={formErrors.email ? "border-red-500" : ""}
                  disabled={isSubmitting}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-medium mb-1 text-navy"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formValues.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-medium mb-1 text-navy"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className={`min-h-[120px] ${
                    formErrors.message ? "border-red-500" : ""
                  }`}
                  disabled={isSubmitting}
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-navy hover:bg-navy/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : formStatus === "success" ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Sent Successfully
                  </>
                ) : formStatus === "error" ? (
                  <>
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Try Again
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
