import express from "express";
const router = express.Router();

const todos = [
    { name: "Ilyas" },
    { name: "Abdullah" }
];

router.get("/", (req, res) => {
  try {
    res.status(200).send({
      message: "Data Fetched Successfully",
      data: todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something Went Wrong",
    });
  }
});

router.post("/", (req, res) => {
  try {
    const body = req.body;
    if (!body.name) {
      res.status(400).send({
        message: "Invalid Required Params",
      });
    }
    todos.push({ name: body.name });
    res.status(200).send({
      message: "Data Added Successfully",
      data: todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message,
    });
  }
});

router.put("/:id", (req, res) => {
  try {
    const name = req.body.name;
    const id = req.params.id; // Corrected from req.body.id to req.params.id
    console.log(id, ".", name, " this is params");
    if (!name || !id) {
      return res.status(400).send({
        message: "Invalid Required Params",
      });
    }
    if (!todos[id]) {
      return res.status(400).send({
        message: "Item not found",
      });
    }
    todos[id] = { name: name };
    res.status(200).send({
      message: "Data Updated Successfully",
      data: todos,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: error.message,
    });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).send({
        message: "Missing Required Params",
      });
    }
    if (!todos[id]) {
      return res.status(400).send({
        message: "Item not found",
      });
    }
    todos.splice(id, 1);
    res.status(200).send({
      message: "Data Deleted Successfully",
      data: todos,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: error.message,
    });
  }
});

export default router;
