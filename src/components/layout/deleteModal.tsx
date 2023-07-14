"use client";
import { useState } from "react";
import Button from "../ui/button";

const DeleteModal = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        label="Delete account"
        style="Transparent"
        additional="rounded-regBtn"
        onClick={() => setShow(true)}
      />
      {show && (
        <div className="text-smallFnt flex bg-base-100 p-4 rounded-xl mt-10 gap-2">
          <div>
            <p>
              Your account will permanently deleted and you will lose all your
              score. Continue?
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              label="Delete"
              style="Transparent"
              additional="text-smallFnt rounded-regBtn"
              onClick={() => setShow(false)}
            />
            <Button
              label="Cancel"
              style="Transparent"
              additional="rounded-regBtn bg-white text-black border-0 text-smallFnt"
              onClick={() => setShow(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
