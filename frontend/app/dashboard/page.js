"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AddNote from "../components/AddNote";

export default function Dashboard() {
  const [userId, setUserId] = useState(null);
  const [notes, setNotes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (!id) {
      router.push("/login");
    } else {
      setUserId(id);
      fetchNotes(id);
    }
  }, []);

  const fetchNotes = async (id) => {
    const res = await fetch(`http://localhost:8080/api/notes/user/${id}`);
    if (res.ok) {
      const data = await res.json();
      setNotes(data);
    }
  };

  const deleteNote = async (noteId) => {
    const res = await fetch(`http://localhost:8080/api/notes/${noteId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setNotes(notes.filter((note) => note.id !== noteId));
    } else {
      alert("Could not delete note");
    }
  };

  if (!userId) return null;

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your training notes</h1>

      <AddNote userId={userId} />

      <div className="mt-10 space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2 text-black">Saved sessions</h2>
              {notes.length === 0 ? (
                <p className="text-gray-500 italic">No notes found.</p>
              ) : (
                notes.map((note) => (
                  <div
                    key={note.id}
                    className="p-4 border border-gray-300 rounded bg-white flex justify-between items-center shadow-sm"
                  >
                    <div className="flex-1">
                      <p className="text-lg text-black font-medium">{note.content}</p>
                      {note.createdAt && (
                        <small className="text-gray-600 block mt-1">
                          {new Date(note.createdAt).toLocaleString()}
                        </small>
                      )}
                    </div>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors ml-4"
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
    </main>
  );
}