import React, { useRef, useState } from "react";
import { JaaSMeeting } from "@jitsi/react-sdk";
import { MessageSquare, MessageSquareOff } from "lucide-react";

const DoctorJitsiMeet = ({ jwt, doctorName }) => {
  const jitsiApiRef = useRef(null);
  const [chatVisible, setChatVisible] = useState(false);

  const toggleChat = () => {
    if (jitsiApiRef.current) {
      jitsiApiRef.current.executeCommand("toggleChat");
      setChatVisible(!chatVisible);
    }
  };

  if (!jwt) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl font-semibold">Loading teleconsultation...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <JaaSMeeting
        appId="vpaas-magic-cookie-c85c2e0743c543eca03932757a05a554"
        domain="8x8.vc"
        roomName="TelemedRoom" // Fixed room name handled internally by Jitsi
        jwt={jwt}
        configOverwrite={{
          startWithAudioMuted: false,
          startWithVideoMuted: false,
          disableModeratorIndicator: true,
          disableRecordAudioNotification: true,
          disableInviteFunctions: true,
          disableThirdPartyRequests: true,
          prejoinPageEnabled: true,
          startScreenSharing: false,
          recordingServiceEnabled: false,
          disableSelfView: false,
        }}
        interfaceConfigOverwrite={{
          TOOLBAR_BUTTONS: ["microphone", "camera", "tileview", "hangup"],
          MOBILE_APP_PROMO: false,
          VIDEO_LAYOUT_FIT: "both",
        }}
        userInfo={{
          displayName: doctorName || "Doctor",
        }}
        onApiReady={(externalApi) => {
          jitsiApiRef.current = externalApi;
          externalApi.addEventListener("videoConferenceLeft", () => {
            // Optionally, navigate away when the meeting is left.
          });
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.width = "100%";
          iframeRef.style.height = "100%";
          iframeRef.style.border = "none";
        }}
      />
      <button
        className="absolute bottom-6 right-6 bg-blue-600 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 hover:bg-blue-700 transition"
        onClick={toggleChat}
      >
        {chatVisible ? <MessageSquareOff size={20} /> : <MessageSquare size={20} />}
        {chatVisible ? "Hide Chat" : "Show Chat"}
      </button>
    </div>
  );
};

export default DoctorJitsiMeet;
