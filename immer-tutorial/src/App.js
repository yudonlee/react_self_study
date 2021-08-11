import React, { useRef, useCallback, useState } from "react";
import produce from "immer";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", usename: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        produce((form, draft) => {
          draft[name] = value;
        })
      );
    },
    [form]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        usename: form.usename,
      };

      setData(
        produce(data, (draft) => {
          draft.array.push(info);
        })
      );

      setForm({
        name: "",
        usename: "",
      });
      nextId.current += 1;
    },
    [data, form.name, form.usename]
  );

  const onRemove = useCallback(
    (id) => {
      setData(
        produce(data, (draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1
          );
        })
      );
    },
    [data]
  );
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="usename"
          placeholder="id"
          value={form.usename}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.usename} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
