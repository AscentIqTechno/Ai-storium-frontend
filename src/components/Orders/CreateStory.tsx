// "use client";
// import React, { useRef, useState } from "react";
// import html2pdf from "html2pdf.js"; // Import html2pdf.js

// import Image from "next/image";
// import axios from "axios";

// const MODEL = "gpt-3.5-turbo-0125";
// const MAX_PAGES = 5;
// const WORDS_PER_PAGE = 200;
// const MAX_WORDS = MAX_PAGES * WORDS_PER_PAGE;

// const defaultContents = `We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer follow-up questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.

// ChatGPT is a sibling model to InstructGPT⁠, which is trained to follow an instruction in a prompt and provide a detailed response.

// We are excited to introduce ChatGPT to get users’ feedback and learn about its strengths and weaknesses. During the research preview, usage of ChatGPT is free. Try it now at chatgpt.com.`;

// const CreateStory = () => {
//   const [storyPrompt, setStoryPrompt] = useState("");
//   const [generatedStory, setGeneratedStory] = useState("");
//   const [pdfUrl, setPdfUrl] = useState(null);

//   const contentRef = useRef(null);

//   const analyzeStoryPrompt = (prompt) => {
//     // Extract basic details (this can be expanded with NLP for better analysis)
//     const genreMatch = prompt.match(/(Action|Thriller|Romance|Comedy|Drama|Fantasy|Sci-Fi|Horror)/i);
//     const settingMatch = prompt.match(/(INT\.|EXT\.) (.*?)-/i);
//     const characterMatches = [...prompt.matchAll(/([A-Z]+):/g)].map(match => match[1]);
  
//     return {
//       genre: genreMatch ? genreMatch[1] : "Unknown",
//       setting: settingMatch ? settingMatch[2].trim() : "Unknown",
//       characters: [...new Set(characterMatches)], // Remove duplicates
//     };
//   };
  
//   const handleGenerateStory = async () => {
//     let screenplay = storyPrompt;
//     let currentWordCount = 0;
//     let referenceContent = screenplay;
  
//     // Analyze the input prompt before generating the screenplay
//     const analysis = analyzeStoryPrompt(storyPrompt);
//     console.log("Story Analysis:", analysis);
  
//     const enhancedPrompt = `You are an expert screenplay writer. Write in standard screenplay format.
//   Genre: ${analysis.genre}
//   Setting: ${analysis.setting}
//   Main Characters: ${analysis.characters.join(", ")}
  
//   Continue the screenplay from here:
  
//   ${referenceContent}
  
//   Ensure proper scene structure, action descriptions, and natural dialogues. Keep character consistency and logical story progression.`;
  
//     while (currentWordCount < MAX_WORDS) {
//       try {
//         const response = await axios.post(
//           "https://api.openai.com/v1/chat/completions",
//           {
//             model: MODEL,
//             messages: [
//               { role: "system", content: "You are an expert screenplay writer. Write in proper screenplay format." },
//               { role: "user", content: enhancedPrompt },
//             ],
//             max_tokens: 800,
//           },
//           {
//             headers: { Authorization: `${process.env.NEXT_CHAT_GPT_API_KEY}` },
//           }
//         );
  
//         const newContent = response.data.choices[0].message.content;
//         screenplay += newContent + "\n\n";
//         referenceContent = newContent;
//         currentWordCount += newContent.split(" ").length;
  
//         setGeneratedStory(screenplay);
//         await new Promise((resolve) => setTimeout(resolve, 500));
//       } catch (error) {
//         console.error("API Error:", error.response ? error.response.data : error.message);
//         break;
//       }
//     }
//   };
//   const handleGeneratePDF = () => {
//     const element = contentRef.current;

//     // Define options for html2pdf
//     const options = {
//       margin: 5, // Set margin/padding around the content
//       filename: "sample-file.pdf",
//       image: { type: "png", quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
//       pagebreak: { mode: ["noafter"] }, // Optional: prevents page break at the end
//       // You can exclude the #editor element (if needed) using the following selector
//       elementHandlers: {
//         '#editor': function (element, renderer) {
//           return true; // Skip the #editor element
//         }
//       }
//     };

