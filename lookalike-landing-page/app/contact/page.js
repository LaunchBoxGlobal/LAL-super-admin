import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="w-[800px] h-[800px] bg-[#408EE8] rounded-full absolute top-[-20%] right-[-20%] z-0 blur-[300px] opacity-40"></div>
      <div className="w-[400px] h-[400px] bg-[#408EE8] rounded-full absolute top-[-20%] left-[-20%] z-0 blur-[300px] opacity-40"></div>
      <Navbar />
      <main className="px-5 lg:px-0">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default page;
