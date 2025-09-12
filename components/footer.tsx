export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold text-primary">
              Hussein<span className="text-destructive">Salim</span>
            </p>
            <p className="text-sm text-muted-foreground">Full Stack Developer & Brand Storyteller</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">© {currentYear} Hussein Salim. All rights reserved.</p>
            <p className="text-xs text-muted-foreground mt-1">Crafted with hospitality excellence in mind</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