//  // Use html2pdf to generate the PDF
//  html2pdf()
//  .from(element) // Take content from the referenced element
//  .set(options)   // Set the options
//  .save();        // Save the PDF file
// };
//   return (
//         <div className="w-full min-h-screen p-6">
//           <div className="max-w-3xl min-w-full bg-white shadow-md rounded-lg p-6">
//             <h1 className="text-2xl font-bold text-gray-800 mb-4">
//               Use AI to Generate Your Own Story Script
//             </h1>
//             <textarea
//               className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4"
//               rows={4}
//               placeholder="Enter your story idea or prompt here..."
//               value={storyPrompt}
//               onChange={(e) => setStoryPrompt(e.target.value)}
//             ></textarea>
    
//             <div className="flex justify-end">
//             <button
//                 type="button"
//                 onClick={()=>setStoryPrompt("")}
//                 className="inline-flex font-medium text-white mx-2 bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
//               >
//                 Clear
//               </button>
//               <button
//                 type="button"
//                 onClick={handleGenerateStory}
//                 className="inline-flex font-medium text-white mx-2 bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
//               >
//                 Generate Story Script
//               </button>
//             </div>
    
          
//               <>
//               <div ref={contentRef} id="content"className="mt-6 bg-gray-100 p-4 rounded-lg flex flex-col items-start">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2">Generated Story</h2>
//                 <p className="text-gray-700 whitespace-pre-line">{generatedStory?generatedStory:defaultContents}</p>
//               </div>
//                <div className="flex justify-end">
             
//               {generatedStory &&(<button
//                 type="button"
//                 onClick={handleGeneratePDF}
//                 className="inline-flex font-medium text-white mx-2 bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
//              >
//                 Generate ScreenPlay PDF
//               </button>)}
//             </div>
//             </>
          
    
//               {/* Show PDF in an iframe if available */}
//               {pdfUrl && (
//             <div className="w-full max-w-4xl my-4">
//               {/* Embedded PDF */}
//                <embed
//                 src={pdfUrl}
//                 type="application/pdf"
//                 width="100%"
//                 height="500px"
//                 className="border rounded-lg"
//               /> 
//               {/* Download Button */}
//               <div className="flex justify-center mt-4">
//                 <a
//                   href={pdfUrl}
//                   download="story.pdf"
//                   className="inline-flex font-medium text-white mx-2 bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
//                   >
                  
//                 <Image
//                 src="/images/icons/download.svg"
//                 alt="star icon"
//                 className='mx-2'
//                 width={24}
//                 height={24}
//               /> Download PDF
//                 </a>
                
//               </div>
//             </div>
        
//           )}
           
//           </div>
//         </div>
//       );
    
// };

// export default CreateStory;
import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js"; // Import html2pdf.js
import Image from "next/image";
import axios from "axios";

const MODEL = "gpt-3.5-turbo-0125";
const MAX_PAGES = 5;
const WORDS_PER_PAGE = 200;
const MAX_WORDS = MAX_PAGES * WORDS_PER_PAGE;

const defaultContents = `We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer follow-up questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.

ChatGPT is a sibling model to InstructGPT⁠, which is trained to follow an instruction in a prompt and provide a detailed response.

We are excited to introduce ChatGPT to get users’ feedback and learn about its strengths and weaknesses. During the research preview, usage of ChatGPT is free. Try it now at chatgpt.com.`;

