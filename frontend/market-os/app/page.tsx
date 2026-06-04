import ThreeScene from "./components/ThreeScene";

export default function Home() {
  const whatsappLink =
    "https://wa.me/?text=Hello%20Market%20OS%20team%20—%20I%20want%20to%20connect%20my%20business%20and%20start%20taking%20inventory.";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
              MO
            </div>
            <div>
              <p className="text-sm font-semibold">Market OS</p>
              <p className="text-xs text-slate-500">WhatsApp inventory for local business</p>
            </div>
          </div>

          <nav className="flex items-center gap-5 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a
              href={whatsappLink}
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
            >
              Connect WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <div className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
              Launching for Nigerian business owners
            </div>
            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              WhatsApp inventory and bookkeeping designed for local shops.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Market OS makes stock management simple on the phone you already use.
              Send messages, voice notes or pictures and get automatic records in
              your preferred Nigerian language.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800"
              >
                Connect WhatsApp
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                View features
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-semibold text-slate-900">Language-ready</p>
                <p className="mt-2 text-sm text-slate-600">Yoruba, Igbo, Hausa and Pidgin support built-in.</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-semibold text-slate-900">No new apps</p>
                <p className="mt-2 text-sm text-slate-600">Use WhatsApp to manage stock and record transactions.</p>
              </div>
            </div>
          </div>

          <ThreeScene />
        </section>

        <section id="features" className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-4xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Inventory</p>
            <h2 className="mt-4 text-xl font-semibold text-slate-950">Stock tracking made easy</h2>
            <p className="mt-3 text-slate-600">Record items with messages, photos, or voice notes and keep a live inventory log.</p>
          </div>
          <div className="rounded-4xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Bookkeeping</p>
            <h2 className="mt-4 text-xl font-semibold text-slate-950">Simple accounts on WhatsApp</h2>
            <p className="mt-3 text-slate-600">Get organized reports and expense records without leaving your chat app.</p>
          </div>
          <div className="rounded-4xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Local first</p>
            <h2 className="mt-4 text-xl font-semibold text-slate-950">Built for Nigeria</h2>
            <p className="mt-3 text-slate-600">Works with local languages, local product names, and low-connectivity environments.</p>
          </div>
        </section>

        <section id="how" className="mt-16 rounded-4xl bg-slate-900 p-10 text-slate-50 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">How it works</p>
              <h2 className="mt-4 text-3xl font-semibold">Get started in minutes.</h2>
            </div>
            <a
              href={whatsappLink}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-emerald-400"
            >
              Start on WhatsApp
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-950 p-6 ring-1 ring-slate-800">
              <p className="text-sm font-semibold text-emerald-400">1</p>
              <p className="mt-3 text-base text-slate-200">Send a greeting message to Market OS on WhatsApp.</p>
            </div>
            <div className="rounded-3xl bg-slate-950 p-6 ring-1 ring-slate-800">
              <p className="text-sm font-semibold text-emerald-400">2</p>
              <p className="mt-3 text-base text-slate-200">Tell the bot your business name and how you want to add stock.</p>
            </div>
            <div className="rounded-3xl bg-slate-950 p-6 ring-1 ring-slate-800">
              <p className="text-sm font-semibold text-emerald-400">3</p>
              <p className="mt-3 text-base text-slate-200">Upload a picture, voice note or typed list and get instant records.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Market OS</span>
          <span>Made for everyday Nigerian traders</span>
        </div>
      </footer>
    </div>
  );
}
