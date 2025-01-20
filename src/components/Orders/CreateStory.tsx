import React, { useState } from 'react';

const CreateStory = () => {
  const [storyPrompt, setStoryPrompt] = useState('');
  const [generatedStory, setGeneratedStory] = useState(`We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.

ChatGPT is a sibling model to InstructGPT⁠, which is trained to follow an instruction in a prompt and provide a detailed response.

We are excited to introduce ChatGPT to get users’ feedback and learn about its strengths and weaknesses. During the research preview, usage of ChatGPT is free. Try it now at chatgpt.com⁠(opens in a new window).`);

  // Assuming this is in the frontend part where the request is triggered
  const handleGenerateStory = async () => {
    if (storyPrompt.trim()) {
      try {
        const response = await fetch('/api/generate_story', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: storyPrompt }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.log('Error response text:', errorText);
          alert('Failed to generate story: ' + response.statusText);
        } else {
          const data = await response.json();
          setGeneratedStory(data.story);
        }
      } catch (error) {
        alert('Failed to generate story: ' + error.message);
      }
    } else {
      alert('Please provide a prompt to generate the story.');
    }
  };



  return (
    <div className="w-full min-h-screen p-6">
      <div className="max-w-3xl min-w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Use AI to Generate Your Own Story Script
        </h1>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4"
          rows={4}
          placeholder="Enter your story idea or prompt here..."
          value={storyPrompt}
          onChange={(e) => setStoryPrompt(e.target.value)}
        ></textarea>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleGenerateStory}
            className="inline-flex font-medium text-white mx-2 bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
          >
            Generate Story Script
          </button>
        </div>

        {generatedStory && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg flex flex-col items-start">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Generated Story</h2>
            <p className="text-gray-700">{generatedStory}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateStory;
