const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  if (!data || !Array.isArray(data)) {
    return res
      .status(400)
      .json({ is_success: false, error: "Invalid data format" });
  }

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const highestAlphabet = alphabets.length
    ? [alphabets.sort().reverse()[0]]
    : [];

  res.json({
    is_success: true,
    user_id: "your_full_name_ddmmyyyy", // replace with actual user_id
    email: "your_email@domain.com", // replace with actual email
    roll_number: "your_roll_number", // replace with actual roll number
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highestAlphabet,
  });
});

app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
