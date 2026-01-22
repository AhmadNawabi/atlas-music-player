// Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="text-center py-5 text-sm text-player-muted dark:text-player-muted mt-6">
      © {year} Atlas School
    </div>
  );
}