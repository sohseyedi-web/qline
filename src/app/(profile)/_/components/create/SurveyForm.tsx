"use client";
import React, { useState } from "react";

const SurveyForm = () => {
  const [surveyName, setSurveyName] = useState(""); // نام نظرسنجی
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""] }, // ۴ گزینه پیش‌فرض
  ]);

  // افزودن یک سؤال جدید با ۴ گزینه
  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", "", "", ""] }]);
  };

  // مدیریت تغییر مقدار سؤال یا گزینه‌ها
  const handleChange = (
    index: number,
    type: "question" | "option",
    optionIndex?: number,
    value?: string
  ) => {
    const updatedQuestions = [...questions];
    if (type === "question") {
      updatedQuestions[index].question = value || "";
    } else if (type === "option" && optionIndex !== undefined) {
      updatedQuestions[index].options[optionIndex] = value || "";
    }
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async () => {
    console.log('ok')
  };

  return (
    <div>
      <h2>Create Survey</h2>
      {/* فیلد نام نظرسنجی */}
      <input
        type="text"
        placeholder="Enter survey name"
        value={surveyName}
        onChange={(e) => setSurveyName(e.target.value)}
      />
      {questions.map((q, index) => (
        <div key={index}>
          {/* فیلد سؤال */}
          <input
            type="text"
            placeholder={`Question ${index + 1}`}
            value={q.question}
            onChange={(e) =>
              handleChange(index, "question", undefined, e.target.value)
            }
          />
          {q.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              {/* گزینه‌های ثابت */}
              <input
                type="text"
                placeholder={`Option ${optionIndex + 1}`}
                value={option}
                onChange={(e) =>
                  handleChange(index, "option", optionIndex, e.target.value)
                }
              />
            </div>
          ))}
        </div>
      ))}
      <button type="button" onClick={addQuestion}>
        Add Question
      </button>
      <button type="button" onClick={handleSubmit}>
        Submit Survey
      </button>
    </div>
  );
};

export default SurveyForm;
