"use client";

import { useEffect, useState } from "react";
import { ApekaLogo } from "@/components/brand/ApekaLogo";
import {
  Check,
  CheckCircle2,
  Gem,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const appBaseUrl = "https://dash.apeka.dev";
  const containerClass = "mx-auto w-full max-w-[1100px] px-5 sm:px-6";
  const navItems = [
    { href: "#fitur", label: "Fitur" },
    { href: "#alur", label: "Alur" },
    { href: "#harga", label: "Harga" },
    { href: "#faq", label: "FAQ" },
  ];

  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 font-sans selection:bg-emerald-400/30 selection:text-emerald-50">
      <nav className="sticky top-0 z-50 border-b border-emerald-900/40 bg-slate-950/85 backdrop-blur-md">
        <div className={`${containerClass} flex items-center justify-between py-4`}>
          <div className="flex items-center gap-2.5">
            <ApekaLogo size={26} />
            <p className="font-brand text-[1.6rem] font-bold leading-none text-white">Apeka.dev</p>
          </div>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="font-brand transition-colors hover:text-emerald-300">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href={`${appBaseUrl}/login`} className="hidden text-sm font-medium text-slate-300 transition-colors hover:text-white sm:block">
              Masuk
            </a>
            <a
              href={`${appBaseUrl}/register`}
              className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-900/60 transition-colors hover:bg-emerald-500"
            >
              Daftar
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-emerald-800/60 p-2 text-slate-200 md:hidden"
              aria-label="Buka menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="Tutup overlay menu"
            className="absolute inset-0 bg-slate-950/70 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-[86vw] max-w-80 animate-[slideIn_.28s_ease-out] border-l border-emerald-900/40 bg-slate-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-emerald-900/40 px-5 py-4">
              <p className="font-brand text-sm font-semibold text-white">Apeka.dev</p>
              <button
                type="button"
                aria-label="Tutup menu"
                className="rounded-lg border border-emerald-800/60 p-2 text-slate-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-2 px-5 py-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-3 font-brand text-sm font-medium text-slate-200 hover:bg-emerald-900/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-3 space-y-3 border-t border-emerald-900/40 px-5 py-5">
              <a
                href={`${appBaseUrl}/login`}
                className="block rounded-xl border border-emerald-800/60 px-4 py-3 text-center text-sm font-medium text-slate-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Masuk
              </a>
              <a
                href={`${appBaseUrl}/register`}
                className="block rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Daftar
              </a>
            </div>
          </aside>
        </div>
      ) : null}

      <main>
        <section className="py-14 sm:py-16">
          <div className={containerClass}>
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-800/70 bg-emerald-900/30 px-3 py-1 text-xs font-semibold text-emerald-200">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                Alur APK siap submission
              </div>
              <h1 className="mb-5 text-[2rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[2.35rem] md:text-[2.8rem]">
                Ubah website Anda menjadi
                <span className="text-emerald-300"> aplikasi Android siap rilis</span> tanpa membangun ulang produk.
              </h1>
              <p className="mb-7 max-w-2xl text-base leading-relaxed text-slate-300">
                Apeka.dev membantu tim mengemas web app menjadi APK Android production-ready dengan branding, signing, dan proses build yang rapi.
              </p>
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <a
                  href={`${appBaseUrl}/register`}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3 text-base font-semibold text-white shadow-[0_14px_36px_rgba(16,185,129,0.25)] transition-all hover:bg-emerald-500 sm:w-auto"
                >
                  Daftar Sekarang
                </a>
                <a
                  href={`${appBaseUrl}/login`}
                  className="w-full rounded-full border border-emerald-700/70 px-6 py-3 text-center text-sm font-semibold text-emerald-100 transition-colors hover:bg-emerald-900/30 sm:w-auto"
                >
                  Masuk Dashboard
                </a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-5 text-xs text-slate-400 sm:text-sm">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Source of truth tetap di web app Anda
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Build berulang dengan output konsisten
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className={`${containerClass} grid gap-4 md:grid-cols-3`}>
            {[
              {
                title: "Onboarding cepat",
                desc: "Mulai dari URL dan aset brand dalam satu alur yang jelas.",
                icon: Rocket,
              },
              {
                title: "Output konsisten",
                desc: "Generate APK berulang setiap ada update pada website.",
                icon: Workflow,
              },
              {
                title: "Siap kolaborasi",
                desc: "Bagikan hasil build ke QA dan stakeholder lebih cepat.",
                icon: ShieldCheck,
              },
            ].map((item) => (
              <div key={item.title} className="relative overflow-hidden rounded-2xl border border-emerald-900/40 bg-slate-900/60 p-5 shadow-sm">
                <svg className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 text-emerald-950" viewBox="0 0 120 120" fill="none" aria-hidden="true">
                  <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="8" />
                </svg>
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-900/50 text-emerald-300">
                  <item.icon className="h-4.5 w-4.5" aria-hidden="true" />
                </div>
                <p className="text-xl font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="fitur" className="bg-slate-900/50 py-20">
          <div className={`${containerClass} grid items-center gap-10 lg:grid-cols-2`}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Fitur utama</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">Perlengkapan rilis Android yang sudah siap pakai.</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Apeka.dev menangani proses packaging dan release supaya tim Anda tetap fokus mengembangkan produk inti.
              </p>
              <div className="mt-7 space-y-3">
                {[
                  "Kustom ikon aplikasi, splash screen, dan warna brand",
                  "Signed APK dengan keystore Anda untuk update Play Store",
                  "Fallback offline dan loading state terkontrol",
                  "Riwayat build untuk tracking rilis tim",
                  "Terintegrasi MAYAR.ID untuk alur pembayaran kredit yang lebih praktis",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-900/50">
                      <Check className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
                    </div>
                    <p className="text-sm leading-relaxed text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5">
              <div className="rounded-3xl border border-emerald-900/40 bg-slate-900/60 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Kontrol branding</h3>
                  <span className="rounded-full border border-emerald-800/70 bg-emerald-900/30 px-2.5 py-1 text-[11px] font-semibold text-emerald-200">Unggah cepat</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">Upload aset sekali, lalu Apeka menerapkan secara konsisten di launcher, splash, dan loading state.</p>
                <div className="mt-4 flex items-center gap-3.5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-900/40 bg-slate-950 text-emerald-300 font-bold">A</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Palet warna</p>
                    <div className="mt-2 flex gap-2">
                      <span className="h-4 w-4 rounded-full bg-emerald-500" />
                      <span className="h-4 w-4 rounded-full bg-emerald-400" />
                      <span className="h-4 w-4 rounded-full bg-emerald-300" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-emerald-900/40 bg-slate-900/60 p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-white">Alur rilis</h3>
                  <p className="mt-2 text-sm text-slate-300">Queue build, cek progres, lalu unduh output dari satu dashboard.</p>
                </div>
                <div className="rounded-2xl border border-emerald-900/40 bg-slate-900/60 p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-white">Fokus submission</h3>
                  <p className="mt-2 text-sm text-slate-300">Dirancang untuk iterasi QA cepat sebelum publish ke Play Store.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="alur" className="py-20">
          <div className={`${containerClass} grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]`}>
            <div className="rounded-[28px] border border-emerald-900/40 bg-slate-900/60 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Alur kerja</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">Dari URL ke APK Android dalam tiga langkah.</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">Apeka menjaga proses tetap sederhana dengan milestone yang mudah dipantau.</p>
              <div className="mt-6 space-y-5">
                {[
                  {
                    step: "01",
                    title: "Hubungkan website",
                    desc: "Masukkan URL produksi dan cek preview app shell.",
                  },
                  {
                    step: "02",
                    title: "Atur branding",
                    desc: "Unggah ikon dan splash, lalu sesuaikan konfigurasi brand.",
                  },
                  {
                    step: "03",
                    title: "Build dan distribusi",
                    desc: "Generate signed APK untuk QA dan persiapan submission.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="font-semibold text-emerald-300">{item.step}</div>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="mt-1.5 text-sm text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5">
              <div className="rounded-[28px] border border-emerald-900/40 bg-slate-900/60 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Pelacak build langsung</p>
                  <span className="text-xs font-semibold text-emerald-300">Queue #12</span>
                </div>
                <div className="mt-5 space-y-3.5">
                  {[
                    { label: "Verifikasi aset", value: "Selesai" },
                    { label: "Kompilasi app shell", value: "Berjalan" },
                    { label: "Signing APK", value: "Antrian" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="font-semibold text-white">{item.value}</span>
                    </div>
                  ))}
                  <div className="h-2 w-full rounded-full bg-emerald-900/50">
                    <div className="h-2 w-2/3 rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] border border-emerald-800/60 bg-emerald-900/50 p-6 text-white shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Kolaborasi</p>
                <h3 className="mt-3 text-xl font-semibold">Bagikan build QA ke tim secara instan.</h3>
                <p className="mt-2 text-sm text-emerald-100/90">Gunakan satu tautan distribusi untuk QA, review produk, dan pengecekan rilis.</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-emerald-950">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-emerald-100">dash.apeka.dev/history/your-build</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="harga" className="py-20">
          <div className={containerClass}>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Harga</p>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">Harga transparan berbasis kredit.</h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300">1 generate = 1.000 kredit. Mulai dari Rp10.000 untuk 1.000 kredit, dengan paket 2.000 kredit untuk signed APK + AAB.</p>
              </div>
              <a href={`${appBaseUrl}/register`} className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500">
                Daftar
              </a>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative overflow-hidden rounded-[28px] border border-emerald-900/40 bg-slate-900/60 p-6 shadow-sm">
                <svg className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 text-emerald-950" viewBox="0 0 120 120" fill="none" aria-hidden="true">
                  <path d="M20 20H100V100H20V20Z" stroke="currentColor" strokeWidth="10" />
                </svg>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Kredit starter</p>
                    <p className="mt-2 text-2xl font-bold text-white">Rp10.000 <span className="text-sm font-medium text-slate-400">/ 1.000 kredit</span></p>
                  </div>
                  <span className="rounded-full border border-emerald-800/70 bg-emerald-900/30 px-3 py-1 text-[11px] font-semibold text-emerald-200">Starter</span>
                </div>
                <ul className="mt-5 space-y-2.5 text-sm text-slate-200">
                  {[
                    "1x generate = 1.000 kredit",
                    "Tarif: Rp10.000 per generate",
                    "Dukungan custom keystore",
                    "Tracking progres build",
                    "Dukungan via email",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={`${appBaseUrl}/register`} className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-emerald-800/70 px-4 py-3 text-sm font-semibold text-emerald-100 hover:bg-emerald-900/30">
                  Mulai 1x generate
                </a>
              </div>
              <div className="relative overflow-hidden rounded-[28px] border border-emerald-700/70 bg-emerald-900/45 p-6 text-white shadow-sm">
                <svg className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 text-emerald-600/35" viewBox="0 0 120 120" fill="none" aria-hidden="true">
                  <path d="M60 10L105 88H15L60 10Z" fill="currentColor" />
                </svg>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200">Paling dipilih</p>
                <p className="mt-3 text-2xl font-bold">Rp20.000 <span className="text-sm font-medium text-emerald-100">/ 2.000 kredit</span></p>
                <p className="mt-3 text-sm text-emerald-100/90">Paket untuk tim yang membutuhkan signed APK dan AAB dalam satu alur.</p>
                <ul className="mt-5 space-y-2.5 text-sm text-emerald-50">
                  {[
                    "Signed APK + AAB package = 2.000 kredit",
                    "Harga paket setara: Rp20.000",
                    "Prioritas antrian build",
                    "Riwayat build untuk review tim",
                    "Dukungan prioritas",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Gem className="h-4 w-4 text-emerald-200" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={`${appBaseUrl}/register`} className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-50">
                  Pilih Paket Signed + AAB
                </a>
              </div>
            </div>
            <div className="mt-5 grid gap-3.5 md:grid-cols-3">
              {[
                { icon: Layers3, label: "Satuan kredit", value: "1 generate = 1.000 kredit" },
                { icon: ShieldCheck, label: "Signed output", value: "Signing APK siap dengan keystore Anda" },
                { icon: Sparkles, label: "Opsi AAB", value: "Alur AAB tersedia pada paket 2.000 kredit" },
              ].map((meta) => (
                <div key={meta.label} className="rounded-2xl border border-emerald-900/40 bg-slate-900/60 p-4">
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-900/50 text-emerald-300">
                    <meta.icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-300">{meta.label}</p>
                  <p className="mt-2 text-sm text-slate-200">{meta.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-emerald-900/30 bg-slate-900/50 py-20">
          <div className={containerClass}>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">FAQ</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">Pertanyaan umum sebelum rilis.</h2>
            </div>
            <div className="mt-10 grid gap-3.5">
              {[
                {
                  q: "Apakah saya perlu menulis native code?",
                  a: "Tidak. Apeka.dev mengemas website Anda dengan Android shell yang sudah teruji. Anda cukup mengelola web app dan aset branding.",
                },
                {
                  q: "Apakah bisa publish ke Google Play?",
                  a: "Bisa. Anda mendapatkan output signed APK dan opsi AAB untuk mendukung proses publikasi.",
                },
                {
                  q: "Seberapa cepat proses build?",
                  a: "Durasi build tergantung aset proyek, namun alurnya dirancang agar iterasi QA tetap cepat.",
                },
                {
                  q: "Apakah kredit memiliki masa berlaku?",
                  a: "Tidak. Kredit tidak kedaluwarsa dan bisa digunakan kapan saja saat Anda perlu build baru.",
                },
              ].map((faq) => (
                <details key={faq.q} className="group rounded-2xl border border-emerald-900/40 bg-slate-900/65 p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-white">
                    {faq.q}
                    <span className="ml-4 text-emerald-300">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className={containerClass}>
            <div className="rounded-[2rem] border border-emerald-800/60 bg-emerald-900/50 p-8 text-center md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">Siap rilis</p>
              <h2 className="mb-5 mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Bawa website Anda ke Android bersama Apeka.dev.</h2>
              <p className="mx-auto mb-8 max-w-2xl text-base text-emerald-100/90">Siapkan proses submission APK yang rapi untuk produk, tim, dan timeline launch Anda.</p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={`${appBaseUrl}/register`} className="inline-block rounded-full bg-emerald-100 px-7 py-3 text-base font-bold text-emerald-950 transition-colors hover:bg-emerald-50">
                  Daftar
                </a>
                <a href={`${appBaseUrl}/login`} className="inline-block rounded-full border border-emerald-300/70 px-7 py-3 text-sm font-semibold text-emerald-100 transition-colors hover:bg-emerald-900/40">
                  Masuk
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-900/40 bg-slate-950 py-10">
        <div className={`${containerClass} flex flex-col items-center justify-between gap-5 md:flex-row`}>
          <div className="flex items-center gap-2">
            <ApekaLogo size={18} />
            <span className="font-brand font-bold text-white">Apeka.dev</span>
          </div>
          <div className="text-center text-sm text-slate-400 md:text-left">
            <p>© {new Date().getFullYear()} Apeka.dev. Hak cipta dilindungi.</p>
            <p className="mt-1 text-xs text-emerald-300/90">Credit: Terintegrasi dengan MAYAR.ID</p>
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="/terms" className="font-brand transition-colors hover:text-white">Syarat</a>
            <a href="/privacy" className="font-brand transition-colors hover:text-white">Privasi</a>
            <a href="/contact" className="font-brand transition-colors hover:text-white">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
