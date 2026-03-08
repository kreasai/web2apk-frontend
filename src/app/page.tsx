"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Web2APK Logo">
              <title>Web2APK Logo</title>
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">Web2APK</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <a href="#features" className="hover:text-zinc-900 transition-colors">Features</a>
          <a href="#demo" className="hover:text-zinc-900 transition-colors">Output</a>
          <a href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-zinc-900 transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://app.domain.com/login" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 hidden sm:block">
            Log in
          </a>
          <a href="https://app.domain.com/register" className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm">
            Mulai Convert
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-200 p-2 text-zinc-700 md:hidden"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-zinc-900/35"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-80 max-w-[86vw] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
              <p className="text-sm font-semibold tracking-tight text-zinc-900">Menu</p>
              <button
                type="button"
                aria-label="Close menu"
                className="rounded-lg border border-zinc-200 p-2 text-zinc-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-2 px-5 py-5">
              {[
                { href: '#features', label: 'Features' },
                { href: '#demo', label: 'Output' },
                { href: '#pricing', label: 'Pricing' },
                { href: '#faq', label: 'FAQ' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-3 space-y-3 border-t border-zinc-100 px-5 py-5">
              <a
                href="https://app.domain.com/login"
                className="block rounded-xl border border-zinc-200 px-4 py-3 text-center text-sm font-medium text-zinc-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </a>
              <a
                href="https://app.domain.com/register"
                className="block rounded-xl bg-zinc-900 px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Mulai Convert
              </a>
            </div>
          </aside>
        </div>
      ) : null}

      <main>
        <section className="relative pt-24 pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10"></div>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8 border border-blue-100">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              V2.0 Now Live
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-8 max-w-4xl mx-auto leading-[1.1]">
              Turn any website into a native Android app in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">seconds.</span>
            </h1>
            <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              No coding required. Enter your URL, customize your app icon, and get a production-ready APK instantly. Stop paying thousands for app development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://app.domain.com/dashboard" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-[0_8px_30px_rgb(37,99,235,0.2)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.4)] flex items-center justify-center gap-2">
                Mulai Convert <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </a>
              <p className="text-sm text-zinc-500 mt-4 sm:mt-0 sm:ml-4">No credit card required</p>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 px-6 bg-zinc-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need to launch</h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Powerful features packed into a simple, 3-step process.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Push Notifications",
                  desc: "Keep your users engaged with built-in OneSignal push notification support right out of the box.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                },
                {
                  title: "Custom Branding",
                  desc: "Upload your logo, set your splash screen, and pick your brand colors for a fully native feel.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                },
                {
                  title: "Lightning Fast Build",
                  desc: "Our cloud infrastructure compiles your APK in less than 60 seconds. No waiting around.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                }
              ].map((feat) => (
                <div key={feat.title} className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{feat.icon}</svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="py-24 px-6 overflow-hidden border-y border-zinc-100">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">Experience native-like performance</h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                Your web app is instantly wrapped in a high-performance Android WebView. Pull-to-refresh, deep linking, and file uploads work seamlessly.
              </p>
              <ul className="space-y-4 mb-10">
                {['No browser UI or address bar', 'Native loading indicators', 'Offline fallback pages', 'Geolocation support'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="font-medium text-zinc-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-3xl"></div>
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white relative">
                  <div className="w-full h-full bg-zinc-50 flex flex-col">
                    <div className="bg-blue-600 text-white p-4 pt-10 text-center font-bold shadow-md relative z-10">My App</div>
                    <div className="p-4 space-y-4 flex-1">
                      <div className="h-32 bg-zinc-200 rounded-xl animate-pulse"></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-zinc-200 rounded-xl animate-pulse delay-75"></div>
                        <div className="h-24 bg-zinc-200 rounded-xl animate-pulse delay-100"></div>
                      </div>
                      <div className="h-12 bg-zinc-200 rounded-xl animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Pay per App, Not per Month</h2>
              <p className="text-lg text-zinc-600">Buy credits to generate APKs. 1 Credit = 1 APK Build. No recurring subscriptions.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="p-8 rounded-3xl border border-zinc-200 bg-white shadow-sm flex flex-col">
                <h3 className="text-xl font-bold mb-2">Single Build</h3>
                <p className="text-zinc-500 mb-6 text-sm">Perfect for one-off projects</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">$9</span>
                  <span className="text-zinc-500"> / credit</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-2 text-sm text-zinc-700">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    1 APK Generation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-700">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Custom Keystore
                  </li>
                </ul>
                <a href="https://app.domain.com/register" className="w-full py-3 px-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold rounded-xl transition-colors text-center text-sm">
                  Get Started
                </a>
              </div>

              <div className="p-8 rounded-3xl border-2 border-blue-600 bg-white shadow-xl shadow-blue-900/5 flex flex-col relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold mb-2">Pro Pack</h3>
                <p className="text-zinc-500 mb-6 text-sm">Best for agencies and frequent updates</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">$29</span>
                  <span className="text-zinc-500"> / 5 credits</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-2 text-sm text-zinc-700">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    5 APK Generations
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-700">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Custom Keystore
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-700">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Priority Support
                  </li>
                </ul>
                <a href="https://app.domain.com/register" className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-sm text-center text-sm">
                  Buy Pro Pack
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24 px-6 bg-zinc-50 border-t border-zinc-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Frequently asked questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Do I need to know how to code?",
                  a: "Not at all. Just paste your website URL, upload an icon, and hit build. We handle all the Android native code behind the scenes."
                },
                {
                  q: "Can I upload the generated APK to Google Play Store?",
                  a: "Yes! Our APKs are signed and fully compliant with Google Play Store requirements. We also provide the keystore so you can push updates later."
                },
                {
                  q: "How long does a build take?",
                  a: "Most apps are built in under 60 seconds. You'll get a download link as soon as it's ready."
                },
                {
                  q: "Do the credits expire?",
                  a: "No, your purchased credits never expire. Use them whenever you need to build a new app or update an existing one."
                }
              ].map((faq) => (
                <div key={faq.q} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
                  <h4 className="text-lg font-bold text-zinc-900 mb-2">{faq.q}</h4>
                  <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to launch your app?</h2>
              <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">Join thousands of developers and businesses who have turned their websites into native mobile apps.</p>
              <a href="https://app.domain.com/register" className="inline-block bg-white text-zinc-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-zinc-100 transition-colors shadow-xl">
                Mulai Convert Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Logo">
                <title>Logo</title>
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-bold text-zinc-900 tracking-tight">Web2APK</span>
          </div>
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Web2APK. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-zinc-500">
            <a href="/terms" className="hover:text-zinc-900 transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy</a>
            <a href="/contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
