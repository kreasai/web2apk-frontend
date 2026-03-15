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
    <div className="min-h-screen bg-[#f7faf7] text-slate-900 font-sans selection:bg-emerald-200 selection:text-emerald-950">
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-emerald-100">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-emerald-600/10 border border-emerald-200 flex items-center justify-center" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Apeka logo">
              <title>Apeka logo</title>
              <path d="M4 14.5C6.2 7.5 11 4 18.5 4" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
              <path d="M5 19.5C7.5 14.8 12 12 19 12" stroke="#0f766e" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="8" cy="9" r="2" fill="#10b981"/>
            </svg>
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight leading-none">Apeka.dev</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-700">Site to APK</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#workflow" className="hover:text-slate-900 transition-colors">Workflow</a>
          <a href="#showcase" className="hover:text-slate-900 transition-colors">Showcase</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://app.domain.com/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block">
            Log in
          </a>
          <a href="https://app.domain.com/register" className="bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-200/70">
            Register
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-emerald-200 p-2 text-slate-700 md:hidden"
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
            className="absolute inset-0 bg-emerald-900/25"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-80 max-w-[86vw] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-emerald-100 px-5 py-4">
              <p className="text-sm font-semibold tracking-tight text-slate-900">Menu</p>
              <button
                type="button"
                aria-label="Close menu"
                className="rounded-lg border border-emerald-200 p-2 text-slate-700"
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
                { href: '#workflow', label: 'Workflow' },
                { href: '#showcase', label: 'Showcase' },
                { href: '#pricing', label: 'Pricing' },
                { href: '#faq', label: 'FAQ' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-emerald-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-3 space-y-3 border-t border-emerald-100 px-5 py-5">
              <a
                href="https://app.domain.com/login"
                className="block rounded-xl border border-emerald-200 px-4 py-3 text-center text-sm font-medium text-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </a>
              <a
                href="https://app.domain.com/register"
                className="block rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </a>
            </div>
          </aside>
        </div>
      ) : null}

      <main>
        <section className="relative pt-24 pb-28 px-6 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" aria-hidden="true"></div>
          <div className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-lime-200/30 blur-3xl" aria-hidden="true"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl h-48 border border-emerald-100/80 rounded-[48px]" aria-hidden="true"></div>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-6 border border-emerald-100">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                Launch-ready Android apps from your site
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.08]">
                Apeka.dev converts your website into a
                <span className="text-emerald-700"> polished Android APK</span> in minutes.
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Skip weeks of native development. Paste your URL, upload your branding, and ship an app with offline support, push-ready hooks, and Play Store compliance.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="https://app.domain.com/register" className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all shadow-[0_14px_40px_rgba(16,185,129,0.28)] flex items-center justify-center gap-2">
                  Register
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </a>
                <a href="https://app.domain.com/login" className="w-full sm:w-auto px-6 py-3 rounded-full border border-emerald-200 text-emerald-900 font-semibold hover:bg-emerald-50 transition-colors text-center">
                  Log in
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  No credit card required
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  60s average build time
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] border border-emerald-100/70 bg-white/70 backdrop-blur-sm"></div>
              <div className="relative rounded-[32px] border border-emerald-100 bg-white shadow-[0_30px_80px_rgba(15,118,110,0.12)] p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Apeka Build Canvas</p>
                    <p className="text-xs text-emerald-700">Live preview · Android 14</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                    <span className="h-3 w-3 rounded-full bg-emerald-200"></span>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
                    <p className="text-xs font-semibold text-emerald-800">Website source</p>
                    <p className="text-sm text-slate-700 mt-1">https://yourdomain.com</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-emerald-100 bg-white p-4">
                      <p className="text-xs font-semibold text-slate-600">Brand kit</p>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                          <span className="text-emerald-700 font-semibold">A</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Icon + splash</p>
                          <p className="text-xs text-slate-500">Uploaded</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-emerald-100 bg-white p-4">
                      <p className="text-xs font-semibold text-slate-600">Build status</p>
                      <div className="mt-3">
                        <div className="h-2 w-full rounded-full bg-emerald-100">
                          <div className="h-2 w-3/4 rounded-full bg-emerald-500"></div>
                        </div>
                        <p className="text-xs text-emerald-700 mt-2">Packaging assets · 75%</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-white p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-slate-600">APK output</p>
                      <p className="text-sm font-semibold text-slate-900 mt-1">apeka-yourdomain-v1.apk</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              {
                title: "250+ teams",
                desc: "Builders, agencies, and founders shipping mobile in days, not months.",
              },
              {
                title: "99.9%",
                desc: "Build pipeline uptime across signing, packaging, and delivery.",
              },
              {
                title: "60s",
                desc: "Average APK generation time with queued assets.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-emerald-100 bg-white/70 p-6 shadow-sm">
                <p className="text-2xl font-bold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="py-24 px-6 bg-white/70">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Core features</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">A full mobile release kit, already wired.</h2>
              <p className="text-lg text-slate-600 mt-5 leading-relaxed">
                Apeka.dev handles the Android scaffolding so you can focus on content and growth. Each build includes the essentials teams need to ship confidently.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Custom app icon, splash screen, and brand colors",
                  "Signed APK with your keystore for Play Store updates",
                  "Offline fallbacks, pull-to-refresh, and native loading",
                  "Ready hooks for analytics and push providers",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg className="h-4 w-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">Brand controls</h3>
                  <span className="text-xs font-semibold text-emerald-700 bg-white px-3 py-1 rounded-full border border-emerald-100">Drag & drop</span>
                </div>
                <p className="text-sm text-slate-600 mt-3">Upload assets once. Apeka applies them across splash, launcher, and loading states.</p>
                <div className="mt-5 flex items-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-700 font-bold">A</div>
                  <div>
                    <p className="text-sm font-semibold">Color palette</p>
                    <div className="mt-2 flex gap-2">
                      <span className="h-4 w-4 rounded-full bg-emerald-600"></span>
                      <span className="h-4 w-4 rounded-full bg-emerald-300"></span>
                      <span className="h-4 w-4 rounded-full bg-emerald-100"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">Release pipeline</h3>
                  <p className="text-sm text-slate-600 mt-3">Queue builds, track progress, and download releases with full audit logs.</p>
                </div>
                <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">Security ready</h3>
                  <p className="text-sm text-slate-600 mt-3">Your keystore stays yours, and builds are encrypted at rest.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div className="rounded-[32px] border border-emerald-100 bg-white p-8 shadow-sm relative overflow-hidden">
              <div className="absolute -top-20 -right-10 h-48 w-48 rounded-full bg-emerald-100/60" aria-hidden="true"></div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Workflow</p>
              <h2 className="text-3xl font-bold tracking-tight mt-4">From URL to Android in three guided steps.</h2>
              <p className="text-slate-600 mt-5">Apeka keeps the pipeline simple with milestones you can track and share.</p>
              <div className="mt-8 space-y-6">
                {[
                  {
                    step: "01",
                    title: "Connect your website",
                    desc: "Paste the live URL and verify the app shell with our visual inspector.",
                  },
                  {
                    step: "02",
                    title: "Brand and configure",
                    desc: "Upload assets, choose orientation, set offline rules, and connect analytics.",
                  },
                  {
                    step: "03",
                    title: "Build and ship",
                    desc: "Generate a signed APK and push directly to Google Play or distribute privately.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="text-emerald-700 font-semibold">{item.step}</div>
                    <div>
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-[32px] border border-emerald-100 bg-white p-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-600">Live build tracker</p>
                  <span className="text-xs font-semibold text-emerald-700">Queue #12</span>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    { label: "Assets verified", value: "Done" },
                    { label: "App shell compiled", value: "Running" },
                    { label: "APK signed", value: "Queued" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-semibold text-slate-900">{item.value}</span>
                    </div>
                  ))}
                  <div className="h-2 w-full rounded-full bg-emerald-100">
                    <div className="h-2 w-2/3 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
              </div>
              <div className="rounded-[32px] border border-emerald-100 bg-emerald-900 text-white p-8 shadow-sm relative overflow-hidden">
                <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-emerald-500/20" aria-hidden="true"></div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Delivery</p>
                <h3 className="text-2xl font-semibold mt-4">Share builds instantly with your team.</h3>
                <p className="text-sm text-emerald-100/80 mt-3">One link for QA, stakeholders, and release managers.</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="h-5 w-5" fill="none" stroke="white" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                  </div>
                  <p className="text-sm">apeka.dev/build/your-app</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="showcase" className="py-24 px-6 bg-white/70 border-y border-emerald-100">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Showcase</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">Deliver a native feel without rewriting your stack.</h2>
              <p className="text-lg text-slate-600 mt-5">WebView performance, native navigation, and trusted Android UX patterns—wrapped in a sleek UI shell.</p>
              <div className="mt-8 space-y-4">
                {[
                  "No browser chrome or address bar",
                  "Adaptive loading screens with your brand",
                  "Offline messaging and retry states",
                  "Deep link support for campaigns",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full border border-emerald-200 bg-emerald-50 flex items-center justify-center">
                      <svg className="h-4 w-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute -inset-10 bg-emerald-100/50 rounded-[48px] blur-2xl" aria-hidden="true"></div>
              <div className="relative rounded-[36px] border border-emerald-100 bg-white shadow-[0_30px_70px_rgba(15,118,110,0.18)] p-6 w-full max-w-md">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Apeka Mobile Preview</p>
                        <p className="text-xs text-emerald-700">Frame · 6.7&quot; display</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">Live</span>
                </div>
                <div className="rounded-[28px] border border-emerald-200 overflow-hidden">
                  <div className="bg-emerald-700 text-white px-5 py-4">
                    <p className="text-sm font-semibold">Your App</p>
                    <p className="text-xs text-emerald-100">Home · Offers</p>
                  </div>
                  <div className="p-5 space-y-4 bg-emerald-50/50">
                    <div className="rounded-2xl bg-white border border-emerald-100 p-4">
                      <p className="text-xs text-emerald-700 font-semibold">Featured</p>
                      <p className="text-sm font-semibold text-slate-900 mt-2">Spring campaign landing</p>
                      <div className="mt-4 h-2 w-full rounded-full bg-emerald-100">
                        <div className="h-2 w-2/3 rounded-full bg-emerald-500"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white border border-emerald-100 p-4">
                        <p className="text-xs text-slate-500">Orders</p>
                        <p className="text-lg font-semibold text-slate-900 mt-2">1,204</p>
                      </div>
                      <div className="rounded-2xl bg-white border border-emerald-100 p-4">
                        <p className="text-xs text-slate-500">Avg. load</p>
                        <p className="text-lg font-semibold text-slate-900 mt-2">1.1s</p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white border border-emerald-100 p-4">
                      <p className="text-xs text-slate-500">Quick actions</p>
                      <div className="mt-3 flex gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-100">Share</span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-100">Refresh</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Pricing</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">Credits that scale with your release cadence.</h2>
                <p className="text-lg text-slate-600 mt-4 max-w-2xl">Buy only what you need. Each credit equals a full APK build with signing included.</p>
              </div>
              <a href="https://app.domain.com/register" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700">Register</a>
            </div>
            <div className="mt-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
              <div className="rounded-[32px] border border-emerald-100 bg-white p-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-600">Single build</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">$9 <span className="text-base font-medium text-slate-500">/ credit</span></p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">Starter</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {[
                    "One APK build",
                    "Custom keystore delivery",
                    "Basic analytics hooks",
                    "Email support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://app.domain.com/register" className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-emerald-200 px-4 py-3 text-sm font-semibold text-emerald-900 hover:bg-emerald-50">
                  Start with one build
                </a>
              </div>
              <div className="rounded-[32px] border border-emerald-200 bg-emerald-900 text-white p-8 shadow-sm relative overflow-hidden">
                <div className="absolute -top-20 right-0 h-48 w-48 rounded-full bg-emerald-500/30" aria-hidden="true"></div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Most chosen</p>
                <p className="text-3xl font-bold mt-4">$29 <span className="text-base font-medium text-emerald-100">/ 5 credits</span></p>
                <p className="text-sm text-emerald-100/80 mt-4">Ideal for agencies, updates, and QA teams.</p>
                <ul className="mt-6 space-y-3 text-sm text-emerald-50">
                  {[
                    "Five APK builds",
                    "Priority build queue",
                    "Release notes export",
                    "Priority support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://app.domain.com/register" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white text-emerald-900 px-4 py-3 text-sm font-semibold hover:bg-emerald-50">
                  Choose Pro Pack
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24 px-6 bg-white/70 border-t border-emerald-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">FAQ</p>
              <h2 className="text-3xl font-bold tracking-tight mt-4">Answers before you ship.</h2>
            </div>
            <div className="mt-12 grid gap-4">
              {[
                {
                  q: "Do I need to write any native code?",
                  a: "No. Apeka.dev packages your website with a tested Android shell. You only manage your web app and branding assets.",
                },
                {
                  q: "Can I publish to Google Play?",
                  a: "Yes. We provide signed APKs and your keystore so you can upload and issue updates whenever you need.",
                },
                {
                  q: "How fast is the build pipeline?",
                  a: "Most builds finish in under a minute once assets are verified. You can queue multiple releases at once.",
                },
                {
                  q: "Do credits expire?",
                  a: "Credits never expire. Use them when you need a new build or an update.",
                },
              ].map((faq) => (
                <details key={faq.q} className="group rounded-2xl border border-emerald-100 bg-white p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-slate-900">
                    {faq.q}
                    <span className="ml-4 text-emerald-600">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-emerald-950 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-lime-400/20 blur-3xl"></div>
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Ready to ship</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Bring your site to Android with Apeka.dev.</h2>
              <p className="text-lg text-emerald-100/80 mb-10 max-w-2xl mx-auto">Launch faster, keep control of your brand, and deliver a native experience your users will trust.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://app.domain.com/register" className="inline-block bg-white text-emerald-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-50 transition-colors shadow-xl">
                  Register
                </a>
                <a href="https://app.domain.com/login" className="inline-block border border-emerald-200 text-emerald-100 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-900/40 transition-colors">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-100 bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-600/10 border border-emerald-200 flex items-center justify-center" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Apeka logo">
                <title>Apeka logo</title>
                <path d="M4 14.5C6.2 7.5 11 4 18.5 4" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 19.5C7.5 14.8 12 12 19 12" stroke="#0f766e" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="8" cy="9" r="2" fill="#10b981"/>
              </svg>
            </div>
            <span className="font-bold text-slate-900 tracking-tight">Apeka.dev</span>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Apeka.dev. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <a href="/terms" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="/contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
