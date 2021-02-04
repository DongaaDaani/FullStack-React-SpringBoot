package com.example.Backend.Model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.UUID;

@Entity
public class Comment {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private UUID id;
    private String commentDescription;
    @ManyToOne
    private User user;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getCommentDescription() {
        return commentDescription;
    }

    public void setCommentDescription(String commentDescription) {
        this.commentDescription = commentDescription;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Comment(UUID id, @JsonProperty("commentdescription") String commentDescription,  @JsonProperty("user") User user) {
        this.id = id;
        this.commentDescription = commentDescription;
        this.user = user;
    }

    public Comment() {
    }
}
