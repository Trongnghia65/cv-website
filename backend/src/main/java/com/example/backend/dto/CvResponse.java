package com.example.backend.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
public class CvResponse {
    private Long id;
    private String fullName;
    private String jobTitle;
    private String email;
    private String phone;
    private String address;
    private String avatarUrl;
    private String summary;
}