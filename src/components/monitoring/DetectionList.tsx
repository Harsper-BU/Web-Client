import DetectionItem from "./DetectionItem";
import DetectionDetailModal from "./DetectionDetailModal";
import { useState } from "react";

const DetectionList = ({ detections }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDetection, setSelectedDetection] = useState(null);

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
      {detections.map((detection) => (
        <DetectionItem
          key={detection.id}
          detection={detection}
          onClick={() => handleItemClick(detection)}
        />
      ))}
      {isModalOpen && (
        <DetectionDetailModal
          detection={selectedDetection}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default DetectionList;
