export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">CORFILS.AI</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Platforma inteligentă pentru gestionarea documentelor și proceselor
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Începe acum
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Află mai multe
          </a>
        </div>
      </div>
    </main>
  )
}
