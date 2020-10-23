// Purpose: To render a single journal entry as an
//            HTML representation of the data


export const JournalEntryComponent = (entryObj) => {
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">
            <h5>Date: ${entryObj.date}</h5>
            <p>Concept: ${entryObj.concept}</p>
            <p>Entry: ${entryObj.entry}</p>
            <p>Mood: ${entryObj.mood}</p>
        </section>
    `
}