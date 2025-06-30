import { t } from "./translate";

const T: Translations = {
  en: {
    customTag: "Custom Tag",
    notes: "Notes",
  },
  fr: {
    customTag: "Tag personnalisé",
    notes: "Notes",
  },
  de: {
    customTag: "Benutzerdefiniertes Tag",
    notes: "Notizen",
  },
  es: {
    customTag: "Etiqueta personalizada",
    notes: "Notas",
  },
};

export const displayPlayerTag = (node: HTMLElement) => {
  if (!node.classList.contains("forum-post-header")) return;

  const target = node.querySelector(".username");
  if (!target) return;

  const playerId = target.getAttribute("x-user-id");
  if (!playerId) return;

  const existing = target.querySelector(".zen-player-tag");
  if (existing) return;

  const storedTag = localStorage.getItem(`playerTag_${playerId}`);
  if (!storedTag) return;

  const tag = document.createElement("span");
  tag.classList.add("zen-player-tag");
  tag.setAttribute("data-player-id", playerId);
  tag.textContent = storedTag;

  target.appendChild(tag);
};

export const insertPlayerInfo = (node: HTMLElement) => {
  if (!node.classList.contains("link-blocks")) return;

  const playerId = node
    .closest("#user-tooltip")
    ?.querySelector(".link[x-ajax-href^='/jx/soul']")
    ?.getAttribute("x-ajax-href")
    ?.split("/")
    .pop();

  // Tag
  const tagWrapper = document.createElement("div");
  tagWrapper.classList.add("zen-player-tag-input-wrapper");

  const tagLabel = document.createElement("label");
  tagLabel.setAttribute("for", "zen-player-tag-input");
  tagLabel.textContent = t(T, "customTag");
  tagWrapper.appendChild(tagLabel);

  const tagInput = document.createElement("input");
  tagInput.setAttribute("id", "zen-player-tag-input");
  tagInput.setAttribute("type", "text");
  tagInput.setAttribute("placeholder", t(T, "customTag"));
  tagInput.setAttribute("maxlength", "10");
  tagInput.setAttribute("autocomplete", "off");
  tagInput.setAttribute("autocorrect", "off");

  const storedTag = localStorage.getItem(`playerTag_${playerId}`);
  if (storedTag) {
    tagInput.setAttribute("value", storedTag);
  }

  const existingPosts =
    document.querySelectorAll<HTMLElement>(".forum-post-header");

  tagInput.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;

    // Store in local storage
    if (value.length) {
      localStorage.setItem(`playerTag_${playerId}`, value);
    } else {
      localStorage.removeItem(`playerTag_${playerId}`);
    }

    // Update the tags displayed
    document
      .querySelectorAll(`.zen-player-tag[data-player-id="${playerId}"]`)
      .forEach((tag) => {
        if (value.length) {
          tag.textContent = value;
        } else {
          tag.remove(); // Remove the tag if empty
        }
      });

    // Update the tags in existing posts
    existingPosts.forEach((post) => {
      displayPlayerTag(post);
    });
  });

  tagWrapper.appendChild(tagInput);

  // Notes
  const notesWrapper = document.createElement("div");
  notesWrapper.classList.add("zen-player-notes-input-wrapper");

  const notesLabel = document.createElement("label");
  notesLabel.setAttribute("for", "zen-player-notes-input");
  notesLabel.textContent = t(T, "notes");
  notesWrapper.appendChild(notesLabel);

  const notesInput = document.createElement("textarea");
  notesInput.setAttribute("id", "zen-player-notes-input");
  notesInput.setAttribute("placeholder", t(T, "notes"));
  notesInput.setAttribute("autocomplete", "off");
  notesInput.setAttribute("autocorrect", "off");
  notesInput.setAttribute("class", "zen-player-notes-input");

  const storedNotes = localStorage.getItem(`playerNotes_${playerId}`);
  if (storedNotes) {
    notesInput.setAttribute("value", storedNotes);
    notesInput.textContent = storedNotes;
  }

  notesInput.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value;

    // Store in local storage
    if (value.length) {
      localStorage.setItem(`playerNotes_${playerId}`, value);
    } else {
      localStorage.removeItem(`playerNotes_${playerId}`);
    }
  });

  notesWrapper.appendChild(notesInput);

  node.after(notesWrapper);
  node.after(tagWrapper);
};
