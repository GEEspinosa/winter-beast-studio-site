import ContactForm from "@/components/ContactForm";
import { Mail} from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";


export default function ContactPage() {

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <div className="p-8 bg-blue-100 rounded grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE — CTA + INFO */}
        <section className="space-y-6">
          <h1 className="text-4xl text-gray-700 font-bold tracking-tight font-sans font-semibold">
            Let’s Connect
          </h1>

          <p className="text-gray-700 leading-relaxed">
            WinterBeast is a working studio shaped by collaboration, care, and attention to detail.
          </p>

          <p className="text-gray-700 leading-relaxed">
            I handle the engineering here and approach each project with openness, curiosity, and respect for the people involved.
          </p>

          <p className="text-gray-700 leading-relaxed">
            If you’d like to start a conversation, whether about a project, a session, or the space itself, feel free to reach out.
          </p>

           <p className="text-gray-700 leading-relaxed">
            I’m based in Portland, OR. You can use the form here, send an email, or connect via Instagram.
          </p>

          {/* Contact Email */}
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-600" />
            <a 
              href="mailto:winterbeastpdx@gmail.com"
              className="text-blue-700 hover:underline"
            >
              winterbeastpdx@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/geespinosa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit WinterBeast LinkedIn"
              className="flex items-center gap-2 text-gray-800 p-4 bg-gray-100 rounded border hover:text-white hover:bg-black transition"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/winterbeastpdx/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit WinterBeast Instagram"
              className="flex items-center gap-2 text-gray-800 p-4 bg-gray-100 rounded border hover:text-white hover:bg-black transition"
            >
              <FaInstagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </div>
        </section>

        {/* RIGHT SIDE — FORM */}
        <section>
          <ContactForm />
        </section>

      </div>
    </section>
  );
}