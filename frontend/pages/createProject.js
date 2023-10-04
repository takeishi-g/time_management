import { useEffect, useState } from "react";

export default function CreatePrpject() {
  
  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const createNewBook = () => {
    axios
      .post("", {
        title: title,
        author: author,
      })
      .then((response) => {
        setBooks([...books, response.data]);
      }) 
      .then((response) => {
        setAuthor("");
        setTitle("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <>
      <form>
        <div>
          <div>
            <label>納期:</label>
            <input type="date" />
          </div>
          <div>
            <label>図番:</label>
            <input type="text" onChange={handleTitleChange}/>
          </div>
          <div>
            <h3>設定時間</h3>
            <label>FG:</label>
            <input type="number" step={0.25} />
            <label>E:</label>
            <input type="number" step={0.25} />
            <label>D:</label>
            <input type="number" step={0.25} />
          </div>
        </div>
      </form>
    </>
  );
}
