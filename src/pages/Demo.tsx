import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2,
  Image as ImageIcon,
} from "lucide-react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

// Import the demo question data
import questionData from "./demo-data/question-paper.json";

// Helper function to render text with LaTeX and newlines
const renderTextWithMath = (text: string) => {
  if (!text) return "";

  // Handle JSON-escaped backslashes properly
  let processedText = text;

  // Debug: log the original text if it contains LaTeX
  if (text.includes("$") && text.includes("\\")) {
    console.log("Original text with LaTeX:", text);
  }

  // Replace all double backslashes with single backslashes
  // This handles the JSON escaping where \\ becomes \
  while (processedText.includes("\\\\")) {
    processedText = processedText.replace(/\\\\/g, "\\");
  }

  // Debug: log the processed text if it contains LaTeX
  if (text.includes("$") && text.includes("\\")) {
    console.log("Processed text with LaTeX:", processedText);
  }

  // Split by newlines first
  const lines = processedText.split("\n");

  return lines.map((line, lineIndex) => {
    if (!line.trim()) {
      // Empty line - add spacing
      return <div key={lineIndex} className="h-2"></div>;
    }

    // Use a more robust approach to find LaTeX expressions
    const result = [];
    let currentIndex = 0;
    let inMath = false;
    let mathStart = -1;
    let mathType = ""; // 'inline' or 'block'

    for (let i = 0; i < line.length; i++) {
      if (line[i] === "$") {
        if (i + 1 < line.length && line[i + 1] === "$") {
          // Block math
          if (!inMath) {
            // Start of block math
            if (i > currentIndex) {
              result.push(line.slice(currentIndex, i));
            }
            mathStart = i;
            inMath = true;
            mathType = "block";
            i++; // Skip the second $
          } else if (mathType === "block") {
            // End of block math
            const mathContent = line.slice(mathStart + 2, i);
            try {
              result.push(
                <BlockMath
                  key={`math-${lineIndex}-${result.length}`}
                  math={mathContent}
                />
              );
            } catch (error) {
              console.warn(
                "LaTeX parsing error for block math:",
                mathContent,
                error
              );
              result.push(line.slice(mathStart, i + 1));
            }
            inMath = false;
            currentIndex = i + 1;
            i++; // Skip the second $
          }
        } else if (!inMath) {
          // Start of inline math
          if (i > currentIndex) {
            result.push(line.slice(currentIndex, i));
          }
          mathStart = i;
          inMath = true;
          mathType = "inline";
        } else if (mathType === "inline") {
          // End of inline math
          const mathContent = line.slice(mathStart + 1, i);
          try {
            result.push(
              <InlineMath
                key={`math-${lineIndex}-${result.length}`}
                math={mathContent}
              />
            );
          } catch (error) {
            console.warn(
              "LaTeX parsing error for inline math:",
              mathContent,
              error
            );
            result.push(line.slice(mathStart, i + 1));
          }
          inMath = false;
          currentIndex = i + 1;
        }
      }
    }

    // Add any remaining text
    if (currentIndex < line.length) {
      result.push(line.slice(currentIndex));
    }

    // If we're still in math mode, treat the rest as regular text
    if (inMath) {
      result.push(line.slice(mathStart));
    }

    return (
      <div key={lineIndex} className="mb-1">
        {result}
      </div>
    );
  });
};

// Debug function to test LaTeX rendering
const testLatexRendering = () => {
  const testCases = [
    "$x_i$",
    "$\\frac{1}{2}$",
    "$\\sum f_i$",
    "$\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$",
    "$\\triangle OAD$",
    "$\\angle AOD = \\angle COB$",
    "$OA \\times OB = OC \\times OD$",
    "$35 + \\left(\\frac{12.5 - 10}{7}\\right) 10$",
  ];

  console.log("Testing LaTeX rendering:");
  testCases.forEach((test, index) => {
    console.log(`Test ${index + 1}:`, test);
    // Test the actual rendering
    const processed = test.replace(/\\\\/g, "\\");
    console.log(`Processed:`, processed);
  });
};

