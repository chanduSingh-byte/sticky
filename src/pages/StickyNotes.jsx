import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Pin } from 'lucide-react';

const StickyNotes = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: "Welcome to your board! Click '+' to add a new note.", color: 'bg-yellow-200', rotate: '-2deg' },
    { id: 2, text: "Buy groceries: Milk, Eggs, Bread, and Coffee.", color: 'bg-blue-200', rotate: '1deg' }
  ]);

  const colors = [
    'bg-yellow-200', 'bg-blue-200', 'bg-green-200', 
    'bg-pink-200', 'bg-purple-200', 'bg-orange-200'
  ];

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      text: '',
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: `${(Math.random() * 6 - 3).toFixed(1)}deg` // Random rotation between -3 and 3 degrees
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const updateNote = (id, text) => {
    setNotes(notes.map(n => n.id === id ? { ...n, text } : n));
  };

  return (
    <div className="min-h-screen mt-8 bg-[#f3f4f6] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] p-8">
      {/* Header & Controls */}
      <div className="max-w-6xl mx-auto mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">Board.</h1>
          <p className="text-slate-500 font-medium">Capture your stray thoughts.</p>
        </div>
        
        <button 
          onClick={addNote}
          className="group flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-indigo-600 transition-all duration-300 shadow-xl hover:shadow-indigo-200"
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          <span className="font-bold">Add Note</span>
        </button>
      </div>

      {/* Notes Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {notes.map((note) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: note.rotate }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              whileHover={{ scale: 1.05, rotate: '0deg', zIndex: 10 }}
              className={`${note.color} p-6 h-64 shadow-lg rounded-sm flex flex-col relative group`}
              style={{ boxShadow: '5px 5px 15px rgba(0,0,0,0.05)' }}
            >
              {/* Note "Pin" Decoration */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-slate-800 opacity-20">
                <Pin className="w-6 h-6 fill-current" />
              </div>

              <textarea
                value={note.text}
                onChange={(e) => updateNote(note.id, e.target.value)}
                placeholder="Type something..."
                className="w-full h-full bg-transparent resize-none border-none focus:ring-0 text-slate-800 font-medium text-lg placeholder:text-slate-400/50"
              />

              <button
                onClick={() => deleteNote(note.id)}
                className="absolute bottom-4 right-4 p-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StickyNotes;