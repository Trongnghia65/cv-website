package com.example.backend.dto;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
public class CvRequest {

    @NotBlank
    private String fullName;

    @NotBlank
    private String jobTitle;

    @Email
    private String email;

    private String phone;

    private String address;

    private String avatarUrl;

    private String summary;
}