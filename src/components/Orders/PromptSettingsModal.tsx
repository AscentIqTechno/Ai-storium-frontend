import React, { useState } from "react";
import { Modal, Select, Button, Input } from "antd";

const { Option } = Select;

const PromptSettingsModal = ({ visible, onClose, onApply }) => {
  const [language, setLanguage] = useState("English");
  const [category, setCategory] = useState("Action & Adventure");
  const [subcategory, setSubcategory] = useState("Thriller");
  const [locations, setLocations] = useState([]);
  const [pageLimit, setPageLimit] = useState("");

  const handleApply = () => {
    onApply({ language, category, subcategory,locations,pageLimit });
    onClose();
  };
  const handleLocationChange = (selectedLocations) => {
    setLocations(selectedLocations);
  };
  return (
    <Modal
      title="Customize Your Story Prompt"
      visible={visible}
      onCancel={onClose}
      footer={null}
      style={{ zIndex: 1050 ,marginTop: "200px" }} 
    >
      <div className="flex flex-col gap-4">
      <label>Language:</label>
        <Select value={language} onChange={setLanguage} className="w-full">
          <Option value="English">English</Option>
          <Option value="Hindi">Hindi</Option>
          <Option value="All Indian Languages">All Indian Languages</Option>
        </Select>

        <label>Category:</label>
        <Select value={category} onChange={setCategory} className="w-full">
          <Option value="Action & Adventure">Action & Adventure</Option>
          <Option value="Romance">Romance</Option>
          <Option value="Fantasy">Fantasy</Option>
          <Option value="Thriller & Mystery">Thriller & Mystery</Option>
          <Option value="Science Fiction">Science Fiction</Option>
          <Option value="Drama">Drama</Option>
          <Option value="Comedy">Comedy</Option>
          <Option value="Documentary">Documentary</Option>
          <Option value="Horror">Horror</Option>
          <Option value="Historical">Historical</Option>
          <Option value="Biographies">Biographies</Option>
          <Option value="Animated Stories">Animated Stories</Option>
        </Select>

        <label>Subcategory:</label>
        <Select value={subcategory} onChange={setSubcategory} className="w-full">
          <Option value="Thriller">Thriller</Option>
          <Option value="Mystery">Mystery</Option>
          <Option value="Detective">Detective</Option>
          <Option value="Movies">Movies</Option>
          <Option value="YouTube Video">YouTube Video</Option>
          <Option value="Reels">Reels</Option>
          <Option value="Song Lyrics">Song Lyrics</Option>
          <Option value="Webseries">Webseries</Option>
        </Select>

        <label>Story Page Limit:</label>
        <Input
          type="number"
          value={pageLimit}
          onChange={(e) => setPageLimit(e.target.value)}
          placeholder="Enter page limit"
          className="w-full"
        />

        <label>Shooting Locations:</label>
        <Select
          mode="multiple"
          value={locations}
          onChange={handleLocationChange}
          className="w-full"
          placeholder="Select shooting locations"
        >
          <Option value="Beach">Beach</Option>
          <Option value="Mountains">Mountains</Option>
          <Option value="City">City</Option>
          <Option value="Forest">Forest</Option>
          <Option value="Studio">Studio</Option>
        </Select>

        <div className="flex justify-end mt-4">
          <Button onClick={onClose} className="mr-2">Cancel</Button>
          <Button onClick={handleApply}>Apply</Button>
        </div>
      </div>
    </Modal>
  );
};

export default PromptSettingsModal;
