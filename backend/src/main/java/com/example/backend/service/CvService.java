package com.example.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.backend.dto.CvRequest;
import com.example.backend.dto.CvResponse;
import com.example.backend.entity.Cv;
import com.example.backend.repository.CvRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CvService {
    private final CvRepository cvRepository;

    public List<CvResponse> getAll() {

        return cvRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public CvResponse getById(Long id) {
        Cv cv = cvRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("CV not found"));

        return toResponse(cv);
    }

    public CvResponse create(CvRequest request) {
        Cv cv = new Cv();

        cv.setFullName(request.getFullName());
        cv.setJobTitle(request.getJobTitle());
        cv.setEmail(request.getEmail());
        cv.setPhone(request.getPhone());
        cv.setAddress(request.getAddress());
        cv.setAvatarUrl(request.getAvatarUrl());
        cv.setSummary(request.getSummary());

        cvRepository.save(cv);
        return toResponse(cv);

    }

    private CvResponse toResponse(Cv cv) {

        return new CvResponse(
                cv.getId(),
                cv.getFullName(),
                cv.getJobTitle(),
                cv.getEmail(),
                cv.getPhone(),
                cv.getAddress(),
                cv.getAvatarUrl(),
                cv.getSummary());
    }
}
