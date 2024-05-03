import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function Room() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Sigin");
    }
  }, []);

  const currentUrl = window.location.href;
  console.log(currentUrl);

  const { roomId } = useParams();
  let myMeeting = async (element) => {
    const appID = parseInt(import.meta.env.VITE_REACT_APP_APP_ID);
    const serverSecret = import.meta.env.VITE_REACT_APP_SERVER_SECRECT;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      localStorage.getItem("userName")
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy link",
          // url: `http://localhost:5173/room/${roomId}`,
          url: window.location.href,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };
  return (
      <div
      class="mr-2"
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 auto",
          textAlign: "center",
          height: "100vh",
        }}
        ref={myMeeting}
      ></div>
  );
}

export default Room;
