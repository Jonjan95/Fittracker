package com.fittracker.Fittracker.service;

import com.fittracker.Fittracker.model.Note;
import com.fittracker.Fittracker.repository.NoteRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NoteService {
    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public Note saveNote(Note note) {
        return noteRepository.save(note);
    }

    public List<Note> getNotesByUserId(Long userId) {
        return noteRepository.findByUserId(userId);
    }

    public void deleteNote(Long id) {
        noteRepository.deleteById(id);
    }
}