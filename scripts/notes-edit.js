'use strict'

const titleElement = document.querySelector('#note-title')
const dateElement = document.querySelector('#last-edited')
const bodyElement = document.querySelector('#note-body')
const doneElement = document.querySelector('#done')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note)=> note.id === noteId)
titleElement.value = note.title
bodyElement.value = note.body


titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

doneElement.addEventListener('click', (e) => {
    location.assign('index.html')
})

removeElement.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('index.html')
})

