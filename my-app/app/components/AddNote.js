"use client";

import { useState } from "react";

export default function AddNote({ userId }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Konvertera userId till siffra för att matcha backend-modellens datatyp
    const noteData = {
      content: content,
      user: { id: parseInt(userId) }
    };

    try {
      const res = await fetch("http://localhost:8080/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(noteData),
      });

      if (res.ok) {
        setContent("");
        window.location.reload();
      } else {
        const errorMsg = await res.text();
        console.error("Backend returnerade fel:", errorMsg);
        alert("Kunde inte spara: " + errorMsg);
      }
    } catch (error) {
      console.error("Nätverksfel eller anslutning misslyckades:", error);
      alert("Anslutningsfel till servern.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        className="w-full p-2 border"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Skriv träningsnotering..."
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 mt-2">
        Spara
      </button>
    </form>
  );
}