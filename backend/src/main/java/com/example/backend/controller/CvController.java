package com.example.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.backend.dto.CvRequest;
import com.example.backend.dto.CvResponse;
import com.example.backend.service.CvService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/cvs")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class CvController {
    private final CvService cvService;

    @GetMapping
    public List<CvResponse> getAll() {
        return cvService.getAll();
    }

    @GetMapping("/{id}")
    public CvResponse getById(@PathVariable Long id) {
        return cvService.getById(id);
    }

    @PostMapping
    public CvResponse create(@Valid @RequestBody CvRequest request) {
        return cvService.create(request);
    }

}
