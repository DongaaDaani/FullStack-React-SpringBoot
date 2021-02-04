package com.example.Backend.Dao;

import com.example.Backend.Model.Comment;
import com.example.Backend.Model.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CommentDao {
    int insertComment(UUID id, Comment comment);

    default  int insertComment(Comment comment){
        UUID id = UUID.randomUUID();
        return  insertComment(id,comment);
    }
    List<Comment> selectAllComment();
    Optional<Comment> selectCommentById(UUID id);
    int deleteCommentById(UUID id);
}
