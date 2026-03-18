export const metadata = {
  robots: "noindex, nofollow",
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="tools-root" style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#0a0a0a", overflow: "auto" }}>
      <style>{`
        #tools-root ~ *,
        header, footer, nav { display: none !important; }
      `}</style>
      {children}
    </div>
  );
}
