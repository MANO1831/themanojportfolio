"use client";

import Image from "next/image";
import { Menu, MessageCircle, Moon, Send, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/src/assets/manoj logo.png";
const navItems = [
  { label: "About Me", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "ai",
      text: "Hi, I\'m Manoj\'s design assistant. Tell me about your project and I\'ll help you find the right next step.",
    },
  ]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme ? savedTheme === "dark" : prefersDark;
    const frame = window.requestAnimationFrame(() => setDarkMode(theme));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    window.localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const openChat = () => {
    setMenuOpen(false);
    setChatOpen(true);
  };

  const sendMessage = (text = message) => {
    const trimmedMessage = text.trim();
    if (!trimmedMessage) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: Date.now(), from: "user", text: trimmedMessage },
      {
        id: Date.now() + 1,
        from: "ai",
        text: "That sounds interesting. Share a little more about your goals, timeline, or budget, and Manoj can shape the best creative direction for you.",
      },
    ]);
    setMessage("");
  };

  return (
    <header className={`topbar${menuOpen ? " menu-open" : ""}`}>
      <a className="brand" href="#top" aria-label="Manoj portfolio home" onClick={() => setMenuOpen(false)}>
        <Image src={logo} alt="Manoj Portfolio" width={360} height={130} priority />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        {menuOpen ? <X aria-hidden="true" size={26} /> : <Menu aria-hidden="true" size={26} />}
      </button>

      <nav id="main-navigation" className="nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-item" onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="theme-toggle"
        type="button"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={darkMode}
        onClick={() => setDarkMode((isDark) => !isDark)}
      >
        {darkMode ? <Sun aria-hidden="true" size={20} /> : <Moon aria-hidden="true" size={20} />}
      </button>

      <button className="talk-btn" type="button" onClick={openChat}>
        <MessageCircle aria-hidden="true" size={20} strokeWidth={1.8} />
        Let&apos;s Talk
      </button>

      {chatOpen ? (
        <div className="chat-layer" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setChatOpen(false);
        }}>
          <section className="chat-panel" role="dialog" aria-modal="true" aria-labelledby="chat-title">
            <div className="chat-header">
              <div>
                <span className="chat-status">ONLINE NOW</span>
                <h2 id="chat-title">Let&apos;s make something meaningful.</h2>
              </div>
              <button className="chat-close" type="button" aria-label="Close chat" onClick={() => setChatOpen(false)}>
                <X aria-hidden="true" size={22} />
              </button>
            </div>

            <div className="chat-messages" aria-live="polite">
              {messages.map((chatMessage) => (
                <div key={chatMessage.id} className={`chat-message ${chatMessage.from}`}>
                  {chatMessage.text}
                </div>
              ))}
            </div>

            <div className="chat-prompts">
              {[
                "I need a brand identity",
                "Let's discuss a website",
                "I have a project idea",
              ].map((prompt) => (
                <button key={prompt} type="button" onClick={() => sendMessage(prompt)}>
                  {prompt}
                </button>
              ))}
            </div>

            <form className="chat-input-row" onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}>
              <input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Type your project idea..."
                aria-label="Chat message"
              />
              <button type="submit" aria-label="Send message">
                <Send aria-hidden="true" size={19} />
              </button>
            </form>
          </section>
        </div>
      ) : null}
    </header>
  );
}
