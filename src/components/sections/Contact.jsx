function Contact() {
  const handleSubmit = (e) => {
    const SERVICE_ID = "serv";
  };
  return (
    <section
      id="contact"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <div className="px-4 w-150">
        <h2 className="max-w-3xl text-4xl font-bold mb-8 bg-gradient-to-r from-teal-500  to-indigo-600 bg-clip-text text-transparent text-center ">
          Get In Touch
        </h2>

        <form
          //   action="https://sewove4136@sectorid.com"
          //   method="POST"
          className="space-y-6"
        >
          <div className="relative">
            <input
              type="text"
              id="name"
              className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              placeholder="Name..."
              required
            />
          </div>
          <div className="relative">
            <input
              type="text"
              id="email"
              className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="relative">
            <textarea
              type="message"
              id="message"
              rows={6}
              className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              placeholder="Type your message..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r flex justify-center  cursor-pointer from-teal-500 to-indigo-600 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246,0.4)]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
