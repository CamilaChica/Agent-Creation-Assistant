import spacy

# Load the English language model
nlp = spacy.load('en_core_web_sm')

# Process a sample text
doc = nlp("Camila Chica is creating an AI agent.")

# Print out the named entities (if any)
for entity in doc.ents:
    print(entity.text, entity.label_)


