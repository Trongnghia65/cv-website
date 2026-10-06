package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "cvs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Cv {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    private String jobTitle;

    private String email;

    private String phone;

    private String address;

    private String avatarUrl;

    @Column(columnDefinition = "TEXT")
    private String summary;
}