const CreateStory = () => {
  const [storyPrompt, setStoryPrompt] = useState("");
  const [generatedStory, setGeneratedStory] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null); // Store the generated PDF URL

  const contentRef = useRef(null);

  const analyzeStoryPrompt = (prompt) => {
    const genreMatch = prompt.match(/(Action|Thriller|Romance|Comedy|Drama|Fantasy|Sci-Fi|Horror)/i);
    const settingMatch = prompt.match(/(INT\.|EXT\.) (.*?)-/i);
    const characterMatches = [...prompt.matchAll(/([A-Z]+):/g)].map(match => match[1]);
  
    return {
      genre: genreMatch ? genreMatch[1] : "Unknown",
      setting: settingMatch ? settingMatch[2].trim() : "Unknown",
      characters: [...new Set(characterMatches)],
    };
  };
  
  const handleGenerateStory = async () => {
    let screenplay = storyPrompt;
    let currentWordCount = 0;
    let referenceContent = screenplay;
  
    const analysis = analyzeStoryPrompt(storyPrompt);
    console.log("Story Analysis:", analysis);
  
    const enhancedPrompt = `You are an expert screenplay writer. Write in standard screenplay format.
  Genre: ${analysis.genre}
  Setting: ${analysis.setting}
  Main Characters: ${analysis.characters.join(", ")}
  
  Continue the screenplay from here:
  
  ${referenceContent}
  
  Ensure proper scene structure, action descriptions, and natural dialogues. Keep character consistency and logical story progression.`;
  
    while (currentWordCount < MAX_WORDS) {
      try {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: MODEL,
            messages: [
              { role: "system", content: "You are an expert screenplay writer. Write in proper screenplay format." },
              { role: "user", content: enhancedPrompt },
            ],
            max_tokens: 800,
          },
          {
            headers: { Authorization: `${process.env.NEXT_CHAT_GPT_API_KEY}` },
          }
        );
  
        const newContent = response.data.choices[0].message.content;
        screenplay += newContent + "\n\n";
        referenceContent = newContent;
        currentWordCount += newContent.split(" ").length;
  
        setGeneratedStory(screenplay);
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (error) {
        console.error("API Error:", error.response ? error.response.data : error.message);
        break;
      }
    }
  };

  const handleGeneratePDF = () => {
    const element = contentRef.current;

    const options = {
      margin: 5,
      filename: "sample-file.pdf",
      image: { type: "png", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["noafter"] },
      elementHandlers: {
        '#editor': function (element, renderer) {
          return true;
        }
      }
    };

    // Use html2pdf to generate the PDF and create a URL
    html2pdf()
      .from(element)
      .set(options)
      .toPdf()
      .get('pdf')
      .then(function (pdf) {
        const pdfUrl = pdf.output('bloburl');
        setPdfUrl(pdfUrl);  // Set the PDF URL for viewing and downloading
      });
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
            onClick={() => setStoryPrompt("")}
            className="inline-flex font-medium text-white mx-2 bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={handleGenerateStory}
            className="inline-flex font-medium text-white mx-2 bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
          >
            Generate Story Script
          </button>
        </div>

        <div ref={contentRef} id="content" className="mt-6 bg-gray-100 p-4 rounded-lg flex flex-col items-start">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Generated Story</h2>
          <p className="text-gray-700 whitespace-pre-line">{generatedStory ? generatedStory : defaultContents}</p>
        </div>

        <div className="flex justify-end">
          {generatedStory && (
            <button
              type="button"
              onClick={handleGeneratePDF}
              className="inline-flex font-medium text-white mx-2 bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
            >
              Generate ScreenPlay PDF
            </button>
          )}
        </div>

        {/* Show PDF in an iframe if available */}
        {pdfUrl && (
          <div className="w-full max-w-4xl my-4">
            <embed
              src={pdfUrl}
              type="application/pdf"
              width="100%"
              height="500px"
              className="border rounded-lg"
            />
            <div className="flex justify-center mt-4">
              <a
                href={pdfUrl}
                download="story.pdf"
                className="inline-flex font-medium text-white mx-2 bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
              >
                <Image
                  src="/images/icons/download.svg"
                  alt="star icon"
                  className="mx-2"
                  width={24}
                  height={24}
                />
                Download PDF
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateStory;

