"use client";

import Image from "next/image";
import { Bot, Menu, MessageCircle, Moon, Send, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/src/assets/manoj logo.png";
import darkLogo from "@/src/assets/manoj logo white.png";
const navItems = [
  { label: "About Me", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];
export function Header() {
  type ChatMessage = { id: number; from: "ai" | "user"; text: string };
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
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

  const sendMessage = async (text = message) => {
    const trimmedMessage = text.trim();
    if (!trimmedMessage || isThinking) return;

    const userMessage: ChatMessage = { id: Date.now(), from: "user", text: trimmedMessage };
    const conversation = [...messages, userMessage];
    setMessages(conversation);
    setMessage("");
    setIsThinking(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: conversation.map(({ from, text: content }) => ({
            role: from === "ai" ? "assistant" : "user",
            content,
          })),
        }),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "The AI assistant is unavailable.");

      setMessages((currentMessages) => [
        ...currentMessages,
        { id: Date.now() + 1, from: "ai", text: result.message },
      ]);
    } catch (error) {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: Date.now() + 1,
          from: "ai",
          text: error instanceof Error
            ? `${error.message} You can also reach Manoj through the contact form below.`
            : "The AI assistant is unavailable right now. You can reach Manoj through the contact form below.",
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <header className={`topbar${menuOpen ? " menu-open" : ""}`}>
      <a className="brand" href="#top" aria-label="Manoj portfolio home" onClick={() => setMenuOpen(false)}>
        <span className="brand-logo-wrap">
          <Image className="brand-logo" src={darkMode ? darkLogo : logo} alt="Manoj Portfolio" width={360} height={130} priority />
          <Image className="brand-logo-text-overlay" src={darkMode ? darkLogo : logo} alt="" width={360} height={130} priority />
        </span>
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
              <div className="chat-identity">
                <div>
                  <span className="chat-status"><span aria-hidden="true" /> Online</span>
                </div>
              </div>
              <button className="chat-close" type="button" aria-label="Close chat" onClick={() => setChatOpen(false)}>
                <X aria-hidden="true" size={22} />
              </button>
            </div>

            {messages.length === 1 ? (
              <div className="chat-welcome">
                <div className="chat-orb" aria-hidden="true"><Bot size={38} strokeWidth={1.4} /></div>
                <h2 id="chat-title">Hey, I&apos;m Manoj</h2>
                <p>How can I assist you?</p>

                <div className="chat-prompts chat-prompts-featured">
                  {[
                    ["✦", "Start a project", "Tell me about your design idea"],
                    ["▤", "Explore my work", "See what I can create for you"],
                    ["↗", "Get a direction", "Find the right creative approach"],
                  ].map(([icon, title, description]) => (
                    <button key={title} type="button" disabled={isThinking} onClick={() => sendMessage(description)}>
                      <span className="chat-prompt-icon" aria-hidden="true">{icon}</span>
                      <span><strong>{title}</strong><small>{description}</small></span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="chat-messages" aria-live="polite" aria-busy={isThinking}>
                {messages.map((chatMessage) => (
                  <div key={chatMessage.id} className={`chat-message-row ${chatMessage.from}`}>
                    <span className="chat-message-avatar" aria-hidden="true">
                      {chatMessage.from === "ai" ? <Bot size={17} strokeWidth={1.8} /> : "You"}
                    </span>
                    <div className="chat-message-content">
                      <span className="chat-message-author">{chatMessage.from === "ai" ? "Manoj AI" : "You"}</span>
                      <p className="chat-message">{chatMessage.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {isThinking ? <p className="chat-thinking"><span /> Manoj AI is thinking...</p> : null}

            {messages.length > 1 ? <div className="chat-prompts chat-prompts-follow-up">
              {[
                "I need a brand identity",
                "Let's discuss a website",
                "I have a project idea",
              ].map((prompt) => (
                <button key={prompt} type="button" disabled={isThinking} onClick={() => sendMessage(prompt)}>
                  {prompt}
                </button>
              ))}
            </div> : null}

            <form className="chat-input-row" onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}>
              <div className="chat-input-shell">
                <input
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Message Manoj AI"
                  aria-label="Chat message"
                />
                <span className="chat-input-hint">Enter to send</span>
              </div>
              <button type="submit" aria-label="Send message" disabled={isThinking || !message.trim()}>
                <Send aria-hidden="true" size={18} strokeWidth={2.2} />
              </button>
            </form>
            <p className="chat-disclaimer">Manoj AI can make mistakes. Check important information.</p>
          </section>
        </div>
      ) : null}
    </header>
  );
}
