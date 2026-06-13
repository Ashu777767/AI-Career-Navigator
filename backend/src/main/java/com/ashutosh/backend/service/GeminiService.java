package com.ashutosh.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.ashutosh.backend.dto.AnalysisResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    public AnalysisResponse analyzeResume(String resumeText) throws Exception {

        Client client = Client.builder()
                .apiKey(apiKey)
                .build();

        String prompt =
"""
Analyze the following resume.

Return ONLY valid JSON.

Format:

{
  "atsScore": 85,
  "strengths": [
    "Strength 1",
    "Strength 2"
  ],
  "weaknesses": [
    "Weakness 1",
    "Weakness 2"
  ],
  "missingSkills": [
    "Skill 1",
    "Skill 2"
  ],
  "recommendations": [
    "Recommendation 1",
    "Recommendation 2"
  ]
}

Resume:
""" + resumeText;

        GenerateContentResponse response =
        client.models.generateContent(
                "gemini-2.5-flash",
                prompt,
                null
        );

String jsonResponse = response.text();

jsonResponse = jsonResponse
        .replace("```json", "")
        .replace("```", "")
        .trim();

ObjectMapper mapper = new ObjectMapper();

return mapper.readValue(
        jsonResponse,
        AnalysisResponse.class
);
    }
}