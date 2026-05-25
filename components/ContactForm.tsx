// "use client";
// import { useState, useEffect } from "react";
// import * as yup from "yup";
// import { contactFormSchema } from "../lib/schemas/contactSchema";

// type FormData = {
//   name: string;
//   email: string;
//   subject: string;
//   text: string;
// };

// const initialFormData = { name: "", email: "", subject: "", text: "" };

// export default function ContactForm() {
//   const [formData, setFormData] = useState<FormData>(initialFormData);
//   const [status, setStatus] = useState<string | null>(null);
//   const [isSending, setIsSending] = useState(false);

//   console.log("Rendering ContactForm");

//   function handleChange(
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setIsSending(true);
//     setStatus(null);

//     try {
//       await contactFormSchema.validate(formData, { abortEarly: false });

//       const response = await fetch(
//         "https://web-dev-site-contact-form-backend.onrender.com/api/contact",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         setStatus("Message sent successfully!");
//         setFormData(initialFormData);
//       } else {
//         setStatus("Failed to send message.");
//       }
//     } catch (validationError) {
//       if (validationError instanceof yup.ValidationError) {
//         setStatus(validationError.errors.join(", "));
//         console.log("Validation errors:", validationError.errors);
//       } else {
//         setStatus("Error sending message.");
//         console.log(validationError);
//       }
//     } finally {
//       setIsSending(false);
//     }
//   }

//   useEffect(() => {
//     if (status !== null) {
//       console.log("Status changed:", status);
//     }
//   }, [status]);

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto p-6 bg-gray-50 rounded-lg shadow-md flex flex-col gap-4 font-mono text-black"
//       noValidate
//     >
//       <input
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Name"
//         required
//         className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 "
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//         required
//         className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//       />
//       <input
//         name="subject"
//         value={formData.subject}
//         onChange={handleChange}
//         placeholder="Subject"
//         className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//       />
//       <textarea
//         name="text"
//         value={formData.text}
//         onChange={handleChange}
//         placeholder="Message"
//         required
//         rows={5}
//         className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none "
//       />
//       <button
//         type="submit"
//         disabled={isSending}
//         className={`py-3 rounded-md transition ${
//           isSending
//             ? "bg-gray-400 cursor-not-allowed"
//             : "bg-blue-600 hover:bg-blue-700 text-white"
//         }`}
//       >
//         {isSending ? "Sending..." : "Send"}
//       </button>
//       {status && (
//         <>
//           <p
//             aria-live="polite"
//             className={`mt-2 text-center text-sm ${
//               status.includes("successfully")
//                 ? "text-green-600"
//                 : "text-red-600"
//             }`}
//           >
//             {status}
//           </p>
//         </>
//       )}
//     </form>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import * as yup from "yup";
import { contactFormSchema } from "../lib/schemas/contactSchema";

type FormData = {
  name: string;
  email: string;
  subject: string;
  text: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  text: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      await contactFormSchema.validate(formData, { abortEarly: false });

      const response = await fetch(
        "https://web-dev-site-contact-form-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Message received.");
        setFormData(initialFormData);
      } else {
        setStatus("Could not send message.");
      }
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setStatus(err.errors.join(", "));
      } else {
        setStatus("Error sending message.");
      }
    } finally {
      setIsSending(false);
    }
  }

  useEffect(() => {
    if (status) {
      console.log("Status:", status);
    }
  }, [status]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 text-[#e6e6e6]"
      noValidate
    >
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name / Artist"
        required
        className="p-3 bg-transparent border border-[#2f2f2f] focus:border-[#cdb654] outline-none"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="p-3 bg-transparent border border-[#2f2f2f] focus:border-[#cdb654] outline-none"
      />

      <input
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Project type (recording, mixing, etc.)"
        className="p-3 bg-transparent border border-[#2f2f2f] focus:border-[#cdb654] outline-none"
      />

      <textarea
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Brief description of the project"
        rows={5}
        className="p-3 bg-transparent border border-[#2f2f2f] focus:border-[#cdb654] outline-none resize-none"
      />

      <button
        type="submit"
        disabled={isSending}
        className={`py-3 border border-[#cdb654] transition ${
          isSending
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-[#cdb654] hover:text-[#181818]"
        }`}
      >
        {isSending ? "Sending" : "Send"}
      </button>

      {status && (
        <p className="text-xs text-zinc-500">
          {status}
        </p>
      )}
    </form>
  );
}