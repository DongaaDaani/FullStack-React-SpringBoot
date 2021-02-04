package com.example.Backend.Dao;

import com.example.Backend.Model.Comment;
import com.example.Backend.Model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("comments")
public class CommentDataAccessService implements CommentDao{

    private static List<Comment> commentDB = new ArrayList<>();


    @Override
    public int insertComment(UUID id, Comment comment) {
        commentDB.add(new Comment(id,comment.getCommentDescription(),comment.getUser()));
        return 1;
    }

    @Override
    public List<Comment> selectAllComment() {
        return commentDB;
    }

    @Override
    public Optional<Comment> selectCommentById(UUID id) {
        return   commentDB.stream()
                .filter(comment -> comment.getId().equals(id))
                .findFirst();
    }

    @Override
    public int deleteCommentById(UUID id) {
        Optional<Comment>commentDelete= selectCommentById(id);

        if(commentDelete.isEmpty()){
            return 0;
        }
        commentDB.remove(commentDelete.get());
        return  1;
    }
}
