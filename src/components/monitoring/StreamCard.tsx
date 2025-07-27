import { useEffect, useRef } from "react";
import Hls from "hls.js";
import styles from "./StreamCard.module.css";

const StreamCard = ({ cam, handleBack }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || cam.status === "off" || !cam.ipAddress) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(cam.ipAddress);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((error) => {
          console.error("Video play failed:", error);
        });
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = cam.ipAddress;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((error) => {
          console.error("Video play failed:", error);
        });
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [cam.ipAddress, cam.status]);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>{cam.deviceId}</h2>
          <p className={styles.location}>{cam.address}</p>
        </div>
        <div className={styles.status}>
          <span
            className={`${styles.indicator} ${
              cam.status === "on" ? styles.online : styles.offline
            }`}
          ></span>
          <span className={styles.cameraId}>{cam.status === "on" ? "온라인" : "오프라인"}</span>
        </div>
      </div>

      <div className={styles.videoArea}>
        {cam.status === "on" && cam.ipAddress ? (
          <video
            ref={videoRef}
            className={styles.videoFeed}
            controls
            autoPlay
            muted
          />
        ) : (
          <div className={styles.message}>
            {cam.status === "off"
              ? "카메라가 오프라인입니다."
              : "유효하지 않은 스트림 URL입니다."}
          </div>
        )}
      </div>
      <button className={styles.backButton} onClick={handleBack}>{'< 뒤로가기'}</button>
    </div>
  );
};

export default StreamCard;
