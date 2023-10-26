import { useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import TextField from "@mui/material/TextField";

function App() {
  const [formData, setFormData] = useState({ url: "" });
  const [msg, setMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (evt) => {
    setFormData((previousUrl) => {
      return {
        ...previousUrl,
        [evt.target.name]: DOMPurify.sanitize(evt.target.value),
      };
    });
  };

  const handleSubmit = async () => {
    if (msg) setMsg("");
    else if (errMsg) setErrMsg("");
    try {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_HOSTNAME}${process.env.REACT_APP_ENDPOINT}`,
        data: { origUrl: formData.url },
      }).then((response) => {
        if (response.status === 200) {
          setMsg(response.data);
          // console.log(response.data);
        }
      });
    } catch (err) {
      if (err.message) setErrMsg(err.message);
      if (err.response) setErrMsg(err.response.data);
    }
  };

  return (
    <>
      <div className="app">
        <TextField
          required
          fullWidth
          type="text"
          name="url"
          id="outlined-url"
          label="Original URL"
          placeholder="Original URL to shorten"
          onChange={handleChange}
          value={formData.url}
        />
        <button onClick={handleSubmit}>Shorten URL</button>
        {msg && (
          <h4>
            ShortURL: <a href={msg}>{msg}</a>
          </h4>
        )}
        {errMsg && <h4 className="error-msg">{errMsg}</h4>}
      </div>
    </>
  );
}

export default App;
