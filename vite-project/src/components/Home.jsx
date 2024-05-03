import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const [roomId, setRoomId] = useState();
  const [url, setUrl] = useState();
  const navigate = useNavigate();
  const handlecreate = () => {
    navigate(`/room/${roomId}`);
  };
  const handlejoin = () => {
    navigate(`/room/${url}`);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Sigin");
    }
  }, []);
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1 className="max-w-xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-gray">
          Create or Join Room
        </h1>
        <input
          placeholder="Create Room ID"
          type="text"
          class="mr-6 mb-6 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={roomId}
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
        ></input>
        <button
          class="mr-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlecreate}
        >
          Create
        </button>

        <input
          placeholder="Enter Room ID"
          type="text"
          class="mr-6 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        ></input>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlejoin}
        >
          Join
        </button>
      </div>
    </>
  );
}

export default Home;
