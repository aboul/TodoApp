import { Category, Task } from "../types/user";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AddTaskButton, Container, StyledInput } from "../styles";
import { AddTaskRounded, CancelRounded } from "@mui/icons-material";
import { FormControlLabel, FormGroup, IconButton, InputAdornment,  Switch, Tooltip } from "@mui/material";
import { DESCRIPTION_MAX_LENGTH, TASK_NAME_MAX_LENGTH } from "../constants";
import { CategorySelect, ColorPicker, TopBar, CustomEmojiPicker } from "../components";
import { UserContext } from "../contexts/UserContext";
import { useStorageState } from "../hooks/useStorageState";
import { useTheme } from "@emotion/react";
import { generateUUID, getFontColor, isDark, showToast } from "../utils";
import { ColorPalette } from "../theme/themeConfig";
import { RecurringIntervalSelect } from "../components/RecurringIntervalSelect";

const AddTask = () => {
  const { user, setUser } = useContext(UserContext);
  const theme = useTheme();
  const [name, setName] = useStorageState<string>("", "name", "sessionStorage");
  const [emoji, setEmoji] = useStorageState<string | null>(null, "emoji", "sessionStorage");
  const [color, setColor] = useStorageState<string>(theme.primary, "color", "sessionStorage");
  const [description, setDescription] = useStorageState<string>(
    "",
    "description",
    "sessionStorage",
  );
  const [recurring, isRecurring] = useStorageState<boolean>(false, "recurring", "sessionStorage");
  const [selectedRecurringInterval, setSelectedRecurringInterval] = useStorageState<string>("", "recurringInterval", "sessionStorage");
  const [deadline, setDeadline] = useStorageState<string>("", "deadline", "sessionStorage");
  const [nameError, setNameError] = useState<string>("");
  const [descriptionError, setDescriptionError] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useStorageState<Category[]>(
    [],
    "categories",
    "sessionStorage",
  );

  const n = useNavigate();

  useEffect(() => {
    document.title = "Todo App - Add Task";
  }, []);

  useEffect(() => {
    if (name.length > TASK_NAME_MAX_LENGTH) {
      setNameError(`Name should be less than or equal to ${TASK_NAME_MAX_LENGTH} characters`);
    } else {
      setNameError("");
    }
    if (description.length > DESCRIPTION_MAX_LENGTH) {
      setDescriptionError(
        `Description should be less than or equal to ${DESCRIPTION_MAX_LENGTH} characters`,
      );
    } else {
      setDescriptionError("");
    }
  }, [description.length, name.length]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
    if (newName.length > TASK_NAME_MAX_LENGTH) {
      setNameError(`Name should be less than or equal to ${TASK_NAME_MAX_LENGTH} characters`);
    } else {
      setNameError("");
    }
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
    if (newDescription.length > DESCRIPTION_MAX_LENGTH) {
      setDescriptionError(
        `Description should be less than or equal to ${DESCRIPTION_MAX_LENGTH} characters`,
      );
    } else {
      setDescriptionError("");
    }
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    isRecurring(event.target.checked);
  };

  const handleDeadlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeadline(event.target.value);
  };

  const handleAddTask = () => {
    if (name === "") {
      showToast("Task name is required.", { type: "error" });
      return;
    }

    if (nameError !== "" || descriptionError !== "") {
      return; // Do not add the task if the name or description exceeds the maximum length
    }

    const newTask: Task = {
      id: generateUUID(),
      done: false,
      pinned: false,
      name,
      description: description !== "" ? description : undefined,
      emoji: emoji ? emoji : undefined,
      color,
      date: new Date(),
      deadline: deadline !== "" ? new Date(deadline) : undefined,
      category: selectedCategories ? selectedCategories : [],
      recurring,
      recurringInterval: selectedRecurringInterval !== "" ? selectedRecurringInterval : undefined
    };

    setUser((prevUser) => ({
      ...prevUser,
      tasks: [...prevUser.tasks, newTask],
    }));

    n("/");

    showToast(
      <div>
        Added task - <b>{newTask.name}</b>
      </div>,
      {
        icon: <AddTaskRounded />,
      },
    );

    const itemsToRemove = ["name", "color", "description", "emoji", "deadline", "categories"];
    itemsToRemove.map((item) => sessionStorage.removeItem(item));
  };

  return (
    <>
      <TopBar title="Add New Task" />
      <Container>
        <CustomEmojiPicker
          emoji={typeof emoji === "string" ? emoji : undefined}
          setEmoji={setEmoji}
          color={color}
          name={name}
          type="task"
        />
        <StyledInput
          label="Task Name"
          name="name"
          placeholder="Enter task name"
          autoComplete="off"
          value={name}
          onChange={handleNameChange}
          focused
          required
          error={nameError !== ""}
          helpercolor={nameError && ColorPalette.red}
          helperText={
            name === ""
              ? undefined
              : !nameError
                ? `${name.length}/${TASK_NAME_MAX_LENGTH}`
                : nameError
          }
        />
        <StyledInput
          label="Task Description (optional)"
          name="name"
          placeholder="Enter task description"
          autoComplete="off"
          value={description}
          onChange={handleDescriptionChange}
          multiline
          rows={4}
          focused
          error={descriptionError !== ""}
          helpercolor={descriptionError && ColorPalette.red}
          helperText={
            description === ""
              ? undefined
              : !descriptionError
                ? `${description.length}/${DESCRIPTION_MAX_LENGTH}`
                : descriptionError
          }
        />
        <StyledInput
          label="Task Deadline (optional)"
          name="name"
          placeholder="Enter deadline date"
          type="datetime-local"
          value={deadline}
          onChange={handleDeadlineChange}
          focused
          sx={{
            colorScheme: isDark(theme.secondary) ? "dark" : "light",
          }}
          InputProps={{
            startAdornment:
              deadline && deadline !== "" ? (
                <InputAdornment position="start">
                  <Tooltip title="Clear">
                    <IconButton color="error" onClick={() => setDeadline("")}>
                      <CancelRounded />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ) : undefined,
          }}
        />
        <FormGroup>
          <FormControlLabel
            sx={{ opacity: recurring ? 1 : 0.8 }}
            control={
              <Switch 
                name="recurring"
                checked={recurring} 
                onChange={handleSwitchChange}
              />
            } 
            labelPlacement="top"
            label="Is recurring task?"
          />
        </FormGroup>
        {recurring && 
          <RecurringIntervalSelect
            selectedRecurringInterval={selectedRecurringInterval}
            onRecurringChange={(recurringInterval) => setSelectedRecurringInterval(recurringInterval)}
          />
        }
        {user.settings.enableCategories !== undefined && user.settings.enableCategories && (
          <div style={{ marginBottom: "14px" }}>
            <br />
            <CategorySelect
              selectedCategories={selectedCategories}
              onCategoryChange={(categories) => setSelectedCategories(categories)}
              width="400px"
              fontColor={getFontColor(theme.secondary)}
            />
          </div>
        )}
        <ColorPicker
          color={color}
          width="400px"
          onColorChange={(color) => {
            setColor(color);
          }}
          fontColor={getFontColor(theme.secondary)}
        />
        <AddTaskButton
          onClick={handleAddTask}
          disabled={
            name.length > TASK_NAME_MAX_LENGTH || description.length > DESCRIPTION_MAX_LENGTH
          }
        >
          Create Task
        </AddTaskButton>
      </Container>
    </>
  );
};

export default AddTask;
