package com.ashutosh.backend.controller;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ashutosh.backend.dto.AnalysisResponse;
import com.ashutosh.backend.service.GeminiService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")

public class ResumeController {

    @Autowired
    private GeminiService geminiService;

    @PostMapping("/upload")
public AnalysisResponse uploadResume(
                    @RequestParam("file") MultipartFile file
    ) throws Exception {

        PDDocument document =
                PDDocument.load(file.getInputStream());

        PDFTextStripper stripper =
                new PDFTextStripper();

        String resumeText =
                stripper.getText(document);
                System.out.println(resumeText);

        document.close();

        return geminiService.analyzeResume(resumeText);
    }
}