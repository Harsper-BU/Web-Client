import DetectionItem from "./DetectionItem";
import DetectionDetailModal from "./DetectionDetailModal";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
const DetectionList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDetection, setSelectedDetection] = useState(null);

  const [detections, setDetections] = useState([]);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [loading, setLoading] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const fetchDetections = async () => {
    if (loading || isLastPage) return;
    setLoading(true);
    try {
      console.log(import.meta.env.VITE_IP);
      
      const res = await axios.get(
        `${import.meta.env.VITE_IP}/auth/violations?page=${page}`,
        {
          headers: {
            Authorization: localStorage.getItem("harsper-token"),
          },
        }
      );
      console.log(res);
      
      setDetections((prev) => [...prev, ...res.data.content]);
      setIsLastPage(res.data.last);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetections();
  }, []);

  useEffect(() => {
    if (inView) {
      fetchDetections();
    }
  }, [inView]);

  const handleItemClick = (detection) => {
    setSelectedDetection(detection);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDetection(null);
  };

  return (
    <div>
      {detections.map((detection, idx) => {
        const isLast = idx === detections.length - 1;
        return (
          <div
            key={detection.id}
            ref={isLast ? ref : null} 
          >
            <DetectionItem
              detection={detection}
              onClick={() => handleItemClick(detection)}
            />
          </div>
        );
      })}
      {isModalOpen && (
        <DetectionDetailModal
          detection={selectedDetection}
          onClose={handleCloseModal}
        />
      )}
      {loading && <p>불러오는 중...</p>}
      {isLastPage && <p>마지막 페이지입니다.</p>}
    </div>
  );
};

export default DetectionList;
