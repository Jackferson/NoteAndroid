const core = "http://192.168.0.5:3000/";

export const getAllNotes = async () => {
  const res = await fetch(core);
  return res.json();
};

export const deleteNote = async (id) => {
  await fetch(`${core}note/${id}`, {
    method: "DELETE",
  });
};

export const updateNote = async (id, { values }) => {
  const res = await fetch(core + id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      values,
    }),
  });
};
export const createNote = async (values) => {
  const res = await fetch(core, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
};
