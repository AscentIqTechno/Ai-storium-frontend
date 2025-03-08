"use client"; // Ensures it's a client-side component

import React, { useState, useEffect } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadProps } from "antd";
import * as mammoth from "mammoth"; // Import for DOCX processing

const { Dragger } = Upload;

const FileUpload: React.FC<{ setStoryPrompt: any }> = ({ setStoryPrompt }) => {
  const [fileContent, setFileContent] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [pdfjsLib, setPdfjsLib] = useState<any>(null);

  // Dynamically import pdfjs-dist to avoid SSR issues in Next.js
  useEffect(() => {
    import("pdfjs-dist/build/pdf").then((pdf) => {
      pdf.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdf.version}/pdf.worker.min.js`;
      setPdfjsLib(pdf);
    });
  }, []);

  const readTextFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target?.result as string);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const readPdfFile = async (file: File): Promise<string> => {
    if (!pdfjsLib) {
      message.error("PDF library not loaded yet.");
      return "";
    }

    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = async () => {
        try {
          const typedArray = new Uint8Array(reader.result as ArrayBuffer);
          const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
          let text = "";

          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map((item: any) => ("str" in item ? item.str : "")).join(" ") + "\n\n";
          }

          resolve(text || "[No text detected. This PDF might be an image-based document.]");
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const readDocxFile = async (file: File): Promise<string> => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = async () => {
        try {
          const result = await mammoth.extractRawText({ arrayBuffer: reader.result as ArrayBuffer });
          resolve(result.value || "[No text detected in DOCX file]");
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const handleFileUpload: UploadProps["beforeUpload"] = async (file) => {
    const allowedTypes = [
      "application/pdf",
      "text/plain",
      "application/msword", // DOC
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // DOCX
    ];

    if (!allowedTypes.includes(file.type)) {
      message.error(`${file.name} is not a supported file type.`);
      return Upload.LIST_IGNORE;
    }

    try {
      let content = "";
      if (file.type === "application/pdf") {
        content = await readPdfFile(file);
      } else if (file.type === "text/plain") {
        content = await readTextFile(file);
      } else if (
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        content = await readDocxFile(file);
      }

      setFileContent(content);
      setStoryPrompt(content);
      setFileName(file.name);
      message.success(`${file.name} uploaded successfully.`);
    } catch (error) {
      message.error(`Error processing ${file.name}.`);
    }

    return false; // Prevent actual upload
  };

  return (
    <div>
      <Dragger beforeUpload={handleFileUpload} showUploadList={false}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">Supports PDF, TXT, DOC, DOCX. Extracts readable content.</p>
      </Dragger>

      {fileName && (
        <div className="mt-4 p-2 border border-gray-300 rounded">
          <h3>Uploaded File Content:</h3>
          <strong>{fileName}</strong>
          <pre className="whitespace-pre-wrap text-sm">{fileContent}</pre>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
