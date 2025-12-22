import React, { useEffect, useState } from "react";
import LoaderComponent from "../components/LoaderComponent";
const API_URL = "https://notely-1-96gg.onrender.com/notes";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("token");


  const fetchNotes = async () => {
    try {
      setLoading(true);

      const res = await fetch(API_URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();


      setNotes(Array.isArray(result.data) ? result.data : []);
    } catch (err) {
      console.error("Failed to fetch notes", err);
      setNotes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `${API_URL}/update/${editingId}` : API_URL;

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) throw new Error("Failed to save note");

      setTitle("");
      setContent("");
      setEditingId(null);
      fetchNotes();
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    }
  };

  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note.id);
  };


  const handleDelete = async (id) => {
    if (!window.confirm("Delete this note?")) return;

    try {
      const res = await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to delete note");

      fetchNotes();
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    }
  };

  const formatDateTime = (isoString) => {
    const date = new Date(isoString);

    return date.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10">

        <form
          onSubmit={handleSubmit}
          className="mt-8 bg-white p-6 rounded-xl shadow"
        >
          <input maxLength={50}
            className="w-full mb-3 p-2 border rounded"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea maxLength={200}
            className="w-full mb-3 p-2 border rounded"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-400">
            {editingId ? "Update Note" : "Add Note"}
          </button>
        </form>
        <h1 className="text-3xl font-bold text-gray-900 mt-4 p-3">Your Notes</h1>
        <div className="mt-8">
          {loading ? (
            <LoaderComponent count={4} />
          ) : notes.length === 0 ? (
            <p>No notes yet</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-gray-900">{note.title}</h3>

                  <p className="text-xs text-gray-500 mt-1">
                    Created on {formatDateTime(note.created_at)}
                  </p>

                  <p className="text-gray-600 mt-2 text-sm">{note.content}</p>

                  <div className="flex justify-end gap-3 mt-4">
                    <button
                      onClick={() => handleEdit(note)}
                      className="text-blue-600 text-sm font-medium hover:underline"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(note.id)}
                      className="text-red-500 text-sm font-medium hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
