import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { WHATSAPP_NUMBER } from "@/lib/products";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20)
    .regex(/^[0-9+()\-\s]+$/, "Only digits, +, -, () and spaces"),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  city: z.string().trim().min(2, "City is required").max(60),
  message: z.string().trim().min(5, "Please add a short message").max(600),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", city: "", message: "" },
  });

  const onSubmit = (values: FormValues) => {
    const lines = [
      "*New order enquiry — Imperial Mangoes*",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : null,
      `City: ${values.city}`,
      "",
      values.message,
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    reset();
  };

  const fieldCls =
    "w-full bg-white/95 text-ink placeholder:text-ink/40 border border-white/30 focus:border-orange focus:outline-none px-3 md:px-4 py-3 text-sm font-medium";
  const errCls = "text-xs text-orange mt-1 font-semibold";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 md:mt-8 grid gap-3 md:gap-4 text-left">
      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
        <div>
          <input {...register("name")} placeholder="Full name" className={fieldCls} autoComplete="name" />
          {errors.name && <p className={errCls}>{errors.name.message}</p>}
        </div>
        <div>
          <input {...register("phone")} placeholder="Phone / WhatsApp" className={fieldCls} autoComplete="tel" inputMode="tel" />
          {errors.phone && <p className={errCls}>{errors.phone.message}</p>}
        </div>
        <div>
          <input {...register("email")} placeholder="Email (optional)" className={fieldCls} autoComplete="email" inputMode="email" />
          {errors.email && <p className={errCls}>{errors.email.message}</p>}
        </div>
        <div>
          <input {...register("city")} placeholder="Delivery city" className={fieldCls} autoComplete="address-level2" />
          {errors.city && <p className={errCls}>{errors.city.message}</p>}
        </div>
      </div>
      <div>
        <textarea
          {...register("message")}
          placeholder="Variety, size (5kg / 10kg / 20kg) and delivery address"
          rows={4}
          className={fieldCls}
        />
        {errors.message && <p className={errCls}>{errors.message.message}</p>}
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center pt-1 md:pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 text-[11px] font-semibold tracking-[0.25em] uppercase text-white bg-orange hover:bg-orange-dark transition disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Send Order Enquiry"}
        </button>
        {sent && (
          <span className="text-xs uppercase tracking-[0.2em] text-white/90 font-semibold">
            Opening WhatsApp — hit send to complete
          </span>
        )}
      </div>
    </form>
  );
}