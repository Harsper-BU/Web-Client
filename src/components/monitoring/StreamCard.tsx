import { useEffect, useRef } from "react";
import Hls from "hls.js";
import styles from "./StreamCard.module.css";

const StreamCard = ({ cameraId, streamUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((error) => {
          console.error("Video play failed:", error);
        });
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
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
  }, [streamUrl]);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>실시간 스트림</h2>
          <p className={styles.location}>location</p>
        </div>
        <div className={styles.status}>
          <span className={`${styles.indicator} ${styles.online}`}></span>
          <span className={styles.cameraId}>{cameraId}</span>
        </div>
      </div>

      <div className={styles.videoArea}>
        <video
          ref={videoRef}
          className={styles.videoFeed}
          controls
          autoPlay
          muted
        />
      </div>
    </div>
  );
};

export default StreamCard;
