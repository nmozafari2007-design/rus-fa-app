import Link from "next/link";

// اگر UserMenu داری (بعداً برای auth)، این ایمپورت را نگه دار.
// اگر فعلاً نداری، همین خط را کامنت کن.
// import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f19]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <span className="text-sm font-black"></span>
          </div>
          <div className="leading-tight">
            <div className="text-base font-extrabold">N-Russian Lab</div>
            <div className="text-xs text-white/60"></div>
          </div>
        </Link>

        {/* Right: Nav + Auth */}
        <nav className="flex items-center gap-2">
          <HeaderLink href="/about" label=" About " />
        
          

          <div className="ml-2 hidden items-center gap-2 sm:flex">
            {/* اگر auth هنوز نداری، این دوتا دکمه کافی است */}
            <Link
              href="/login"
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-bold text-white hover:bg-white/10"
            >
              Sign in
            </Link>

            <Link
              href="/login"
              className="rounded-xl bg-white px-3 py-2 text-sm font-extrabold text-[#0b0f19] hover:bg-white/90"
            >
              Sign up
            </Link>

            {/* اگر UserMenu داری، دکمه‌ها را حذف کن و این را فعال کن */}
            {/*
              <UserMenu />
            */}
          </div>
        </nav>
      </div>
    </header>
  );
}

function HeaderLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-extrabold text-white hover:bg-white/10"
    >
      {label}
    </Link>
  );
}