// Helper function to render diagram or table
const renderDiagram = (
  diagramPath: string | string[] | undefined,
  index?: number,
  isTable: boolean = false,
  questionId?: number
) => {
  if (!diagramPath) return null;

  const path = Array.isArray(diagramPath)
    ? diagramPath[index || 0]
    : diagramPath;

  if (!path) return null;

  // Larger images for specific questions
  const isLargeImage = questionId && [34, 36, 37, 38].includes(questionId);
  const imageHeight = isLargeImage ? "max-h-[200px]" : "max-h-[120px]";
  const containerHeight = isLargeImage ? "min-h-[220px]" : "min-h-[150px]";

  return (
    <div className="bg-gray-100 rounded-lg p-4 text-center">
      <div className="flex items-center justify-center space-x-2 mb-2">
        <ImageIcon className="w-4 h-4 text-gray-500" />
        <span className="text-xs font-medium text-gray-600">
          {isTable ? "Table" : "Diagram"}
        </span>
      </div>
      <div
        className={`bg-white rounded border p-3 ${containerHeight} flex items-center justify-center relative group`}
      >
        <img
          src={`/demo-data/images/${path}`}
          alt={`Diagram for question`}
          className={`max-w-full ${imageHeight} object-contain cursor-pointer transition-transform hover:scale-105`}
          onError={(e) => {
            // Fallback if image doesn't exist
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            target.parentElement!.innerHTML = `
              <div class="text-gray-400 text-xs">
                <div class="mb-1">📊</div>
                <div>${path}</div>
              </div>
            `;
          }}
          onClick={(e) => {
            // Create modal for larger view
            const modal = document.createElement("div");
            modal.className =
              "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50";
            modal.onclick = () => modal.remove();

            const img = document.createElement("img");
            img.src = (e.target as HTMLImageElement).src;
            img.className = "max-w-[90vw] max-h-[90vh] object-contain";
            img.onclick = (e) => e.stopPropagation();

            const closeBtn = document.createElement("button");
            closeBtn.innerHTML = "✕";
            closeBtn.className =
              "absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75";
            closeBtn.onclick = () => modal.remove();

            modal.appendChild(img);
            modal.appendChild(closeBtn);
            document.body.appendChild(modal);
          }}
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Click to enlarge
        </div>
      </div>
    </div>
  );
};

// Helper function to load rubric data
const loadRubricData = async (questionId: number, optionIndex?: number) => {
  try {
    let fileName = `${questionId}_marking_scheme.json`;
    if (optionIndex !== undefined) {
      fileName = `${questionId}_${
        optionIndex === 0 ? "primary" : "secondary"
      }_marking_scheme.json`;
    }

    // Use fetch instead of dynamic import
    const response = await fetch(
      `/demo-data/rubric/${questionId}/marking_scheme/${fileName}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to load rubric for question ${questionId}:`, error);
    return null;
  }
};

