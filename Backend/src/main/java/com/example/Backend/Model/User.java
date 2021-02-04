package com.example.Backend.Model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private String name;
    private String username;
    private String password;
    @OneToMany(mappedBy = "user")
    private List<Comment> comments;



    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public User() {
    }

    public User(UUID id, @JsonProperty("name")String name, @JsonProperty("username") String username,@JsonProperty("password") String password,@JsonProperty("comment") List<Comment> comments) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.comments = comments;
    }
}
