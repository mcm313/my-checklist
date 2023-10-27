import React, { useEffect, useState } from "react";
import TitleName from "./TitleName";
import Description from "./Description";
import Task from "./Task";
import BucketListDrawer from "./BucketListDrawer";
import { Grid } from "@mui/material";
import List from "./List";
import { useParams } from "react-router-dom";

function BucketList() {
  let id = useParams();
  const storedBucketlists = JSON.parse(localStorage.getItem("bucketlists"));

  const BLSInitialState = () => {
    if (Array.isArray(storedBucketlists)) {
      return storedBucketlists;
    } else {
      return [];
    }
  };

  const [bucketlists, setBucketlists] = useState(BLSInitialState);

  useEffect(() => {
    localStorage.setItem("bucketlists", JSON.stringify(bucketlists));
  }, [bucketlists]);

  const BLInitialState = () => {
    let currBucketlist = {
      id: id.bucketlistId,
      name: "UNTITLED",
      desc: "Description..",
      list: [""],
      clist: [],
      dlist: [],
    };
    if (bucketlists.length === 0) {
      return currBucketlist;
    } else {
      for (let i = 0; i < bucketlists.length; i++) {
        if (bucketlists[i].id === id.bucketlistId) {
          currBucketlist = bucketlists[i];
          return currBucketlist;
        } else {
          return currBucketlist;
        }
      }
    }
  };

  const [bucketlist, setBucketlist] = useState(BLInitialState);

  const [title, setTitle] = useState(bucketlist.name);
  const [desc, setDesc] = useState(bucketlist.desc);
  const [taskList, setTaskList] = useState(bucketlist.list);
  const [completedList, setCompletedList] = useState(bucketlist.clist);
  const [deletedList, setDeletedList] = useState(bucketlist.dlist);

  const [completedTicked, setCompletedTicked] = useState(false);
  const [deletedTicked, setDeletedTicked] = useState(false);

  const titleChangeHandler = (newTitle) => {
    setTitle(newTitle);
  };

  const descChangeHandler = (newDesc) => {
    setDesc(newDesc);
  };

  const taskListHandler = (inputValue, index) => {
    const updatedTaskList = taskList.map((e, i) => {
      if (i === index) {
        return inputValue;
      } else {
        return e;
      }
    });
    if (
      index === taskList.length - 1 &&
      taskList.length < 100 &&
      inputValue !== ""
    ) {
      updatedTaskList.push("");
    }
    setTaskList(updatedTaskList);
  };

  const removeItem = (type, item, targetIndex) => {
    if (type === "completed" && item !== "") {
      setCompletedList((prev) => [item, ...prev]);
      setTaskList(taskList.filter((item, index) => index !== targetIndex));
    } else if (type === "deleted" && item !== "") {
      setDeletedList((prev) => [item, ...prev]);
      setTaskList(taskList.filter((item, index) => index !== targetIndex));
    }
  };

  const taskLeft = taskList.length - 1;

  const handleCompletedTicked = () => {
    setCompletedTicked(!completedTicked);
  };

  const handleDeletedTicked = () => {
    setDeletedTicked(!deletedTicked);
  };

  const restoreItem = (type, task, targetIndex) => {
    setTaskList((prev) => [task, ...prev]);
    if (type === "deleted") {
      setDeletedList(
        deletedList.filter((item, index) => index !== targetIndex)
      );
    }
    if (type === "completed") {
      setCompletedList(
        completedList.filter((item, index) => index !== targetIndex)
      );
    }
  };

  const saveBucketlist = (index) => {
    const newBucketlist = {
      id: id.bucketlistId,
      name: title,
      desc: desc,
      list: taskList,
      clist: completedList,
      dlist: deletedList,
    };
    const newBucketlists = [newBucketlist];
    setBucketlist(newBucketlist);
    if (bucketlists.length === 0) {
      setBucketlists(newBucketlists);
    } else if (bucketlists.some((e) => e.id === id.bucketlistId)) {
      const updatedBucketlists = bucketlists.map((e, i) => {
        if (e.id === id.bucketlistId) {
          return newBucketlist;
        } else {
          return e;
        }
      });
      setBucketlists(updatedBucketlists);
    } else {
      setBucketlists((prev) => [newBucketlist, ...prev]);
    }
  };

  return (
    <Grid
      container
      className="custom-height"
      overflow="auto"
      padding={3}
      alignContent="start"
    >
      <Grid item xs={12}>
        <TitleName title={title} titleChangeHandler={titleChangeHandler} />
      </Grid>
      <Grid item xs={12}>
        <Description desc={desc} descChangeHandler={descChangeHandler} />
      </Grid>
      {completedTicked && (
        <>
          {completedList.map((task, index) => (
            <List
              task={task}
              index={index}
              restoreItem={restoreItem}
              listName="completed"
            />
          ))}
        </>
      )}
      {deletedTicked && (
        <>
          {deletedList.map((task, index) => (
            <List
              task={task}
              index={index}
              restoreItem={restoreItem}
              listName="deleted"
            />
          ))}
        </>
      )}
      {taskList.map((task, index) => (
        <Task
          taskListHandler={taskListHandler}
          index={index}
          task={task}
          removeItem={removeItem}
        />
      ))}
      <BucketListDrawer
        taskLeft={taskLeft}
        handleCompletedTicked={handleCompletedTicked}
        handleDeletedTicked={handleDeletedTicked}
        saveBucketlist={saveBucketlist}
      />
    </Grid>
  );
}

export default BucketList;
