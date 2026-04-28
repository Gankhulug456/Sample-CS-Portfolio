export default function Footer() {
  return (
    <footer className="py-12 bg-slate-900 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Alex. Built with React, Tailwind, and Motion.
        </p>
      </div>
    </footer>
  );
}