const Demo = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "uploading" | "parsing" | "success" | "error"
  >("idle");
  const [parsingStep, setParsingStep] = useState<string>("");
  const [parsingColor, setParsingColor] = useState<string>("yellow");
  const [showResults, setShowResults] = useState(false);
  const [rubricData, setRubricData] = useState<{ [key: number]: any }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (allowedTypes.includes(file.type)) {
        setSelectedFile(file);
        setUploadStatus("idle");
        setShowResults(false);
        setRubricData({});
      } else {
        alert("Please select a valid file type (PDF, DOC, or DOCX)");
      }
    }
  };

  const simulateParsing = async () => {
    const steps = [
      { text: "Extracting questions...", color: "blue" },
      { text: "Extracting diagrams...", color: "purple" },
      { text: "Extracting marks...", color: "orange" },
    ];

    for (let i = 0; i < steps.length; i++) {
      setParsingStep(steps[i].text);
      setParsingColor(steps[i].color);
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  };

  const buildRubric = async () => {
    console.log("Build rubric function called!");
    const newRubricData: { [key: number]: any } = {};

    // Build rubric for all questions 1-38
    for (let i = 1; i <= 38; i++) {
      console.log(`Loading rubric for question ${i}...`);
      const question = questionData.find((q) => q.id === i);

      if (question?.has_internal_choice) {
        // Load both primary and secondary marking schemes
        const primaryData = await loadRubricData(i, 0);
        const secondaryData = await loadRubricData(i, 1);
        if (primaryData || secondaryData) {
          newRubricData[i] = { primary: primaryData, secondary: secondaryData };
        }
      } else {
        const data = await loadRubricData(i);
        if (data) {
          newRubricData[i] = data;
        }
      }
    }

    console.log("Final rubric data:", newRubricData);
    setRubricData(newRubricData);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploadStatus("parsing");
    await simulateParsing();
    setUploadStatus("success");

    // Scroll to results section
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth" });
      setShowResults(true);
    }, 500);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (allowedTypes.includes(file.type)) {
        setSelectedFile(file);
        setUploadStatus("idle");
        setShowResults(false);
        setRubricData({});
      } else {
        alert("Please select a valid file type (PDF, DOC, or DOCX)");
      }
    }
  };

  const renderRubricData = (questionId: number) => {
    const data = rubricData[questionId];
    console.log(`Rendering rubric for question ${questionId}:`, data);
    // Only show rubric data if it exists (after button is clicked)
    if (!data || Object.keys(rubricData).length === 0) return null;

    // Handle internal choice questions (questions with primary/secondary options)
    if (data.primary || data.secondary) {
      return (
        <div className="mt-4 space-y-4">
          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-800 mb-2">Rubric Data:</h4>
            {data.primary && (
              <div className="mb-4">
                <h5 className="font-medium text-gray-700 mb-2">Option 1:</h5>
                {renderRubricContent(data.primary)}
              </div>
            )}
            {data.secondary && (
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Option 2:</h5>
                {renderRubricContent(data.secondary)}
              </div>
            )}
          </div>
        </div>
      );
    }

    // Handle regular questions
    return (
      <div className="mt-4 border-t pt-4">
        <h4 className="font-semibold text-gray-800 mb-2">Rubric Data:</h4>
        {renderRubricContent(data)}
      </div>
    );
  };

  // Helper function to render rubric content based on format
  const renderRubricContent = (data: any) => {
    // Check if this is a complex marking scheme (questions 21-38)
    if (data.methods && Array.isArray(data.methods)) {
      return (
        <div className="text-sm text-gray-600 space-y-4">
          {data.methods.map((method: any, methodIndex: number) => (
            <div key={methodIndex} className="border rounded-lg p-4 bg-gray-50">
              <h6 className="font-medium text-gray-800 mb-3">
                {renderTextWithMath(method.methodName)}
              </h6>
              <div className="space-y-3">
                {method.markingPoints.map((point: any, pointIndex: number) => (
                  <div
                    key={pointIndex}
                    className="border-l-4 border-blue-200 pl-3"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        Step {point.stepId}
                      </span>
                      <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                        {point.MarkType} ({point.marks} marks)
                      </span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <strong className="text-gray-700">
                          Teacher Expectation:
                        </strong>
                        <div className="text-gray-600 mt-1">
                          {renderTextWithMath(point["Teacher Expectation"])}
                        </div>
                      </div>
                      <div>
                        <strong className="text-green-700">Pass if:</strong>
                        <div className="text-gray-600 mt-1">
                          {renderTextWithMath(point["Pass if"])}
                        </div>
                      </div>
                      <div>
                        <strong className="text-red-700">Fail if:</strong>
                        <div className="text-gray-600 mt-1">
                          {renderTextWithMath(point["Fail if"])}
                        </div>
                      </div>
                      <div>
                        <strong className="text-blue-700">Guidance:</strong>
                        <div className="text-gray-600 mt-1">
                          {renderTextWithMath(point.guidance)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {data.Question_specific_notes && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <strong className="text-yellow-800">
                Question-specific notes:
              </strong>
              <div className="text-yellow-700 mt-1">
                {renderTextWithMath(data.Question_specific_notes)}
              </div>
            </div>
          )}
        </div>
      );
    }

    // Handle simple MCQ format (questions 1-20)
    return (
      <div className="text-sm text-gray-600 space-y-2">
        {data.correct_option && (
          <div>
            <strong>Correct Option:</strong>{" "}
            {renderTextWithMath(data.correct_option)}
          </div>
        )}
        {data.acceptable_answers && (
          <div>
            <strong>Acceptable Answers:</strong>{" "}
            {data.acceptable_answers.map((answer: string, index: number) => (
              <span key={index}>
                {renderTextWithMath(answer)}
                {index < data.acceptable_answers.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        )}
        {data.solution && (
          <div>
            <strong>Solution:</strong> {renderTextWithMath(data.solution)}
          </div>
        )}
        {data.total_marks && (
          <div>
            <strong>Total Marks:</strong>{" "}
            {renderTextWithMath(data.total_marks.toString())}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Upload Card */}
        <Card className="shadow-sm mb-8">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Upload Question Paper</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Simple Upload Area */}
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                selectedFile
                  ? "border-green-300 bg-green-50"
                  : "border-gray-300 hover:border-gray-400 bg-gray-50"
              }`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {selectedFile ? (
                <div className="space-y-2">
                  <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                  <p className="font-medium text-green-800">
                    {selectedFile.name}
                  </p>
                  <p className="text-sm text-green-600">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto" />
                  <div>
                    <p className="font-medium text-gray-700">
                      Drag and drop your question paper here
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      or click to browse files
                    </p>
                  </div>
                </div>
              )}

              <Input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="mt-3"
                size="sm"
              >
                Choose File
              </Button>
            </div>

            {/* Upload Status */}
            {uploadStatus !== "idle" && (
              <div
                className={`p-3 rounded-lg ${
                  uploadStatus === "parsing"
                    ? parsingColor === "blue"
                      ? "bg-blue-50 border border-blue-200"
                      : parsingColor === "purple"
                      ? "bg-purple-50 border border-purple-200"
                      : parsingColor === "orange"
                      ? "bg-orange-50 border border-orange-200"
                      : "bg-yellow-50 border border-yellow-200"
                    : uploadStatus === "success"
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                <div className="flex items-center space-x-2">
                  {uploadStatus === "parsing" && (
                    <>
                      <Loader2
                        className={`w-4 h-4 animate-spin ${
                          parsingColor === "blue"
                            ? "text-blue-600"
                            : parsingColor === "purple"
                            ? "text-purple-600"
                            : parsingColor === "orange"
                            ? "text-orange-600"
                            : "text-yellow-600"
                        }`}
                      />
                      <span
                        className={
                          parsingColor === "blue"
                            ? "text-blue-800"
                            : parsingColor === "purple"
                            ? "text-purple-800"
                            : parsingColor === "orange"
                            ? "text-orange-800"
                            : "text-yellow-800"
                        }
                      >
                        {parsingStep}
                      </span>
                    </>
                  )}
                  {uploadStatus === "success" && (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-green-800">38 questions found</span>
                    </>
                  )}
                  {uploadStatus === "error" && (
                    <>
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span className="text-red-800">
                        Upload failed. Please try again.
                      </span>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Upload Button */}
            <Button
              onClick={handleUpload}
              disabled={!selectedFile || uploadStatus === "parsing"}
              className="w-full"
            >
              {uploadStatus === "parsing"
                ? "Processing..."
                : "Extract Questions"}
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        {showResults && (
          <div ref={resultsRef} className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Extracted Questions
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {questionData.map((question, index) => (
                <Card
                  key={question.id}
                  className={`hover:shadow-md transition-shadow ${
                    question.id > 20 ? "md:col-span-2" : ""
                  }`}
                >
                  <CardHeader className="pb-3 px-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">
                        Question {question.id}
                      </CardTitle>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {question.marks} mark{question.marks > 1 ? "s" : ""}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 px-4">
                    {question.has_internal_choice ? (
                      <div className="space-y-3">
                        {question.questions?.map((q, qIndex) => (
                          <div key={qIndex} className="space-y-2">
                            <p className="text-base font-medium text-gray-700">
                              Option {qIndex + 1}:
                            </p>
                            <div className="text-base text-gray-600 leading-relaxed">
                              {renderTextWithMath(q)}
                            </div>
                            {renderDiagram(
                              question.diagram_path,
                              qIndex,
                              false,
                              question.id
                            )}
                          </div>
                        ))}
                        {/* Show rubric data for all questions */}
                        {renderRubricData(question.id)}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="text-base text-gray-600 leading-relaxed">
                          {renderTextWithMath(question.question_text)}
                        </div>
                        {renderDiagram(
                          question.diagram_path,
                          undefined,
                          false,
                          question.id
                        )}
                        {question.table_path &&
                          renderDiagram(
                            question.table_path,
                            undefined,
                            true,
                            question.id
                          )}
                        {/* Show rubric data for all questions */}
                        {renderRubricData(question.id)}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Build Rubric Button */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                onClick={() => {
                  console.log("Button clicked!");
                  buildRubric();
                }}
              >
                Build Rubric with AI
              </Button>
            </div>

            {/* LaTeX Test Section */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">
                LaTeX Rendering Test
              </h3>
              <div className="space-y-2 text-sm">
                <div>Test 1: {renderTextWithMath("$x_i$")}</div>
                <div>Test 2: {renderTextWithMath("$\\frac{1}{2}$")}</div>
                <div>Test 3: {renderTextWithMath("$\\sum f_i$")}</div>
                <div>
                  Test 4:{" "}
                  {renderTextWithMath(
                    "$\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$"
                  )}
                </div>
                <div>Test 5: {renderTextWithMath("$\\triangle OAD$")}</div>
                <div>
                  Test 6: {renderTextWithMath("$\\angle AOD = \\angle COB$")}
                </div>
                <div>
                  Test 7:{" "}
                  {renderTextWithMath("$OA \\times OB = OC \\times OD$")}
                </div>
                <div>
                  Test 8:{" "}
                  {renderTextWithMath(
                    "$35 + \\left(\\frac{12.5 - 10}{7}\\right) 10$"
                  )}
                </div>
                <div>
                  Test 9 (JSON-escaped):{" "}
                  {renderTextWithMath(
                    "$35 + \\\\left(\\\\frac{12.5 - 10}{7}\\\\right) 10$"
                  )}
                </div>
                <div>
                  Test 10 (JSON-escaped):{" "}
                  {renderTextWithMath(
                    "$\\\\bar{x} = \\\\frac{\\\\sum f_i x_i}{\\\\sum f_i}$"
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;
