import { Button } from "components/ui/button";
import { Card, CardContent, CardHeader } from "components/ui/card";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Resume() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <Card className="mb-6 shadow-lg">
        <CardHeader>
          <h1 className="text-3xl font-bold mb-2">Resume</h1>
          <p className="text-gray-600">Full-Stack Developer | Toronto, ON</p>
        </CardHeader>
        <CardContent>
          <Button as="a" href="/resume.pdf" download size="lg" className="mb-4">
            Download PDF
          </Button>
          <div className="flex gap-4 text-xl mb-4">
            <a href="mailto:hussein@digitalhus.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://linkedin.com/in/husseinsalim" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://x.com/husseinsalim25" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
          {/* Add your resume content here, styled with Tailwind */}
        </CardContent>
      </Card>
    </main>
  );
}
