import React, { useEffect, useState } from "react";
import TitleName from "./TitleName";
import Description from "./Description";
import Task from "./Task";
import BucketListDrawer from "./BucketListDrawer";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

function BucketList() {
  const params = useParams();
  const id = params.bucketlistId;

  const storedBucketlists = JSON.parse(localStorage.getItem("bucketlists"));

  const BLSInitialState = () => {
    if (Array.isArray(storedBucketlists)) {
      return storedBucketlists;
    } else {
      return [];
    }
  };

  const [bucketlists, setBucketlists] = useState(BLSInitialState());

  useEffect(() => {
    localStorage.setItem("bucketlists", JSON.stringify(bucketlists));
  }, [bucketlists]);

  const BLInitialState = () => {
    let selList = {
      id: id,
      name: "Untitled",
      desc: "Description..",
      list: [{ index: Date.now(), task: "", type: "new" }],
    };
    bucketlists.forEach((e) => {
      if (e.id === id) {
        selList = e;
      }
    });
    return selList;
  };

  const [selectedlist, setSelectedlist] = useState(BLInitialState());
  const list = selectedlist.list.filter((item) => item.type === "new");
  const clist = selectedlist.list.filter(
    (item) => item.type === "new" || item.type === "completed"
  );
  const dlist = selectedlist.list.filter(
    (item) => item.type === "new" || item.type === "deleted"
  );
  const title = selectedlist.name;

  const [completedTicked, setCompletedTicked] = useState(false);
  const [deletedTicked, setDeletedTicked] = useState(false);
  const [currEditing, setCurrEditing] = useState(null);

  const titleChangeHandler = (newTitle) => {
    setSelectedlist({ ...selectedlist, name: newTitle });
  };

  const descChangeHandler = (newDesc) => {
    setSelectedlist({ ...selectedlist, desc: newDesc });
  };

  const currEditChangeHandler = (index) => {
    setCurrEditing(index);
  };

  const updateListHandler = (inputValue, index, targetIndex) => {
    const updatedList = selectedlist.list.map((e) => {
      if (e.index === index) {
        return { ...e, task: inputValue };
      } else {
        return e;
      }
    });
    if (targetIndex === list.length - 1 && clist.length + list.length < 100) {
      updatedList.push({ index: Date.now(), task: "", type: "new" });
    }
    setSelectedlist({ ...selectedlist, list: updatedList });
    console.log(targetIndex);
    console.log(list);
  };

  const changeListTypeHandler = (type, task, targetIndex) => {
    const updatedList = selectedlist.list.map((e) => {
      if (e.index === targetIndex && task !== "") {
        return { ...e, type: type };
      } else {
        return e;
      }
    });
    setSelectedlist({ ...selectedlist, list: updatedList });
  };

  const handleCompletedTicked = () => {
    setCompletedTicked(!completedTicked);
  };

  const handleDeletedTicked = () => {
    setDeletedTicked(!deletedTicked);
  };

  const saveSelectedlist = () => {
    let updatedBucketList = [selectedlist];
    if (bucketlists.length === 0) {
      setBucketlists(updatedBucketList);
    } else if (bucketlists.some((e) => e.id === id)) {
      updatedBucketList = bucketlists.map((e) => {
        if (e.id === id) {
          return selectedlist;
        } else {
          return e;
        }
      });
      setBucketlists(updatedBucketList);
    } else {
      setBucketlists([...bucketlists, selectedlist]);
    }
  };

  return (
    <Grid
      container
      className="custom-height"
      overflow="auto"
      padding={3}
      alignContent="start"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <TitleName
          title={selectedlist.name}
          titleChangeHandler={titleChangeHandler}
        />
      </Grid>
      <Grid item xs={12}>
        <Description
          desc={selectedlist.desc}
          descChangeHandler={descChangeHandler}
        />
      </Grid>
      {completedTicked && deletedTicked ? (
        <>
          {selectedlist.list.map((task, i) => (
            <Task
              updateListHandler={updateListHandler}
              index={task.index}
              task={task.task}
              type={task.type}
              changeListTypeHandler={changeListTypeHandler}
              currEditing={currEditing}
              currEditChangeHandler={currEditChangeHandler}
              targetIndex={i}
            />
          ))}
        </>
      ) : completedTicked ? (
        <>
          {clist.map((task, i) => (
            <Task
              updateListHandler={updateListHandler}
              index={task.index}
              task={task.task}
              type={task.type}
              changeListTypeHandler={changeListTypeHandler}
              currEditing={currEditing}
              currEditChangeHandler={currEditChangeHandler}
              targetIndex={i}
            />
          ))}
        </>
      ) : deletedTicked ? (
        <>
          {dlist.map((task, i) => (
            <Task
              updateListHandler={updateListHandler}
              index={task.index}
              task={task.task}
              type={task.type}
              changeListTypeHandler={changeListTypeHandler}
              currEditing={currEditing}
              currEditChangeHandler={currEditChangeHandler}
              targetIndex={i}
            />
          ))}
        </>
      ) : (
        <>
          {list.map((task, i) => (
            <Task
              updateListHandler={updateListHandler}
              index={task.index}
              task={task.task}
              type={task.type}
              changeListTypeHandler={changeListTypeHandler}
              currEditing={currEditing}
              currEditChangeHandler={currEditChangeHandler}
              targetIndex={i}
            />
          ))}
        </>
      )}
      <BucketListDrawer
        title={title}
        list={list}
        clist={clist}
        handleCompletedTicked={handleCompletedTicked}
        handleDeletedTicked={handleDeletedTicked}
        saveSelectedlist={saveSelectedlist}
      />
    </Grid>
  );
}

export default BucketList;
