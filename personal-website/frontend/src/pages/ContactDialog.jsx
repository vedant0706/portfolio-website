import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TbLocationShare } from "react-icons/tb";

export const ContactDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger asChild>
        {children || (
          <button className="px-6 py-2 rounded-full text-white text-lg font-medium border hover:bg-black hover:border hover:border-cyan-400 cursor-pointer transition-all duration-400">
            Book a Call
          </button>
        )}
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[600px] bg-[hsl(0,0%,10%)] border-[hsl(0,0%,20%)] text-white">
        <div className="flex flex-col gap-6 py-4 playwrite-us-modern-project-info">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mb-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="quick" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-transparent border-b border-[hsl(0,0%,20%)] rounded-none h-auto p-0">
              <TabsTrigger
                value="quick"
                className="rounded-2xl border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:bg-transparent bg-transparent text-muted-foreground data-[state=active]:text-white py-3"
              >
                Quick connect
              </TabsTrigger>
              <TabsTrigger
                value="form"
                className="rounded-2xl border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:bg-transparent bg-transparent text-muted-foreground data-[state=active]:text-white py-3"
              >
                Fill a form
              </TabsTrigger>
            </TabsList>

            <TabsContent value="quick" className="mt-6 space-y-4">
              {/* Email Card */}
              <div className="group relative overflow-hidden rounded-xl border border-[hsl(0,0%,20%)] bg-gradient-to-br from-[hsl(210,100%,10%)] to-transparent p-6 hover:border-[hsl(var(--contact-blue))] transition-all cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[hsl(var(--contact-blue))]/20">
                    <Mail className="w-6 h-6 text-[hsl(var(--contact-blue))]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-[hsl(var(--contact-blue))] font-medium mb-1">
                      vedantjadhav173@gmail.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Send me an email directly
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-[hsl(var(--contact-green))]/10 border border-[hsl(var(--contact-green))]/30">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--contact-green))] animate-pulse" />
                <span className="text-sm text-[hsl(var(--contact-green))] font-medium">
                  Currently available for new opportunities
                </span>
              </div>
            </TabsContent>

            <TabsContent value="form" className="mt-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  if (
                    !form.name.value.trim() ||
                    !form.email.value.trim() ||
                    !form.message.value.trim()
                  ) {
                    alert("All fields are required.");
                    return;
                  }
                  // Add logic to handle valid form submission here
                  console.log("Form submitted:", {
                    name: form.name.value,
                    email: form.email.value,
                    message: form.message.value,
                  });
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg bg-[hsl(0,0%,15%)] border border-[hsl(0,0%,20%)] focus:border-[hsl(var(--contact-blue))] focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg bg-[hsl(0,0%,15%)] border border-[hsl(0,0%,20%)] focus:border-[hsl(var(--contact-blue))] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-[hsl(0,0%,15%)] border border-[hsl(0,0%,20%)] focus:border-[hsl(var(--contact-blue))] focus:outline-none transition-colors resize-none"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="flex items-center justify-center w-full bg-blue-700 cursor-pointer hover:bg-blue-500 text-white"
                >
                  <span className="text-white font-bold w-5 h-4">
                    <TbLocationShare />
                  </span>
                  Send Message
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};
